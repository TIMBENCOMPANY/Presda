const assert = require('node:assert/strict');
const { sourceBlocks, sourceFaqs } = require('./translation-library.cjs');
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
  const blocks = sourceBlocks(source);
  assert.equal(record.content.length, blocks.length, `${label}: paragraph/section parity`);
  blocks.forEach((block, index) => {
    const translated = record.content[index];
    assert.equal(translated.type, block.type, `${label} block ${index}: structure`);
    if (block.type === 'table') {
      assert.equal(translated.sourceMarker, block.sourceMarker, `${label}: source table identity`);
      assert.equal(translated.headings.length, block.headings.length, `${label}: table column parity`);
      assert.equal(translated.rows.length, block.rows.length, `${label}: table row parity`);
      assert.notEqual(translated.caption, block.caption, `${label}: localized table caption`);
      assert.notDeepEqual(translated.headings, block.headings, `${label}: localized table headings`);
      assert.notDeepEqual(translated.rows, block.rows, `${label}: localized table rows`);
      return;
    }
    assert.notEqual(translated.text, block.text, `${label} block ${index}: untranslated text`);
    assert.deepEqual(links(translated.text), links(block.text), `${label} block ${index}: citation and internal URL parity`);
  });
  const references = source.references ?? (source.source?.url ? [source.source] : []);
  assert.deepEqual(record.sources?.map(item => item.url) ?? [], references.map(item => item.url), `${label}: reference list`);
  assert.equal(record.faq?.length ?? 0, sourceFaqs(source).length, `${label}: FAQ parity`);
  assert.ok(!/\u2014|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(record)), `${label}: editorial punctuation`);
  const serialized = JSON.stringify(record);
  assert.ok(!/\bTODO\b/.test(serialized) && !/\b(?:PLACEHOLDER|LOREM IPSUM)\b/i.test(serialized), `${label}: unfinished text`);
}
module.exports = { validateArticleParity, links, blockType };
