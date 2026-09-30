const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
require('./register-typescript.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { getArticleCardImage } = require('../src/lib/articleImages.ts');
const { publishedTranslations, translationRoutes } = require('../src/lib/i18n/registry.ts');
const { hasLocalMatch } = require('next/dist/shared/lib/match-local-pattern');
const { getImgProps } = require('next/dist/shared/lib/get-img-props');
const { imageConfigDefault } = require('next/dist/shared/lib/image-config');
const loader = require('next/dist/shared/lib/image-loader').default;

async function main() {
  const { default: config } = await import('../next.config.mjs');
  const imageConf = { ...imageConfigDefault, ...config.images };
  for (const width of [...imageConfigDefault.deviceSizes, ...imageConfigDefault.imageSizes]) {
    assert([...imageConf.deviceSizes, ...imageConf.imageSizes].includes(width), `Keep cached image URL width ${width}`);
  }
  const sources = new Set(['/presda-p-transparent.png', '/images/about/presda-newsroom-night.png']);
  for (const article of getPublishedArticles()) {
    sources.add(article.coverImage);
    sources.add(getArticleCardImage(article));
  }
  for (const record of publishedTranslations) if (record.image) sources.add(record.image.src);
  for (const src of sources) {
    assert(hasLocalMatch(imageConf.localPatterns, src), `Optimizer must allow ${src}`);
    assert(fs.existsSync(path.join(__dirname, '../public', src)), `Missing published image: ${src}`);
    for (const quality of [72, 75, 76, 82]) {
      const { props } = getImgProps({ src, alt: 'policy test', fill: true, sizes: '100vw', quality }, { defaultLoader: loader, imgConf: imageConf });
      assert(props.src.includes(`q=${quality}`), `Do not downgrade quality ${quality}`);
      assert(props.srcSet.includes('3840w'), 'Retain high-density hero resolution');
    }
  }
  assert(!hasLocalMatch(imageConf.localPatterns, '/articles/example.png?cacheBust=123'));
  assert(!hasLocalMatch(imageConf.localPatterns, '/api/newsletter/subscribe'));
  assert.deepEqual(require('../src/data/translation-routes.json'), translationRoutes, 'Shared client routing must exactly match the published registry');
  console.log(`PASS: ${sources.size} published image sources, all existing qualities, retina sizes, local allowlist and shared translation routes`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
