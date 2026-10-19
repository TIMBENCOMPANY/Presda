const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../../..'),slug='bee-colony-order-intelligence';
const data={
  "en": {
    "title": "The Bee Colony: A World of Order and Intelligence",
    "seoTitle": "The Bee Colony: Queens, Honey and Collective Intelligence",
    "description": "Inside a honeybee colony: queens, workers, waggle dances, honey, pollination and environmental threats, explained through scientific research.",
    "red": "The Bee Colony",
    "gold": "Order and Intelligence",
    "alt": "PRESDA AI-generated scientific illustration of honeybees on golden honeycomb"
  },
  "fr": {
    "title": "La colonie d’abeilles : un monde d’ordre et d’intelligence",
    "seoTitle": "Colonie d’abeilles : reines, miel et intelligence collective",
    "description": "Découvrez les reines, ouvrières, danses, rayons de miel et pollinisatrices : la science d’une colonie d’abeilles et les menaces qui la fragilisent.",
    "red": "La colonie d’abeilles",
    "gold": "d’ordre et d’intelligence",
    "alt": "Illustration scientifique générée par IA pour PRESDA : abeilles sur un rayon de miel doré"
  },
  "es": {
    "title": "La colonia de abejas: un mundo de orden e inteligencia",
    "seoTitle": "La colonia de abejas: miel e inteligencia colectiva",
    "description": "Explora reinas, obreras, danzas, miel y polinización: la ciencia de una colonia de abejas y las amenazas ambientales que enfrenta.",
    "red": "La colonia de abejas",
    "gold": "orden e inteligencia",
    "alt": "Ilustración científica generada por IA para PRESDA de abejas sobre un panal dorado"
  },
  "ar": {
    "title": "مستعمرة النحل: عالم من النظام والذكاء",
    "seoTitle": "مستعمرة النحل: الملكات والعسل والذكاء الجماعي",
    "description": "اكتشف علم مستعمرة النحل: الملكات والعاملات والرقص والتواصل وصناعة العسل والتلقيح، والتهديدات البيئية التي تواجهها.",
    "red": "مستعمرة النحل",
    "gold": "النظام والذكاء",
    "alt": "رسم علمي مولد بالذكاء الاصطناعي لصالح PRESDA لنحل العسل على قرص شمعي ذهبي"
  }
};
const read=l=>fs.readFileSync(path.join(__dirname,l+'.md'),'utf8').trim().split(/\r?\n\s*\r?\n/);
const en=read('en'),links=p=>[...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const references=[...new Map(en.flatMap(links).filter(m=>m[2].startsWith('https:')).map(m=>[m[2],{name:m[1],url:m[2]}])).values()];
const d=data.en,a={id:'290',slug,title:d.title,seoTitle:d.seoTitle,metaDescription:d.description,excerpt:d.description,category:'Science',schemaType:'Article',date:'2026-10-19',lastUpdated:'2026-10-19',author:'PRESDA Editorial',status:'published',readingTime:'15 min read',coverImage:'/articles/bee-hero.png',coverAlt:d.alt,headlineHighlights:{red:d.red,gold:d.gold},tags:['Bees','Honeybees','Pollination','Collective Intelligence','Ecology'],content:en,references,relatedSlugs:['human-brain-most-complex-organ','bacteria-good-bad-microbes-shape-our-lives','human-dna-code-that-builds-us'],faq:[]};
fs.writeFileSync(path.join(root,'src/data/beeArticle.ts'),'import type { Article } from "@/data/articles";\nexport const beeArticle: Article = '+JSON.stringify(a,null,2)+';\n');
const internal={fr:['PRESDA : cerveau humain','PRESDA : ADN humain','PRESDA : bactéries'],es:['PRESDA: cerebro humano','PRESDA: ADN humano','PRESDA: bacterias'],ar:['PRESDA: الدماغ البشري','PRESDA: الحمض النووي','PRESDA: البكتيريا']};
for(const l of ['fr','es','ar']){const d=data[l],text=read(l);if(text.length!==en.length)throw Error(l+' parity');
 const content=text.map((p,i)=>({type:p.startsWith('## ')?'heading':'paragraph',text:p.replace(/^## /,'')+links(en[i]).map(m=>{const label=m[2].startsWith('/')?internal[l][m[2].includes('brain-')?0:m[2].includes('bacteria-')?2:1]:({fr:'Source',es:'Fuente',ar:'المصدر'}[l])+': '+new URL(m[2]).hostname.replace('www.','');return ` [${label}](${m[2]})`}).join('')}));
 const r={locale:l,englishPath:`/articles/${slug}/`,path:`/${l}/articles/${slug}/`,kind:'article',status:'published',review:{reviewer:'Codex source and terminology review',reviewedAt:a.date,terminologyChecked:true},title:d.title,seoTitle:d.seoTitle,description:d.description,excerpt:d.description,headlineHighlights:{red:d.red,gold:d.gold},keywords:[d.red,'Apis mellifera'],searchIntent:d.description,category:a.category,author:a.author,publishedAt:a.date,updatedAt:a.date,image:{src:a.coverImage,alt:d.alt},content,sources:references.map(r=>({label:r.name,url:r.url})),faq:[]};
 const dest=path.join(root,'src/data/localizations/articles',slug);fs.mkdirSync(dest,{recursive:true});fs.writeFileSync(path.join(dest,l+'.json'),JSON.stringify(r,null,2)+'\n');
}
console.log(en.length+' blocks; '+references.length+' sources; four editions prepared');

