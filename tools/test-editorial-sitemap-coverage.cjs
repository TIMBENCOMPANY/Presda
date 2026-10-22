const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
require('./register-typescript.cjs');
const { articleEditorialSitemapImages } = require('../src/lib/articleEditorialImages.ts');
const additional = require('../src/data/articleEditorialSitemapImages.json');
const sitemap = require('../src/app/sitemap.ts').default;
const entries = sitemap();
const built = path.resolve('.next/server/app');
let pages = 0, figures = 0;
for (const entry of entries.filter(e => /\/articles\/.+\/$/.test(e.url))) {
  const url = new URL(entry.url), file = path.join(built, decodeURIComponent(url.pathname).slice(1, -1) + '.html');
  assert(fs.existsSync(file), file);
  const html = fs.readFileSync(file, 'utf8');
  for (const figure of html.match(/<figure\b[^>]*>[\s\S]*?<\/figure>/g) ?? []) {
    for (const image of figure.match(/<img\b[^>]*>/g) ?? []) {
      figures++;
      const src = image.match(/\bsrc="([^"]+)"/)?.[1];
      const srcset = image.match(/\bsrcSet="([^"]+)"/i)?.[1] ?? '';
      const sources = [src, ...srcset.split(',').filter(Boolean).map(c=>c.trim().split(/\s+/)[0])];
      for (const source of sources) assert(entry.images.includes(new URL(source, 'https://presda.com').href), `${entry.url} missing ${source}`);
      assert(image.match(/\balt="([^"]+)"/)?.[1], `${entry.url} empty editorial alt`);
    }
  }
  pages++;
}
for (const [slug, sources] of Object.entries(additional)) {
  for (const locale of ['en','fr','ar','es']) {
    const prefix = locale === 'en' ? '' : '/'+locale;
    const html = fs.readFileSync(path.join(built, prefix.slice(1), 'articles', slug+'.html'), 'utf8');
    const figures = (html.match(/<figure\b[^>]*>[\s\S]*?<\/figure>/g) ?? []).join('');
    for (const source of sources) {
      assert(figures.includes(source), `${locale}/${slug}: stale or unrelated sitemap image ${source}`);
      assert(fs.existsSync('public'+source),source);
    }
  }
}
assert.deepEqual(articleEditorialSitemapImages('peter-margaret-dolphin-experiment'),[]);
console.log(`PASS ${pages} article editions, ${figures} editorial img occurrences: every figure src/srcset mapped to its own article, nonempty alt; additional registry images rendered in all four locales and exist on disk`);
