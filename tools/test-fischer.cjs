const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const { fischerArticle: a } = require('../src/data/fischerArticle.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
assert.equal(a.category, 'Sport');
assert.ok(!/\u2014|&mdash;|&#8212;/i.test(JSON.stringify(a)));
for (const l of ['fr', 'es', 'ar']) validateArticleParity(JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`)), a);
const base = process.env.BASE_URL || 'http://localhost:3001';
(async () => {
  for (const l of ['en', 'fr', 'es', 'ar']) {
    const route = `${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`;
    const r = await fetch(base + route); assert.equal(r.status, 200);
    const s = await r.text();
    const expected = l === 'en' ? a : JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`));
    const structured = [...s.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map(m => JSON.parse(m[1]));
    const article = structured.flatMap(x => x['@graph'] || [x]).find(x => x['@type'] === 'Article');
    assert.ok(article, `${l}: Article schema`);
    assert.equal(article.headline, expected.title);
    assert.equal(article.dateModified, '2026-10-16');
    assert.equal(article.inLanguage, l);
    assert.deepEqual(article.citation, a.references.map(x => x.url));
    assert.ok(s.includes(`lang="${l}"`));
    if (l === 'ar') assert.ok(s.includes('dir="rtl"'));
    assert.ok(s.includes(`rel="canonical" href="https://presda.com${route}"`));
    for (const lang of ['en', 'fr', 'ar', 'es']) assert.ok(s.includes(`hrefLang="${lang}"`));
    for (const token of ['data-fischer-hero-caption', 'fischer-hero', 'article-hero-title', '/image-assets/', 'application/ld+json']) assert.ok(s.includes(token), token);
    for (const id of ['young', 'champion', 'grave']) assert.ok(s.includes(`data-fischer-image="${id}"`), `${l}: historical image ${id}`);
    assert.ok(s.includes('creativecommons.org/licenses/by-sa/3.0/de'), `${l}: attribution and share-alike license`);
  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const l of ['en', 'fr', 'ar', 'es']) assert.ok(sitemap.includes(`https://presda.com${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`));
  assert.ok((await (await fetch(base + '/category/sport/')).text()).includes(a.slug));
  console.log('PASS: four editions, translation and citation parity, canonical/hreflang, RTL, hero, schema presence, sitemap and category.');
})().catch(e => { console.error(e); process.exit(1); });
