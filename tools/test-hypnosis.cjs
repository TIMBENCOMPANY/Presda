require('./register-typescript.cjs');
const fs=require('fs'),path=require('path'),crypto=require('crypto'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),{hypnosisArticle:a}=require('../src/data/hypnosisArticle.ts'),ls=['en','fr','ar','es'],base=process.argv[2];
const links=t=>[...t.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(x=>x[1]);
async function main(){const counts={};assert.equal(a.category,'Science');assert.equal(a.references.length,17);assert.equal(a.content.length,41);assert.equal(a.faq.length,6);const hero=root+'/public'+a.coverImage;assert.equal(crypto.createHash('sha256').update(fs.readFileSync(hero)).digest('hex'),crypto.createHash('sha256').update(fs.readFileSync('C:/Users/Microsoft/Downloads/Cinematic Hypnosis Session with Pocket Watch.png')).digest('hex'));
 for(const l of ls){const c=l==='en'?a:JSON.parse(fs.readFileSync(root+'/src/data/localizations/articles/'+a.slug+'/'+l+'.json'));const b=l==='en'?c.content:c.content.map(x=>x.type==='heading'?'## '+x.text:x.text);assert.equal(b.length,41);b.forEach((x,i)=>assert.deepEqual(links(x),links(a.content[i])));assert.equal(c.faq.length,6);assert(!/[\u2014]|&mdash;|&#8212;|&#x2014;|\{\{/.test(JSON.stringify(c)));const t=(b.join(' ')+' '+c.faq.map(x=>x.question+' '+x.answer).join(' ')).replace(/\[([^\]]+)\]\([^)]*\)/g,'$1');counts[l]=t.trim().split(/\s+/).length;assert(counts[l]>=1800&&counts[l]<=2300,l+' total words '+counts[l]);for(const n of ['545','57','21','36','85','106','354','200','80','2016','2017','2026'])assert(t.includes(n),l+' evidence '+n);}
 console.log('PASS four complete scientific editions, 41 blocks, 17 sources, citation parity, 6 FAQs, approved hero hash, words including FAQs',counts);
 if(!base)return;
 for(const l of ls){
  const p=(l==='en'?'':'/'+l)+'/articles/'+a.slug+'/',r=await fetch(base+p),h=await r.text();
  assert.equal(r.status,200,p);assert(h.includes('lang="'+l+'"'));assert(h.includes('dir="'+(l==='ar'?'rtl':'ltr')+'"'));assert(h.includes('rel="canonical" href="https://presda.com'+p+'"'));
  for(const other of ls)assert(h.includes('hrefLang="'+other+'" href="https://presda.com'+(other==='en'?'':'/'+other)+'/articles/'+a.slug+'/"'));
  const schemas=[...h.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(x=>JSON.parse(x[1])),s=schemas.find(x=>x['@type']==='Article');
  assert(s);assert.equal(s.inLanguage,l);assert(s.datePublished.startsWith('2026-10-11'));assert(s.dateModified.startsWith('2026-10-11'));assert.equal(schemas.find(x=>x['@type']==='FAQPage').mainEntity.length,6);
  for(const ref of a.references)assert(h.includes(ref.url.replaceAll('&','&amp;')));
  const alt=l==='en'?a.coverAlt:JSON.parse(fs.readFileSync(root+'/src/data/localizations/articles/'+a.slug+'/'+l+'.json')).image.alt;
  const heroTag=[...h.matchAll(/<img[^>]+>/g)].map(x=>x[0]).find(x=>x.includes(alt));
  assert(heroTag);assert(heroTag.includes('srcSet=')||heroTag.includes('srcset='));assert(!heroTag.includes('loading="lazy"'));
  assert(h.includes({en:'theatrical motif',fr:'mise en scène',ar:'عنصر مسرحي',es:'motivo teatral'}[l]));
  for(const slug of ['deja-vu-why-does-it-happen-brain-science','why-do-we-dream'])assert(h.includes((l==='en'?'':'/'+l)+'/articles/'+slug+'/'));
  console.log('PASS',l,'live article, SEO, schema, dates, RTL, citations, internal links and responsive hero');
 }
 const sitemap=await(await fetch(base+'/sitemap.xml')).text();for(const l of ls){const prefix=l==='en'?'':'/'+l;assert(sitemap.includes(prefix+'/articles/'+a.slug+'/'));for(const p of [prefix+'/',prefix+'/category/science/']){const r=await fetch(base+p),h=await r.text();assert.equal(r.status,200);assert(h.includes('/articles/'+a.slug+'/'));}}
 console.log('PASS all sitemap, Latest Articles and Science listings');
}
main().catch(e=>{console.error(e);process.exit(1)});
