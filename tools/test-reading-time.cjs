require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const { localizedReadingTime } = require('../src/lib/i18n/article-presentation.ts');
const source = { readingTime: '18 min read' };
for (const [minutes,expected] of [[1,'دقيقة واحدة للقراءة'],[2,'دقيقتان للقراءة'],[3,'3 دقائق قراءة'],[10,'10 دقائق قراءة'],[11,'11 دقيقة قراءة'],[18,'18 دقيقة قراءة'],[100,'100 دقيقة قراءة'],[103,'103 دقائق قراءة']]) {
  assert.equal(localizedReadingTime(source,'ar',minutes),expected);
}
assert.equal(localizedReadingTime(source,'ar'),'18 دقيقة قراءة');
assert.equal(localizedReadingTime({},'ar'),'4 دقائق قراءة');
assert.equal(localizedReadingTime(source,'en'),'18 min read');
assert.equal(localizedReadingTime(source,'fr'),'18 min de lecture');
assert.equal(localizedReadingTime(source,'es'),'18 min de lectura');
console.log('PASS: Arabic reading-time number agreement, overrides and fallback; English/French/Spanish unchanged');
