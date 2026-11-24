// Check the actual production HTML, not an inferred JSX/model representation.
process.env.NODE_ENV = 'production';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
require('./register-typescript.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations, getLanguageAlternates } = require('../src/lib/i18n/registry.ts');
const { listingEnglishPaths, listingRoutes } = require('../src/lib/i18n/listing-routes.ts');
const { getArticleCardImage } = require('../src/lib/articleImages.ts');
const { articleImageUrl, articleSitemapImages } = require('../src/lib/articleImageSeo.ts');
const { articleSocialImage } = require('../src/lib/articleSocialImage.ts');
const manifest = require('../src/lib/image-manifest.generated.json');
const sitemap = require('../src/app/sitemap.ts').default;

const decode = value => value?.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
  if (entity[0] === '#') return String.fromCodePoint(parseInt(entity.slice(entity[1].toLowerCase() === 'x' ? 2 : 1), entity[1].toLowerCase() === 'x' ? 16 : 10));
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[entity];
});
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), decode(m[2])]));
const normalize = value => decodeURIComponent(new URL(value, 'https://presda.com').pathname);
const schemas = html => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
function builtHtml(route) {
  const file = route === '/' ? 'index.html' : decodeURIComponent(route).replace(/^\//, '').replace(/\/$/, '.html');
  const target = path.join(__dirname, '../.next/server/app', file);
  assert.ok(fs.existsSync(target), `Missing built route ${route}; run the production build first`);
  return fs.readFileSync(target, 'utf8');
}
const articles = getPublishedArticles();
const editions = [
  ...articles.map(a => ({ path: `/articles/${a.slug}/`, locale: 'en', slug: a.slug, source: a.coverImage, alt: a.coverAlt })),
  ...publishedTranslations.filter(r => r.kind === 'article').map(r => ({ path: r.path, locale: r.locale, slug: r.englishPath.split('/')[2], source: r.image.src, alt: r.image.alt }))
];
const editionByPath = new Map(editions.map(e => [normalize(e.path), e]));
const entries = new Map(sitemap().map(e => [normalize(e.url), e]));
const owners = new Map();
function addOwner(src, slug) {
  if (!owners.has(src)) owners.set(src, new Set());
  owners.get(src).add(slug);
}
for (const article of articles) {
  for (const source of new Set([article.coverImage, getArticleCardImage(article)])) {
    addOwner(source, article.slug);
    for (const [, src] of manifest[source] ?? []) addOwner(src, article.slug);
  }
}
let imageLinks = 0;
function checkPage(html, route, locale) {
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attributes(m[0]));
  assert.equal(links.filter(l => l.rel === 'canonical').length, 1, route);
  assert.equal(normalize(links.find(l => l.rel === 'canonical').href), normalize(route), `${route}: self-canonical`);
  for (const [language, url] of Object.entries(getLanguageAlternates(route))) {
    assert.ok(links.some(l => l.hreflang === language && normalize(l.href) === normalize(url)), `${route}: ${language} alternate`);
  }
  const robots = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attributes(m[0])).find(m => m.name === 'robots');
  assert.ok(robots?.content.includes('max-image-preview:large'), `${route}: large image previews`);
  assert.ok(!/noindex|noimageindex/.test(robots.content), `${route}: indexable`);
  if (locale === 'ar') assert.match(html, /dir="rtl"/, `${route}: Arabic RTL`);
  assert.ok(!html.includes('/_next/image?'), `${route}: preserve static image delivery`);
  // Images in recommendations can be indexed on the current page. Their actual
  // navigation must still lead directly to the correct localized source article.
  for (const anchor of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    for (const image of anchor[2].matchAll(/<img\b[^>]*>/g)) {
      const img = attributes(image[0]), expected = owners.get(img.src);
      if (!expected) continue; // Brand and documentary images have separate roles.
      const target = editionByPath.get(normalize(decode(anchor[1])));
      assert.ok(target && expected.has(target.slug), `${route}: ${img.src} links to its source article`);
      assert.equal(target.locale, locale, `${route}: localized image destination`);
      assert.ok(img.alt?.trim(), `${route}: card alt`);
      imageLinks++;
    }
  }
}
for (const edition of editions) {
  const html = builtHtml(edition.path);
  checkPage(html, edition.path, edition.locale);
  const hero = [...html.matchAll(/<img\b[^>]*>/g)].map(m => attributes(m[0])).find(i => i.class?.includes('article-hero-image'));
  assert.ok(hero?.src && hero.width && hero.height, `${edition.path}: dimensioned SSR hero`);
  assert.equal(hero.alt, edition.alt, `${edition.path}: reviewed localized hero alt`);
  assert.ok(owners.get(hero.src)?.has(edition.slug), `${edition.path}: own hero artwork`);
  const imageUrls = articleSitemapImages(edition.source);
  for (const src of [hero.src, ...(hero.srcset?.split(',').map(s => s.trim().split(' ')[0]) ?? [])]) {
    assert.ok(imageUrls.includes(`https://presda.com${src}`), `${edition.path}: rendered image is already in its image sitemap`);
  }
  const article = schemas(html).find(s => ['Article', 'NewsArticle'].includes(s['@type']));
  assert.ok(article, `${edition.path}: Article/NewsArticle schema`);
  assert.equal(article.image.contentUrl, articleImageUrl(edition.source));
  assert.equal(normalize(article.image.mainEntityOfPage), normalize(edition.path));
  assert.equal(article.mainEntityOfPage.primaryImageOfPage['@id'], article.image['@id']);
  const social = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attributes(m[0])).filter(m => m.property === 'og:image');
  assert.equal(social.length, 1, `${edition.path}: one OG image`);
  assert.equal(social[0].content, articleSocialImage(edition.source, edition.alt).url);
  for (const src of imageUrls) assert.ok(entries.get(normalize(edition.path))?.images.includes(src));
}
const listings = [...listingEnglishPaths.map(route => ({ path: route, locale: 'en' })), ...listingRoutes];
for (const listing of listings) {
  const html = builtHtml(listing.path);
  checkPage(html, listing.path, listing.locale);
  assert.ok(!schemas(html).some(s => ['Article', 'NewsArticle'].includes(s['@type'])), `${listing.path}: listing does not claim to be an article`);
  assert.equal(entries.get(normalize(listing.path)).images, undefined, `${listing.path}: no repeated image sitemap fix`);
}
console.log(`PASS: ${editions.length} built article editions, ${listings.length} listing pages and ${imageLinks} direct localized image links; SSR heroes, source associations, schema, canonicals, hreflang, RTL and existing sitemap mappings`);
