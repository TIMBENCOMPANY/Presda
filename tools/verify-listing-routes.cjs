// Lightweight rendered-page verification. Pass a base URL to verify production.
require('./register-typescript.cjs');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { listingRoutes, listingEnglishPaths } = require('../src/lib/i18n/listing-routes.ts');
const { publishedTranslations, getLanguageAlternates } = require('../src/lib/i18n/registry.ts');
const { listingMetadata } = require('../src/lib/i18n/listing-metadata.ts');
const { getPublishedArticles } = require('../src/data/articles.ts');
const base = process.argv[2] || 'http://localhost:3100';
const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
const clean = s => decode(s.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
async function get(path) {
  const response = await fetch(`${base}${path}`, { redirect: 'manual', signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path} HTTP status`);
  return response.text();
}
(async () => {
  const sitemap = await get('/sitemap.xml');
  const records = new Map(publishedTranslations.map(r => [r.path, r]));
  const results = [];
  // Modest concurrency avoids unnecessary pressure on production.
  for (let i = 0; i < listingRoutes.length; i += 3) await Promise.all(listingRoutes.slice(i, i + 3).map(async route => {
    const html = await get(route.path);
    const root = attrs(html.match(/<html\b[^>]*>/)[0]);
    assert.equal(root.lang, route.locale);
    assert.equal(root.dir, route.locale === 'ar' ? 'rtl' : 'ltr');
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0]));
    const metadata = listingMetadata(route);
    assert.equal(links.find(l => l.rel === 'canonical')?.href, metadata.alternates.canonical);
    const alternates = Object.fromEntries(links.filter(l => l.hrefLang).map(l => [l.hrefLang, l.href]));
    // React serializes hrefLang as hrefLang; HTML parsers normalize this to hreflang.
    assert.deepEqual(alternates, getLanguageAlternates(route.path));
    const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attrs(m[0]));
    assert.equal(metas.find(m => m.name === 'description')?.content, metadata.description);
    assert.ok(clean(html.match(/<title>([\s\S]*?)<\/title>/)[1]).includes(metadata.title));
    assert.ok(!metas.some(m => m.name === 'robots' && m.content.includes('noindex')));
    assert.ok(sitemap.includes(`<loc>https://presda.com${route.path}</loc>`));
    const schema = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    assert.ok(schema.some(s => s['@type'] === 'CollectionPage' && s.inLanguage === route.locale && s.url === metadata.alternates.canonical));
    const breadcrumbs = schema.find(s => s['@type'] === 'BreadcrumbList');
    if (route.englishPath !== '/') assert.ok(breadcrumbs.itemListElement.every(item => item.item.startsWith(`https://presda.com/${route.locale}/`)));
    const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
    let cards = 0;
    for (const match of main.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
      const heading = match[2].match(/<h[123]\b[^>]*>([\s\S]*?)<\/h[123]>/);
      if (!heading) continue;
      const href = decodeURI(attrs(match[1]).href);
      const record = records.get(href);
      assert.ok(record && record.locale === route.locale, `Localized destination: ${route.path} ${href}`);
      assert.equal(clean(heading[1]), clean(record.title), `Localized card title: ${href}`);
      cards++;
    }
    assert.ok(cards > 0);
    if (route.englishPath === '/articles/') assert.equal(cards, getPublishedArticles().length);
    results.push({ path: route.path, status: 200, cards, lang: root.lang, dir: root.dir, metadata: true, sitemap: true, schema: true });
  }));
  for (const path of listingEnglishPaths) {
    const html = await get(path);
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attrs(m[0]));
    assert.deepEqual(Object.fromEntries(links.filter(l => l.hrefLang).map(l => [l.hrefLang, l.href])), getLanguageAlternates(path));
  }
  if (process.argv[3]) fs.writeFileSync(process.argv[3], JSON.stringify({ base, verifiedAt: new Date().toISOString(), results }, null, 2));
  console.log(`PASS: all ${results.length} localized listing URLs return 200, localized cards, language/direction, self-canonicals, metadata, reciprocal hreflang, schema and sitemap inclusion; 11 English alternates verified.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
