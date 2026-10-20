const fs = require('fs');
const path = require('path');
process.chdir(path.resolve(__dirname, '../../..'));
const slug = 'future-supermarkets-ai-robots-cashierless-shopping';
const data = {
  en: ['The Future of Supermarkets: AI, Robots and Cashierless Shopping', 'Future of Supermarkets: AI, Robots and Cashierless Shopping', 'Explore Amazon, Walmart and Carrefour’s retail technology, from smart carts to AI assistants, with the costs, privacy risks and a realistic outlook for 2030.', 'The Future of Supermarkets', 'AI, Robots', 'PRESDA AI-generated editorial illustration of shoppers and a smart cart in an imagined supermarket. Not a photograph of an Amazon, Walmart or Carrefour deployment.'],
  fr: ['L’avenir des supermarchés : IA, robots et achats sans caisse', 'Supermarchés du futur : IA, robots et achats sans caisse', 'Amazon, Walmart, Carrefour : découvrez les chariots intelligents et assistants IA, leurs coûts, les enjeux de confidentialité et les perspectives pour 2030.', 'L’avenir des supermarchés', 'IA, robots', 'Illustration éditoriale générée par IA pour PRESDA : clients et chariot intelligent dans un supermarché imaginaire. Ce n’est pas une photographie d’un dispositif Amazon, Walmart ou Carrefour.'],
  es: ['El futuro de los supermercados: IA, robots y compras sin caja', 'Supermercados del futuro: IA, robots y compras sin caja', 'Explora las tecnologías de Amazon, Walmart y Carrefour: carritos inteligentes, asistentes de IA, costes, privacidad y una perspectiva realista para 2030.', 'El futuro de los supermercados', 'IA, robots', 'Ilustración editorial generada por IA para PRESDA: clientes y un carrito inteligente en un supermercado imaginario. No es una fotografía de una instalación de Amazon, Walmart o Carrefour.'],
  ar: ['مستقبل السوبرماركت: الذكاء الاصطناعي والروبوتات والتسوق دون صندوق دفع', 'مستقبل السوبرماركت: الذكاء الاصطناعي والتسوق دون صندوق دفع', 'اكتشف تقنيات أمازون ووولمارت وكارفور، من العربات الذكية إلى مساعدي التسوق، مع التكاليف ومخاطر الخصوصية وتصور واقعي لعام 2030.', 'مستقبل السوبرماركت', 'الذكاء الاصطناعي والروبوتات', 'رسم تحريري مولد بالذكاء الاصطناعي لصالح PRESDA لمتسوقين وعربة ذكية في سوبرماركت متخيل. ليس صورة لتطبيق فعلي لدى أمازون أو وولمارت أو كارفور.']
};
const read = l => fs.readFileSync(`${__dirname}/article.${l}.md`, 'utf8').trim().split(/\r?\n\s*\r?\n/);
const links = p => [...p.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)];
const en = read('en');
const refs = [...new Map(en.flatMap(links).filter(m => !m[2].startsWith('https://presda.com')).map(m => [m[2], { name: m[1], url: m[2] }])).values()];
const content = en.map(p => p.replaceAll('https://presda.com/articles/', '/articles/'));
const d = data.en;
const article = {
  id: '299', slug, title: d[0], seoTitle: d[1], metaDescription: d[2], excerpt: d[2], category: 'Business', schemaType: 'Article', date: '2026-10-20', lastUpdated: '2026-10-20', author: 'PRESDA Editorial', status: 'published',
  readingTime: Math.ceil(en.join(' ').split(/\s+/).length / 200) + ' min read', coverImage: '/articles/supermarket-2026-hero.png', coverAlt: d[5], headlineHighlights: { red: d[3], gold: d[4] }, tags: ['Retail', 'Artificial intelligence', 'Supermarkets', 'Automation'], content, references: refs, relatedSlugs: ['robot-revolution-ai-future-2030', 'chocolate-ancient-cacao-global-obsession'], faq: []
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
fs.copyFileSync('C:/Users/Microsoft/Desktop/Modern Supermarket Produce Aisle.png', 'public' + article.coverImage);
fs.writeFileSync('src/data/supermarketArticle.ts', 'import type { Article } from "@/data/articles";\nexport const supermarketArticle: Article = ' + JSON.stringify(article, null, 2) + ';\n');
fs.writeFileSync('src/data/supermarketHeroCaptions.json', JSON.stringify(Object.fromEntries(Object.entries(data).map(([l, d]) => [l, d[5]])), null, 2) + '\n');
let registry = fs.readFileSync('src/data/articles.ts', 'utf8');
if (!registry.includes('import { supermarketArticle }')) {
  registry = 'import { supermarketArticle } from "@/data/supermarketArticle";\n' + registry;
  registry = registry.replace('  beeArticle,', '  supermarketArticle,\n  beeArticle,');
  fs.writeFileSync('src/data/articles.ts', registry);
}
console.log(en.length, 'blocks;', en.join(' ').split(/\s+/).length, 'English words;', refs.length, 'sources');
