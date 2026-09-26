const assert = require('node:assert/strict');
const { readRecords, sourceBlocks } = require('./translation-library.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const exceptions = require('./reviewed-invariant-blocks.json');
for (const entry of exceptions) {
  const source = getPublishedArticles().find(source => source.slug === entry.slug);
  const blocks = sourceBlocks(source);
  for (const locale of entry.locales) {
    const record = readRecords().additions.find(record => record.locale === locale && record.englishPath === `/articles/${entry.slug}/`);
    validateArticleParity(record, source);
    for (const [index, text] of Object.entries(entry.blocks)) {
      assert.equal(blocks[index].text, text, 'Reviewed exception still matches the exact source');
      const unchanged = structuredClone(record);
      unchanged.content[index].text = text;
      validateArticleParity(unchanged, source);
    }
    const untranslated = structuredClone(record);
    untranslated.content[0].text = blocks[0].text;
    assert.throws(() => validateArticleParity(untranslated, source), /untranslated text/, 'Ordinary English prose must still fail');
    const changedSource = structuredClone(source);
    const text = Object.values(entry.blocks)[0];
    changedSource.content = changedSource.content.map(block => block.replace(/^(?:#{2,3}|>)\s+/, '') === text ? block.replace(text, 'An untranslated new heading') : block);
    const changedRecord = structuredClone(record);
    changedRecord.content[Object.keys(entry.blocks)[0]].text = 'An untranslated new heading';
    assert.throws(() => validateArticleParity(changedRecord, changedSource), /untranslated text/, 'Source edits cannot silently inherit an old exception');
  }
}
console.log('PASS: exact reviewed proper-name headings accepted; untranslated prose and changed source headings rejected');
