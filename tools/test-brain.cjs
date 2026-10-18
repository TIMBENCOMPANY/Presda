const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const { brainArticle: a } = require('../src/data/brainArticle.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
assert.equal(a.category, 'Science');
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
    assert.equal(article.dateModified, '2026-10-19');
    assert.equal(article.inLanguage, l);
    assert.deepEqual(article.citation, a.references.map(x => x.url));
    assert.ok(s.includes(`lang="${l}"`));
    if (l === 'ar') assert.ok(s.includes('dir="rtl"'));
    const canonicalTags = [...s.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)];
    assert.equal(canonicalTags.length, 1);
    assert.ok(canonicalTags[0][0].includes(`href="https://presda.com${route}"`));
    for (const lang of ['en', 'fr', 'ar', 'es']) {
      const target = `https://presda.com${lang === 'en' ? '' : '/' + lang}/articles/${a.slug}/`;
      assert.ok([...s.matchAll(/<link[^>]*>/g)].some(m => m[0].includes(`hrefLang="${lang}"`) && m[0].includes(`href="${target}"`)));
    }
    assert.equal((s.match(/data-brain-image=/g)||[]).length,2);
    for (const token of ['data-brain-hero-caption','brain-hero','article-hero-title','/image-assets/']) assert.ok(s.includes(token), token);

  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const l of ['en', 'fr', 'ar', 'es']) assert.ok(sitemap.includes(`https://presda.com${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`));
  assert.ok((await (await fetch(base + '/category/science/')).text()).includes(a.slug));
  console.log('PASS: four editions, translation/citation parity and image credit, canonical/hreflang, RTL, hero, Article schema, sitemap and Science category.');
})().catch(e => { console.error(e); process.exit(1); });
