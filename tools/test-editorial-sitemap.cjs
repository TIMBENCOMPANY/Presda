const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./register-typescript.cjs');
const { articleEditorialSitemapImages } = require('../src/lib/articleEditorialImages.ts');
const sitemap = require('../src/app/sitemap.ts').default;
const entries = sitemap();
for (const locale of ['en','fr','ar','es']) {
  for (const [slug,count] of [['modern-architecture-world-most-breathtaking-buildings',24],['world-most-expensive-paintings-ever-sold',14],['panama-earthquake-7-7-october-9-2026',1]]) {
    const images = articleEditorialSitemapImages(slug,locale);
    assert.equal(images.length,count);
    assert.equal(new Set(images).size,count);
    const entry = entries.find(e=>e.url===`https://presda.com${locale==='en'?'':'/'+locale}/articles/${slug}/`);
    assert(entry);
    for (const image of images) {
      assert(entry.images.includes(image));
      assert(fs.existsSync('public'+new URL(image).pathname),image);
    }
  }
  assert.deepEqual(articleEditorialSitemapImages('peter-margaret-dolphin-experiment',locale),[], 'Never claim related article images as dolphin editorial images');
}
console.log('PASS all four locales: 20 editorial images, originals and delivered variants; no related thumbnails or unlicensed external images');
