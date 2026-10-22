const fs=require('fs'),assert=require('assert/strict');
require('./register-typescript.cjs');
const Module=require('module'),load=Module._load;
Module._load=function(name,...args){return name==='server-only'?{}:load.call(this,name,...args)};
const {getPublishedArticles}=require('../src/data/articles.ts');
const {listingCard}=require('../src/lib/i18n/listing-cards.ts');
const {homeHeroSlugs,homeSideSlugs}=require('../src/lib/homeSelection.ts');
const {getArticleCardImage}=require('../src/lib/articleImages.ts');
const imageManifest=require('../src/lib/image-manifest.generated.json');
const {chromium}=require('C:/Users/Microsoft/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const base=process.env.BASE_URL||'http://localhost:3012',stage=base.includes('localhost')?'local':'live';
const articles=getPublishedArticles(),langs=['en','fr','ar','es'],out=[];
const normalize=s=>s.replace(/\s+/g,' ').trim();
async function imageCheck(locator,src){
 await locator.evaluate(i=>i.decode());
 const d=await locator.evaluate(i=>({src:new URL(i.currentSrc).pathname,w:i.naturalWidth,h:i.naturalHeight,fit:getComputedStyle(i).objectFit}));
 assert(d.w>0&&d.h>0);assert.equal(d.fit,'cover');
 assert([src,...(imageManifest[src]||[]).map(v=>v[1])].includes(decodeURI(d.src)),`Unexpected image ${d.src}, expected ${src}`);
 return d;
}
(async()=>{
 fs.mkdirSync('test-results',{recursive:true});
 const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'});
 try{
  for(const locale of langs){
   const expected=homeHeroSlugs.map(s=>listingCard(articles.find(a=>a.slug===s),locale));
   const sides=homeSideSlugs.map(s=>listingCard(articles.find(a=>a.slug===s),locale));
   for(const [width,height] of [[1366,768],[1920,1080],[768,1024],[390,844]]){
    const p=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
    await p.addInitScript(()=>localStorage.setItem('presda.analytics-consent.v1',JSON.stringify({version:1,choice:'rejected',savedAt:Date.now()})));
    const route=locale==='en'?'/':`/${locale}/`;
    assert.equal((await p.goto(base+route,{waitUntil:'networkidle',timeout:120000})).status(),200);
    await p.evaluate(()=>document.fonts.ready);
    assert.equal(await p.locator('html').getAttribute('lang'),locale);
    if(locale==='ar')assert.equal(await p.locator('html').getAttribute('dir'),'rtl');
    assert.equal(await p.locator('link[rel=canonical]').getAttribute('href'),'https://presda.com'+route);
    for(const l of langs)assert(await p.locator(`link[rel=alternate][hreflang="${l}"]`).count());
    const root=p.locator('.home-featured-carousel'),slides=root.locator('.category-featured-slides > article');
    assert.equal(await slides.count(),12);
    const next=root.locator('button.category-image-arrow').nth(1),prev=root.locator('button.category-image-arrow').nth(0);
    assert(await next.isVisible()&&await prev.isVisible());
    for(let i=0;i<12;i++){
     const slide=slides.nth(i),a=expected[i];
     await p.waitForFunction(index=>document.querySelectorAll('.home-featured-carousel .category-featured-slides > article')[index].getAttribute('aria-hidden')==='false',i);
     assert.equal(await slide.locator('a').getAttribute('href'),a.href);
     assert.equal(normalize(await slide.locator('h1,h2').textContent()),normalize(a.title));
     const img=await imageCheck(slide.locator('.category-featured-media img'),a.coverImage);
     assert.equal(await slide.locator('img').getAttribute('alt'),a.coverAlt);
     assert.equal(await root.locator('.category-image-counter').textContent(),String(i+1).padStart(2,'0')+' / 12');
     assert.equal(await p.locator('h1').count(),1);
     const overflow=await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth);assert(!overflow,`${locale}/${width} overflow`);
     if(i===0||(locale==='en'&&(width===1366||width===390)))await p.screenshot({path:`test-results/bird-home-${stage}-${locale}-${width}-${i+1}.png`});
     out.push({locale,width,slot:i+1,href:a.href,title:a.title,image:img.src});
     await next.click();
    }
    await p.waitForFunction(()=>document.querySelector('.home-featured-carousel .category-featured-slides > article').getAttribute('aria-hidden')==='false');
    await prev.click();await p.waitForFunction(()=>document.querySelectorAll('.home-featured-carousel .category-featured-slides > article')[11].getAttribute('aria-hidden')==='false');
    const cards=root.locator('.category-supporting-card');assert.equal(await cards.count(),3);
    for(let i=0;i<3;i++){
     const card=cards.nth(i),a=sides[i];await card.scrollIntoViewIfNeeded();
     assert.equal(await card.getAttribute('href'),a.href);assert.equal(normalize(await card.locator('h2').textContent()),normalize(a.title));
     await imageCheck(card.locator('img'),getArticleCardImage(a));
     assert.equal(await card.locator('img').getAttribute('alt'),a.coverAlt);
    }
    await cards.first().scrollIntoViewIfNeeded();await p.screenshot({path:`test-results/bird-home-cards-${stage}-${locale}-${width}.png`});
    if(width===390)for(const a of [...expected,...sides]){
     const r=await p.request.get(base+a.href,{timeout:120000});assert.equal(r.status(),200,a.href);
    }
    await p.close();console.log('PASS homepage',stage,locale,width,'12 ordered slides, 3 cards, arrows and wraparound');
   }
  }
  fs.writeFileSync(`test-results/bird-homepage-${stage}.json`,JSON.stringify(out,null,2));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
