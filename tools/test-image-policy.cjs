process.env.NODE_ENV = 'production';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const sharp = require('sharp');
require('./register-typescript.cjs');
const { imageSources } = require('./image-sources.cjs');
const { translationRoutes } = require('../src/lib/i18n/registry.ts');
const { listingRoutes } = require('../src/lib/i18n/listing-routes.ts');
const manifest = require('../src/lib/image-manifest.generated.json');
const dimensions = require('../src/lib/image-dimensions.generated.json');
const rules = require('../src/lib/image-rules.json');
const { getArticleCardImage, getArticleHeroImagePosition, getArticleDesktopHeroImagePosition, getArticleCardImagePosition, getArticleImageDimensions } = require('../src/lib/articleImages.ts');
const loader = require('../src/lib/staticImageLoader.ts').default;
const { getImgProps } = require('next/dist/shared/lib/get-img-props');
const { imageConfigDefault } = require('next/dist/shared/lib/image-config');

async function main() {
  const { default: config } = await import('../next.config.mjs');
  assert.equal(config.images.loader, 'custom');
  assert.equal(config.images.loaderFile, './src/lib/staticImageLoader.ts');
  const imgConf = { ...imageConfigDefault, ...config.images };
  assert.equal(rules.featured.aspectRatio, 16 / 9);
  assert.equal(rules.card.aspectRatio, 4 / 3);
  assert.equal(rules.featured.fit, 'cover');
  assert.equal(rules.article.natural, true);
  assert.equal(getArticleHeroImagePosition({ slug: 'regression' }), '50% 50%');
  assert.equal(getArticleHeroImagePosition({ slug: 'regression', homepageImagePosition: '70% 35%' }), '70% 35%');
  assert.equal(getArticleDesktopHeroImagePosition({ slug: 'regression' }), '50% 50%');
  assert.equal(getArticleDesktopHeroImagePosition({ slug: 'regression', homepageImagePosition: '70% 35%' }), '70% 35%', 'Desktop preserves the published focal position');
  assert.equal(getArticleCardImagePosition({ slug: 'regression', homepageImagePosition: '70% 35%' }), '70% 35%');
  for (const [src, width, height] of [['/articles/bradley-cooper-gigi-hadid-paris.png', 1536, 1024], ['/articles/panda-diplomacy-atlanta.png', 1448, 1086]]) {
    assert.deepEqual(getArticleImageDimensions(src), { width, height }, `Regression geometry: ${src}`);
    assert.equal(getArticleCardImage({ category: 'World', coverImage: src }), src, 'Preserve original regression artwork');
  }
  assert.equal(getArticleCardImage({ category: 'History', coverImage: '/images/articles/british-empire-history-rise-fall-global-legacy.webp' }), '/images/articles/british-empire-history-rise-fall-global-legacy.webp', 'Never double-crop legacy thumbnails');
  const css = fs.readFileSync(path.join(__dirname, '../src/app/globals.css'), 'utf8');
  assert(css.includes('.presda-featured-media { aspect-ratio: 16 / 9;'));
  assert(css.includes('.presda-card-media { aspect-ratio: 4 / 3;'));
  assert(css.includes('.article-hero .article-hero-image { position: static; width: 100%; height: auto;'));
  const checked = new Set();
  for (const [src] of imageSources()) {
    const original = path.join(__dirname, '../public', src);
    assert(fs.existsSync(original), `Missing original ${src}`);
    const source = await sharp(original).metadata();
    assert.deepEqual(getArticleImageDimensions(src), dimensions[src]);
    assert.equal(dimensions[src].width, source.autoOrient?.width || source.width);
    assert.equal(dimensions[src].height, source.autoOrient?.height || source.height);
    const variants = manifest[src];
    assert(variants?.length, `Missing responsive source ${src}`);
    assert(variants.length <= 6, `Unbounded variants for ${src}`);
    for (const [width, url] of variants) {
      assert(!url.includes('?') && !url.includes('/_next/image'), 'Static URLs only');
      assert(width <= (source.autoOrient?.width || source.width), 'Never upscale');
      if (!checked.has(url)) {
        const file = path.join(__dirname, '../public', url);
        const image = await sharp(file).metadata();
        assert.equal(image.width, width);
        assert.equal(image.format, 'webp');
        assert(Math.abs(image.height - width * source.height / source.width) <= 2, 'No cropping or changed composition');
        await sharp(file).resize({ width: 1 }).raw().toBuffer(); // Decode every delivered file.
        checked.add(url);
      }
    }
    for (const width of [112, 384, 640, 750, 1280, 2560, 3840]) {
      const shared = loader({ src, width, quality: 72 });
      for (const quality of [75, 76, 82, 90]) assert.equal(loader({ src, width, quality }), shared, 'Cards/heroes/locales reuse one variant');
    }
    const { props } = getImgProps({ src, alt: 'policy test', fill: true, sizes: '100vw', loader }, { defaultLoader: loader, imgConf });
    assert(props.srcSet && props.sizes === '100vw', 'Retain responsive srcset and sizes');
    assert(!props.srcSet.includes('/_next/image'), 'No Vercel transformations');
  }
  assert.equal(loader({ src: '/future-image.svg', width: 640 }), '/future-image.svg', 'Unknown future images fail open to the original');
  assert.deepEqual([...require('../src/data/translation-routes.json'), ...listingRoutes], translationRoutes);
  console.log(`PASS: ${imageSources().size} published sources; ${checked.size} delivery files decoded; responsive geometry, shared quality-independent URLs and zero optimizer URLs`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
