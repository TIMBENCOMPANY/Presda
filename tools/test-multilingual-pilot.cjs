require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const load = Module._load;
let pathname = '/';
Module._load = function(name, parent, isMain) {
  if (name === 'next/navigation') return { usePathname: () => pathname, useRouter: () => ({ push() {} }) };
  if (name === 'next/font/google') return { Barlow_Condensed: () => ({ variable: '' }), Inter: () => ({ variable: '' }), Orbitron: () => ({ variable: '' }) };
  return load.call(this, name, parent, isMain);
};
require.extensions['.css'] = () => {};
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { NextRequest } = require('next/server');
const { middleware } = require('../src/middleware.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');

const { publishedTranslations, translationRoutes, getLanguageAlternates, getTranslation } = require('../src/lib/i18n/registry.ts');
const { middlewareTranslationRoutes } = require('../src/lib/i18n/route-index.ts');
const { languageDestination } = require('../src/lib/i18n/routing.ts');
const { translationMetadata, translationJsonLd, translationFaqJsonLd } = require('../src/lib/i18n/metadata.ts');
const { PublicationDocument } = require('../src/components/PublicationDocument.tsx');
const { LocalizedPublication } = require('../src/components/LocalizedPublication.tsx');
const { LocalizedInlineText } = require('../src/components/LocalizedInlineText.tsx');
const { validateArticleParity, links } = require('./translation-parity.cjs');
const sitemap = require('../src/app/sitemap.ts').default;
const pilot = [
  'al-andalus-rise-glory-fall-muslim-iberia',
  'maya-civilization-history-cities-calendar-astronomy',
  'aztec-empire-tenochtitlan-mexica-rise-fall',
  'morocco-history-dynasties-kingdom-independence'
].map(slug => `/articles/${slug}/`);
const pilotRecords = publishedTranslations.filter(record => pilot.includes(record.englishPath));
assert.equal(pilotRecords.length, 12, 'All twelve pilot records remain published');
assert.deepEqual(middlewareTranslationRoutes, translationRoutes, 'Middleware index matches published content');
assert.deepEqual([...new Set(pilotRecords.map(item => item.englishPath))].sort(), pilot.sort());
const english = getPublishedArticles();
const sitemapEntries = sitemap();
assert.equal(new Set(sitemapEntries.map(entry => entry.url)).size, sitemapEntries.length, 'No duplicate sitemap URLs');
for (const locale of ['ar', 'fr', 'es']) assert.equal(pilotRecords.filter(r => r.locale === locale).length, 4);
for (const record of pilotRecords) {
  pathname = record.path;
  const source = english.find(article => record.englishPath === `/articles/${article.slug}/`);
  validateArticleParity(record, source);
  assert.ok(fs.existsSync(path.join(__dirname, '../public', record.image.src)), 'Original image exists');
  assert.throws(() => validateArticleParity({ ...record, content: record.content.slice(1) }, source), /parity/);
  assert.throws(() => validateArticleParity({ ...record, image: { ...record.image, src: '/wrong.png' } }, source), /original image/);
  const alternatePaths = [record.englishPath, ...translationRoutes.filter(item => item.englishPath === record.englishPath).map(item => item.path)];
  for (const from of alternatePaths) {
    assert.deepEqual(getLanguageAlternates(from), getLanguageAlternates(record.path), 'Reciprocal full hreflang set');
    for (const locale of ['en', 'ar', 'fr', 'es']) {
      assert.equal(languageDestination(from, locale, translationRoutes), locale === 'en' ? record.englishPath : translationRoutes.find(item => item.locale === locale && item.englishPath === record.englishPath).path);
    }
  }
  assert.deepEqual(Object.keys(getLanguageAlternates(record.path)).sort(), ['ar', 'en', 'es', 'fr', 'x-default']);
  assert.equal(getLanguageAlternates(record.path)['x-default'], `https://presda.com${record.englishPath}`);
  assert.equal(getTranslation(encodeURI(record.path)), record, 'Arabic percent-encoded routes resolve');
  const meta = translationMetadata(record);
  assert.equal(meta.alternates.canonical, `https://presda.com${record.path}`);
  assert.equal(meta.robots.index, true);
  assert.ok(sitemapEntries.some(entry => entry.url === meta.alternates.canonical));
  assert.equal(meta.description, record.description);
  assert.equal(meta.openGraph.images[0].alt, record.image.alt);
  const articleSchema = translationJsonLd(record);
  assert.equal(articleSchema['@type'], 'Article');
  assert.equal(articleSchema.inLanguage, record.locale);
  assert.equal(articleSchema.translationOfWork.url, `https://presda.com${record.englishPath}`);
  const faqSchema = translationFaqJsonLd(record);
  assert.equal(faqSchema?.mainEntity.length ?? 0, record.faq?.length ?? 0);
  for (const [index, faq] of (record.faq ?? []).entries()) {
    assert.equal(faqSchema.mainEntity[index].name, faq.question);
    assert.equal(faqSchema.mainEntity[index].acceptedAnswer.text, faq.answer);
  }
  const html = renderToStaticMarkup(React.createElement(PublicationDocument, { locale: record.locale }, React.createElement(LocalizedPublication, { record })));
  assert.ok(html.includes(`<html lang="${record.locale}" dir="${record.locale === 'ar' ? 'rtl' : 'ltr'}"`));
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  const hero = html.match(/<header class="relative isolate[\s\S]*?<\/header>/)?.[0];
  assert.ok(hero?.includes('<h1 class="article-hero-title text-white">'), 'Localized title lives inside the shared English hero');
  assert.ok(hero.includes('article-hero-image object-cover'), 'Shared full-bleed hero image');
  assert.ok(hero.includes('headline-accent-red') && hero.includes('headline-accent-gold'), 'Both PRESDA headline accents');
  assert.ok(html.includes('data-article-progress-root'), 'Shared reading progress root');
  assert.ok(html.includes('flow-root min-w-0 space-y-7'), 'Shared article body panel');
  assert.ok(html.includes('<aside'), 'Shared source and contents sidebar');
  assert.ok(html.includes('grid gap-4 md:grid-cols-2 xl:grid-cols-3'), 'Shared related cards');
  assert.ok(!html.includes('localized-publication'), 'No separate localized article layout');
  assert.ok(html.includes('section-'), 'Localized table of contents and heading anchors');
  assert.ok(!/\*\*|\]\(https?:/.test(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')), 'Editorial markdown is rendered');
  for (const block of record.content) {
    if (!block.text) continue;
    for (const href of links(block.text).filter(link => link.startsWith('/'))) {
      const destination = languageDestination(href, record.locale, translationRoutes);
      const renderedHrefs = [...html.matchAll(/href="([^"]+)"/g)].map(match => decodeURI(match[1]).replace(/\/$/, ''));
      assert.ok(renderedHrefs.includes(destination.replace(/\/$/, '')), 'Same-language internal links resolve');
    }
  }
  const response = middleware(new NextRequest(`https://presda.com${encodeURI(record.path)}`));
  assert.equal(response.headers.get('x-middleware-next'), '1');
  assert.equal(response.headers.get('x-robots-tag'), null);
}
const missingArticle = english.find(article => !translationRoutes.some(route => route.englishPath === `/articles/${article.slug}/`));
if (missingArticle) {
const unlocalized = `/articles/${missingArticle.slug}/`;
assert.deepEqual(Object.keys(getLanguageAlternates(unlocalized)), ['en', 'x-default']);
for (const locale of ['ar', 'fr', 'es']) {
  assert.equal(languageDestination(unlocalized, locale, translationRoutes), unlocalized);
  const response = middleware(new NextRequest(`https://presda.com/${locale}${unlocalized}`));
  assert.equal(response.status, 307);
  assert.equal(response.headers.get('x-robots-tag'), 'noindex');
}
}
const hostile = renderToStaticMarkup(React.createElement(LocalizedInlineText, { locale: 'fr', text: '<script>alert(1)</script> [unsafe](javascript:alert) **important**' }));
assert.ok(!hostile.includes('<script>'));
assert.ok(!hostile.includes('href="javascript:'));
assert.ok(hostile.includes('<strong>important</strong>'));
console.log('PASS: 12 complete pilot translations, source parity, all 64 language transitions, reciprocal hreflang, schemas, SSR/RTL, localized links, safe rendering and unique sitemap URLs');
