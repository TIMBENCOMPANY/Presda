const fs = require('fs'), assert = require('assert/strict'), crypto = require('crypto');
require('./register-typescript.cjs');
const { bilingualBrainsArticle: a } = require('../src/data/bilingualBrainsArticle.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const { articleImageUrl } = require('../src/lib/articleImageSeo.ts');
const { chromium } = require('C:/Users/Microsoft/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base = process.env.BASE_URL || 'http://localhost:3012', stage = base.includes('localhost') ? 'local' : 'live';
const langs = ['en', 'fr', 'ar', 'es'];
const hash = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
assert.equal(hash('C:/Users/Microsoft/Desktop/Daydreaming Among Languages.png'), hash('public' + a.coverImage));
for (const l of langs.slice(1)) validateArticleParity(JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`)), a);
assert(!/\u2014|--|&mdash;/.test(JSON.stringify(a)));
(async () => {
  fs.mkdirSync('test-results', { recursive: true });
  const browser = await chromium.launch({ headless: true, executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
  const results = [];
  try {
    for (const l of langs) for (const [width, height] of [[1366,768], [1920,1080], [768,1024], [390,844]]) {
      const p = await browser.newPage({ viewport: { width, height } });
      await p.addInitScript(() => localStorage.setItem('presda.analytics-consent.v1', JSON.stringify({ version: 1, choice: 'rejected', savedAt: Date.now() })));
      const route = (l === 'en' ? '' : '/' + l) + '/articles/' + a.slug + '/';
      assert.equal((await p.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 120000 })).status(), 200);
      await p.evaluate(() => document.fonts.ready);
      await p.locator('.article-hero-image').evaluate(i => i.decode());
      const d = await p.evaluate(() => {
        const rect = s => { const r = document.querySelector(s).getBoundingClientRect(); return { x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right }; };
        return { hero:rect('.article-hero'), title:rect('h1'), meta:rect('.article-hero-heading > div:last-child'), overflow:document.documentElement.scrollWidth > innerWidth, lang:document.documentElement.lang, dir:document.documentElement.dir, canonical:document.querySelector('link[rel=canonical]').href, alternates:[...document.querySelectorAll('link[rel=alternate][hreflang]')].map(x=>[x.hreflang,x.href]), schema:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(x=>{const v=JSON.parse(x.textContent);return v['@graph']||[v];}), description:document.querySelector('meta[name=description]').content, og:document.querySelector('meta[property="og:image"]').content, heroAlt:document.querySelector('.article-hero-image').alt };
      });
      const ed = l === 'en' ? a : JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`));
      assert(!d.overflow); assert.equal(d.lang,l); if(l==='ar') assert.equal(d.dir,'rtl');
      assert.equal(d.canonical,'https://presda.com'+route);
      for(const loc of langs) assert(d.alternates.some(x=>x[0]===loc && x[1]==='https://presda.com'+(loc==='en'?'':'/'+loc)+'/articles/'+a.slug+'/'));
      const schema = d.schema.find(x=>x['@type']==='Article');
      assert(schema); assert.equal(schema.headline,ed.title); assert.equal(schema.inLanguage,l); assert.deepEqual(schema.citation,a.references.map(r=>r.url));
      assert.equal(d.description,ed.metaDescription||ed.description); assert((await p.title()).includes(ed.seoTitle)); assert.equal(d.og,articleImageUrl(a.coverImage));
      assert.equal(d.heroAlt,l==='en'?a.coverAlt:ed.image.alt);
      assert(await p.locator('[data-bilingual-brains-hero-caption]').isVisible());
      if(width>=1024){assert(d.hero.bottom<=height);assert(d.title.y>=d.hero.y && d.meta.bottom<d.hero.bottom);}
      assert.equal(await p.locator('h1').count(),1);
      await p.screenshot({path:`test-results/bilingual-brains-${stage}-${l}-${width}.png`});
      if(width===390){
        for(const slug of a.relatedSlugs){const target=(l==='en'?'':'/'+l)+'/articles/'+slug+'/';assert(await p.locator(`a[href="${target}"]`).count());assert.equal((await fetch(base+target)).status,200);}
        for(const ref of a.references) assert(await p.locator('a').evaluateAll((anchors,url)=>anchors.some(x=>x.href===url),ref.url),ref.url);
        for(const img of await p.locator('article img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());assert(await img.getAttribute('alt'));}
        const section=p.locator('h2').filter({hasText:l==='en'?'Can bilingualism prevent':l==='fr'?'prévenir la démence':l==='es'?'prevenir la demencia':'الوقاية من الخرف'}).first();
        await section.scrollIntoViewIfNeeded();await p.screenshot({path:`test-results/bilingual-brains-${stage}-${l}-body.png`});
      }
      results.push({locale:l,width,height,...d});await p.close();console.log('PASS',stage,l,width);
    }
    const sitemap=await(await fetch(base+'/sitemap.xml')).text();
    for(const l of langs)assert(sitemap.includes('https://presda.com'+(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/'));
    fs.writeFileSync(`test-results/bilingual-brains-${stage}.json`,JSON.stringify(results,null,2));
    console.log('PASS four editions, 16 viewports, metadata, schema, hreflang, sitemap, RTL, original hero, sources and internal links');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exit(1);});
