const assert = require('node:assert/strict');
require('./register-typescript.cjs');
const { categories, getPublishedArticles } = require('../src/data/articles.ts');
const { curateCategory } = require('../src/lib/categoryCuration.ts');

function verify(articles, category) {
  const { slides, sideStories, remaining } = curateCategory(articles, category);
  const available = [...new Map(articles.filter(a => a.category === category).map(a => [a.slug, a])).values()];
  const expectedSideCount = available.length >= 4 ? 2 : available.length >= 3 ? 1 : 0;
  assert.equal(sideStories.length, expectedSideCount);
  assert.equal(slides.length, Math.min(10, available.length - expectedSideCount));
  const selected = [...slides, ...sideStories, ...remaining];
  assert.equal(new Set(selected.map(a => a.slug)).size, selected.length, 'Do not duplicate carousel/supporting/grid stories');
  assert.deepEqual(selected.map(a => a.slug).sort(), available.map(a => a.slug).sort(), 'Keep every article reachable');
  assert.deepEqual(curateCategory(articles, category), { slides, sideStories, remaining }, 'Keep stable ordering');
}

const published = getPublishedArticles();
for (const category of categories) verify(published, category);
for (let count = 0; count <= 16; count++) {
  const articles = Array.from({ length: count }, (_, i) => ({ ...published[0], slug: `fixture-${i}`, category: 'History' }));
  verify([...articles, ...articles], 'History');
}
console.log(`PASS: all ${categories.length} categories and sizes 0–16 retain unique, reachable articles with up to 10 slides and supporting stories`);
