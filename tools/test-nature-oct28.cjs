const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
require('./register-typescript.cjs');
const {natureOct28Articles:newArticles}=require('../src/data/natureOct28Articles.ts');
const {mbappeChinaArticles}=require('../src/data/mbappeChinaArticles.ts');
const articles=[...newArticles,...mbappeChinaArticles];
const {getPublishedArticles}=require('../src/data/articles.ts');
const {validateArticleParity}=require('./translation-parity.cjs');
const {articleImageUrl}=require('../src/lib/articleImageSeo.ts');
const manifest=[...require('../docs/editorial/nature-oct28/manifest.json'),...require('../docs/editorial/mbappe-china/manifest.json')];
const captions={...require('../src/data/natureOct28HeroCaptions.json'),...require('../src/data/mbappeChinaHeroCaptions.json')};
const specs=[...require('../docs/editorial/nature-oct28/specs.json'),...require('../docs/editorial/mbappe-china/specs.json')];
const {chromium}=require('C:/Users/Microsoft/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=process.env.BASE_URL||'http://localhost:3016',stage=base.includes('localhost')?'local':'live';
const langs=['en','fr','ar','es'];
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
for(const a of articles){
 const spec=manifest.find(s=>s.slug===a.slug);
 assert.equal(spec.sha256,hash('public'+a.coverImage),'Approved converted WebP SHA-256');
 assert.equal(getPublishedArticles().filter(x=>x.slug===a.slug).length,1,'No duplicate slug');
 assert.equal(getPublishedArticles().filter(x=>x.id===a.id).length,1,'No duplicate ID');
 for(const l of langs.slice(1))validateArticleParity(JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`)),a);
 assert(!/\u2014|--|&mdash;/.test([a.title,a.excerpt,...a.content].join(' ').replace(/https?:\/\/[^\s)]+/g,'')));
 for(const l of langs){
  const spec=specs.find(s=>s.slug===a.slug);
  const prose=fs.readFileSync(newArticles.includes(a)?`docs/editorial/nature-oct28/${spec.key}-${l}.md`:`docs/editorial/mbappe-china/${l}.md`,'utf8').replace(/https?:\/\/[^\s)]+/g,'');
  assert(!/\u2014|--|&mdash;|&#8212;/.test(prose+spec.meta[l].join(' ')+spec.alts[l]+spec.captions[l]));
  assert(spec.meta[l][0].includes(spec.meta[l][3]));assert(spec.meta[l][0].includes(spec.meta[l][4]));
 }
}
(async()=>{
 fs.mkdirSync('test-results',{recursive:true});
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 const results=[]; const bruno={};
 for(const width of [1366,1920,768,390]){const height=width===1366?768:width===1920?1080:width===768?1024:844;const p=await browser.newPage({viewport:{width,height}});await p.addInitScript(()=>localStorage.setItem('presda.analytics-consent.v1',JSON.stringify({version:1,choice:'rejected',savedAt:Date.now()})));await p.goto(base+'/articles/giordano-bruno-philosopher-heresy/',{waitUntil:'domcontentloaded'});await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(1200);bruno[width]=await p.evaluate(()=>{const h=document.querySelector('.article-hero'),r=h.getBoundingClientRect(),i=document.querySelector('.article-hero-image');return{hero:{width:r.width,height:r.height,x:r.x},fit:getComputedStyle(i).objectFit}});await p.screenshot({path:`test-results/bruno-reference-${stage}-${width}.png`});await p.close();}

 try{
  for(const a of articles){
   const key=manifest.find(s=>s.slug===a.slug).key;
   for(const l of langs)for(const [width,height] of (stage==='live'?[[1366,768],[390,844]]:[[1366,768],[1920,1080],[768,1024],[390,844]])){
    const p=await browser.newPage({viewport:{width,height}});
    await p.addInitScript(()=>localStorage.setItem('presda.analytics-consent.v1',JSON.stringify({version:1,choice:'rejected',savedAt:Date.now()})));
    const route=(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/';
    assert.equal((await p.goto(base+route,{waitUntil:'domcontentloaded',timeout:120000})).status(),200,route);
    await p.evaluate(()=>document.fonts.ready);
    if(width>=1024)await p.waitForFunction(()=>document.querySelector('.article-hero').style.getPropertyValue('--hero-viewport-height'));
    await p.waitForTimeout(700);
    await p.evaluate(()=>window.dispatchEvent(new Event('resize')));
    await p.waitForTimeout(250);
    await p.locator('.article-hero-image').evaluate(i=>i.decode());
    const d=await p.evaluate(()=>{
     const rect=s=>{const r=document.querySelector(s).getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right}};
     return{hero:rect('.article-hero'),title:rect('h1'),meta:rect('.article-hero-heading > div:last-child'),overflow:document.documentElement.scrollWidth>innerWidth,lang:document.documentElement.lang,dir:document.documentElement.dir,canonical:document.querySelector('link[rel=canonical]').href,alternates:[...document.querySelectorAll('link[rel=alternate][hreflang]')].map(x=>[x.hreflang,x.href]),schema:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(x=>{const v=JSON.parse(x.textContent);return v['@graph']||[v]}),description:document.querySelector('meta[name=description]').content,og:document.querySelector('meta[property="og:image"]').content,heroAlt:document.querySelector('.article-hero-image').alt,fit:getComputedStyle(document.querySelector('.article-hero-image')).objectFit,src:document.querySelector('.article-hero-image').src,twitter:document.querySelector('meta[name="twitter:image"]').content};
    });
    const ed=l==='en'?a:JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`));
    assert(!d.overflow,`${route} overflow ${width}`);assert.equal(d.lang,l);if(l==='ar')assert.equal(d.dir,'rtl');
    assert.equal(d.canonical,'https://presda.com'+route);
    for(const loc of langs)assert(d.alternates.some(x=>x[0]===loc&&x[1]==='https://presda.com'+(loc==='en'?'':'/'+loc)+'/articles/'+a.slug+'/'));
    assert(d.alternates.some(x=>x[0]==='x-default'&&x[1]==='https://presda.com/articles/'+a.slug+'/'));
    const schema=d.schema.find(x=>x['@type']===a.schemaType);assert(schema);assert.equal(schema.headline,ed.title);assert.equal(schema.inLanguage,l);assert.equal(schema.image.creditText,(a.slug.includes('frogs-')||a.slug.includes('mbappe-'))?'PRESDA':undefined);assert.equal(schema.image.license,undefined);assert.deepEqual(schema.citation,a.references.map(r=>r.url));
    assert.equal(d.description,ed.metaDescription||ed.description);assert((await p.title()).includes(ed.seoTitle));assert.equal(d.og,articleImageUrl(a.coverImage));
    assert.equal(d.heroAlt,l==='en'?a.coverAlt:ed.image.alt);
    assert.equal(d.fit,width>=1024?'cover':'contain','Same responsive image fit as Bruno');assert.equal(d.twitter,d.og);
    const webPage=schema.mainEntityOfPage;assert.equal(webPage['@type'],'WebPage');assert.equal(webPage.primaryImageOfPage['@id'],schema.image['@id']);assert.equal(schema.image.mainEntityOfPage,d.canonical);assert.equal(schema.image.contentUrl,d.og);
    assert.equal(await p.locator(newArticles.includes(a)?'[data-nature-oct28-hero-caption]':'[data-mbappe-china-hero-caption]').textContent(),captions[a.slug][l]);
    const frame=await p.locator('.article-hero-image').evaluate(i=>({width:i.getBoundingClientRect().width,height:i.getBoundingClientRect().height,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight}));
    if(width>=1024){assert(d.hero.bottom<=height+1,route+' bounded desktop frame');assert(d.title.y>=d.hero.y&&d.meta.bottom<=d.hero.bottom+1,route+' title/meta overflow');}
    if(width<1024)assert(Math.abs(frame.width/frame.height-frame.naturalWidth/frame.naturalHeight)<0.01,route+' natural mobile image ratio');
    const reference=bruno[width];
    assert(Math.abs(d.hero.width-reference.hero.width)<1,route+' Bruno frame width');
    if(width>=1024){assert(Math.abs(d.hero.height-reference.hero.height)<1,route+' Bruno frame height');assert(Math.abs(d.hero.x-reference.hero.x)<1,route+' Bruno frame alignment');}
    assert.equal(d.fit,reference.fit,route+' Bruno image scaling');
    assert.equal(await p.locator('h1').count(),1);
    const subheadings=l==='en'?a.content.filter(t=>t.startsWith('### ')).map(t=>t.slice(4)):ed.content.filter(b=>b.type==='subheading').map(b=>b.text);
    for(const heading of subheadings)assert.equal(await p.getByRole('heading',{level:3,name:heading,exact:true}).count(),1);
    await p.screenshot({path:`test-results/nature-oct28-${key}-${stage}-${l}-${width}.png`});
    await p.locator('.article-hero').screenshot({path:`test-results/nature-oct28-${key}-${stage}-${l}-${width}-hero.png`});
    if(width===390){
     for(const slug of a.relatedSlugs){const target=(l==='en'?'':'/'+l)+'/articles/'+slug+'/';assert(await p.locator(`a[href="${target}"]`).count());assert.equal((await fetch(base+target)).status,200);}
     for(const ref of a.references)assert(await p.locator('a').evaluateAll((anchors,url)=>anchors.some(x=>x.href===url),ref.url),ref.url);
     for(const img of await p.locator('article img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(i=>i.decode());assert(await img.getAttribute('alt'));}
     const headings=p.locator('article h2'); const expected=l==='en'?a.content.filter(t=>t.startsWith('## ')).map(t=>t.slice(3)):ed.content.filter(b=>b.type==='heading').map(b=>b.text); for(const heading of expected)assert.equal(await p.getByRole('heading',{level:2,name:heading,exact:true}).count(),1);
     await headings.first().scrollIntoViewIfNeeded();await p.screenshot({path:`test-results/nature-oct28-${key}-${stage}-${l}-body.png`});
    }
    results.push({slug:a.slug,locale:l,width,height,...d});await p.close();console.log('PASS',stage,key,l,width);
   }
  }
  const sitemap=await(await fetch(base+'/sitemap.xml')).text();
  const robots=await(await fetch(base+'/robots.txt')).text();
  assert(!/Disallow:\s*\/(?:\s|articles|image-assets)/i.test(robots),'Article and image crawl access');
  for(const a of articles){
   const response=await fetch(base+a.coverImage);
   assert.equal(response.status,200);assert(response.headers.get('content-type').includes('image/webp'));
   assert(!/noindex/i.test(response.headers.get('x-robots-tag')||''));
   for(const l of langs){
    const canonical='https://presda.com'+(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/';
    const entry=sitemap.split('<url>').find(s=>s.includes('<loc>'+canonical+'</loc>'));
    assert(entry&&entry.includes('<image:loc>'+articleImageUrl(a.coverImage)+'</image:loc>'),'Image belongs to exact article sitemap entry');
   }
  }
  for(const a of articles)for(const l of langs)assert(sitemap.includes('https://presda.com'+(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/'));
  const newsResponse=await fetch(base+'/news-sitemap.xml');assert.equal(newsResponse.status,200);
  const newsSitemap=await newsResponse.text();
  for(const a of articles)for(const l of langs)assert.equal(newsSitemap.includes('https://presda.com'+(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/'),a.schemaType==='NewsArticle','News article belongs in the news sitemap');
  fs.writeFileSync(`test-results/nature-oct28-${stage}.json`,JSON.stringify(results,null,2));
  console.log('PASS',results.length,'rendered viewports: exact Bruno frame geometry, preserved source images, content and SEO');
  const before=fs.existsSync('test-results/hero-bruno-before.json')?JSON.parse(fs.readFileSync('test-results/hero-bruno-before.json','utf8')):[];
  for(const r of results){const old=before.find(x=>x.slug===r.slug&&x.locale===r.locale&&x.width===r.width);if(old)for(const field of ['canonical','alternates','schema','description','og','heroAlt','src','twitter'])assert.deepEqual(field==='src'?new URL(r[field]).pathname:r[field],field==='src'?new URL(old[field]).pathname:old[field],field+' unchanged');}
  console.log('PASS SEO/content/image metadata unchanged from preceding production deployment');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
