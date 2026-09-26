const assert = require('node:assert/strict');
const { readRecords } = require('./translation-library.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const repairs = require('./reviewed-citation-repairs.json');
const sources = getPublishedArticles();
let checked = 0;
for (const record of readRecords().additions.filter(record => record.status === 'published')) {
  const source = sources.find(source => record.englishPath === `/articles/${source.slug}/`);
  validateArticleParity(record, source);
  for (const repair of repairs.filter(repair => repair.slug === source.slug)) {
    const reference = record.sources.find(reference => reference.url === repair.replacement);
    assert.ok(reference, `${record.path}: reviewed replacement present`);
    const broken = structuredClone(record);
    broken.sources.find(reference => reference.url === repair.replacement).url = 'https://example.com/unrelated';
    assert.throws(() => validateArticleParity(broken, source), /reference list/);
    const original = structuredClone(record);
    original.sources.find(reference => reference.url === repair.replacement).url = repair.original;
    validateArticleParity(original, source);
    checked++;
  }
}
assert.equal(checked, repairs.length * 3);
console.log(`PASS: ${checked} localized citation repairs; original and reviewed URLs accepted, unrelated replacements rejected; published article parity`);
