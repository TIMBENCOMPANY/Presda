// Synthetic copy exists only in this test process. It is never saved or published.
const assert = require('node:assert/strict');
const Module = require('node:module');
const { createDraft, sourceBlocks, sourceFaqs, readRecords, locales } = require('./translation-library.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { validateTranslations } = require('../src/lib/i18n/validation.ts');
const { validateArticleParity } = require('./translation-parity.cjs');
const { getArticleSchemaType } = require('../src/lib/articleSeo.ts');
const articles = getPublishedArticles();
const original = JSON.stringify(articles);
const editorial = readRecords();
let drafts = 0;
const markers = new Set();
for (const source of articles) for (const locale of locales) {
  const draft = createDraft(source, locale);
  assert.equal(draft.status, 'draft');
  assert.equal(draft.path, `/${locale}/articles/${source.slug}/`);
  assert.equal(draft.title, '');
  assert.equal(draft.description, '');
  assert.equal(draft.image.alt, '');
  assert.equal(draft.content.length, sourceBlocks(source).length);
  assert.equal(draft.faq.length, sourceFaqs(source).length);
  for (const block of draft.content) {
    if (block.type === 'table') {
      markers.add(block.sourceMarker);
      assert.ok([...block.headings, ...block.rows.flat(), block.caption].every(value => value === ''));
    } else assert.equal(block.text, '');
  }
  validateTranslations([draft]);
  assert.throws(() => validateTranslations([{ ...draft, status: 'published' }]), /Incomplete/);
  drafts++;
}
assert.throws(() => createDraft(articles[0], '../en'), /Choose/);

function fixture(source, locale) {
  const prefix = { ar: 'اختبار', fr: 'Test', es: 'Prueba' }[locale];
  const localize = text => `${prefix}: ${text}`;
  return {
    ...createDraft(source, locale), status: 'published',
    review: { reviewer: 'Test process only', reviewedAt: '2026-09-26', terminologyChecked: true },
    title: localize(source.title), excerpt: localize(source.excerpt), seoTitle: localize(source.title),
    description: localize(source.excerpt), keywords: [prefix], searchIntent: prefix,
    headlineHighlights: { red: prefix }, readingTimeMinutes: 8,
    image: { src: source.coverImage, alt: localize(source.coverAlt) },
    ...(source.quote ? { quote: localize(source.quote) } : {}),
    content: sourceBlocks(source).map(block => block.type === 'table'
      ? { ...block, caption: localize(block.caption), headings: block.headings.map(localize), rows: block.rows.map(row => row.map(localize)) }
      : { ...block, text: localize(block.text) }),
    sources: (source.references ?? (source.source?.url ? [source.source] : [])).map(item => ({ label: localize(item.name), url: item.url })),
    faq: sourceFaqs(source).map(item => ({ question: localize(item.question), answer: localize(item.answer) }))
  };
}
const complex = articles.find(article => article.content.includes('[[RESISTANCE_COMPARISON_TABLE]]'));
const astrology = articles.find(article => article.content.includes('[[ASTROLOGY_SCIENCE_TABLE]]'));
const news = articles.find(article => getArticleSchemaType(article) === 'NewsArticle' && !editorial.records.some(record => record.englishPath === `/articles/${article.slug}/`));
const fixtures = [...locales.map(locale => fixture(complex, locale)), fixture(astrology, 'ar'), fixture(news, 'fr')];
validateTranslations(fixtures);
for (const record of fixtures) {
  const source = articles.find(article => record.englishPath === `/articles/${article.slug}/`);
  validateArticleParity(record, source);
  const tableIndex = record.content.findIndex(block => block.type === 'table');
  if (tableIndex !== -1) {
    const broken = structuredClone(record);
    broken.content[tableIndex].rows.pop();
    assert.throws(() => validateArticleParity(broken, source), /table row parity/);
  }
}
const routes = [...editorial.records.filter(record => record.status === 'published'), ...fixtures].map(({ locale, englishPath, path }) => ({ locale, englishPath, path }));
const load = Module._load;
Module._load = function(name, parent, isMain) {
  if (name === './localizations/articles.generated.json') return [...editorial.additions.filter(record => record.status === 'published'), ...fixtures];
  if (name === '@/data/translation-routes.json') return routes;
  if (name === 'next/navigation') return { usePathname: () => '/', useRouter: () => ({ push() {} }) };
  return load.call(this, name, parent, isMain);
};
delete require.cache[require.resolve('../src/data/translations.ts')];
delete require.cache[require.resolve('../src/lib/i18n/registry.ts')];
const { publishedTranslations, getLanguageAlternates, getTranslation, translationRoutes } = require('../src/lib/i18n/registry.ts');
const { languageDestination } = require('../src/lib/i18n/routing.ts');
const { translationMetadata, translationJsonLd, translationFaqJsonLd } = require('../src/lib/i18n/metadata.ts');
const { NextRequest } = require('next/server');
const { middleware } = require('../src/middleware.ts');
const sitemap = require('../src/app/sitemap.ts').default();
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { LocalizedPublication } = require('../src/components/LocalizedPublication.tsx');
let fallbacks = 0;
for (const source of articles) {
  const englishPath = `/articles/${source.slug}/`;
  const group = publishedTranslations.filter(record => record.englishPath === englishPath);
  const alternates = getLanguageAlternates(englishPath);
  assert.equal(alternates.en, `https://presda.com${englishPath}`);
  assert.equal(alternates['x-default'], alternates.en);
  for (const locale of locales) {
    const translated = group.find(record => record.locale === locale);
    for (const from of [englishPath, ...group.map(record => record.path)]) {
      assert.equal(languageDestination(from, locale, translationRoutes), translated?.path ?? englishPath);
      assert.deepEqual(getLanguageAlternates(from), alternates);
    }
    if (!translated) {
      const response = middleware(new NextRequest(`https://presda.com/${locale}${englishPath}`));
      assert.equal(response.status, 307);
      assert.equal(response.headers.get('location'), `https://presda.com${englishPath}`);
      assert.equal(response.headers.get('x-robots-tag'), 'noindex');
      assert.equal(alternates[locale], undefined);
      assert.ok(!sitemap.some(entry => entry.url === `https://presda.com/${locale}${englishPath}`));
      fallbacks++;
    }
  }
}
for (const record of fixtures) {
  assert.equal(getTranslation(record.path), record);
  const metadata = translationMetadata(record);
  assert.equal(metadata.alternates.canonical, `https://presda.com${record.path}`);
  assert.equal(metadata.openGraph.title, record.seoTitle);
  assert.equal(metadata.openGraph.images[0].alt, record.image.alt);
  assert.equal(metadata.robots.index, true);
  assert.ok(sitemap.some(entry => entry.url === metadata.alternates.canonical));
  const source = articles.find(article => record.englishPath === `/articles/${article.slug}/`);
  assert.equal(translationJsonLd(record)['@type'], getArticleSchemaType(source));
  assert.equal(translationFaqJsonLd(record)?.mainEntity.length ?? 0, record.faq.length);
  const html = renderToStaticMarkup(React.createElement(LocalizedPublication, { record }));
  assert.ok(html.includes('article-hero-title text-white'));
  assert.ok(html.includes('data-article-locale="' + record.locale + '"'));
  assert.ok(!html.includes('localized-publication'));
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  for (const block of record.content.filter(block => block.type === 'table')) assert.ok(html.includes(block.headings[0]));
  assert.ok(!html.includes('[[RESISTANCE_COMPARISON_TABLE]]'));
}
assert.equal(JSON.stringify(articles), original, 'All English data unchanged');
console.log(`PASS: ${articles.length} articles, ${drafts} blank drafts, ${markers.size} table formats, ${fallbacks} fallbacks, new article publication/partial languages/schema/RTL/shared-template integration`);
