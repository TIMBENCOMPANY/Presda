const fs=require('fs'),assert=require('assert/strict'),sharp=require('sharp');
require('./register-typescript.cjs');
const {cultureOct26Articles:articles}=require('../src/data/cultureOct26Articles.ts');
const {articleImageUrl,articleSitemapImages}=require('../src/lib/articleImageSeo.ts');
const specs=require('../docs/editorial/culture-oct26/manifest.json');
const base=process.env.BASE_URL||'http://localhost:3012';
const langs=['en','fr','ar','es'];
const requested=new Set(),results=[];
async function publicResource(url){
 const local=url.replace('https://presda.com',base);const r=await fetch(local);
 assert.equal(r.status,200,local);assert(!/noindex|none/i.test(r.headers.get('x-robots-tag')||''),local);
 return r;
}
(async()=>{
 const xml=await(await publicResource(base+'/sitemap.xml')).text();
 assert(xml.includes('http://www.google.com/schemas/sitemap-image/1.1'));
 const entries=[...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m=>({body:m[1],url:m[1].match(/<loc>(.*?)<\/loc>/)?.[1]}));
 const robots=await(await publicResource(base+'/robots.txt')).text();assert(/Allow: \/(?:\r?\n|$)/i.test(robots));assert(!/^Disallow:\s*\S/m.test(robots),'No blocking crawler directives');
 for(const a of articles){
  const spec=specs.find(s=>s.slug===a.slug),meta=await sharp('public'+a.coverImage).metadata();
  assert.equal(meta.format,'webp');assert.equal(meta.width,spec.dimensions.width);assert.equal(meta.height,spec.dimensions.height);
  assert.equal(spec.conversion.resize,false);assert.equal(spec.conversion.crop,false);
  const images=articleSitemapImages(a.coverImage);
  for(const image of images){
   if(requested.has(image))continue;requested.add(image);
   const r=await publicResource(image);assert(r.headers.get('content-type')?.includes('image/webp'),image);
   const bytes=Buffer.from(await r.arrayBuffer());const d=await sharp(bytes).metadata();assert(Math.abs(d.width/d.height-meta.width/meta.height)<0.003,'No distorted derivative');
  }
  const canonicalPaths=langs.map(l=>'https://presda.com'+(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/');
  for(const url of canonicalPaths){
   const entry=entries.find(e=>e.url===url);assert(entry,url);
   for(const image of images)assert(entry.body.includes('<image:loc>'+image+'</image:loc>'),url+' image missing');
   const html=await(await publicResource(url)).text();
   assert(!/<meta[^>]+name="robots"[^>]+content="[^"]*(?:noindex|nofollow|none)/i.test(html),url);
   const hero=html.match(/<img[^>]*class="article-hero-image[^>]*>/)?.[0];assert(hero,'Real HTML img');
   const src=hero.match(/\ssrc="([^"]+)"/)?.[1];assert(src,'Real img src');
   assert.equal(new URL(src,'https://presda.com').href,articleImageUrl(a.coverImage));
   results.push({url,image:articleImageUrl(a.coverImage),status:200,images:images.length,indexable:true});
  }
  // These hero images belong only to their four localized article landing pages.
  for(const entry of entries){if(images.some(i=>entry.body.includes('<image:loc>'+i+'</image:loc>')))assert(canonicalPaths.includes(entry.url),'Wrong image-to-page association '+entry.url);}
 }
 fs.writeFileSync('test-results/culture-oct26-image-'+(base.includes('localhost')?'local':'live')+'.json',JSON.stringify({checkedImages:requested.size,results},null,2));
 console.log('PASS 20 article/image associations, '+requested.size+' crawlable WebP URLs, no homepage associations, full aspect ratios, robots and HTTP indexability');
})().catch(e=>{console.error(e);process.exit(1)});
