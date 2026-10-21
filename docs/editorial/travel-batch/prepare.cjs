const fs = require('fs'), path = require('path');
process.chdir(path.resolve(__dirname, '../../..'));
const specs = [
 {key:'africa',id:'303',slug:'africa-underrated-travel-destinations',asset:'african destinations Golden-Hour African Coastal Vista.png',related:['african-safaris-wildlife-conservation-travel'],tags:['Africa','Travel planning','Cultural heritage','Responsible tourism'],meta:{
 en:["Africa’s Most Underrated Travel Destinations","15 Underrated African Destinations: A Practical Travel Guide","Explore 15 African destinations with cultural context, seasonal advice, access, cost drivers and planning cautions, from Tafraoute to Rodrigues.","Africa’s","Underrated Travel Destinations"],
 fr:["Afrique : les destinations de voyage les plus méconnues","15 destinations africaines méconnues : guide pratique","Quinze destinations africaines, de Tafraoute à Rodrigues : cultures, paysages, saisons, accès, budget et précautions pour préparer son voyage.","Afrique","les plus méconnues"],
 es:["África: los destinos de viaje más infravalorados","15 destinos africanos poco conocidos: guía práctica","Quince destinos de África, de Tafraoute a Rodrigues, con cultura, paisajes, temporadas, acceso, costes y precauciones para planificar el viaje.","África","más infravalorados"],
 ar:["إفريقيا: وجهات سفر تستحق اهتماماً أكبر","15 وجهة إفريقية تستحق الاكتشاف: دليل عملي للسفر","من تافراوت إلى رودريغز: خمس عشرة وجهة إفريقية مع الثقافة والطبيعة والمواسم والوصول وعناصر التكلفة واحتياطات التخطيط.","إفريقيا","اهتماماً أكبر"]}},
 {key:'safari',id:'304',slug:'african-safaris-wildlife-conservation-travel',asset:'Safari Jeep Among Elephants.png',related:['africa-underrated-travel-destinations'],tags:['African safaris','Wildlife','Conservation','Responsible tourism'],meta:{
 en:["African Safaris: Into the Heart of the Wild","African Safaris: Wildlife, Parks, Costs and Ethical Travel","Plan an African safari with park comparisons, wildlife, seasonal trade-offs, real cost considerations, conservation and responsible travel advice.","African Safaris","Heart of the Wild"],
 fr:["Safaris africains : au cœur du monde sauvage","Safaris africains : parcs, budget et tourisme responsable","Choisir un safari africain : faune, parcs, saisons, coûts, conservation et conseils pratiques pour voyager dans le respect des animaux et des habitants.","Safaris africains","monde sauvage"],
 es:["Safaris africanos: en el corazón de la naturaleza","Safaris africanos: parques, costes y turismo responsable","Cómo elegir un safari africano: fauna, parques, temporadas, presupuesto, conservación y consejos prácticos para un viaje responsable.","Safaris africanos","corazón de la naturaleza"],
 ar:["السفاري الإفريقي: في قلب الحياة البرية","السفاري الإفريقي: الحدائق والتكاليف والسفر المسؤول","دليل للسفاري الإفريقي يشرح الحياة البرية والحدائق والمواسم وعناصر التكلفة والحفظ والتخطيط لرحلة تحترم الحيوانات والسكان.","السفاري الإفريقي","الحياة البرية"]}},
 {key:'pompeii',id:'305',slug:'pompeii-history-ruins-visitor-guide',asset:'Pompeii Ruins Beneath Vesuvius.png',related:['orient-express-history-luxury-train-travel'],tags:['Pompeii','Roman history','Archaeology','Italy'],meta:{
 en:["Pompeii: Walking Through a City Frozen in Time","Pompeii: Roman Life, the AD 79 Eruption and Visitor Guide","Explore Pompeii’s Roman streets, eruption evidence, houses, casts and discoveries, with practical guidance on tickets, transport and accessibility.","Pompeii","Frozen in Time"],
 fr:["Pompéi : marcher dans une ville figée dans le temps","Pompéi : histoire romaine, éruption et guide de visite","Comprendre Pompéi, ses maisons, moulages et découvertes, puis préparer la visite : billets, transports, accessibilité et limites des interprétations.","Pompéi","figée dans le temps"],
 es:["Pompeya: caminar por una ciudad congelada en el tiempo","Pompeya: historia romana, erupción y guía de visita","Recorra Pompeya entre casas, calles y descubrimientos. Evidencias de la erupción, moldes humanos, entradas, transporte y accesibilidad.","Pompeya","congelada en el tiempo"],
 ar:["بومبي: المشي في مدينة تجمدت في الزمن","بومبي: الحياة الرومانية والثوران ودليل الزيارة","اكتشف بومبي وشوارعها وبيوتها وأدلة ثوران سنة 79 وقوالب ضحاياها، مع معلومات التذاكر والنقل وإمكانية الوصول وحدود التفسير.","بومبي","تجمدت في الزمن"]}},
 {key:'orient',id:'306',slug:'orient-express-history-luxury-train-travel',asset:'Orient Express Through the Mountains.png',related:['pompeii-history-ruins-visitor-guide'],tags:['Orient Express','Rail travel','Luxury travel','European history'],meta:{
 en:["The Orient Express: The Legend of Luxury Train Travel","Orient Express: History, Routes and Today’s Luxury Trains","Trace the Orient Express from 1883 to modern luxury rail. Compare Belmond, La Dolce Vita and future projects, with practical booking advice.","The Orient Express","Luxury Train Travel"],
 fr:["L’Orient Express : la légende du voyage ferroviaire de luxe","Orient Express : histoire, parcours et trains actuels","De 1883 aux services modernes : histoire de l’Orient Express, Belmond, La Dolce Vita, projets futurs et conseils pour comprendre les offres.","L’Orient Express","voyage ferroviaire de luxe"],
 es:["El Orient Express: la leyenda de los viajes de lujo en tren","Orient Express: historia, rutas y trenes de lujo actuales","Del servicio de 1883 a los trenes modernos: historia, Belmond, La Dolce Vita, proyectos futuros y consejos para comparar rutas y reservas.","El Orient Express","viajes de lujo en tren"],
 ar:["قطار الشرق السريع: أسطورة السفر الفاخر بالسكك","قطار الشرق السريع: التاريخ والمسارات والخدمات الحديثة","من انطلاقة 1883 إلى القطارات الحديثة: تاريخ الشرق السريع وبيلموند ولا دولتشي فيتا والمشاريع المستقبلية ونصائح مقارنة العروض.","قطار الشرق السريع","السفر الفاخر بالسكك"]}}
];
const captions={
 africa:{en:'PRESDA AI-generated editorial illustration of an imagined African coastal landscape. It does not depict a verified destination or documentary scene.',fr:'Illustration éditoriale générée par IA pour PRESDA : paysage côtier africain imaginé, sans identification à un lieu réel documenté.',es:'Ilustración editorial generada por IA para PRESDA de un paisaje costero africano imaginado. No documenta un destino concreto.',ar:'رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لساحل إفريقي متخيل، وليس توثيقاً لوجهة محددة.'},
 safari:{en:'PRESDA AI-generated editorial illustration of a safari vehicle and wildlife. It does not document an operator, park or recommended viewing distance.',fr:'Illustration éditoriale générée par IA pour PRESDA : véhicule de safari et animaux. Elle ne documente ni opérateur, ni parc, ni distance de sécurité recommandée.',es:'Ilustración editorial generada por IA para PRESDA de un vehículo de safari y fauna. No documenta un operador, parque ni distancia segura recomendada.',ar:'رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لمركبة سفاري وحيوانات، ولا يوثق مشغلاً أو حديقة أو مسافة مشاهدة موصى بها.'},
 pompeii:{en:'PRESDA AI-generated editorial illustration inspired by Pompeii and Vesuvius. It is not an archaeological photograph or a reconstruction verified against a site plan.',fr:'Illustration éditoriale générée par IA pour PRESDA, inspirée de Pompéi et du Vésuve. Ce n’est ni une photographie archéologique ni une reconstitution validée par un plan.',es:'Ilustración editorial generada por IA para PRESDA, inspirada en Pompeya y el Vesubio. No es fotografía arqueológica ni reconstrucción verificada con un plano.',ar:'رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA مستلهم من بومبي وفيزوف، وليس صورة أثرية أو إعادة بناء موثقة بمخطط الموقع.'},
 orient:{en:'PRESDA AI-generated editorial illustration of an imagined luxury train interior. It is not an official operator photograph or a verified carriage, route or view.',fr:'Illustration éditoriale générée par IA pour PRESDA : intérieur de train de luxe imaginé, et non photographie officielle d’un opérateur ou voiture, parcours et vue vérifiés.',es:'Ilustración editorial generada por IA para PRESDA de un interior ferroviario imaginado. No es fotografía oficial de operador ni documenta coche, ruta o paisaje reales.',ar:'رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لداخل قطار فاخر متخيل، وليس صورة رسمية لمشغل أو توثيقاً لعربة أو طريق أو منظر حقيقي.'}
};
const read=(key,l)=>fs.readFileSync(`${__dirname}/${key}.${l}.md`,'utf8').trim().split(/\r?\n\s*\r?\n/);
const links=p=>[...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const articles=[];
for(const s of specs){
 const en=read(s.key,'en'),d=s.meta.en;
 const refs=[...new Map(en.flatMap(links).filter(m=>!m[2].startsWith('https://presda.com')).map(m=>[m[2],{name:m[1],url:m[2]}])).values()];
 const content=en.map(p=>p.replaceAll('https://presda.com/articles/','/articles/'));
 const a={id:s.id,slug:s.slug,title:d[0],seoTitle:d[1],metaDescription:d[2],excerpt:d[2],category:'Travel',schemaType:'Article',date:'2026-10-21',lastUpdated:'2026-10-21',author:'PRESDA Editorial',status:'published',readingTime:Math.ceil(en.join(' ').split(/\s+/).length/200)+' min read',coverImage:`/articles/travel-${s.key}-hero.png`,coverAlt:captions[s.key].en,headlineHighlights:{red:d[3],gold:d[4]},tags:s.tags,content,references:refs,relatedSlugs:s.related,faq:[]};
 for(const l of ['fr','ar','es']){
  const t=read(s.key,l),d=s.meta[l];
  if(t.length!==en.length)throw Error(`${s.key}/${l}: ${t.length} blocks expected ${en.length}`);
  const blocks=t.map((p,i)=>{
   if(p.startsWith('## ')!==en[i].startsWith('## '))throw Error(`${s.key}/${l}: heading mismatch ${i}`);
   return {type:p.startsWith('## ')?'heading':'paragraph',text:p.replace(/^## /,'')+links(content[i]).map(m=>` [${m[2].startsWith('/')?({fr:'À lire sur PRESDA',es:'También en PRESDA',ar:'اقرأ أيضاً في PRESDA'})[l]:({fr:'Source',es:'Fuente',ar:'المصدر'})[l]+': '+new URL(m[2]).hostname}](${m[2]})`).join('')};
  });
  const r={locale:l,englishPath:`/articles/${s.slug}/`,path:`/${l}/articles/${s.slug}/`,kind:'article',status:'published',review:{reviewer:'Codex source and terminology review',reviewedAt:a.date,terminologyChecked:true},title:d[0],seoTitle:d[1],description:d[2],excerpt:d[2],headlineHighlights:{red:d[3],gold:d[4]},keywords:[d[3],d[4]],searchIntent:d[2],category:a.category,author:a.author,publishedAt:a.date,updatedAt:a.date,image:{src:a.coverImage,alt:captions[s.key][l]},content:blocks,sources:refs.map(r=>({label:r.name,url:r.url})),faq:[]};
  fs.mkdirSync(`src/data/localizations/articles/${s.slug}`,{recursive:true});
  fs.writeFileSync(`src/data/localizations/articles/${s.slug}/${l}.json`,JSON.stringify(r,null,2)+'\n');
 }
 fs.copyFileSync('C:/Users/Microsoft/Desktop/'+s.asset,'public'+a.coverImage);
 articles.push(a);
 console.log(s.key, en.length,'blocks',en.join(' ').split(/\s+/).length,'words',refs.length,'sources');
}
fs.writeFileSync('src/data/travelBatchArticles.ts','import type { Article } from "@/data/articles";\nexport const travelBatchArticles: Article[] = '+JSON.stringify(articles,null,2)+';\n');
fs.writeFileSync('src/data/travelBatchHeroCaptions.json',JSON.stringify(Object.fromEntries(specs.map(s=>[s.slug,captions[s.key]])),null,2)+'\n');
fs.writeFileSync(`${__dirname}/manifest.json`,JSON.stringify(specs.map(s=>({key:s.key,slug:s.slug,asset:s.asset})),null,2)+'\n');
let registry=fs.readFileSync('src/data/articles.ts','utf8');
if(!registry.includes('import { travelBatchArticles }')){
 registry='import { travelBatchArticles } from "@/data/travelBatchArticles";\n'+registry;
 registry=registry.replace('  psgQsiArticle,','  ...travelBatchArticles,\n  psgQsiArticle,');
 fs.writeFileSync('src/data/articles.ts',registry);
}
let layout=fs.readFileSync('src/components/ArticleLayout.tsx','utf8');
if(!layout.includes('import travelBatchHeroCaptions')){
 layout='import travelBatchHeroCaptions from "@/data/travelBatchHeroCaptions.json";\n'+layout;
 layout=layout.replace('        {article.slug === "nasser-al-khelaifi-', '        {article.slug in travelBatchHeroCaptions && <p data-travel-batch-hero-caption className="mt-3 text-xs leading-relaxed text-[color:var(--home-muted)]">{travelBatchHeroCaptions[article.slug as keyof typeof travelBatchHeroCaptions][locale]}</p>}\n        {article.slug === "nasser-al-khelaifi-');
 fs.writeFileSync('src/components/ArticleLayout.tsx',layout);
}
