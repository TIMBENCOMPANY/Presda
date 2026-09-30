require('./register-typescript.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { getArticleCardImage } = require('../src/lib/articleImages.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');

function imageSources() {
  const sources = new Map();
  const add = (src, widths) => sources.set(src, [...new Set([...(sources.get(src) || []), ...widths])].sort((a, b) => a - b));
  const hero = [640, 1280, 2560, 3840];
  const card = [128, 256, 640, 1280];
  add('/presda-p-transparent.png', [128, 256, 512]);
  add('/images/about/presda-newsroom-night.png', hero);
  for (const article of getPublishedArticles()) {
    add(article.coverImage, hero);
    add(getArticleCardImage(article), card);
  }
  for (const record of publishedTranslations) if (record.image) add(record.image.src, hero);
  return new Map([...sources].sort(([a], [b]) => a.localeCompare(b)));
}
module.exports = { imageSources };
