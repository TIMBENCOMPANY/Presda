const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("./register-typescript.cjs");
const { aviationArticle: article } = require("../src/data/aviationArticle.ts");
const { validateArticleParity } = require("./translation-parity.cjs");

const locales = ["fr", "es", "ar"];
assert.equal(article.status, "published");
assert.equal(article.category, "Business");
assert.equal(article.schemaType, "Article");
assert.ok(article.content.join(" ").split(" ").length >= 2000 && article.content.join(" ").split(" ").length <= 2400, "English article length");
assert.ok(article.references.some(item => item.name.includes("NASA")), "official aerospace source");
assert.ok(!/[\u2014]|&mdash;|&#8212;|&#x2014;/i.test(JSON.stringify(article)), "English must not contain em dash");
for (const locale of locales) {
  const translation = JSON.parse(fs.readFileSync(path.join(__dirname, `../src/data/localizations/articles/${article.slug}/${locale}.json`), "utf8"));
  validateArticleParity(translation, article);
  assert.equal(translation.status, "published");
  assert.notEqual(translation.title, article.title);
}
const image = path.join(__dirname, "../public/articles/wright-brothers-aviation-reconstruction.png");
assert.ok(fs.statSync(image).size > 1_000_000, "approved original hero asset exists");

const base = (process.env.BASE_URL || "http://localhost:3001").replace(/\/$/, "");
const routes = [`/articles/${article.slug}/`, ...locales.map(locale => `/${locale}/articles/${article.slug}/`)];
const read = async route => {
  const response = await fetch(`${base}${route}`);
  assert.equal(response.status, 200, `${route} should render`);
  return response.text();
};
(async () => {
  const pages = await Promise.all(routes.map(async route => [route, await read(route)]));
  for (const [route, html] of pages) {
    const locale = route.startsWith("/fr/") ? "fr" : route.startsWith("/es/") ? "es" : route.startsWith("/ar/") ? "ar" : "en";
    assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`), `${route} language`);
    if (locale === "ar") assert.match(html, /<html[^>]*dir="rtl"/, "Arabic right-to-left direction");
    assert.ok(html.includes(`rel="canonical" href="https://presda.com${route}"`), `${route} self-canonical`);
    for (const language of ["en", "fr", "es", "ar"]) assert.ok(html.includes(`hrefLang="${language}"`), `${route} hreflang ${language}`);
    assert.match(html, /<h1\b/, `${route} H1`);
    assert.ok(html.includes("article-hero-image"), `${route} shared responsive hero`);
    assert.ok(html.includes("article-hero-title"), `${route} title over hero layout`);
    assert.ok(html.includes("/image-assets/"), `${route} optimized hero variant`);
    assert.ok(html.includes("wright-brothers-aviation-reconstruction"), `${route} hero image`);
    assert.ok(html.includes("application/ld+json"), `${route} structured data`);
    const prefix = locale === "en" ? "" : `/${locale}`;
    assert.ok(html.includes(`href="${prefix}/articles/bermuda-triangle-ships-planes-mystery-reality/"`), `${route} localized internal article link`);
    assert.ok(html.includes(`href="${prefix}/category/ai/"`), `${route} localized AI & Tech link`);
    assert.ok(html.includes('https://science.nasa.gov/photojournal/the-wright-brothers/'), `${route} primary research citation`);
  }
  const [sitemap, home, category] = await Promise.all([read("/sitemap.xml"), read("/"), read("/category/business/")]);
  assert.ok(sitemap.includes(`https://presda.com/articles/${article.slug}/`), "English sitemap URL");
  for (const locale of locales) assert.ok(sitemap.includes(`https://presda.com/${locale}/articles/${article.slug}/`), `${locale} sitemap URL`);
  assert.ok(home.includes(`/articles/${article.slug}/`), "Latest Articles homepage listing");
  assert.ok(category.includes(`/articles/${article.slug}/`), "Business category listing");
  console.log("PASS: aviation feature, 3 localized editions, image optimization, hreflang, canonicals, schema, sitemap and listings.");
})().catch(error => { console.error(error); process.exit(1); });
