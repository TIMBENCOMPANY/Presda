const fs=require('fs'),path=require('path');
process.chdir(path.resolve(__dirname,'../../..'));
const specs=require('./specs.json');
const read=(key,l)=>fs.readFileSync(`${__dirname}/${key}-${l}.md`,'utf8').trim().split(/\r?\n\s*\r?\n/);
const links=p=>[...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const articles=[];
const relatedTitles=JSON.parse(fs.readFileSync('src/data/localizations/articles.generated.json','utf8'));
const internalTitle=(u,l)=>relatedTitles.find(r=>r.locale===l&&r.englishPath===u.pathname)?.title;
(async()=>{
for(const s of specs){
 const en=read(s.key,'en'),d=s.meta.en;
 const refs=[...new Map(en.flatMap(links).filter(m=>!m[2].startsWith('https://presda.com')).map(m=>[m[2],{name:m[1],url:m[2]}])).values()];
 const content=en.map(p=>p.replaceAll('https://presda.com/articles/','/articles/'));
 const a={id:s.id,slug:s.slug,title:d[0],seoTitle:d[1],metaDescription:d[2],excerpt:d[2],category:s.category,schemaType:s.schemaType||'Article',date:'2026-10-29',lastUpdated:'2026-10-29',author:'PRESDA Editorial',status:'published',readingTime:Math.ceil(en.join(' ').split(/\s+/).length/200)+' min read',coverImage:`/articles/${s.filename}`,coverAlt:s.alts.en,headlineHighlights:{red:d[3],gold:d[4]},tags:s.tags,content,references:refs,relatedSlugs:s.related,faq:[],homepageImagePosition:s.position,heroImageFit:"contain"};
 for(const l of ['fr','ar','es']){
  const t=read(s.key,l),d=s.meta[l];
  if(t.length!==en.length)throw Error(`${s.key}/${l}: ${t.length} blocks expected ${en.length}`);
  const sourceLabel={fr:'Source',es:'Fuente',ar:'المصدر'}[l];
  const blocks=t.map((p,i)=>{
   if(p.startsWith('## ')!==en[i].startsWith('## '))throw Error(`Heading mismatch ${s.key}/${l}/${i}`);
   const citations=links(content[i]).map(m=>{const u=new URL(m[2],'https://presda.com');const related=specs.find(x=>u.pathname===`/articles/${x.slug}/`);const label=u.hostname==='presda.com'?(related?.meta[l][0]||internalTitle(u,l)||m[1]):sourceLabel+': '+u.hostname;return ` [${label}](${m[2]})`;}).join('');
   return {type:p.startsWith('### ')?'subheading':p.startsWith('## ')?'heading':'paragraph',text:p.replace(/^#{2,3} /,'')+citations};
  });
  const r={locale:l,englishPath:`/articles/${s.slug}/`,path:`/${l}/articles/${s.slug}/`,kind:'article',status:'published',review:{reviewer:'Codex source and terminology review',reviewedAt:a.date,terminologyChecked:true},title:d[0],seoTitle:d[1],description:d[2],excerpt:d[2],headlineHighlights:{red:d[3],gold:d[4]},keywords:[d[3],d[4]],searchIntent:d[2],category:a.category,author:a.author,publishedAt:a.date,updatedAt:a.date,image:{src:a.coverImage,alt:s.alts[l]},content:blocks,sources:refs.map(r=>({label:sourceLabel+': '+new URL(r.url).hostname,url:r.url})),faq:[]};
  fs.mkdirSync(`src/data/localizations/articles/${s.slug}`,{recursive:true});
  fs.writeFileSync(`src/data/localizations/articles/${s.slug}/${l}.json`,JSON.stringify(r,null,2)+'\n');
 }
 const direct='C:/Users/Microsoft/Desktop/'+s.asset;
 const original=fs.existsSync(direct)?direct:'C:/Users/Microsoft/Desktop/ARTICLES PHOTO/'+s.asset;
 const hash=p=>require('crypto').createHash('sha256').update(fs.readFileSync(p)).digest('hex');
 const sharp=require('sharp');
 if(fs.existsSync(original)){
  s.originalSha256=hash(original);
  await sharp(original).keepMetadata().webp({quality:90,effort:6}).toFile('public'+a.coverImage);
  const before=await sharp(original).metadata(),after=await sharp('public'+a.coverImage).metadata();
  if(before.width!==after.width||before.height!==after.height)throw Error('Hero dimensions changed');
  s.dimensions={width:after.width,height:after.height};s.sha256=hash('public'+a.coverImage);
 } else {
  const prior=JSON.parse(fs.readFileSync(__dirname+'/manifest.json')).find(x=>x.key===s.key);
  Object.assign(s,{sha256:prior.sha256,originalSha256:prior.originalSha256,dimensions:prior.dimensions});
  if(hash('public'+a.coverImage)!==s.sha256)throw Error('Approved WebP hash mismatch');
 }
 articles.push(a);
 console.log(s.key,en.length,'blocks',en.join(' ').split(/\s+/).length,'EN words',refs.length,'sources');
}
fs.writeFileSync('src/data/natureOct28Articles.ts','import type { Article } from "@/data/articles";\nexport const natureOct28Articles: Article[] = '+JSON.stringify(articles,null,2)+';\n');
fs.writeFileSync('src/data/natureOct28HeroCaptions.json',JSON.stringify(Object.fromEntries(specs.map(s=>[s.slug,s.captions])),null,2)+'\n');
fs.writeFileSync(`${__dirname}/manifest.json`,JSON.stringify(specs.map(s=>({key:s.key,slug:s.slug,asset:s.asset,sourceDirectory:"C:/Users/Microsoft/Desktop",filename:s.filename,sha256:s.sha256,originalSha256:s.originalSha256,dimensions:s.dimensions,conversion:{format:"webp",quality:90,effort:6,resize:false,crop:false}})),null,2)+'\n');


})().catch(e=>{console.error(e);process.exitCode=1});
