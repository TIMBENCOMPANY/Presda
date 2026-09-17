import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync('src/lib/homeCuration.ts', 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText;
const context = { exports: {} };
vm.runInNewContext(compiled, context);
const { curateLatestStories, featuredHeroSlugs, evergreenStorySlugs } = context.exports;
// The catalogue is a static object array. No application runtime is needed.
const data = fs.readFileSync('src/data/articles.ts', 'utf8');
const articles = vm.runInNewContext(data.split('export const articles: Article[] = ')[1]
  .split('export const categories:')[0].trim().replace(/;$/, ''));
const bySlug = new Map(articles.map(a => [a.slug, a]));
assert.equal(featuredHeroSlugs.length, 12);
assert.equal(new Set(featuredHeroSlugs).size, 12);
for (const slug of [...featuredHeroSlugs, ...evergreenStorySlugs]) assert(bySlug.has(slug), `Missing curation target: ${slug}`);
const featured = featuredHeroSlugs.map(slug => bySlug.get(slug));
const featuredCounts = Object.fromEntries([...new Set(featured.map(a => a.category))]
  .map(category => [category, featured.filter(a => a.category === category).length]));
assert.equal(Object.keys(featuredCounts).length, 9);
assert(Math.max(...Object.values(featuredCounts)) <= 2);
const excluded = new Set([...featuredHeroSlugs, 'avicii-life-music-death-tim-bergling', 'galileo-and-the-church', 'anti-aging-can-we-slow-down-human-aging']);
const eligible = articles.filter(a => !excluded.has(a.slug)).sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
const recent = new Set(eligible.slice(0, 24).map(a => a.slug));
const evergreen = new Set(evergreenStorySlugs);
const snapshot = JSON.stringify(articles);
const editions = new Set();
const resurfaced = new Set();
for (let day = 0; day < 60; day++) {
  const date = new Date(Date.UTC(2026, 8, 17 + day));
  const result = curateLatestStories(articles, excluded, date);
  const slugs = result.map(a => a.slug);
  assert.equal(result.length, 12);
  assert.equal(new Set(slugs).size, 12);
  assert.equal(slugs[0], eligible[0].slug, 'Newest eligible article stays first');
  assert(slugs.every(slug => !excluded.has(slug)));
  assert.equal(JSON.stringify(slugs), JSON.stringify(curateLatestStories(articles, excluded, new Date(+date + 86_399_999)).map(a => a.slug)), 'Stable within a UTC day');
  assert(result.every((a, i) => !i || a.category !== result[i - 1].category), 'No adjacent category repeats');
  for (const category of new Set(result.map(a => a.category))) assert(result.filter(a => a.category === category).length <= 2, 'Category cap');
  assert(result.filter(a => recent.has(a.slug)).length >= 3, 'Recent stories remain represented');
  const older = result.filter(a => evergreen.has(a.slug) && !recent.has(a.slug));
  assert(older.length >= 3, 'Older evergreen stories return');
  older.forEach(a => resurfaced.add(a.slug));
  editions.add(JSON.stringify(slugs));
}
assert(editions.size > 50, 'Daily editions genuinely rotate');
assert(resurfaced.size >= 10, 'Rotation explores the archive');
assert.equal(JSON.stringify(articles), snapshot, 'Never mutate articles');
assert.equal(curateLatestStories([], new Set(), new Date()).length, 0);
assert.equal(curateLatestStories(articles, new Set(articles.map(a => a.slug)), new Date()).length, 0);
assert.equal(curateLatestStories(articles, new Set(), new Date(), 0).length, 0);
const small = [articles[0], articles[0], articles[1]];
assert.equal(curateLatestStories(small, new Set(), new Date()).length, 2, 'Small single-category catalogue terminates without duplicates');
console.log({ pass: true, featuredCategories: featuredCounts, dailyEditionsChecked: 60, distinctEditions: editions.size, olderEvergreenStoriesResurfaced: resurfaced.size });
console.log(curateLatestStories(articles, excluded, new Date()).map(a => `${a.category}: ${a.slug}`).join('\n'));
