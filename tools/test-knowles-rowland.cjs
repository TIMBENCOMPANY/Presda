const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const { knowlesRowlandArticle: a } = require('../src/data/knowlesRowlandArticle.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
assert.equal(a.category, 'Paparazzi');
assert.ok(!/\u2014|&mdash;|&#8212;/i.test(JSON.stringify(a)));
for (const l of ['fr', 'es', 'ar']) validateArticleParity(JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`)), a);
const base = process.env.BASE_URL || 'http://localhost:3001';
(async () => {
  for (const l of ['en', 'fr', 'es', 'ar']) {
    const route = `${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`;
    const r = await fetch(base + route); assert.equal(r.status, 200);
    const s = await r.text();
    assert.ok(s.includes(`lang="${l}"`));
    if (l === 'ar') assert.ok(s.includes('dir="rtl"'));
    assert.ok(s.includes(`rel="canonical" href="https://presda.com${route}"`));
    for (const lang of ['en', 'fr', 'ar', 'es']) assert.ok(s.includes(`hrefLang="${lang}"`));
    for (const token of ['data-knowles-rowland-hero-caption', 'knowles-rowland-house-hero', 'article-hero-title', '/image-assets/', 'application/ld+json']) assert.ok(s.includes(token), token);
  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const l of ['en', 'fr', 'ar', 'es']) assert.ok(sitemap.includes(`https://presda.com${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`));
  assert.ok((await (await fetch(base + '/category/paparazzi/')).text()).includes(a.slug));
  console.log('PASS: four editions, translation and citation parity, canonical/hreflang, RTL, hero, schema presence, sitemap and category.');
})().catch(e => { console.error(e); process.exit(1); });

