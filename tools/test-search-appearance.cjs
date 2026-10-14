const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const sharp = require('sharp');
require('./register-typescript.cjs');
require.extensions['.css'] = m => { m.exports = {}; };
// The marker enforces Next's server boundary; these tests already run in Node.
const Module = require('node:module');
const originalLoad = Module._load;
Module._load = function(name, ...args) { return name === 'server-only' ? {} : originalLoad.call(this, name, ...args); };
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { translationMetadata } = require('../src/lib/i18n/metadata.ts');
const { generateMetadata } = require('../src/app/(english)/articles/[slug]/page.tsx');
const { listingMetadata } = require('../src/lib/i18n/listing-metadata.ts');
const { defaultOgImage, organizationJsonLd } = require('../src/lib/seo.ts');
const manifest = require('../src/app/manifest.ts').default;
const sitemap = require('../src/app/sitemap.ts').default;
const imageManifest = require('../src/lib/image-manifest.generated.json');

async function main() {
  const descriptions = new Set(); let pages = 0;
  const verify = metadata => {
    assert(metadata.description && !descriptions.has(metadata.description), 'Page descriptions are unique');
    descriptions.add(metadata.description); pages++;
    assert.equal(metadata.openGraph.description, metadata.description);
    assert.equal(metadata.twitter.description, metadata.description);
  };
  for (const article of getPublishedArticles()) verify(await generateMetadata({ params: Promise.resolve({ slug: article.slug }) }));
  for (const record of publishedTranslations.filter(r => r.kind === 'article')) verify(translationMetadata(record));
  for (const path of ['/', '/articles/']) {
    const english = require(path === '/' ? '../src/app/(english)/page.tsx' : '../src/app/(english)/articles/page.tsx').metadata;
    verify(english); assert.equal(english.openGraph.images[0].url, 'https://presda.com'+defaultOgImage);
    for (const locale of ['fr','ar','es']) {
      const metadata = listingMetadata({ locale, englishPath: path, path: `/${locale}${path}` });
      verify(metadata); assert.equal(metadata.openGraph.images[0].url, 'https://presda.com'+defaultOgImage);
    }
  }
  assert.equal(defaultOgImage, '/favicon-dark.png');
  assert.equal(organizationJsonLd().logo.url, 'https://presda.com'+defaultOgImage);
  assert.deepEqual(manifest().icons, [{ src: defaultOgImage, sizes: '1254x1254', type: 'image/png', purpose: 'any' }]);
  for (const [name,expected] of [['favicon.ico','59bb8088d6a7f57073b619bd2e2c75402c7920f258d22baf9edaf137b8631d4f'],['favicon-dark.png','3a06d06c2c4606970225938cb26be109f71ea4bc9af4f3e156ef2083e1d28ce7'],['favicon.png','3a06d06c2c4606970225938cb26be109f71ea4bc9af4f3e156ef2083e1d28ce7']]) {
    assert.equal(crypto.createHash('sha256').update(fs.readFileSync('public/'+name)).digest('hex'), expected, 'Preserve existing favicon bytes');
  }
  const geometry = await sharp('public'+defaultOgImage).metadata();
  assert.equal(geometry.width,1254); assert.equal(geometry.height,1254); assert.equal(geometry.hasAlpha,false);
  for (const [left,top] of [[0,0],[1253,0],[0,1253],[1253,1253]]) assert(Array.from(await sharp('public'+defaultOgImage).extract({left,top,width:1,height:1}).raw().toBuffer()).every(channel=>channel<=3), 'Existing opaque dark background');
  const config = (await import('../next.config.mjs')).default;
  const headers = await config.headers();
  const restricted = headers.filter(h=>h.headers.some(x=>x.key==='X-Robots-Tag'));
  assert.deepEqual(restricted.map(h=>h.source), ['/presda-p-transparent.png', ...imageManifest['/presda-p-transparent.png'].map(v=>v[1])]);
  const blocked = new Set(restricted.map(h=>'https://presda.com'+h.source));
  for (const entry of sitemap()) for (const image of entry.images ?? []) assert(!blocked.has(image), 'No article image is restricted');
  assert(!blocked.has('https://presda.com'+defaultOgImage));
  console.log(`PASS ${pages} unique localized descriptions; consistent social metadata; opaque logo; byte-identical favicons; only four UI-logo assets excluded from indexing`);
}
main().catch(e=>{console.error(e);process.exitCode=1;});
