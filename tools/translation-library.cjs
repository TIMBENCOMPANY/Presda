require('./register-typescript.cjs');
const fs = require('node:fs');
const path = require('node:path');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { articleTables, astrologyComparisonTable: astrology } = require('../src/lib/articleTables.ts');
const { getArticleContentWithoutInlineFaq, getArticleFaqs } = require('../src/lib/articleSeo.ts');
const directory = path.join(__dirname, '../src/data/localizations');
const locales = ['ar', 'fr', 'es'];
function sourceBlocks(source) {
  return getArticleContentWithoutInlineFaq(source).map(({ block }) => {
    const table = articleTables[block] ?? (block === '[[ASTROLOGY_SCIENCE_TABLE]]' ? astrology : undefined);
    if (table) return { type: 'table', sourceMarker: block, caption: table.caption, headings: table.headers, rows: table.rows };
    if (block.startsWith('[[')) throw new Error(`Unsupported source block: ${block}`);
    return { type: block.startsWith('### ') ? 'subheading' : block.startsWith('## ') ? 'heading' : block.startsWith('> ') ? 'quote' : 'paragraph', text: block.replace(/^(?:#{2,3}|>)\s+/, '') };
  });
}
function sourceFaqs(source, includeTemplateFaqs = false) {
  return includeTemplateFaqs || source.faq?.length || source.content.some(block => block.trim().toLowerCase() === '## faq') ? getArticleFaqs(source) : [];
}
function readRecords(root = directory) {
  const pilot = locales.flatMap(locale => JSON.parse(fs.readFileSync(path.join(root, `${locale}.json`), 'utf8')));
  const additions = [];
  const articleDir = path.join(root, 'articles');
  if (fs.existsSync(articleDir)) for (const slug of fs.readdirSync(articleDir).sort()) {
    if (!fs.statSync(path.join(articleDir, slug)).isDirectory()) continue;
    if (!getPublishedArticles().some(article => article.slug === slug)) throw new Error(`Unknown English article directory: ${slug}`);
    for (const filename of fs.readdirSync(path.join(articleDir, slug)).sort().filter(file => file.endsWith('.json'))) {
      const locale = filename.replace(/\.json$/, '');
      const record = JSON.parse(fs.readFileSync(path.join(articleDir, slug, filename), 'utf8'));
      if (!locales.includes(locale) || record.locale !== locale || record.kind !== 'article' ||
          record.englishPath !== `/articles/${slug}/` || record.path !== `/${locale}/articles/${slug}/` ||
          !['draft', 'published'].includes(record.status)) throw new Error(`Invalid article identity: ${slug}/${filename}`);
      additions.push(record);
    }
  }
  const identities = new Set();
  for (const record of [...pilot, ...additions]) {
    const key = `${record.locale}:${record.englishPath}`;
    if (identities.has(key)) throw new Error(`Duplicate editorial record: ${key}`);
    identities.add(key);
  }
  return { pilot, additions, records: [...pilot, ...additions] };
}
function createDraft(source, locale) {
  if (!locales.includes(locale)) throw new Error('Choose ar, fr or es');
  return {
    locale, englishPath: `/articles/${source.slug}/`, path: `/${locale}/articles/${source.slug}/`, kind: 'article', status: 'draft',
    review: { reviewer: '', reviewedAt: '', terminologyChecked: false },
    title: '', excerpt: '', ...(source.quote ? { quote: '' } : {}), headlineHighlights: { red: '', gold: '' },
    seoTitle: '', description: '', keywords: [], searchIntent: '', category: source.category, author: source.author,
    publishedAt: source.date, updatedAt: source.lastUpdated ?? source.date,
    image: { src: source.coverImage, alt: '' },
    content: sourceBlocks(source).map(block => block.type === 'table'
      ? { ...block, caption: '', headings: block.headings.map(() => ''), rows: block.rows.map(row => row.map(() => '')) }
      : { type: block.type, text: '' }),
    sources: (source.references ?? (source.source?.url ? [source.source] : [])).map(item => ({ label: '', url: item.url })),
    faq: sourceFaqs(source, true).map(() => ({ question: '', answer: '' }))
  };
}
module.exports = { directory, locales, readRecords, createDraft, sourceBlocks, sourceFaqs };
