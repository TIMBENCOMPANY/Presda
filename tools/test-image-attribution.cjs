const assert = require('node:assert/strict');
require('./register-typescript.cjs');
require.extensions['.css'] = m => { m.exports = {}; };
const { getPublishedArticles } = require('../src/data/articles.ts');
const { articleJsonLd } = require('../src/lib/articleSeo.ts');
const { articleImageUrl, articleSitemapImages } = require('../src/lib/articleImageSeo.ts');
const { getImageCreator } = require('../src/lib/imageCreators.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { translationJsonLd, translationMetadata } = require('../src/lib/i18n/metadata.ts');
const { generateMetadata } = require('../src/app/(english)/articles/[slug]/page.tsx');
const sitemap = require('../src/app/sitemap.ts').default;
const loader = require('../src/lib/staticImageLoader.ts').default;
const { getImgProps } = require('next/dist/shared/lib/get-img-props');
const { imageConfigDefault } = require('next/dist/shared/lib/image-config');

function verify(schema, metadata, source, alt, canonical, entries) {
  const image = schema.image;
  assert.equal(image['@type'], 'ImageObject');
  assert.equal(image['@id'], canonical+'#primaryimage');
  assert.equal(image.contentUrl, articleImageUrl(source));
  assert.equal(image.url, image.contentUrl);
  assert.equal(image.description, alt);
  assert.equal(image.mainEntityOfPage, canonical);
  assert.equal(image.representativeOfPage, true);
  assert.equal(schema.mainEntityOfPage['@id'], canonical);
  assert.equal(schema.mainEntityOfPage.primaryImageOfPage['@id'], image['@id']);
  assert.equal(metadata.alternates.canonical, canonical);
  assert.equal(metadata.openGraph.images[0].url, image.contentUrl);
  const twitterImage = metadata.twitter.images[0];
  assert.equal(typeof twitterImage === 'string' ? twitterImage : twitterImage.url, image.contentUrl);
  assert.deepEqual(entries.find(e=>e.url===canonical).images.slice(0, articleSitemapImages(source).length), articleSitemapImages(source));
  assert.ok(!image.contentUrl.includes('/_next/image'));
  assert.equal(image.license, ({ '/articles/rj-mitte-gage-skidmore-2018.jpg': 'https://creativecommons.org/licenses/by-sa/2.0/', '/images/editorial/yassine-bounou.jpg': 'https://www.gettyimages.com/eula?utm_medium=organic&utm_source=google&utm_campaign=iptcurl' })[source], 'Only verified existing photo licenses');
  assert.deepEqual(image.creator, getImageCreator(source), 'Only verified image authorship');
}
async function main() {
  const {default: config} = await import('../next.config.mjs');
  const articles = getPublishedArticles(), entries = sitemap();
  for (const article of articles) {
    const metadata = await generateMetadata({params:Promise.resolve({slug:article.slug})});
    verify(articleJsonLd(article), metadata, article.coverImage, article.coverAlt, `https://presda.com/articles/${article.slug}/`, entries);
    const {props} = getImgProps({src:article.coverImage,alt:article.coverAlt,fill:true,sizes:'(max-width: 1500px) 100vw, 1500px',unoptimized:article.slug==='phoenicians-history-sailors-alphabet-tyrian-purple',loader}, {defaultLoader:loader,imgConf:{...imageConfigDefault,...config.images}});
    assert.equal(articleImageUrl(article.coverImage), 'https://presda.com'+props.src, 'Metadata must match rendered hero fallback');
    for (const candidate of props.srcSet?.split(',') ?? []) assert.ok(articleSitemapImages(article.coverImage).includes('https://presda.com'+candidate.trim().split(' ')[0]), 'Every rendered hero variant is associated with its article');
  }
  for (const record of publishedTranslations.filter(r=>r.kind==='article')) verify(translationJsonLd(record),translationMetadata(record),record.image.src,record.image.alt,'https://presda.com'+record.path,entries);
  for (const entry of entries.filter(e=>!e.url.includes('/articles/') || /\/articles\/$/.test(e.url))) assert.equal(entry.images,undefined,'No article-image sitemap attribution to listings');
  assert.equal(articleImageUrl('/future-image.webp'), 'https://presda.com/future-image.webp');
  console.log(`PASS: ${articles.length} EN articles and ${publishedTranslations.filter(r=>r.kind==='article').length} translations; hero/schema/social/sitemap identity, per-language page association, existing delivery exception and no new transformations`);
}
main().catch(e=>{console.error(e);process.exitCode=1;});
