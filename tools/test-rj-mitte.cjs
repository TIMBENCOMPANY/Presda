const assert = require('node:assert/strict');
require('./register-typescript.cjs');
const fs = require('node:fs');
const path = require('node:path');
const { rjMitteArticle: article } = require('../src/data/rjMitteArticle.ts');
const { validateArticleParity } = require('./translation-parity.cjs');

const slug = article.slug;
const locales = ['fr', 'es', 'ar'];
const translations = locales.map(locale => JSON.parse(fs.readFileSync(path.join(__dirname, `../src/data/localizations/articles/${slug}/${locale}.json`), 'utf8')));
assert.equal(article.status, 'published');
assert.equal(article.category, 'Paparazzi');
assert.equal(article.schemaType, 'NewsArticle');
assert.ok(article.content.join(' ').includes('cause of death has not been officially announced'));
assert.ok(article.content.join(' ').includes('autopsy is pending'));
assert.ok(article.references.some(item => item.name.startsWith('Associated Press')));
assert.ok(article.references.some(item => item.name.startsWith('Agence France-Presse')));
assert.ok(!/[\u2014]|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(article)), 'English editorial copy must not contain em dash');
for (const translation of translations) {
  validateArticleParity(translation, article);
  assert.equal(translation.status, 'published');
  assert.ok(translation.sources.some(source => source.url.includes('wikimedia.org/wiki/File:RJ_Mitte')));
  assert.ok(!/[\u2014]|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(translation)), `${translation.locale} editorial copy must not contain em dash`);
}
const photo = path.join(__dirname, '../public/articles/rj-mitte-gage-skidmore-2018.jpg');
assert.ok(fs.statSync(photo).size > 50_000, 'licensed photo source exists');

const base = (process.env.BASE_URL || 'http://localhost:3001').replace(/\/$/, '');
const routes = [`/articles/${slug}/`, ...locales.map(locale => `/${locale}/articles/${slug}/`)];
const read = async url => {
  const response = await fetch(url);
  assert.equal(response.status, 200, `${url} should render successfully`);
  return response.text();
};
(async () => {
  const pages = await Promise.all(routes.map(async route => [route, await read(`${base}${route}`)]));
  for (const [route, html] of pages) {
    const locale = route.startsWith('/fr/') ? 'fr' : route.startsWith('/es/') ? 'es' : route.startsWith('/ar/') ? 'ar' : 'en';
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`), `${route} language`);
    if (locale === 'ar') assert.match(html, /<html[^>]*dir="rtl"/, 'Arabic page direction');
    assert.ok(html.includes(`rel="canonical" href="https://presda.com${route}"`), `${route} self-canonical`);
    for (const lang of ['en', 'fr', 'es', 'ar']) assert.ok(html.includes(`hrefLang="${lang}"`), `${route} hreflang ${lang}`);
    assert.match(html, /<h1\b[^>]*>/, `${route} H1`);
    assert.ok(html.includes('/image-assets/'), `${route} optimized image source`);
    assert.ok(html.includes('rj-mitte-gage-skidmore-2018'), `${route} hero image`);
    assert.ok(html.includes('Gage Skidmore') || html.includes('غيج سكِدمور'), `${route} photo attribution`);
    assert.ok(html.includes('creativecommons.org/licenses/by-sa/2.0/'), `${route} photo license`);
    assert.ok(html.includes('application/ld+json'), `${route} structured data`);
    assert.ok(html.includes('autopsy') || html.includes('autopsie') || html.includes('autopsia') || html.includes('تشريح'), `${route} confirmed cause status`);
  }
  const [sitemap, newsSitemap, home, category] = await Promise.all([
    read(`${base}/sitemap.xml`), read(`${base}/news-sitemap.xml`), read(`${base}/`), read(`${base}/category/paparazzi/`)
  ]);
  assert.ok(sitemap.includes(`https://presda.com/articles/${slug}/`), 'English sitemap entry');
  for (const locale of locales) assert.ok(sitemap.includes(`https://presda.com/${locale}/articles/${slug}/`), `${locale} sitemap entry`);
  assert.ok(newsSitemap.includes(`https://presda.com/articles/${slug}/`), 'English news sitemap entry');
  const newsEntries = newsSitemap.split('</url>');
  for (const locale of locales) {
    const entry = newsEntries.find(item => item.includes(`https://presda.com/${locale}/articles/${slug}/`));
    assert.ok(entry?.includes(`<news:language>${locale}</news:language>`), `${locale} news sitemap entry`);
  }
  assert.ok(home.includes(`/articles/${slug}/`), 'Latest Articles homepage entry');
  assert.ok(category.includes(`/articles/${slug}/`), 'Paparazzi category entry');
  console.log('PASS: RJ Mitte article, translations, sources, licensed image, localized metadata, hreflang, canonicals, schema, sitemap and PAPARAZZI listings.');
})().catch(error => { console.error(error); process.exit(1); });
