const assert = require('node:assert/strict');
const links = text => [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(match => match[1]);
const blockType = text => text.startsWith('### ') ? 'subheading' : text.startsWith('## ') ? 'heading' : text.startsWith('> ') ? 'quote' : 'paragraph';

function validateArticleParity(record, source) {
  const label = record.path;
  assert.equal(record.image.src, source.coverImage, `${label}: original image`);
  assert.notEqual(record.image.alt, source.coverAlt, `${label}: localized alt`);
  assert.equal(record.author, source.author, `${label}: author attribution`);
  assert.equal(record.category, source.category, `${label}: category`);
  assert.ok(record.excerpt?.trim(), `${label}: localized deck`);
  assert.equal(Boolean(record.quote), Boolean(source.quote), `${label}: quote presence`);
  assert.equal(record.content.length, source.content.length, `${label}: paragraph/section parity`);
  source.content.forEach((block, index) => {
    const translated = record.content[index];
    assert.equal(translated.type, blockType(block), `${label} block ${index}: structure`);
    assert.notEqual(translated.text, block.replace(/^#{2,3}\s+/, ''), `${label} block ${index}: untranslated text`);
    assert.deepEqual(links(translated.text), links(block), `${label} block ${index}: citation and internal URL parity`);
  });
  const references = source.references ?? (source.source?.url ? [source.source] : []);
  assert.deepEqual(record.sources?.map(item => item.url) ?? [], references.map(item => item.url), `${label}: reference list`);
  assert.equal(record.faq?.length ?? 0, source.faq?.length ?? 0, `${label}: FAQ parity`);
  assert.ok(!/\u2014|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(record)), `${label}: editorial punctuation`);
  const serialized = JSON.stringify(record);
  assert.ok(!/\bTODO\b/.test(serialized) && !/\b(?:PLACEHOLDER|LOREM IPSUM)\b/i.test(serialized), `${label}: unfinished text`);
}
module.exports = { validateArticleParity, links, blockType };
