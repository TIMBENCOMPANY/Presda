const assert = require('node:assert/strict');
require('./register-typescript.cjs');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const manifest = require('../src/lib/image-manifest.generated.json');
const brandImages = new Set(['/presda-p-transparent.png', ...(manifest['/presda-p-transparent.png'] ?? []).map(v=>v[1])]);
const base = process.env.BASE_URL || 'http://localhost:3100';
const baseline = process.env.IMAGE_BASELINE === '1';
const slugs = ['mike-tyson-netflix-documentary-release-date-2026', 'lionel-messi-last-dance-argentina-farewell', 'uzbekistan-wins-2026-chess-olympiad-samarkand', 'phoenicians-history-sailors-alphabet-tyrian-purple'];
const get = async path => { const r = await fetch(base + path, { redirect: 'manual' }); assert.equal(r.status, 200, path); return r.text(); };
const scripts = html => [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(m => {const j=JSON.parse(m[1]);return Array.isArray(j)?j:[j];});
async function main() {
  const sitemap = await get('/sitemap.xml');
  const robots = await get('/robots.txt');
  assert.match(robots, /Allow: \//); assert.ok(!/Disallow: \/(?:$|image-assets|articles)/m.test(robots));
  const results = [];
  for (const slug of slugs) {
    const en = `/articles/${slug}/`;
    const paths = [en, ...publishedTranslations.filter(r => r.englishPath === en).map(r => r.path)];
    for (const path of paths) {
      const html = await get(path);
      const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
      assert.equal(canonical, 'https://presda.com' + path);
      const hero = [...html.matchAll(/<img\b[^>]+>/g)].find(m => m[0].includes('article-hero-image'))?.[0];
      assert.ok(hero); const src = hero.match(/\bsrc="([^"]+)"/)?.[1];
      const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
      const tw = html.match(/<meta name="twitter:image" content="([^"]+)"/)?.[1];
      const article = scripts(html).find(s => ['Article', 'NewsArticle'].includes(s['@type']));
      assert.ok(article); assert.ok(!html.includes('noindex')); assert.ok(html.includes('max-image-preview:large'));
      for (const alternate of paths) assert.ok(html.includes(`href="https://presda.com${alternate}"`));
      const entry = sitemap.split('<url>').find(e => e.includes(`<loc>${canonical}</loc>`)); assert.ok(entry);
      const image = article.image;
      if (!baseline) {
        assert.equal(og, 'https://presda.com' + src); assert.equal(tw, og);
        assert.equal(image['@type'], 'ImageObject'); assert.equal(image.contentUrl, og); assert.equal(image.url, og);
        assert.equal(image.mainEntityOfPage, canonical); assert.equal(image.representativeOfPage, true);
        assert.equal(article.mainEntityOfPage['@id'], canonical);
        assert.equal(article.mainEntityOfPage.primaryImageOfPage['@id'], image['@id']);
        assert.ok(entry.includes(`<image:loc>${og}</image:loc>`));
      }
      for (const imageUrl of new Set([og, new URL(src, base).href])) {
        const ir = await fetch(imageUrl.replace('https://presda.com', base), {method:'HEAD'});
        assert.equal(ir.status, 200); assert.ok(ir.headers.get('content-type')?.startsWith('image/')); assert.ok(!ir.headers.get('x-robots-tag')?.includes('noindex'));
      }
      results.push({path, canonical, src, og, imageSchemaType: typeof image === 'string' ? 'URL' : image['@type'], imageSitemap:entry.includes('<image:image>')});
    }
  }
  for (const locale of ['en','fr','ar','es']) {
    const path = locale === 'en' ? '/' : `/${locale}/`;
    const html = await get(path);
    assert.ok(html.includes(`<link rel="canonical" href="https://presda.com${path}"`));
    assert.ok(!scripts(html).some(s=>['Article','NewsArticle'].includes(s['@type'])));
    assert.ok(!html.includes('/_next/image?'));
    const imageLinks = [...html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].filter(m=>m[2].includes('<img') && m[2].includes('/image-assets/'));
    assert.ok(imageLinks.length > 0);
    for (const m of imageLinks) {
      const src = m[2].match(/<img\b[^>]*\bsrc="([^"]+)"/)?.[1];
      if (!brandImages.has(src)) assert.ok(m[1].includes('/articles/'), `Home story images link to articles: ${m[1]} ${src}`);
    }
  }
  console.log(JSON.stringify(results, null, 2));
  console.log(`PASS: ${results.length} articles, four homepages, robots and sitemap${baseline ? ' (baseline)' : ''}`);
}
main().catch(e=>{console.error(e);process.exitCode=1;});
