const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const {netflixLayoffsArticle:a}=require('../src/data/netflixLayoffsArticle.ts');
const {validateArticleParity}=require('./translation-parity.cjs');
assert.equal(a.category,'Business');
assert.equal(a.schemaType,'NewsArticle');
assert.equal(a.status,'published');
assert.ok(!/\u2014|&mdash;|&#8212;/i.test(JSON.stringify(a)));
for(const l of ['fr','es','ar']) validateArticleParity(JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`)),a);
const base=process.env.BASE_URL||'http://localhost:3001';
(async()=>{
for(const l of ['en','fr','es','ar']){
 const route=`${l==='en'?'':'/'+l}/articles/${a.slug}/`;
 const r=await fetch(base+route);assert.equal(r.status,200);
 const s=await r.text();
 assert.ok(s.includes(`lang="${l}"`));
 if(l==='ar')assert.ok(s.includes('dir="rtl"'));
 assert.ok(s.includes(`rel="canonical" href="https://presda.com${route}"`));
 for(const lang of ['en','fr','ar','es'])assert.ok(s.includes(`hrefLang="${lang}"`));
 for(const token of ['NewsArticle','data-netflix-hero-caption','netflix-layoffs-hero','article-hero-title','/image-assets/'])assert.ok(s.includes(token),token);
}
const sitemap=await(await fetch(base+'/sitemap.xml')).text();
for(const l of ['en','fr','ar','es'])assert.ok(sitemap.includes(`https://presda.com${l==='en'?'':'/'+l}/articles/${a.slug}/`));
assert.ok((await(await fetch(base+'/category/business/')).text()).includes(a.slug));
console.log('PASS: Netflix source parity, four localized routes, NewsArticle schema, hero, canonicals, hreflang, sitemap and Business listing.');
})().catch(e=>{console.error(e);process.exit(1)});
