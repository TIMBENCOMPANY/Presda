require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const sharp = require('sharp');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations, getLanguageAlternates } = require('../src/lib/i18n/registry.ts');
const base = process.argv[2] || 'http://localhost:3100';
const baseline = process.argv.includes('--baseline');
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), decode(m[2])]));
const articles = getPublishedArticles();
const paths = [...articles.map(a => ({ path: `/articles/${a.slug}/`, locale: 'en', title: a.title, date: a.date, image: a.coverImage })), ...publishedTranslations.map(t => ({ path: t.path, locale: t.locale, title: t.title, date: t.publishedAt, image: t.image.src }))];
const selected = baseline ? ['en', 'fr', 'ar', 'es'].flatMap(locale => paths.filter(p => p.locale === locale).slice(0, 2)) : paths;
async function get(path, method = 'GET', agent = 'Googlebot') {
 const r = await fetch(base + path, { method, redirect: 'manual', signal: AbortSignal.timeout(30000), headers: { 'User-Agent': agent } });
 assert.equal(r.status, 200, `${path}: HTTP ${r.status}`);
 assert.ok(!/noindex|noimageindex/i.test(r.headers.get('x-robots-tag') || ''), path);
 return r;
}
async function batches(items, fn) { for(let i=0;i<items.length;i+=4) await Promise.all(items.slice(i,i+4).map(fn)); }
(async()=>{
 const robots = await (await get('/robots.txt')).text();
 assert.ok(robots.includes('Allow: /') && !robots.includes('Disallow: /'));
 const sitemap = await (await get('/sitemap.xml')).text();
 const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>decode(m[1]));
 assert.equal(new Set(locations).size, locations.length, 'Sitemap duplicate URLs');
 for(const p of paths) assert.ok(locations.includes('https://presda.com'+p.path), 'Sitemap missing '+p.path);
 await batches(selected, async (p)=>{
  const html = await (await get(p.path, 'GET', p.locale === 'en' ? 'Googlebot-News' : 'Googlebot')).text();
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m=>attrs(m[0]));
  assert.equal(decodeURI(links.find(l=>l.rel==='canonical')?.href || ''), 'https://presda.com'+p.path);
  assert.deepEqual(Object.fromEntries(links.filter(l=>l.hreflang).map(l=>[l.hreflang,decodeURI(l.href)])), getLanguageAlternates(p.path));
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map(m=>attrs(m[0]));
  assert.ok(!meta.some(m=>/robots|googlebot/.test(m.name||'') && /noindex|noimageindex/.test(m.content||'')));
  if(!baseline) assert.ok(meta.some(m=>m.name==='robots' && m.content.includes('max-image-preview:large')));
  const root = attrs(html.match(/<html\b[^>]*>/)[0]);
  assert.equal(root.lang, p.locale);assert.equal(root.dir, p.locale==='ar'?'rtl':'ltr');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const article = schemas.find(s=>s['@type']==='Article'||s['@type']==='NewsArticle');
  assert.equal(article.headline, p.title);assert.equal(article.datePublished,p.date);
  assert.equal(article.image, 'https://presda.com'+p.image);
  assert.ok([...html.matchAll(/<time\b[^>]*>/g)].some(m=>attrs(m[0]).datetime===p.date), 'Visible date '+p.path);
  if(!baseline) {assert.equal(article.author['@type'],'Organization');assert.ok(article.author.url);assert.ok(schemas.some(s=>s['@type']==='NewsMediaOrganization'));}
  assert.equal(meta.find(m=>m.property==='og:image')?.content, article.image);
 });
 const small = [];
 await batches([...new Set(articles.map(a=>a.coverImage)), '/presda-p-transparent.png'], async src=>{
  const r=await get(src,'HEAD');assert.ok(r.headers.get('content-type')?.startsWith('image/'));
  const m=await sharp('public'+src).metadata();if(m.width<1200||m.width*m.height<300000)small.push({src,width:m.width,height:m.height});
 });
 for(const path of ['/about/','/contact/','/authors/','/editorial-policy/','/corrections-policy/','/authors/presda-editorial/','/authors/presda-sport/']) {
  const html=await(await get(path)).text();assert.ok(html.includes('<h1'));
 }
 if(!baseline) {
  assert.ok(robots.includes('Sitemap: https://presda.com/news-sitemap.xml'));
  const r=await get('/news-sitemap.xml');assert.equal(r.headers.get('cache-control'),'no-store');
  const xml=await r.text();assert.ok(xml.includes('<urlset')||xml.includes('<sitemapindex'));
  fs.mkdirSync('test-results',{recursive:true});fs.writeFileSync('test-results/news-sitemap.xml',xml);
 }
 const result={base,baseline,checkedAt:new Date().toISOString(),articlePagesChecked:selected.length,sitemapArticleCoverage:paths.length,sitemapUrls:locations.length,imageSourcesChecked:new Set(articles.map(a=>a.coverImage)).size,smallImages:small};
 fs.mkdirSync('test-results',{recursive:true});fs.writeFileSync(`test-results/news-discovery-${baseline?'live-baseline':'build'}.json`,JSON.stringify(result,null,2));
 console.log(JSON.stringify(result,null,2));
})().catch(e=>{console.error(e);process.exitCode=1});
