require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const Module = require('node:module');
const load = Module._load;
Module._load = function(name, parent, isMain) {
  if (name === 'server-only') return {};
  return load.call(this, name, parent, isMain);
};
const { NextRequest } = require('next/server');
const { middleware } = require('../src/middleware.ts');
const { listingRoutes, listingEnglishPaths } = require('../src/lib/i18n/listing-routes.ts');
const { translationRoutes, publishedTranslations, getLanguageAlternates } = require('../src/lib/i18n/registry.ts');
const { middlewareTranslationRoutes } = require('../src/lib/i18n/route-index.ts');
const { languageDestination } = require('../src/lib/i18n/routing.ts');
const { listingMetadata, listingJsonLd } = require('../src/lib/i18n/listing-metadata.ts');
const { listingCard, listingSearchCard } = require('../src/lib/i18n/listing-cards.ts');
const { getPublishedArticles, categories } = require('../src/data/articles.ts');
const { toCategorySlug } = require('../src/lib/categories.ts');
const sitemap = require('../src/app/sitemap.ts').default();
assert.equal(listingRoutes.length, 33);
assert.deepEqual(listingEnglishPaths.filter(p => p.startsWith('/category/')).sort(), categories.map(c => `/category/${toCategorySlug(c)}/`).sort());
assert.deepEqual(middlewareTranslationRoutes, translationRoutes);
assert.equal(new Set(sitemap.map(entry => entry.url)).size, sitemap.length);
for (const route of listingRoutes) {
  const url = `https://presda.com${route.path}`;
  const response = middleware(new NextRequest(url));
  assert.equal(response.status, 200, route.path);
  assert.equal(response.headers.get('location'), null);
  const meta = listingMetadata(route);
  assert.equal(meta.alternates.canonical, url);
  assert.equal(meta.openGraph.url, url);
  assert.ok(meta.description.length > 40);
  assert.deepEqual(Object.keys(meta.alternates.languages).sort(), ['ar', 'en', 'es', 'fr', 'x-default']);
  assert.deepEqual(meta.alternates.languages, getLanguageAlternates(route.englishPath));
  assert.equal(listingJsonLd(route).inLanguage, route.locale);
  assert.equal(sitemap.filter(entry => entry.url === url).length, 1);
  for (const locale of ['en', 'fr', 'ar', 'es']) {
    assert.equal(languageDestination(route.path, locale, translationRoutes), locale === 'en' ? route.englishPath : `/${locale}${route.englishPath}`);
  }
}
// Validate card fields and mappings only. Existing article bodies are not reviewed or changed.
const articles = getPublishedArticles();
const snapshot = JSON.stringify(articles);
for (const article of articles) for (const locale of ['fr', 'ar', 'es']) {
  const record = publishedTranslations.find(r => r.locale === locale && r.englishPath === `/articles/${article.slug}/`);
  const card = listingCard(article, locale);
  assert.equal(card.href, record.path);
  assert.equal(card.title, record.title);
  assert.equal(card.excerpt, record.excerpt ?? record.description);
  assert.equal(card.coverAlt, record.image.alt);
  assert.equal(card.coverImage, article.coverImage);
  assert.equal(card.slug, article.slug);
  assert.ok(!('content' in card));
  assert.ok(!('content' in listingSearchCard(article, locale)));
}
assert.equal(JSON.stringify(articles), snapshot, 'English originals remain unchanged');
console.log(`PASS: 33 listing routes, reciprocal language mapping, metadata, schema, sitemap, and ${articles.length * 3} localized card mappings.`);
