const fs = require('fs');
const path = require('path');
process.chdir(path.resolve(__dirname, '../../..'));
const slug = 'electric-cars-global-shift-future-gasoline-diesel';
const data = {
  "en": [
    "Electric Cars: The Global Shift and the Future of Gasoline and Diesel",
    "Electric Cars: Global EV Shift, Gasoline and Diesel’s Future",
    "A global analysis of electric cars, hybrids, batteries and charging, with IEA 2026 data, evolving EU rules and scenarios for 2030, 2035 and 2050.",
    "Electric Cars",
    "Gasoline and Diesel",
    "PRESDA AI-generated editorial illustration of a car transporter on an imagined coastal highway. Not a photograph of an actual shipment, location or manufacturer event."
  ],
  "fr": [
    "Voitures électriques : la transition mondiale et l’avenir de l’essence et du diesel",
    "Voitures électriques : quel avenir pour l’essence et le diesel ?",
    "Analyse mondiale des voitures électriques : données AIE 2026, hybrides, batteries, recharge, règles européennes et scénarios pour 2030, 2035 et 2050.",
    "Voitures électriques",
    "l’essence et du diesel",
    "Illustration éditoriale générée par IA pour PRESDA : camion porte-voitures sur une route côtière imaginaire. Ce n’est pas une photographie d’un transport, d’un lieu ou d’un événement réel."
  ],
  "es": [
    "Coches eléctricos: la transición mundial y el futuro de la gasolina y el diésel",
    "Coches eléctricos: el futuro de la gasolina y el diésel",
    "Análisis mundial del coche eléctrico con datos AIE 2026: híbridos, baterías, recarga, normas europeas y escenarios para 2030, 2035 y 2050.",
    "Coches eléctricos",
    "la gasolina y el diésel",
    "Ilustración editorial generada por IA para PRESDA: un camión portavehículos en una carretera costera imaginaria. No es una fotografía de un envío, lugar o evento real."
  ],
  "ar": [
    "السيارات الكهربائية: التحول العالمي ومستقبل البنزين والديزل",
    "السيارات الكهربائية ومستقبل البنزين والديزل عالمياً",
    "تحليل عالمي للسيارات الكهربائية ببيانات وكالة الطاقة الدولية 2026: الهجين والبطاريات والشحن وقواعد أوروبا وسيناريوهات 2030 و2035 و2050.",
    "السيارات الكهربائية",
    "البنزين والديزل",
    "رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لشاحنة سيارات على طريق ساحلي متخيل. ليس صورة لشحنة أو موقع أو حدث فعلي لشركة سيارات."
  ]
};
const read = l => fs.readFileSync(`${__dirname}/article.${l}.md`, 'utf8').trim().split(/\r?\n\s*\r?\n/);
const links = p => [...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const en = read('en');
const refs = [...new Map(en.flatMap(links).filter(m => !m[2].startsWith('https://presda.com')).map(m => [m[2], { name: m[1], url: m[2] }])).values()];
const content = en.map(p => p.replaceAll('https://presda.com/articles/', '/articles/'));
const d = data.en;
const article = {
  id: '300', slug, title: d[0], seoTitle: d[1], metaDescription: d[2], excerpt: d[2], category: 'Business', schemaType: 'Article', date: '2026-10-20', lastUpdated: '2026-10-20', author: 'PRESDA Editorial', status: 'published',
  readingTime: Math.ceil(en.join(' ').split(/\s+/).length / 200) + ' min read', coverImage: '/articles/electric-cars-2026-hero.png', coverAlt: d[5], headlineHighlights: { red: d[3], gold: d[4] }, tags: ['Electric vehicles', 'Automotive industry', 'Energy', 'Batteries', 'Global economy'], content, references: refs, relatedSlugs: ['robot-revolution-ai-future-2030', 'who-controls-world-oil-middle-east-opec'], faq: []
};
const labels = { fr: 'Source', es: 'Fuente', ar: 'المصدر' };
const related = { fr: 'À lire sur PRESDA', es: 'También en PRESDA', ar: 'اقرأ أيضاً في PRESDA' };
for (const l of ['fr', 'es', 'ar']) {
  const t = read(l), d = data[l];
  if (t.length !== en.length) throw Error(`${l}: ${t.length} blocks, expected ${en.length}`);
  const blocks = t.map((p, i) => ({ type: p.startsWith('## ') ? 'heading' : 'paragraph', text: p.replace(/^## /, '') + links(content[i]).map(m => ` [${m[2].startsWith('/') ? related[l] : labels[l] + ': ' + new URL(m[2]).hostname}](${m[2]})`).join('') }));
  const record = { locale: l, englishPath: `/articles/${slug}/`, path: `/${l}/articles/${slug}/`, kind: 'article', status: 'published', review: { reviewer: 'Codex source and terminology review', reviewedAt: article.date, terminologyChecked: true }, title: d[0], seoTitle: d[1], description: d[2], excerpt: d[2], headlineHighlights: { red: d[3], gold: d[4] }, keywords: [d[3], d[4]], searchIntent: d[2], category: article.category, author: article.author, publishedAt: article.date, updatedAt: article.date, image: { src: article.coverImage, alt: d[5] }, content: blocks, sources: refs.map(x => ({ label: x.name, url: x.url })), faq: [] };
  fs.mkdirSync(`src/data/localizations/articles/${slug}`, { recursive: true });
  fs.writeFileSync(`src/data/localizations/articles/${slug}/${l}.json`, JSON.stringify(record, null, 2) + '\n');
}
fs.copyFileSync('C:/Users/Microsoft/Desktop/Electric Car Carrier Over Coastal Highway.png', 'public' + article.coverImage);
fs.writeFileSync('src/data/electricCarsArticle.ts', 'import type { Article } from "@/data/articles";\nexport const electricCarsArticle: Article = ' + JSON.stringify(article, null, 2) + ';\n');
fs.writeFileSync('src/data/electricCarsHeroCaptions.json', JSON.stringify(Object.fromEntries(Object.entries(data).map(([l, d]) => [l, d[5]])), null, 2) + '\n');
let registry = fs.readFileSync('src/data/articles.ts', 'utf8');
if (!registry.includes('import { electricCarsArticle }')) {
  registry = 'import { electricCarsArticle } from "@/data/electricCarsArticle";\n' + registry;
  registry = registry.replace('  beeArticle,', '  electricCarsArticle,\n  beeArticle,');
  fs.writeFileSync('src/data/articles.ts', registry);
}
console.log(en.length, 'blocks;', en.join(' ').split(/\s+/).length, 'English words;', refs.length, 'sources');
