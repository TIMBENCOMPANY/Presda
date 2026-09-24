// Run against a production build or the deployed site: BASE_URL=https://presda.com
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const base = (process.env.BASE_URL || 'http://localhost:3100').replace(/\/$/, '');
const origin = 'https://presda.com';
const records = ['ar','fr','es'].flatMap(locale => JSON.parse(fs.readFileSync(path.join(__dirname,`../src/data/localizations/${locale}.json`),'utf8'))).filter(record=>record.status==='published');
const normalize = value => decodeURI(value).replace(/&amp;/g, '&');
function alternates(html) {
  return Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map(match=>[match[1], normalize(match[2])]));
}
async function verifyGroup(englishPath) {
  const group = records.filter(record=>record.englishPath===englishPath);
  const expected = { en: origin+englishPath, ...Object.fromEntries(group.map(record=>[record.locale,origin+record.path])), 'x-default':origin+englishPath };
  for (const page of [{path:englishPath,locale:'en'},...group]) {
    const response = await fetch(base+encodeURI(page.path), {redirect:'manual'});
    assert.equal(response.status,200,page.path);
    assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'),page.path);
    const html = await response.text();
    assert.ok(html.includes(`<html lang="${page.locale}" dir="${page.locale==='ar'?'rtl':'ltr'}"`),page.path);
    assert.equal(normalize(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]??''),origin+page.path,page.path);
    assert.deepEqual(alternates(html),expected,page.path);
    assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html),page.path);
    assert.ok(html.includes('language-trigger'),page.path);
    assert.ok(!html.includes('language-rail'),page.path);
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match=>JSON.parse(match[1]));
    if (page.locale!=='en') {
      const article = schemas.find(item=>item['@type']==='Article');
      assert.equal(article.inLanguage,page.locale);
      assert.equal(article.url,origin+page.path);
      assert.equal(article.headline,page.title);
      assert.deepEqual(article.citation,page.sources.map(source=>source.url));
      assert.equal((schemas.find(item=>item['@type']==='FAQPage')?.mainEntity.length)??0,page.faq?.length??0);
      assert.equal((html.match(/<h1\b/g)||[]).length,1);
      for (const source of page.sources) assert.ok(html.includes(source.url.replace(/&/g,'&amp;')),source.url);
      const imageAlt = page.image.alt.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
      assert.ok(html.includes(`alt="${imageAlt}"`),page.path+' localized alt');
    }
    console.log('PASS 200 / canonical / hreflang / indexable / schema:',page.path);
  }
}
async function main() {
  assert.equal(records.length,12);
  for (const englishPath of new Set(records.map(record=>record.englishPath))) await verifyGroup(englishPath);
  const sitemap = await (await fetch(base+'/sitemap.xml')).text();
  assert.equal((sitemap.match(/<loc>/g)||[]).length,166);
  for (const record of records) assert.ok(normalize(sitemap).includes(`<loc>${origin+record.path}</loc>`),record.path+' sitemap');
  const fallback='/articles/french-empire-napoleon-colonial-history-rise-fall/';
  for(const locale of ['ar','fr','es']) {
    const response=await fetch(`${base}/${locale}${fallback}`,{redirect:'manual'});
    assert.equal(response.status,307);
    assert.equal(new URL(response.headers.get('location'),base).pathname,fallback);
    assert.equal(response.headers.get('x-robots-tag'),'noindex');
    const search=await fetch(`${base}/${locale}/search-index.json/`);
    assert.equal(search.headers.get('x-robots-tag'),'noindex');
    assert.equal((await search.json()).length,4);
  }
  console.log('PASS: 16 real pages, 166 sitemap entries, twelve translations only, three localized search indexes and unchanged missing-translation fallbacks');
}
main().catch(error=>{ console.error(error); process.exitCode=1; });
