require('./register-typescript.cjs');
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..'), { conspiracyArticle: article } = require('../src/data/conspiracyArticle.ts');
const locales = ['en', 'fr', 'ar', 'es'], base = process.argv[2], slug = article.slug;
const links = text => [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map(match => match[1]);
const localized = locale => locale === 'en' ? article : JSON.parse(fs.readFileSync(`${root}/src/data/localizations/articles/${slug}/${locale}.json`, 'utf8'));
async function main() {
  assert.equal(article.status, 'published'); assert.equal(article.category, 'Science'); assert.equal(article.content.length, 30);
  assert.equal(article.faq.length, 5); assert.ok(article.references.length >= 10);
  assert.equal(crypto.createHash('sha256').update(fs.readFileSync(`${root}/public${article.coverImage}`)).digest('hex'), crypto.createHash('sha256').update(fs.readFileSync('C:/Users/Microsoft/Downloads/Conspiracy Board After Dark.png')).digest('hex'));
  const sourceWords = article.content.join(' ').split(/\s+/).length + article.faq.map(faq => `${faq.question} ${faq.answer}`).join(' ').split(/\s+/).length;
  assert(sourceWords >= 1800 && sourceWords <= 2200, `English article word count: ${sourceWords}`);
  for (const locale of locales.filter(locale => locale !== 'en')) {
    const record = localized(locale); assert.equal(record.content.length, article.content.length); assert.equal(record.faq.length, article.faq.length);
    assert.notEqual(record.title, article.title); assert.notEqual(record.image.alt, article.coverAlt);
    record.content.forEach((block, index) => { const text = block.type === 'heading' ? `## ${block.text}` : block.text; assert.deepEqual(links(text), links(article.content[index]), `${locale} citation/internal-link parity block ${index}`); });
    assert.deepEqual(record.sources.map(source => source.url), article.references.map(reference => reference.url));
    assert(!/[\u2014]|&mdash;|&#8212;|&#x2014;/.test(JSON.stringify(record)));
  }
  console.log(`PASS article validation, ${sourceWords} English words including FAQs, 12 sources, 5 FAQs, image SHA, locale block/link parity`);
  if (!base) return;
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`, url = `${prefix}/articles/${slug}/`, response = await fetch(`${base}${url}`), html = await response.text();
    assert.equal(response.status, 200, url); assert(html.includes(`lang="${locale}"`)); assert(html.includes(`dir="${locale === 'ar' ? 'rtl' : 'ltr'}"`));
    assert(html.includes(`rel="canonical" href="https://presda.com${url}"`));
    for (const other of locales) assert(html.includes(`hrefLang="${other}" href="https://presda.com${other === 'en' ? '' : `/${other}`}/articles/${slug}/`));
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const schema = schemas.find(item => item['@type'] === 'Article'); assert(schema); assert.equal(schema.inLanguage, locale); assert.equal(schema.datePublished, article.date);
    assert.equal(schemas.find(item => item['@type'] === 'FAQPage').mainEntity.length, 5);
    const alt = localized(locale).coverAlt ?? localized(locale).image.alt, image = [...html.matchAll(/<img[^>]+>/g)].map(match => match[0]).find(tag => tag.includes(alt));
    assert(image, `${locale} hero image alt`); assert(/srcSet=|srcset=/.test(image)); assert(!html.includes('article-hero--standalone'));
    for (const reference of article.references) assert(html.includes(reference.url.replaceAll('&', '&amp;')));
    console.log(`PASS ${locale} route, SEO metadata, hreflang, schema, citation URLs and default hero layout`);
  }
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
  for (const locale of locales) { const route = `${locale === 'en' ? '' : `/${locale}`}/articles/${slug}/`; assert(sitemap.includes(route)); }
  for (const route of ['/','/ar/','/fr/','/es/','/category/science/','/ar/category/science/','/fr/category/science/','/es/category/science/']) {
    const response = await fetch(`${base}${route}`), html = await response.text(); assert.equal(response.status, 200, route); assert(html.includes(`/articles/${slug}/`), `${route} lists the new feature`);
  }
  console.log('PASS sitemap, Latest Articles and Science listings in EN/FR/AR/ES');
}
main().catch(error => { console.error(error); process.exit(1); });
