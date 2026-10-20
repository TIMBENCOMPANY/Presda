const fs = require('fs'), path = require('path');
process.chdir(path.resolve(__dirname, '../../..'));
const slug = 'nasser-al-khelaifi-psg-qsi-70-million-transformation';
const data = {
  "en": [
    "Nasser Al-Khelaifi: The €70 Million Deal That Changed PSG Forever",
    "Al-Khelaifi and PSG: The €70m Deal, QSI and European Success",
    "How QSI transformed PSG from its 2011 takeover to two European titles: Al-Khelaifi, superstar spending, financial growth and Luis Enrique’s revolution.",
    "Nasser Al-Khelaifi",
    "Changed PSG Forever",
    "PRESDA AI-generated editorial illustration of Nasser Al-Khelaifi in an imagined PSG office. The trophies and setting are illustrative, not a documentary photograph or verified trophy-room inventory."
  ],
  "fr": [
    "Nasser Al-Khelaïfi : les 70 millions d’euros qui ont changé le PSG",
    "Al-Khelaïfi et le PSG : rachat, QSI et conquête européenne",
    "Du rachat par QSI en 2011 aux deux sacres européens : Al-Khelaïfi, les stars, les finances et la révolution collective de Luis Enrique au PSG.",
    "Nasser Al-Khelaïfi",
    "changé le PSG",
    "Illustration éditoriale générée par IA pour PRESDA : Nasser Al-Khelaïfi dans un bureau imaginaire du PSG. Le décor et les trophées ne constituent ni une photographie documentaire ni un inventaire vérifié."
  ],
  "es": [
    "Nasser Al-Khelaifi: los 70 millones de euros que cambiaron al PSG",
    "Al-Khelaifi y PSG: compra de QSI, finanzas y éxito europeo",
    "Del control de QSI en 2011 a dos Champions: Al-Khelaifi, las estrellas, el crecimiento financiero y la revolución colectiva de Luis Enrique en el PSG.",
    "Nasser Al-Khelaifi",
    "cambiaron al PSG",
    "Ilustración editorial generada por IA para PRESDA de Nasser Al-Khelaifi en una oficina imaginada del PSG. Los trofeos y el escenario no son una fotografía documental ni un inventario verificado."
  ],
  "ar": [
    "ناصر الخليفي: صفقة السبعين مليون يورو التي غيرت باريس سان جيرمان",
    "ناصر الخليفي وباريس: صفقة QSI والمال والمجد الأوروبي",
    "كيف حولت قطر للاستثمارات الرياضية باريس منذ 2011؟ قيادة الخليفي والنجوم والمالية وثورة لويس إنريكي ولقبان متتاليان في دوري أبطال أوروبا.",
    "ناصر الخليفي",
    "غيرت باريس سان جيرمان",
    "رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لناصر الخليفي في مكتب متخيل لباريس سان جيرمان. الكؤوس والمكان عناصر توضيحية، وليست صورة وثائقية أو جرداً موثقاً لغرفة الجوائز."
  ]
};
const read = l => fs.readFileSync(`${__dirname}/article.${l}.md`, 'utf8').trim().split(/\r?\n\s*\r?\n/);
const links = p => [...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const en = read('en');
const refs = [...new Map(en.flatMap(links).filter(m => !m[2].startsWith('https://presda.com')).map(m => [m[2], {name:m[1],url:m[2]}])).values()];
const content = en.map(p => p.replaceAll('https://presda.com/articles/', '/articles/'));
const d = data.en;
const article = {
  id:'302', slug, title:d[0], seoTitle:d[1], metaDescription:d[2], excerpt:d[2],
  category:'Sport', schemaType:'Article', date:'2026-10-20', lastUpdated:'2026-10-20',
  author:'PRESDA Editorial', status:'published',
  readingTime:Math.ceil(en.join(' ').split(/\s+/).length/200)+' min read',
  coverImage:'/articles/psg-qsi-hero.png', coverAlt:d[5],
  headlineHighlights:{red:d[3],gold:d[4]},
  tags:['Paris Saint-Germain','Nasser Al-Khelaifi','Qatar Sports Investments','Champions League','Football finance'],
  content, references:refs,
  relatedSlugs:['football-fans-psychology-passion-rivalry-violence','the-brands-behind-world-cup-2026'], faq:[]
};
const labels = {fr:'Source',es:'Fuente',ar:'المصدر'};
const related = {fr:'À lire sur PRESDA',es:'También en PRESDA',ar:'اقرأ أيضاً في PRESDA'};
for (const l of ['fr','es','ar']) {
  const t=read(l),d=data[l];
  if(t.length!==en.length)throw Error(`${l}: ${t.length} blocks, expected ${en.length}`);
  const blocks=t.map((p,i)=>{
    if(p.startsWith('## ')!==en[i].startsWith('## '))throw Error(`${l} heading mismatch ${i}`);
    return {type:p.startsWith('## ')?'heading':'paragraph',text:p.replace(/^## /,'')+links(content[i]).map(m=>` [${m[2].startsWith('/')?related[l]:labels[l]+': '+new URL(m[2]).hostname}](${m[2]})`).join('')};
  });
  const record={locale:l,englishPath:`/articles/${slug}/`,path:`/${l}/articles/${slug}/`,kind:'article',status:'published',review:{reviewer:'Codex source and terminology review',reviewedAt:article.date,terminologyChecked:true},title:d[0],seoTitle:d[1],description:d[2],excerpt:d[2],headlineHighlights:{red:d[3],gold:d[4]},keywords:[d[3],d[4]],searchIntent:d[2],category:article.category,author:article.author,publishedAt:article.date,updatedAt:article.date,image:{src:article.coverImage,alt:d[5]},content:blocks,sources:refs.map(x=>({label:x.name,url:x.url})),faq:[]};
  fs.mkdirSync(`src/data/localizations/articles/${slug}`,{recursive:true});
  fs.writeFileSync(`src/data/localizations/articles/${slug}/${l}.json`,JSON.stringify(record,null,2)+'\n');
}
fs.copyFileSync('C:/Users/Microsoft/Desktop/PSG Trophy Room Executive Portrait.png','public'+article.coverImage);
fs.writeFileSync('src/data/psgQsiArticle.ts','import type { Article } from "@/data/articles";\nexport const psgQsiArticle: Article = '+JSON.stringify(article,null,2)+';\n');
fs.writeFileSync('src/data/psgQsiHeroCaptions.json',JSON.stringify(Object.fromEntries(Object.entries(data).map(([l,d])=>[l,d[5]])),null,2)+'\n');
let registry=fs.readFileSync('src/data/articles.ts','utf8');
if(!registry.includes('import { psgQsiArticle }')){
  registry='import { psgQsiArticle } from "@/data/psgQsiArticle";\n'+registry;
  registry=registry.replace('  electricCarsArticle,','  psgQsiArticle,\n  electricCarsArticle,');
  fs.writeFileSync('src/data/articles.ts',registry);
}
console.log(en.length,'blocks;',en.join(' ').split(/\s+/).length,'English words;',refs.length,'sources');
