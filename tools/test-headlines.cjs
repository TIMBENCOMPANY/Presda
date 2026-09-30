const assert = require('node:assert/strict');
require('./register-typescript.cjs');
const { headlineParts } = require('../src/lib/headline.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { translationArticle } = require('../src/lib/i18n/article-presentation.ts');
const articles = getPublishedArticles();
const titles = [...articles, ...publishedTranslations.filter(r=>r.kind==='article').map(record=>translationArticle(record,articles.find(a=>record.englishPath===`/articles/${a.slug}/`)))];
for(const article of titles){
  const parts=headlineParts(article.title,article.headlineHighlights,article.headlineAccent);
  assert.equal(parts.map(p=>p.text).join(''),article.title,'Preserve wording, punctuation, spacing and Unicode');
  assert.equal(parts.filter(p=>p.tone==='red').length,1,article.title);
  assert.equal(parts.filter(p=>p.tone==='gold').length,1,article.title);
  assert(parts.every(p=>p.text.length>0));
}
const future=[
  'NEW DISCOVERIES: How Scientists Explore the Deep Ocean',
  'Nouvelles découvertes : explorer les océans du monde',
  'Nuevos descubrimientos: cómo explorar las profundidades del océano',
  'اكتشافات جديدة: كيف يستكشف العلماء أعماق المحيط',
  'Why People Study Ancient Civilizations',
  'A new world without annotations'
];
for(const title of future){
  const parts=headlineParts(title);
  assert.equal(parts.map(p=>p.text).join(''),title);
  assert(parts.some(p=>p.tone==='red')&&parts.some(p=>p.tone==='gold'));
  assert(parts.some(p=>!p.tone&&/[\p{L}]/u.test(p.text)),'Keep normal title words white');
}
const bounded=headlineParts('RAIL: How AI Changes Transport',{red:'AI',gold:['Transport','Changes Transport']});
assert.equal(bounded.find(p=>p.tone==='red').text,'AI','Do not match AI within RAIL');
assert.equal(bounded.find(p=>p.tone==='gold').text,'Changes Transport','Choose one complete phrase');
const unicode='ÉCOLOGIE: L’avenir des océans';
assert.equal(headlineParts(unicode,{red:'écologie',gold:'océans'}).map(p=>p.text).join(''),unicode);
assert(headlineParts('HISTORY: Kingdoms Across 3,000 Years').find(p=>p.tone==='gold').text.includes('3,000'), 'Never highlight only part of a formatted number');
assert.deepEqual(headlineParts(''),[{text:''}]);
assert.equal(headlineParts('Science').map(p=>p.text).join(''),'Science');
const invalid=headlineParts('FUTURE SCIENCE: New Knowledge for Everyone',{red:'missing',gold:'absent'});
assert(invalid.some(p=>p.tone==='red')&&invalid.some(p=>p.tone==='gold'));
console.log(`PASS: ${titles.length} published titles preserve text with one red and one gold accent; new EN/FR/ES/AR titles, word boundaries, editorial hints, overlap and short-title fallbacks`);
