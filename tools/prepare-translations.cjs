require('./register-typescript.cjs');
const fs = require('node:fs');
const path = require('node:path');
const { validateTranslations } = require('../src/lib/i18n/validation.ts');
const { readRecords } = require('./translation-library.cjs');
const { isEnglishPage } = require('../src/lib/i18n/english.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const articles = getPublishedArticles();
const { records, additions } = readRecords();
validateTranslations(records);
const publishedTranslations = records.filter(record => record.status === 'published');
for (const record of publishedTranslations) if (!isEnglishPage(record.englishPath)) throw new Error(`Missing English source for ${record.path}`);
for (const record of publishedTranslations.filter(record => record.kind === 'article')) {
  const source = articles.find(article => record.englishPath === `/articles/${article.slug}/`);
  if (!source) throw new Error(`Missing English source for ${record.path}`);
  validateArticleParity(record, source);
}
const translationRoutes = publishedTranslations.map(({ locale, englishPath, path }) => ({ locale, englishPath, path }));
fs.writeFileSync(path.join(__dirname, '../src/data/localizations/articles.generated.json'), JSON.stringify(additions.filter(record => record.status === 'published'), null, 2) + '\n');
fs.writeFileSync(path.join(__dirname, '../src/data/translation-routes.json'), JSON.stringify(translationRoutes, null, 2) + '\n');
console.log(`PASS: ${publishedTranslations.length} complete translations; generated ${translationRoutes.length} lightweight middleware routes`);
