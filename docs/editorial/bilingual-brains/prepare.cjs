const fs = require('fs'), path = require('path');
process.chdir(path.resolve(__dirname, '../../..'));
const slug = 'bilingual-brains-speaking-two-languages-mind';
const data = {
  en: [
    'Bilingual Brains: How Speaking Two Languages Shapes the Mind',
    'Bilingual Brains: Language, Memory and the Dementia Debate',
    'How bilingualism shapes brain networks, memory and childhood development, and what research really says about attention, aging and dementia.',
    'Bilingual Brains', 'Shapes the Mind',
    'PRESDA AI-generated editorial illustration of a woman studying languages in an imagined library. Not a photograph of a research participant or scientific experiment.'
  ],
  fr: [
    'Cerveaux bilingues : comment parler deux langues façonne l’esprit',
    'Cerveaux bilingues : mémoire, langues et débat sur la démence',
    'Comment le bilinguisme façonne le cerveau, la mémoire et le développement, et ce que révèlent les études sur l’attention, le vieillissement et la démence.',
    'Cerveaux bilingues', 'façonne l’esprit',
    'Illustration éditoriale générée par IA pour PRESDA : une femme étudie les langues dans une bibliothèque imaginaire. Ce n’est pas une photographie de participante à une étude ou d’expérience scientifique.'
  ],
  es: [
    'Cerebros bilingües: cómo hablar dos idiomas moldea la mente',
    'Cerebros bilingües: memoria, idiomas y debate sobre demencia',
    'Cómo el bilingüismo moldea el cerebro, la memoria y el desarrollo infantil, y qué dice la ciencia sobre atención, envejecimiento y demencia.',
    'Cerebros bilingües', 'moldea la mente',
    'Ilustración editorial generada por IA para PRESDA de una mujer estudiando idiomas en una biblioteca imaginaria. No es una fotografía de una participante ni de un experimento científico.'
  ],
  ar: [
    'الأدمغة الثنائية اللغة: كيف يشكل التحدث بلغتين العقل',
    'الدماغ الثنائي اللغة: الذاكرة والانتباه والجدل حول الخرف',
    'كيف تشكل ثنائية اللغة الدماغ والذاكرة ونمو الأطفال، وما الذي تقوله الأبحاث فعلاً عن الانتباه والشيخوخة والوقاية من الخرف؟',
    'الأدمغة الثنائية اللغة', 'يشكل التحدث بلغتين العقل',
    'رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لامرأة تدرس اللغات في مكتبة متخيلة. ليس صورة لمشاركة في دراسة أو لتجربة علمية.'
  ]
};
const read = l => fs.readFileSync(`${__dirname}/article.${l}.md`, 'utf8').trim().split(/\r?\n\s*\r?\n/);
const links = p => [...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const en = read('en');
const refs = [...new Map(en.flatMap(links).filter(m => !m[2].startsWith('https://presda.com')).map(m => [m[2], {name:m[1],url:m[2]}])).values()];
const content = en.map(p => p.replaceAll('https://presda.com/articles/', '/articles/'));
const d = data.en;
const article = {
  id:'301', slug, title:d[0], seoTitle:d[1], metaDescription:d[2], excerpt:d[2],
  category:'Science', schemaType:'Article', date:'2026-10-20', lastUpdated:'2026-10-20',
  author:'PRESDA Editorial', status:'published',
  readingTime:Math.ceil(en.join(' ').split(/\s+/).length/200)+' min read',
  coverImage:'/articles/bilingual-brains-hero.png', coverAlt:d[5],
  headlineHighlights:{red:d[3],gold:d[4]},
  tags:['Bilingualism','Neuroscience','Memory','Language learning','Cognitive aging'],
  content, references:refs,
  relatedSlugs:['human-brain-most-complex-organ','human-dna-code-that-builds-us'], faq:[]
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
fs.copyFileSync('C:/Users/Microsoft/Desktop/Daydreaming Among Languages.png','public'+article.coverImage);
fs.writeFileSync('src/data/bilingualBrainsArticle.ts','import type { Article } from "@/data/articles";\nexport const bilingualBrainsArticle: Article = '+JSON.stringify(article,null,2)+';\n');
fs.writeFileSync('src/data/bilingualBrainsHeroCaptions.json',JSON.stringify(Object.fromEntries(Object.entries(data).map(([l,d])=>[l,d[5]])),null,2)+'\n');
let registry=fs.readFileSync('src/data/articles.ts','utf8');
if(!registry.includes('import { bilingualBrainsArticle }')){
  registry='import { bilingualBrainsArticle } from "@/data/bilingualBrainsArticle";\n'+registry;
  registry=registry.replace('  electricCarsArticle,','  bilingualBrainsArticle,\n  electricCarsArticle,');
  fs.writeFileSync('src/data/articles.ts',registry);
}
console.log(en.length,'blocks;',en.join(' ').split(/\s+/).length,'English words;',refs.length,'sources');
