const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const sharp = require('sharp');
require('./register-typescript.cjs');
const { getPublishedArticles } = require('../src/data/articles.ts');
const { publishedTranslations } = require('../src/lib/i18n/registry.ts');
const { articleSocialImage } = require('../src/lib/articleSocialImage.ts');
const articles = getPublishedArticles();
const translations = publishedTranslations.filter(record => record.kind === 'article');
const editions = [
  ...articles.map(a => ({ path: `/articles/${a.slug}/`, source: a.coverImage, alt: a.coverAlt,
    title: a.seoTitle ?? a.title, description: a.metaDescription ?? a.excerpt })),
  ...translations.map(r => ({ path: r.path, source: r.image.src, alt: r.image.alt,
    title: r.seoTitle, description: r.description }))
];
const decode = value => value?.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
  if (entity[0] === '#') return String.fromCodePoint(parseInt(entity.slice(entity[1].toLowerCase() === 'x' ? 2 : 1), entity[1].toLowerCase() === 'x' ? 16 : 10));
  return { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' }[entity];
});
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(m => [m[1], decode(m[2])]));
}
function metadata(html) {
  return [...html.matchAll(/<meta\b[^>]*>/gi)].map(m => attributes(m[0]));
}
function preserved(html) {
  return {
    title: decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]),
    description: metadata(html).find(m => m.name === 'description')?.content,
    alternates: [...html.matchAll(/<link\b[^>]*>/gi)].map(m => attributes(m[0]))
      .filter(m => m.rel === 'canonical' || m.hreflang),
    schema: [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1])),
    hero: [...html.matchAll(/<img\b[^>]*>/gi)].map(m => attributes(m[0])).find(m => m.class?.includes('article-hero-image'))
  };
}
function builtHtml(edition) {
  return fs.readFileSync(path.join('.next/server/app', decodeURIComponent(edition.path).replace(/^\//, '').replace(/\/$/, '.html')), 'utf8');
}
function check(html, edition) {
  const head = html.split('</head>')[0];
  const meta = metadata(head);
  const one = key => {
    const matches = meta.filter(m => (m.property || m.name) === key);
    assert.equal(matches.length, 1, `${edition.path}: exactly one server-rendered ${key} in head`);
    return matches[0].content;
  };
  const image = articleSocialImage(edition.source, edition.alt);
  assert.equal(one('og:type'), 'article');
  assert.equal(new URL(one('og:url')).href, new URL(`https://presda.com${edition.path}`).href);
  assert.equal(one('og:title'), edition.title);
  assert.equal(one('twitter:title'), edition.title);
  assert.equal(one('og:description'), edition.description);
  assert.equal(one('twitter:description'), edition.description);
  assert.equal(one('og:image'), image.url);
  assert.equal(one('og:image:secure_url'), image.url);
  assert.equal(one('og:image:width'), String(image.width));
  assert.equal(one('og:image:height'), String(image.height));
  assert.equal(one('og:image:type'), 'image/jpeg');
  assert.equal(one('og:image:alt'), edition.alt);
  assert.equal(one('twitter:card'), 'summary_large_image');
  assert.equal(one('twitter:image'), image.url);
  assert.equal(one('twitter:image:alt'), edition.alt);
  const presdaBrandArtwork = /\/(?:favicon(?:-dark|-light)?\.(?:png|ico)|logo(?:-dark|-light)?\.png|presda-p-transparent\.png)$/i;
  for (const key of ['og:image', 'twitter:image']) {
    assert(!presdaBrandArtwork.test(new URL(one(key)).pathname), 'Never use PRESDA brand artwork for an article');
  }
}
async function main() {
  fs.mkdirSync('test-results', { recursive: true });
  const baselinePath = 'test-results/social-preview-baseline.json';
  if (process.argv.includes('--baseline')) {
    const originals = Object.fromEntries([...new Set(editions.map(e => e.source))].map(source => [source, crypto.createHash('sha256').update(fs.readFileSync('public' + source)).digest('hex')]));
    fs.writeFileSync(baselinePath, JSON.stringify({ originals, pages: Object.fromEntries(editions.map(e => [e.path, preserved(builtHtml(e))])) }));
    console.log(`Captured SEO/schema/hero baseline for ${editions.length} article editions.`);
    return;
  }
  const baseline = fs.existsSync(baselinePath) ? JSON.parse(fs.readFileSync(baselinePath)) : undefined;
  const manifest = require('../src/lib/social-image-manifest.generated.json');
  if (!process.argv.includes('--http-only')) {
  for (const edition of editions) {
    const html = builtHtml(edition);
    check(html, edition);
    if (baseline?.pages[edition.path]) assert.deepEqual(preserved(html), baseline.pages[edition.path], `SEO/schema/reader hero unchanged: ${edition.path}`);
  }
  for (const source of new Set(editions.map(e => e.source))) {
    const asset = manifest[source];
    assert(asset, `Missing share derivative: ${source}`);
    const input = await sharp('public' + source).metadata();
    const bytes = fs.readFileSync('public' + asset.url);
    const output = await sharp(bytes).metadata();
    assert.equal(output.format, 'jpeg');
    assert.equal(output.width, asset.width); assert.equal(output.height, asset.height);
    const width = input.autoOrient?.width || input.width, height = input.autoOrient?.height || input.height;
    assert.equal(output.width, Math.min(1200, width));
    assert(Math.abs(output.height - output.width * height / width) <= 1, 'Preserve full hero composition');
    assert(bytes.length < 5 * 1024 * 1024, 'Share image below 5 MiB');
    await sharp(bytes).resize({ width: 1 }).raw().toBuffer();
    if (baseline?.originals[source]) assert.equal(crypto.createHash('sha256').update(fs.readFileSync('public' + source)).digest('hex'), baseline.originals[source]);
  }
  assert.throws(() => articleSocialImage('/missing-future-hero.png', 'Future image'), /Missing article share image/, 'Missing assets must fail a build instead of sharing the logo');
  console.log(`PASS: ${editions.length} server-rendered article editions, ${Object.keys(manifest).length} decoded JPEG heroes; no logo fallback${baseline ? '; SEO, schema and original artwork unchanged' : ''}.`);
  }
  if (!process.env.BASE_URL) return;
  const base = process.env.BASE_URL.replace(/\/$/, '');
  const sample = ['laika-first-dog-orbit-never-came-home', 'giordano-bruno-philosopher-heresy', 'catatumbo-lightning-lake-maracaibo-recurring-storms', 'milka-free-chocolate-campaign-2013-chain-of-tenderness', 'aye-aye-madagascar-primate-tap-foraging', 'eye-of-sahara-richat-structure-mauritania'];
  const agents = ['facebookexternalhit/1.1', 'meta-externalagent/1.1', 'Threads/1.0', 'Twitterbot/1.0', 'LinkedInBot/1.0', 'Mozilla/5.0'];
  const cases = editions.filter(e => sample.some(slug => e.path.endsWith(`/articles/${slug}/`))).flatMap(e => agents.map(agent => ({ edition: e, agent })));
  const responses = []; let cursor = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (cursor < cases.length) {
      const { edition, agent } = cases[cursor++];
      const response = await fetch(base + edition.path, { redirect: 'manual', headers: { 'user-agent': agent } });
      assert.equal(response.status, 200, `${edition.path} ${agent} must not redirect`);
      const html = await response.text(); check(html, edition);
      if (baseline?.pages[edition.path]) assert.deepEqual(preserved(html), baseline.pages[edition.path]);
      responses.push({ path: edition.path, agent, status: response.status, cache: response.headers.get('x-vercel-cache') });
    }
  }));
  const imageResponses = [];
  // Fetch every public share asset as a Meta crawler, not just the sample pages.
  const assets = Object.values(manifest); cursor = 0;
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (cursor < assets.length) {
      const asset = assets[cursor++];
      const response = await fetch(base + asset.url, { redirect: 'manual', headers: { 'user-agent': agents[0] } });
      assert.equal(response.status, 200, asset.url);
      assert.equal(response.headers.get('content-type')?.split(';')[0], 'image/jpeg');
      assert(!/noindex|noimageindex|none/i.test(response.headers.get('x-robots-tag') || ''));
      const bytes = Buffer.from(await response.arrayBuffer()), m = await sharp(bytes).metadata();
      assert.equal(m.width, asset.width); assert.equal(m.height, asset.height);
      assert(bytes.equals(fs.readFileSync('public' + asset.url)), 'Public bytes match the immutable build asset');
      imageResponses.push({ url: asset.url, status: response.status, width: m.width, height: m.height, bytes: bytes.length, cache: response.headers.get('cache-control') });
    }
  }));
  // Slash, www, HTTP and tracking links must converge on the same article, never home.
  const laika = '/articles/laika-first-dog-orbit-never-came-home/';
  const variants = [base + laika.slice(0, -1), base + laika + '?utm_source=threads'];
  if (base === 'https://presda.com') variants.push('https://www.presda.com' + laika, 'http://presda.com' + laika);
  const redirects = [];
  for (const url of variants) {
    const response = await fetch(url, { headers: { 'user-agent': agents[0] } });
    assert.equal(response.status, 200); assert.equal(new URL(response.url).pathname, laika);
    check(await response.text(), editions.find(e => e.path === laika));
    redirects.push({ input: url, final: response.url });
  }
  const stage = /localhost|127\.0\.0\.1/.test(base) ? 'local' : 'live';
  fs.writeFileSync(`test-results/social-previews-${stage}.json`, JSON.stringify({ editions: editions.length, responses, images: imageResponses, redirects }, null, 2));
  console.log(`PASS: ${responses.length} raw-HTML crawler requests, ${imageResponses.length} public JPEG assets, slash/tracking/host redirects (${stage}).`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
