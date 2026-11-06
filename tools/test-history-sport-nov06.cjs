const fs=require('fs'),assert=require('assert/strict'),crypto=require('crypto');
require('./register-typescript.cjs');
const {articleSocialImage}=require('../src/lib/articleSocialImage.ts');
const {historySportNov06Articles:allArticles}=require('../src/data/historySportNov06Articles.ts');
const articles=process.env.ARTICLE_SLUG?allArticles.filter(a=>a.slug===process.env.ARTICLE_SLUG):allArticles;
assert(articles.length,'Requested article must exist');
const {getPublishedArticles}=require('../src/data/articles.ts');
const {validateArticleParity}=require('./translation-parity.cjs');
const {translationArticle}=require('../src/lib/i18n/article-presentation.ts');
const {articleImageUrl}=require('../src/lib/articleImageSeo.ts');
const manifest=require('../docs/editorial/history-sport-nov06/manifest.json');
const captions=require('../src/data/historySportNov06HeroCaptions.json');
const {chromium}=require('C:/Users/Microsoft/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const sharp=require('sharp');
const base=process.env.BASE_URL||'http://127.0.0.1:3058',stage=/localhost|127\.0\.0\.1/.test(base)?'local':'live',langs=['en','fr','ar','es'];
const proofName=process.env.ARTICLE_SLUG?'napoleon-hero-nov06':'history-sport-nov06';
const widths=stage==='local'?[[320,844],[390,844],[768,1024],[844,390],[1024,768],[1366,768],[1920,1080]]:[[1366,768],[390,844]];
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
async function main(){
fs.mkdirSync('test-results',{recursive:true});
for(const a of articles){
 const m=manifest.find(x=>x.slug===a.slug);assert.equal(hash('public'+a.coverImage),m.sha256);
 const meta=await sharp('public'+a.coverImage).metadata();assert.deepEqual([meta.width,meta.height],m.sourceDimensions);assert.equal(meta.format,m.format);assert.equal(fs.statSync('public'+a.coverImage).size,m.bytes,'Preserve the approved original size');assert.equal(m.sourceSha256,m.sha256,'Supplied original JPEG unchanged');
 assert.equal(getPublishedArticles().filter(x=>x.slug===a.slug).length,1);assert.equal(getPublishedArticles().filter(x=>x.id===a.id).length,1);
 for(const l of langs.slice(1)){
  const record=JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`));
  validateArticleParity(record,a);assert.equal(translationArticle(record,a).heroPreserveAspect,true,'Preserve full compositions in every language adapter');
 }
 assert(!/\u2014|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(a)));
 for(const slug of a.relatedSlugs)assert(getPublishedArticles().some(x=>x.slug===slug));
}
const browser=await chromium.launch({headless:true,executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe'}),results=[],refs={};
try{
 for(const [width,height] of widths){
  const p=await browser.newPage({viewport:{width,height}});await p.goto(base+'/articles/giordano-bruno-philosopher-heresy/',{waitUntil:'domcontentloaded'});await p.evaluate(()=>document.fonts.ready);if(width>=1024)await p.waitForFunction(()=>document.querySelector('.article-hero').style.getPropertyValue('--hero-viewport-height'));await p.waitForTimeout(1000);
  refs[width]=await p.locator('.article-hero').evaluate(h=>{const r=h.getBoundingClientRect(),title=h.querySelector('h1'),c=getComputedStyle(title);return{width:r.width,height:r.height,x:r.x,fontFamily:c.fontFamily,fontWeight:c.fontWeight}});await p.locator('.article-hero').screenshot({path:`test-results/history-sport-nov06-${stage}-bruno-${width}-hero.png`});await p.close();
 }
 const verifyCase=async(a,l,width,height)=>{
  const page=await browser.newPage({viewport:{width,height}});
  await page.addInitScript(()=>localStorage.setItem('presda.analytics-consent.v1',JSON.stringify({version:1,choice:'rejected',savedAt:Date.now()})));
  const route=(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/',canonical='https://presda.com'+route;
  assert.equal((await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:120000})).status(),200);
  await page.evaluate(()=>document.fonts.ready);await page.locator('.article-hero-image').evaluate(i=>i.decode());if(width>=1024)await page.waitForFunction(()=>document.querySelector('.article-hero').style.getPropertyValue('--hero-viewport-height'));await page.waitForTimeout(700);
  const d=await page.evaluate(()=>{
   const rect=s=>{const r=document.querySelector(s).getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height,bottom:r.bottom,right:r.right}};
   const i=document.querySelector('.article-hero-image'),style=getComputedStyle(i);
   const titleStyle=getComputedStyle(document.querySelector('h1'));
   return{category:rect('.article-hero-header .category-badge-link'),hero:rect('.article-hero'),media:rect('.article-hero-media'),image:rect('.article-hero-image'),title:rect('h1'),deck:rect('.article-hero-deck'),date:rect('.article-hero-header-date'),meta:rect('.article-hero-heading > div:last-child'),sourceDimensions:[Number(i.getAttribute('width')),Number(i.getAttribute('height'))],fontFamily:titleStyle.fontFamily,fontWeight:titleStyle.fontWeight,natural:[i.naturalWidth,i.naturalHeight],fit:style.objectFit,transform:style.transform,lang:document.documentElement.lang,dir:document.documentElement.dir,overflow:document.documentElement.scrollWidth>innerWidth,canonical:document.querySelector('link[rel=canonical]').href,alternates:[...document.querySelectorAll('link[rel=alternate][hreflang]')].map(x=>[x.hreflang,x.href]),schema:[...document.querySelectorAll('script[type="application/ld+json"]')].flatMap(s=>{const v=JSON.parse(s.textContent);return v['@graph']||[v]}),og:document.querySelector('meta[property="og:image"]').content,twitter:document.querySelector('meta[name="twitter:image"]').content,description:document.querySelector('meta[name=description]').content,alt:i.alt,src:i.currentSrc,robots:document.querySelector('meta[name=robots]')?.content||''};
  });
  const ed=l==='en'?a:JSON.parse(fs.readFileSync(`src/data/localizations/articles/${a.slug}/${l}.json`));
  assert.equal(d.lang,l);if(l==='ar')assert.equal(d.dir,'rtl');assert(!d.overflow,`${route} has horizontal overflow at ${width}px`);assert.equal(d.canonical,canonical);assert(!/noindex|nofollow/.test(d.robots));assert(d.robots.includes('max-image-preview:large'));
  assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('h1').textContent(),ed.title);assert((await page.title()).includes(ed.seoTitle));assert.equal(d.description,ed.metaDescription||ed.description);
  for(const lang of [...langs,'x-default'])assert(d.alternates.some(x=>x[0]===lang&&x[1]==='https://presda.com'+(lang==='en'||lang==='x-default'?'':'/'+lang)+'/articles/'+a.slug+'/'));
  const schema=d.schema.find(x=>x['@type']===a.schemaType);assert(schema);assert.equal(schema.headline,ed.title);assert.equal(schema.inLanguage,l);assert.equal(schema.image.creditText,'Editorial image supplied for PRESDA');assert.equal(schema.image.creator,undefined);assert.equal(schema.image.license,undefined);assert.equal(schema.image.mainEntityOfPage,canonical);assert.equal(schema.image.contentUrl,articleImageUrl(a.coverImage));assert.equal(schema.mainEntityOfPage.url,canonical);assert.deepEqual(schema.citation,a.references.map(r=>r.url));assert(d.schema.some(x=>x['@type']==='BreadcrumbList'));
  assert.equal(d.og,articleSocialImage(a.coverImage,a.coverAlt).url);assert.equal(d.twitter,d.og);assert.equal(d.alt,l==='en'?a.coverAlt:ed.image.alt);
  assert.equal(await page.locator('[data-history-sport-nov06-hero-caption]').textContent(),captions[a.slug][l]);
  const faqs=ed.faq||a.faq;for(const f of faqs){assert(await page.getByText(f.question,{exact:true}).count());}
  assert(await page.locator('h1 span').count()>=2,'White/red/gold editorial headline');

  assert.equal(d.fit,'contain','Preserve the full approved image at every viewport');assert(d.natural[0]>0&&d.natural[1]>0);
  assert(Math.abs(d.hero.width-refs[width].width)<1);assert(Math.abs(d.hero.x-refs[width].x)<1);
  assert(Math.abs(d.image.width-d.media.width)<1);
  const ratio=d.sourceDimensions[0]/d.sourceDimensions[1];
  if(width<1024)assert(Math.abs(d.image.height-d.image.width/ratio)<1,'Natural mobile image');
  else {
   assert(Math.abs(d.hero.height-d.hero.width/ratio)<2,'Natural source ratio with Bruno width and styling');
   const coverScale=Math.min(d.image.width/d.sourceDimensions[0],d.image.height/d.sourceDimensions[1]);
   assert(Math.abs(coverScale*d.sourceDimensions[0]-d.image.width)<2,'Full source width fits within the two-pixel frame border');
  }
  assert.equal(d.transform,'none');assert(Math.abs(d.image.x-d.media.x)<1&&Math.abs(d.image.right-d.media.right)<1,'Both source edges align');
  assert.equal(d.fontFamily,refs[width].fontFamily);assert.equal(d.fontWeight,refs[width].fontWeight);
  if(width>=1024)assert(Math.abs(d.hero.height-d.image.height-2)<1,'Desktop media fills the natural composition frame');
  for(const [name,r] of Object.entries({title:d.title,subtitle:d.deck,date:d.date,readingTime:d.meta,category:d.category}))assert(r.x>=d.hero.x&&r.right<=d.hero.right+1&&r.y>=d.hero.y&&r.bottom<=d.hero.bottom+1,route+' fully visible '+name);
  if(width>=1024||width===390)assert(d.meta.bottom<=height,'Bruno text area keeps read time above the fold');
  // Both source dimensions fit inside the frame without cropping.
  const scale=Math.min(d.image.width/d.natural[0],d.image.height/d.natural[1]);assert(scale*d.natural[0]<=d.image.width+0.01&&scale*d.natural[1]<=d.image.height+0.01);
  const headings=l==='en'?a.content.filter(x=>x.startsWith('## ')).map(x=>x.slice(3)):ed.content.filter(x=>x.type==='heading').map(x=>x.text);for(const h of headings){const el=page.getByRole('heading',{level:2,name:h,exact:true});assert.equal(await el.count(),1);assert(await el.isVisible(),'Visible H2');assert(await el.evaluate(e=>e.scrollWidth<=e.clientWidth+1),'Unclipped H2');}
  if(width===390){
   if(['407','411'].includes(a.id)) {
    const figure=page.locator('[data-history-sport-document]');assert.equal(await figure.count(),1);
    const documentary=figure.locator('img');await documentary.scrollIntoViewIfNeeded();await documentary.evaluate(i=>i.decode());
    assert((await documentary.getAttribute('alt')).length>30);
    assert.equal(await figure.locator('a').first().getAttribute('href'),canonical);
    assert(await figure.locator('a[href="https://creativecommons.org/publicdomain/mark/1.0/"]').count());
    assert(await documentary.evaluate(i=>Math.abs(i.getBoundingClientRect().height-i.getBoundingClientRect().width*i.naturalHeight/i.naturalWidth)<1));
    assert(d.schema.some(x=>x['@type']==='ImageObject'&&x['@id']===canonical+'#documentary-image'));
   }
   const links=await page.locator('article a[href^="/"]').evaluateAll(xs=>[...new Set(xs.map(x=>x.getAttribute('href')))]);
   for(const target of links)assert((await fetch(base+target,{redirect:'manual'})).status<400,`Broken internal link: ${target}`);
   for(const ref of a.references)assert(await page.locator('a').evaluateAll((xs,url)=>xs.some(x=>x.href===url),ref.url));
   await page.locator('article h2').first().scrollIntoViewIfNeeded();await page.screenshot({path:`test-results/history-sport-nov06-${stage}-${a.id}-${l}-body.png`});await page.evaluate(()=>scrollTo(0,0));
  }
  if(width===1366||width===390)await page.locator('.article-hero').screenshot({path:`test-results/history-sport-nov06-${stage}-${a.id}-${l}-${width}-hero.png`});results.push({slug:a.slug,locale:l,width,height,...d});await page.close();console.log('PASS',stage,a.id,l,width);
 };
 const cases=articles.flatMap(a=>langs.flatMap(l=>widths.map(([width,height])=>[a,l,width,height])));let cursor=0;
 await Promise.all(Array.from({length:2},async()=>{while(cursor<cases.length){const args=cases[cursor++];await verifyCase(...args);}}));
 const sitemap=await(await fetch(base+'/sitemap.xml')).text(),robots=await(await fetch(base+'/robots.txt')).text();assert(!/Disallow:\s*\/(?:\s|articles|image-assets)/i.test(robots));
 for(const a of articles){const im=await fetch(base+a.coverImage);assert.equal(im.status,200);assert(im.headers.get('content-type').includes(a.coverImage.endsWith('.png')?'image/png':'image/jpeg'));assert(!/noindex/.test(im.headers.get('x-robots-tag')||''));assert.equal(crypto.createHash('sha256').update(Buffer.from(await im.arrayBuffer())).digest('hex'),manifest.find(x=>x.slug===a.slug).sha256,'Same original image bytes');for(const l of langs){const url='https://presda.com'+(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/';const entry=sitemap.split('<url>').find(x=>x.includes('<loc>'+url+'</loc>'));assert(entry&&entry.includes('<image:loc>'+articleImageUrl(a.coverImage)+'</image:loc>'));}}
 const news=await(await fetch(base+'/news-sitemap.xml')).text();
 for(const a of articles)for(const l of langs){const route=(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/';assert.equal(news.includes('https://presda.com'+route),a.schemaType==='NewsArticle','Evergreen Article records do not enter the news sitemap');const category=(l==='en'?'':'/'+l)+'/category/'+a.category.toLowerCase()+'/';const response=await fetch(base+category);assert.equal(response.status,200);const html=await response.text();assert(html.includes(route),'Article linked from its correct localized category');}
 fs.writeFileSync(`test-results/${proofName}-${stage}.json`,JSON.stringify({bruno:refs,results},null,2));console.log('PASS:',results.length,'viewports,',articles.length*4,'editions, metadata, schema, links, crawl access and article/image sitemap mappings.');
}finally{await browser.close();}}
main().catch(e=>{console.error(e);process.exit(1)});
