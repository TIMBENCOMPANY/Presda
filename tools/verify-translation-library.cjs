require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations, getLanguageAlternates } = require('../src/lib/i18n/registry.ts');
const base = (process.env.BASE_URL || 'http://localhost:3100').replace(/\/$/, '');
const origin = 'https://presda.com';
const normalize = text => decodeURI(text).replace(/&amp;/g, '&');
const jobs = [];
let pages = 0, redirects = 0;
for (const article of getPublishedArticles()) {
  const english = `/articles/${article.slug}/`;
  for (const locale of ['en', 'ar', 'fr', 'es']) {
    const translation = publishedTranslations.find(record => record.englishPath === english && record.locale === locale);
    const path = locale === 'en' ? english : translation?.path ?? `/${locale}${english}`;
    jobs.push(async () => {
      const response = await fetch(base + encodeURI(path), { redirect: 'manual' });
      if (locale !== 'en' && !translation) {
        assert.equal(response.status, 307, path);
        assert.equal(new URL(response.headers.get('location'), base).pathname, english, path);
        assert.equal(response.headers.get('x-robots-tag'), 'noindex', path);
        redirects++;
        return;
      }
      assert.equal(response.status, 200, path);
      const html = await response.text();
      assert.equal(normalize(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? ''), origin + path, path);
      assert.ok(!response.headers.get('x-robots-tag')?.includes('noindex'), path);
      assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html), path);
      const languages = Object.fromEntries([...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map(match => [match[1], normalize(match[2])]));
      assert.deepEqual(languages, getLanguageAlternates(path), path);
      assert.ok(html.includes(`<html lang="${locale}" dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`), path);
      assert.ok(html.includes('article-hero-title text-white'), path);
      assert.ok(html.includes('language-trigger') && !html.includes('language-rail'), path);
      pages++;
    });
  }
}
async function main() {
  let index = 0;
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (index < jobs.length) await jobs[index++]();
  }));
  console.log(`PASS: ${pages} indexable article pages and ${redirects} missing-translation redirects across the entire library (${jobs.length} HTTP checks)`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
