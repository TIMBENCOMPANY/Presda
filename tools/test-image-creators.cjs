const assert = require('node:assert/strict');
require('./register-typescript.cjs');
require.extensions['.css'] = m => { m.exports = {}; };
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { articleJsonLd } = require('../src/lib/articleSeo.ts');
const { organizationJsonLd } = require('../src/lib/seo.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { translationJsonLd } = require('../src/lib/i18n/metadata.ts');
const { getImageCreator } = require('../src/lib/imageCreators.ts');
const { Phenomena2026Image } = require('../src/components/Phenomena2026Image.tsx');
const media = require('../src/data/phenomena2026Media.json');

const articles = getPublishedArticles();
const expectedNames = new Map([
  ['bee-colony-order-intelligence', 'PRESDA'], ['human-dna-code-that-builds-us', 'PRESDA'],
  ['human-brain-most-complex-organ', 'PRESDA'], ['bacteria-good-bad-microbes-shape-our-lives', 'PRESDA'],
  ['our-universe-big-bang-end-of-time', 'PRESDA'], ['our-solar-system-sun-eight-planets-beyond', 'PRESDA'],
  ['extinct-animals-lost-creatures-planet', 'PRESDA'], ['tartaria-lost-empire-history-conspiracy', 'PRESDA'],
  ['future-supermarkets-ai-robots-cashierless-shopping', 'PRESDA'],
  ['breaking-bad-actor-rj-mitte-dies-at-34', 'Gage Skidmore']
]);
let changedHeroes = 0;
for (const article of articles) {
  const image = articleJsonLd(article).image;
  const expected = expectedNames.get(article.slug);
  if (expected) {
    assert.deepEqual(image.creator, { '@type': expected === 'PRESDA' ? 'Organization' : 'Person', name: expected });
    changedHeroes++;
  } else assert.equal(image.creator, undefined, 'No guessed ownership for an unverified hero: ' + article.slug);
  assert.equal(image.license, undefined, 'No new license claims');
  assert.deepEqual(articleJsonLd(article).publisher.logo.creator, { '@type': 'Organization', name: 'PRESDA' });
}
assert.equal(changedHeroes, expectedNames.size);
for (const record of publishedTranslations.filter(r => r.kind === 'article')) {
  const original = articles.find(a => '/articles/' + a.slug + '/' === record.englishPath);
  assert.deepEqual(translationJsonLd(record).image.creator, articleJsonLd(original).image.creator, 'Creator identity must not change with language');
}
assert.deepEqual(organizationJsonLd().logo.creator, { '@type': 'Organization', name: 'PRESDA' });
for (const source of ['/unknown-photograph.jpg', '/future-ai-hero.png', '/supplied-for-presda.webp', '/images/articles/peter-margaret-dolphin-experiment.webp', 'toString']) {
  assert.equal(getImageCreator(source), undefined, 'No filename-, brand-, publisher- or prototype-based fallback');
}
for (const locale of ['en', 'fr', 'ar', 'es']) for (const item of media) {
  const html = renderToStaticMarkup(React.createElement(Phenomena2026Image, { number: item.number, locale }));
  const script = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  const schema = JSON.parse(script[1]);
  assert.equal(schema['@context'], 'https://schema.org');
  assert.equal(schema.contentUrl, 'https://presda.com' + item.variants.at(-1).src);
  assert.equal(schema.license, item.licenseUrl);
  assert.equal(schema.acquireLicensePage, item.source);
  assert.equal(schema.creditText, item.author);
  assert.equal(schema.copyrightNotice, item.author + ' · ' + item.license);
  if (item.number === 11) assert.equal(schema.creator, undefined, 'Do not attribute the uncredited illustrator to the book author, uploader or archive');
  else {
    assert(['Person', 'Organization'].includes(schema.creator['@type']));
    assert.equal(schema.creator.name, ({ 4: 'R. Hadian', 8: 'Peter Rejcek', 12: 'Chris Ratzlaff' })[item.number] ?? item.author);
    assert.equal(schema.creator['@type'], item.number === 2 ? 'Organization' : 'Person');
  }
}
console.log(`PASS: ${articles.length} EN heroes and all translations audited; 10 verified hero creators, PRESDA brand ownership, 80 licensed image schemas, accurate photographer/agency separation and unknown-creator safeguards`);
