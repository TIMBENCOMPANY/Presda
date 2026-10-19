const fs = require('fs'), assert = require('assert/strict');
require('./register-typescript.cjs');
const { premiumBatch2026Articles: batch } = require('../src/data/premiumBatch2026Articles.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const media = require('../src/data/phenomena2026Media.json');
const base = process.env.BASE_URL || 'http://localhost:3003';
const local = /localhost|127\.0\.0\.1/.test(base);
const locales = ['en', 'fr', 'ar', 'es'];
const route = (a, l) => `${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`;
const decode = s => s.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), decode(m[2])]));
const plain = s => decode(s.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')).trim();
const schemas = html => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(m => { const d = JSON.parse(m[1]); return d['@graph'] || [d]; });
(async () => {
 const all = getPublishedArticles();
 assert.equal(new Set(all.map(a => a.slug)).size, all.length);
 assert.equal(new Set(all.map(a => a.id)).size, all.length);
 const result = [], destinations = new Set();
 for (const a of batch) {
  assert.ok(a.content.join(' ').replace(/\[[^\]]+\]\([^)]+\)/g, '').split(/\s+/).length >= 1500);
  for (const l of locales) {
   const expected = l === 'en' ? a : JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`));
   if (l !== 'en') validateArticleParity(expected, a);
   assert.ok(!/\u2014|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(expected)));
   const path = route(a, l), response = await fetch(base + path);
   assert.equal(response.status, 200, path);
   const html = await response.text(), structured = schemas(html);
   const article = structured.find(x => x['@type'] === 'Article');
   assert.ok(article, path + ' Article schema');
   assert.equal(article.headline, expected.title);
   assert.equal(article.inLanguage, l);
   assert.equal(article.dateModified, '2026-10-19');
   assert.deepEqual(article.citation, a.references.map(s => s.url));
   const title = decode(html.match(/<title>(.*?)<\/title>/s)[1]);
   assert.equal(title, expected.seoTitle + ' | PRESDA');
   const meta = [...html.matchAll(/<meta[^>]*>/g)].map(m => attrs(m[0]));
   const getMeta = name => meta.find(x => x.name === name || x.property === name)?.content;
   const description = l === 'en' ? a.metaDescription : expected.description;
   assert.equal(getMeta('description'), description);
   assert.equal(getMeta('og:title'), expected.seoTitle);
   assert.equal(getMeta('og:description'), description);
   assert.equal(getMeta('og:url'), 'https://presda.com' + path);
   assert.equal(getMeta('twitter:title'), expected.seoTitle);
   assert.equal(getMeta('twitter:description'), description);
   assert.equal(getMeta('twitter:card'), 'summary_large_image');
   assert.ok(getMeta('og:image')?.startsWith('https://presda.com/'));
   const links = [...html.matchAll(/<link[^>]*>/g)].map(m => attrs(m[0]));
   const canonical = links.filter(x => x.rel === 'canonical');
   assert.equal(canonical.length, 1);
   assert.equal(canonical[0].href, 'https://presda.com' + path);
   const alternates = links.filter(x => x.hreflang);
   assert.equal(alternates.length, 5, 'exact alternates, no duplicates');
   for (const alt of [...locales, 'x-default']) {
    const found = alternates.filter(x => x.hreflang === alt);
    assert.equal(found.length, 1);
    assert.equal(found[0].href, 'https://presda.com' + route(a, alt === 'x-default' ? 'en' : alt));
   }
   assert.ok(html.includes(`lang="${l}"`));
   if (l === 'ar') assert.ok(html.includes('dir="rtl"'));
   assert.ok(html.includes('data-premium-batch-hero-caption'));
   const visible = plain(html.replace(/<script\b[^>]*>.*?<\/script>/gs, ''));
   const blocks = l === 'en' ? a.content : expected.content.map(b => b.text);
   const heading = l === 'en' ? blocks.find(b => b.startsWith('## ')) : expected.content.find(x => x.type === 'heading').text;
   for (const block of [blocks[0], heading, blocks[blocks.length - 2]]) {
    const phrase = block.replace(/^## /, '').replace(/\[[^\]]+\]\([^)]+\)/g, '').slice(0, 85);
    assert.ok(visible.includes(phrase), path + ' localized visible prose');
   }
   for (const slug of a.relatedSlugs) {
    const target = `${l === 'en' ? '' : '/' + l}/articles/${slug}/`;
    assert.ok(html.includes(`href="${target}"`));destinations.add(target);
   }
   const figures = [...html.matchAll(/<figure\b[^>]*data-phenomenon-image="(\d+)"[^>]*>(.*?)<\/figure>/gs)];
   const images = structured.filter(x => x['@type'] === 'ImageObject');
   assert.equal(figures.length, a.category === 'Science' ? 20 : 0);
   assert.equal(images.length, a.category === 'Science' ? 20 : 0);
   figures.forEach((match, i) => {
    const item = media[i], figure = match[2], image = images[i];
    assert.equal(+match[1], item.number);assert.equal(image.caption, item.captions[l]);
    assert.equal(image.license, item.licenseUrl);assert.equal(image.acquireLicensePage, item.source);
    if (item.number === 11) assert.equal(image.creator, undefined); else assert.equal(image.creator.name, item.author);
    assert.equal(image.contentUrl, 'https://presda.com' + item.variants.at(-1).src);
    assert.ok(plain(figure).includes(item.author));
    const anchors = [...figure.matchAll(/<a[^>]*>/g)].map(m => attrs(m[0]));
    assert.ok(anchors.some(x => x.href === item.source));
    assert.ok(anchors.some(x => x.href === item.licenseUrl && x.rel.includes('license')));
    assert.equal(attrs(figure.match(/<img[^>]*>/)[0]).alt, item.captions[l]);
   });
   result.push({ route: path, status: response.status, canonical: canonical[0].href, figures: figures.length });
   console.log('PASS', path);
  }
  const category = await fetch(base + '/category/' + a.category.toLowerCase() + '/');
  assert.equal(category.status, 200);assert.ok((await category.text()).includes(a.slug));
 }
 for (const target of destinations) {
  const response = await fetch(base + target);assert.equal(response.status, 200, 'related link ' + target);
  assert.ok((await response.text()).includes('<h1'), 'related destination title');
 }
 const xml = await (await fetch(base + '/sitemap.xml')).text();
 const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => decode(m[1]));
 for (const a of batch) for (const l of locales) assert.equal(locations.filter(x => x === 'https://presda.com' + route(a, l)).length, 1);
 assert.equal(media.length, 20);
 for (const image of media) for (const variant of image.variants) {
  assert.ok(fs.existsSync('public' + variant.src));const response = await fetch(base + variant.src);
  assert.equal(response.status, 200);assert.ok(response.headers.get('content-type').startsWith('image/'));
 }
 assert.equal((await fetch(base + '/articles/presda-batch-verification-nonexistent/')).status, 404);
 fs.mkdirSync('test-results', { recursive: true });
 fs.writeFileSync(`test-results/premium-batch-${local ? 'local' : 'live'}.json`, JSON.stringify(result, null, 2));
 console.log('PASS: 12 editions, visible localization, exact SEO and alternates, schema, live cross-links, sitemap and licensed images.');
})().catch(e => { console.error(e); process.exit(1); });
