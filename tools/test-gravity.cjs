const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const key=process.argv[2]; const a = require('../src/data/'+key+'2026Article.ts')[key+'2026Article'];
const { validateArticleParity } = require('./translation-parity.cjs');
assert.equal(a.category, 'Science');
const words=a.content.join(' ').replace(/\[[^\]]+\]\([^)]+\)/g,'').split(/\s+/).length;assert.ok(words>=1500, 'English word count');
for(const l of ['en','fr','es','ar']){const prose=fs.readFileSync('docs/editorial/gravity-2026/'+key+'/'+l+'.md','utf8');assert.ok(!/\u2014|--/.test(prose),'prohibited punctuation '+l);}
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
    for(const related of a.relatedSlugs.slice(0,2)) assert.ok(s.includes(related), 'crosslink '+related);
    for (const token of ['data-gravity-hero-caption',key+'-2026-hero','article-hero-title','/image-assets/']) assert.ok(s.includes(token), token);

  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const l of ['en', 'fr', 'ar', 'es']) assert.ok(sitemap.includes(`https://presda.com${l === 'en' ? '' : '/' + l}/articles/${a.slug}/`));
  assert.ok((await (await fetch(base + '/category/science/')).text()).includes(a.slug));
  console.log('PASS: four editions, translation/citation parity and image credit, canonical/hreflang, RTL, hero, Article schema, sitemap and Science category.');
})().catch(e => { console.error(e); process.exit(1); });
