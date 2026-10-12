const assert = require('node:assert/strict');
require('./register-typescript.cjs');
const fs = require('node:fs');
const path = require('node:path');
const { blackDeathArticle: article } = require('../src/data/blackDeathArticle.ts');
const { validateArticleParity } = require('./translation-parity.cjs');

const slug = article.slug;
const locales = ['fr', 'es', 'ar'];
const translations = locales.map(locale => JSON.parse(fs.readFileSync(path.join(__dirname, `../src/data/localizations/articles/${slug}/${locale}.json`), 'utf8')));
const articleText = article.content.join(' ').replace(/\]\([^)]+\)/g, ']');
const wordCount = articleText.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)?.length ?? 0;
assert.ok(wordCount >= 1800 && wordCount <= 2200, `English body word count ${wordCount}`);
assert.equal(article.status, 'published');
assert.equal(article.category, 'History');
assert.equal(article.content.length, 35);
assert.equal(article.references.length, 11);
assert.ok(!/[\u2014]|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(article)), 'English editorial copy must not contain em dash');
for (const translation of translations) validateArticleParity(translation, article);

const base = (process.env.BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
const paths = [`/articles/${slug}/`, ...locales.map(locale => `/${locale}/articles/${slug}/`)];
const read = async url => {
  const response = await fetch(url);
  assert.equal(response.status, 200, `${url} should render successfully`);
  return response.text();
};
(async () => {
  const pages = await Promise.all(paths.map(async route => [route, await read(`${base}${route}`)]));
  for (const [route, html] of pages) {
    const locale = route.startsWith('/fr/') ? 'fr' : route.startsWith('/es/') ? 'es' : route.startsWith('/ar/') ? 'ar' : 'en';
    const canonical = `https://presda.com${route}`;
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`), `${route} language`);
    if (locale === 'ar') assert.match(html, /<html[^>]*dir="rtl"/, 'Arabic page direction');
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`), `${route} self-canonical`);
    for (const lang of ['en', 'fr', 'es', 'ar']) assert.ok(html.includes(`hrefLang="${lang}"`), `${route} hreflang ${lang}`);
    assert.match(html, /<h1\b[^>]*>/, `${route} H1`);
    assert.ok(html.includes('/image-assets/'), `${route} optimized hero image source`);
    assert.ok(html.includes('black-death-plague-doctor-ai-editorial.png') || html.includes('black-death-plague-doctor-ai-editorial'), `${route} hero image metadata`);
    assert.ok(html.includes('application/ld+json'), `${route} structured data`);
    assert.ok(html.includes('centuries after') || html.includes('plusieurs siècles') || html.includes('siglos después') || html.includes('بقرون'), `${route} localized image note`);
  }
  const [sitemap, home, category] = await Promise.all([
    read(`${base}/sitemap.xml`), read(`${base}/`), read(`${base}/category/history/`)
  ]);
  assert.ok(sitemap.includes(`https://presda.com/articles/${slug}/`), 'English sitemap entry');
  for (const locale of locales) assert.ok(sitemap.includes(`https://presda.com/${locale}/articles/${slug}/`), `${locale} sitemap entry`);
  assert.ok(home.includes(`/articles/${slug}/`), 'Latest Articles homepage entry');
  assert.ok(category.includes(`/articles/${slug}/`), 'History category entry');
  console.log(`PASS: ${wordCount}-word English article, three localized editions, source parity, image, hreflang, canonicals, schema, sitemap and History listing.`);
})().catch(error => { console.error(error); process.exit(1); });
