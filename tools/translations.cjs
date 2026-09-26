const fs = require('node:fs');
const path = require('node:path');
const { directory, locales, readRecords, createDraft, sourceBlocks, sourceFaqs } = require('./translation-library.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const [command = 'status', slug, locale] = process.argv.slice(2);
const articles = getPublishedArticles();
const { records } = readRecords();
if (command === 'status') {
  const catalog = articles.map(article => ({ slug: article.slug, en: 'published', ...Object.fromEntries(locales.map(language => [language, records.find(record => record.englishPath === `/articles/${article.slug}/` && record.locale === language)?.status ?? 'missing'])) }));
  console.log(JSON.stringify(catalog, null, 2));
} else if (command === 'create' || command === 'source') {
  const source = articles.find(article => article.slug === slug);
  if (!source) throw new Error('Pass the exact slug of an existing published English article');
  if (command === 'source') {
    console.log(JSON.stringify({ ...source, content: sourceBlocks(source), faq: sourceFaqs(source, true) }, null, 2));
  } else {
    if (records.some(record => record.englishPath === `/articles/${slug}/` && record.locale === locale)) throw new Error('Translation already exists. Edit its existing record.');
    const draft = createDraft(source, locale);
    const target = path.join(directory, 'articles', slug, `${locale}.json`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, JSON.stringify(draft, null, 2) + '\n', { flag: 'wx' });
    console.log(`Created unpublishable blank draft: ${target}`);
  }
} else throw new Error('Usage: node tools/translations.cjs status | source <slug> | create <slug> <ar|fr|es>');
