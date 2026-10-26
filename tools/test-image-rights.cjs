const assert = require('node:assert/strict');
require('./register-typescript.cjs');
const { getImageRights } = require('../src/lib/imageRights.ts');
const { articleJsonLd } = require('../src/lib/articleSeo.ts');
const { organizationJsonLd } = require('../src/lib/seo.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { translationJsonLd } = require('../src/lib/i18n/metadata.ts');
const fields = ['creditText', 'copyrightNotice', 'license', 'acquireLicensePage'];
const rights = image => Object.fromEntries(fields.filter(k => k in image).map(k => [k, image[k]]));
const articles = getPublishedArticles();
const brandRights = { creditText: 'PRESDA', license: 'https://presda.com/terms/', acquireLicensePage: 'https://presda.com/terms/' };
let credited = 0, licensed = 0;
for (const article of articles) {
  const image = articleJsonLd(article).image;
  assert.deepEqual(rights(image), getImageRights(article.coverImage));
  if (image.creditText) credited++;
  if (image.license) {
    licensed++;
    if (article.coverImage === '/images/editorial/yassine-bounou.jpg') {
      assert.deepEqual(image.creator, { '@type': 'Person', name: 'Franco Arland' });
      assert.equal(image.copyrightNotice, '2026 Getty Images');
      assert.equal(image.creditText, 'Franco Arland/Getty Images');
      assert.equal(image.license, 'https://www.gettyimages.com/eula?utm_medium=organic&utm_source=google&utm_campaign=iptcurl');
      assert.equal(image.acquireLicensePage, 'https://www.gettyimages.com/detail/2269536756?utm_medium=organic&utm_source=google&utm_campaign=iptcurl');
    } else {
      assert.equal(article.coverImage, '/articles/rj-mitte-gage-skidmore-2018.jpg');
      assert.equal(image.license, 'https://creativecommons.org/licenses/by-sa/2.0/');
      assert.equal(image.acquireLicensePage, 'https://commons.wikimedia.org/wiki/File:RJ_Mitte_at_San_Diego_Con.jpg#Licensing');
    }
  }
  if (article.coverImage !== '/images/editorial/yassine-bounou.jpg') assert.equal(image.copyrightNotice, undefined, 'No copyright inferred from creation credit');
  assert.deepEqual(rights(articleJsonLd(article).publisher.logo), brandRights);
}
assert.equal(credited, 59);
assert.equal(licensed, 2);
for (const record of publishedTranslations.filter(r => r.kind === 'article')) {
  const original = articles.find(a => '/articles/' + a.slug + '/' === record.englishPath);
  assert.deepEqual(rights(translationJsonLd(record).image), rights(articleJsonLd(original).image), record.path);
}
assert.deepEqual(rights(organizationJsonLd().logo), brandRights);
assert.equal(organizationJsonLd().logo.copyrightNotice, undefined, 'Published general IP terms do not identify a copyright holder');
assert.equal(getImageRights('/articles/brain-hero.png').license, undefined, 'Brand terms must never be inherited by an article image');
assert.equal(getImageRights('/favicon-dark.png?different').license, undefined, 'Exact verified brand asset only');
for (const source of ['/unknown.jpg', '/supplied-for-presda.webp', '/future-ai-hero.png', '/articles/brain-hero.png?other', 'toString', '__proto__']) {
  assert.deepEqual(getImageRights(source), {}, 'No guessed rights or prototype fallback');
}
console.log(`PASS: ${articles.length} EN heroes and all translations; ${credited} verified hero credits, two existing photo licenses, one embedded copyright notice, brand credit and unknown-rights safeguards`);
