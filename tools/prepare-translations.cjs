require('./register-typescript.cjs');
const fs = require('node:fs');
const path = require('node:path');
const { publishedTranslations, translationRoutes } = require('../src/lib/i18n/registry.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const articles = getPublishedArticles();
for (const record of publishedTranslations.filter(record => record.kind === 'article')) {
  const source = articles.find(article => record.englishPath === `/articles/${article.slug}/`);
  if (!source) throw new Error(`Missing English source for ${record.path}`);
  validateArticleParity(record, source);
}
fs.writeFileSync(path.join(__dirname, '../src/data/translation-routes.json'), JSON.stringify(translationRoutes, null, 2) + '\n');
console.log(`PASS: ${publishedTranslations.length} complete translations; generated ${translationRoutes.length} lightweight middleware routes`);
