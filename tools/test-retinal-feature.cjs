require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { retinalRepairArticle: article } = require('../src/data/retinalRepairArticle.ts');
const { getArticleBySlug } = require('../src/data/articles.ts');
const { readRecords } = require('./translation-library.cjs');
const { validateArticleParity } = require('./translation-parity.cjs');
const { RetinalRepairGraphic } = require('../src/components/RetinalRepairGraphic.tsx');
assert.equal(getArticleBySlug(article.slug), article);
assert.equal(article.category, 'Science');
assert.match(article.content[0], /no patient regained sight/);
assert.match(article.content.join(' '), /no supported date for clinical availability/);
assert.match(article.content.join(' '), /neither new animal-treatment results nor a clinical trial/);
assert.equal(article.references[0].url, 'https://www.nature.com/articles/s41467-026-78065-z');
const records = readRecords().additions.filter(r => r.englishPath === `/articles/${article.slug}/`);
assert.deepEqual(records.map(r => r.locale).sort(), ['ar', 'es', 'fr']);
for (const record of records) validateArticleParity(record, article);
for (const locale of ['en','fr','ar','es']) {
  const html = renderToStaticMarkup(React.createElement(RetinalRepairGraphic, { locale }));
  assert.ok(html.includes(`dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`));
  assert.ok(html.includes('width:19.2%') && html.includes('width:59.3%'));
  assert.match(html, /<table/);
  assert.equal((html.match(/scope="row"/g) || []).length, 2);
  assert.ok(html.includes(article.references[0].url));
  assert.ok(!/\u2014|&mdash;|&#8212;|&#x2014;/i.test(html));
}
assert.ok(!/\u2014|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify([article,...records])));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
// SHA-256 of the user-approved original, verified before publication.
assert.equal(hash('public/articles/retinal-repair-eye-examination.png'), '5aad3bacdf2ce8cdd3cf3d033cfa430020a96192a6a68f4647f504a990d2041d');
console.log('PASS: retinal feature identity, evidence qualifications, EN/FR/AR/ES parity, graphic values and accessibility, punctuation, unchanged approved hero');
