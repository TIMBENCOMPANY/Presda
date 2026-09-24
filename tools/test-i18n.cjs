const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const originalResolve = Module._resolveFilename;
Module._resolveFilename = function(name, parent, ...rest) {
  return originalResolve.call(this, name.startsWith('@/') ? path.join(root, 'src', name.slice(2)) : name, parent, ...rest);
};
for (const extension of ['.ts', '.tsx']) {
  require.extensions[extension] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, target: ts.ScriptTarget.ES2020 }
  }).outputText, filename);
}
const { translations } = require('../src/data/translations.ts');
const publicationSnapshot = JSON.stringify(translations);
const { validateTranslations } = require('../src/lib/i18n/registry.ts');
const { languageAlternates, languageDestination, englishPathFor } = require('../src/lib/i18n/routing.ts');
const { translationMetadata, translationJsonLd } = require('../src/lib/i18n/metadata.ts');
const { isEnglishPage } = require('../src/lib/i18n/english.ts');
const { renderToStaticMarkup } = require('react-dom/server');
const React = require('react');
let testPath = '/';
const originalLoad = Module._load;
Module._load = function(name, parent, isMain) {
  if (name === 'next/navigation') return { usePathname: () => testPath, useRouter: () => ({ push() {} }) };
  if (name === 'next/font/google') return { Barlow_Condensed: () => ({ variable: '' }), Inter: () => ({ variable: '' }), Orbitron: () => ({ variable: '' }) };
  return originalLoad.call(this, name, parent, isMain);
};
require.extensions['.css'] = () => {};
const { PublicationDocument } = require('../src/components/PublicationDocument.tsx');
const { LocalizedPublication } = require('../src/components/LocalizedPublication.tsx');
const englishPath = '/articles/french-empire-napoleon-colonial-history-rise-fall/';
const routes = [
  { locale: 'ar', englishPath, path: '/ar/articles/تاريخ-فرنسا/' },
  { locale: 'fr', englishPath, path: '/fr/articles/histoire-france/' },
  { locale: 'es', englishPath, path: '/es/articles/historia-francia/' }
];
for (const current of [englishPath, ...routes.map(r => r.path)]) {
  assert.deepEqual(languageAlternates(current, routes), {
    en: `https://presda.com${englishPath}`, ar: `https://presda.com${routes[0].path}`,
    fr: `https://presda.com${routes[1].path}`, es: `https://presda.com${routes[2].path}`,
    'x-default': `https://presda.com${englishPath}`
  });
  for (const target of routes) assert.equal(languageDestination(current, target.locale, routes), target.path);
  assert.equal(languageDestination(current, 'en', routes), englishPath);
}
assert.equal(languageDestination(englishPath, 'ar', []), englishPath);
assert.equal(languageDestination(encodeURI(routes[0].path), 'fr', routes), routes[1].path);
assert.deepEqual(Object.keys(languageAlternates(englishPath, [])), ['en', 'x-default']);
assert.equal(englishPathFor(`/ar${englishPath}`, []), englishPath);
assert.equal(englishPathFor('/es/', []), '/');
assert.equal(isEnglishPage(englishPath), true);
assert.equal(isEnglishPage('/articles/not-an-article/'), false);
assert.equal(isEnglishPage('/category/history/'), true);
assert.equal(isEnglishPage('/category/unknown/'), false);
const record = {
  ...routes[0], kind: 'article', status: 'published',
  review: { reviewer: 'Test editor', reviewedAt: '2026-09-24', terminologyChecked: true },
  title: 'عنوان للاختبار', seoTitle: 'عنوان محلي للاختبار', description: 'وصف محلي للاختبار', keywords: ['تاريخ'], searchIntent: 'اختبار',
  content: [{ type: 'heading', text: 'عنوان فرعي' }, { type: 'paragraph', text: 'نص عربي للاختبار' }, { type: 'table', caption: 'جدول', headings: ['عمود'], rows: [['خلية']] }],
  category: 'History', author: 'محرر', publishedAt: '2026-09-24', updatedAt: '2026-09-24', image: { src: '/test.png', alt: 'صورة للاختبار' },
  sources: [{ label: 'مصدر', url: 'https://example.com/' }], faq: [{ question: 'سؤال؟', answer: 'جواب' }]
};
validateTranslations([record]);
validateTranslations([{ ...record, status: 'draft', content: [] }]);
for (const invalid of [
  { title: '' }, { seoTitle: '' }, { description: ' ' }, { content: [] }, { keywords: [] }, { searchIntent: '' },
  { review: { ...record.review, terminologyChecked: false } }, { image: { src: '/x.png', alt: '' } },
  { path: '/fr/articles/wrong-prefix/' }, { path: '/ar/../bad/' }, { path: '/ar/articles/test/?x=y' }, { englishPath: '/ar/articles/test/' },
  { content: [{ type: 'table', caption: 'table', headings: ['one', 'two'], rows: [['one']] }] }
]) assert.throws(() => validateTranslations([{ ...record, ...invalid }]));
assert.throws(() => validateTranslations([record, { ...record, path: '/ar/articles/duplicate/' }]));
for (const locale of ['ar', 'fr', 'es']) {
  const fixture = { ...record, locale, path: `/${locale}/articles/fixture/` };
  const meta = translationMetadata(fixture);
  assert.equal(meta.alternates.canonical, `https://presda.com${fixture.path}`);
  assert.equal(meta.description, fixture.description);
  assert.deepEqual(meta.keywords, fixture.keywords);
  const schema = translationJsonLd(fixture);
  assert.equal(schema.inLanguage, locale);
  assert.equal(schema.mainEntityOfPage, meta.alternates.canonical);
  const html = renderToStaticMarkup(React.createElement(LocalizedPublication, { record: fixture }));
  assert.ok(html.includes(fixture.title));
  assert.ok(html.includes('<h2'));
  assert.ok(html.includes('<table'));
  assert.ok(html.includes('scope="col"'));
  assert.ok(html.includes(fixture.sources[0].label));
  testPath = fixture.path;
  const document = renderToStaticMarkup(React.createElement(PublicationDocument, { locale }, React.createElement(LocalizedPublication, { record: fixture })));
  assert.ok(document.includes(`<html lang="${locale}" dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`));
  if (process.env.I18N_FIXTURE_DIRECTORY) {
    const output = path.resolve(process.env.I18N_FIXTURE_DIRECTORY);
    fs.mkdirSync(output, { recursive: true });
    const cssDir = path.join(root, '.next/static/css');
    const css = fs.readdirSync(cssDir).filter(file => file.endsWith('.css')).map(file => fs.readFileSync(path.join(cssDir,file),'utf8')).join('\n');
    fs.writeFileSync(path.join(output, `${locale}.html`), '<!doctype html>' + document.replace('<body>', `<head><meta name="viewport" content="width=device-width,initial-scale=1"><style>${css}</style></head><body>`));
  }
}
const { NextRequest } = require('next/server');
const { middleware } = require('../src/middleware.ts');
for (const locale of ['ar','fr','es']) {
  const response = middleware(new NextRequest(`https://presda.com/${locale}${englishPath}?q=test`));
  assert.equal(response.status, 307);
  assert.equal(response.headers.get('location'), `https://presda.com${englishPath}?q=test`);
  assert.equal(response.headers.get('x-robots-tag'), 'noindex');
}
assert.equal(JSON.stringify(translations), publicationSnapshot, 'Test fixtures must stay outside publication data');
async function testPublishedRoutes() {
  const registry = require('../src/lib/i18n/registry.ts');
  const previousRecords = [...registry.publishedTranslations];
  const previousRoutes = [...registry.translationRoutes];
  try {
    registry.publishedTranslations.splice(0, registry.publishedTranslations.length, ...routes.map(route => ({ ...record, ...route })));
    registry.translationRoutes.splice(0, registry.translationRoutes.length, ...routes);
    const page = require('../src/app/[locale]/[[...segments]]/page.tsx');
    assert.equal(page.generateStaticParams().length, 3);
    for (const route of routes) {
      const props = { params: Promise.resolve({ locale: route.locale, segments: route.path.split('/').filter(Boolean).slice(1) }) };
      const metadata = await page.generateMetadata(props);
      assert.equal(metadata.alternates.canonical, `https://presda.com${route.path}`);
      assert.deepEqual(metadata.alternates.languages, languageAlternates(route.path, routes));
      assert.equal((await page.default(props)).props.record.path, route.path);
      assert.equal(middleware(new NextRequest(`https://presda.com${route.path}`)).headers.get('x-middleware-next'), '1');
    }
  } finally {
    registry.publishedTranslations.splice(0, registry.publishedTranslations.length, ...previousRecords);
    registry.translationRoutes.splice(0, registry.translationRoutes.length, ...previousRoutes);
  }
  console.log('PASS: multilingual routing, reciprocal alternates, fallback, editorial gates, metadata, schema, HTML language/direction and published-page rendering');
}
testPublishedRoutes().catch(error => { console.error(error); process.exitCode = 1; });
