const fs=require('fs'),path=require('path');
process.chdir(path.resolve(__dirname,'../../..'));
const all=require('./specs.json');
const specs=process.argv[2]?all.filter(s=>s.key===process.argv[2]):all;
const read=(key,l)=>fs.readFileSync(`${__dirname}/${key}.${l}.md`,'utf8').trim().split(/\r?\n\s*\r?\n/);
const links=p=>[...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const articles=[];
for(const s of specs){
 const en=read(s.key,'en'),d=s.meta.en;
 const refs=[...new Map(en.flatMap(links).filter(m=>!m[2].startsWith('https://presda.com')).map(m=>[m[2],{name:m[1],url:m[2]}])).values()];
 const content=en.map(p=>p.replaceAll('https://presda.com/articles/','/articles/'));
 const a={id:s.id,slug:s.slug,title:d[0],seoTitle:d[1],metaDescription:d[2],excerpt:d[2],category:'AI',schemaType:'Article',date:'2026-10-21',lastUpdated:'2026-10-21',author:'PRESDA Editorial',status:'published',readingTime:Math.ceil(en.join(' ').split(/\s+/).length/200)+' min read',coverImage:`/articles/gaming-${s.key}-hero.png`,coverAlt:s.captions.en,headlineHighlights:{red:d[3],gold:d[4]},tags:s.tags,content,references:refs,relatedSlugs:s.related,faq:[]};
 for(const l of ['fr','ar','es']){
  const t=read(s.key,l),d=s.meta[l];
  if(t.length!==en.length)throw Error(`${s.key}/${l}: ${t.length} blocks expected ${en.length}`);
  const blocks=t.map((p,i)=>{
   if(p.startsWith('## ')!==en[i].startsWith('## '))throw Error(`Heading mismatch ${s.key}/${l}/${i}`);
   return {type:p.startsWith('## ')?'heading':'paragraph',text:p.replace(/^## /,'')+links(content[i]).map(m=>` [${m[2].startsWith('/')?({fr:'À lire sur PRESDA',es:'También en PRESDA',ar:'اقرأ أيضاً في PRESDA'})[l]:({fr:'Source',es:'Fuente',ar:'المصدر'})[l]+': '+new URL(m[2]).hostname}](${m[2]})`).join('')};
  });
  const r={locale:l,englishPath:`/articles/${s.slug}/`,path:`/${l}/articles/${s.slug}/`,kind:'article',status:'published',review:{reviewer:'Codex source and terminology review',reviewedAt:a.date,terminologyChecked:true},title:d[0],seoTitle:d[1],description:d[2],excerpt:d[2],headlineHighlights:{red:d[3],gold:d[4]},keywords:[d[3],d[4]],searchIntent:d[2],category:a.category,author:a.author,publishedAt:a.date,updatedAt:a.date,image:{src:a.coverImage,alt:s.captions[l]},content:blocks,sources:refs.map(r=>({label:r.name,url:r.url})),faq:[]};
  fs.mkdirSync(`src/data/localizations/articles/${s.slug}`,{recursive:true});
  fs.writeFileSync(`src/data/localizations/articles/${s.slug}/${l}.json`,JSON.stringify(r,null,2)+'\n');
 }
 fs.copyFileSync('C:/Users/Microsoft/Desktop/'+s.asset,'public'+a.coverImage);
 articles.push(a);
 console.log(s.key,en.length,'blocks',en.join(' ').split(/\s+/).length,'EN words',refs.length,'sources');
}
fs.writeFileSync('src/data/gamingBatchArticles.ts','import type { Article } from "@/data/articles";\nexport const gamingBatchArticles: Article[] = '+JSON.stringify(articles,null,2)+';\n');
fs.writeFileSync('src/data/gamingBatchHeroCaptions.json',JSON.stringify(Object.fromEntries(specs.map(s=>[s.slug,s.captions])),null,2)+'\n');
fs.writeFileSync(`${__dirname}/manifest.json`,JSON.stringify(specs.map(s=>({key:s.key,slug:s.slug,asset:s.asset})),null,2)+'\n');
