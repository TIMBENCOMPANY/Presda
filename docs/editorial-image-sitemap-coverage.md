# Editorial image sitemap coverage, 2026-10-22

The shared article sitemap helper previously covered heroes and four specific
editorial-image collections only. The audit found 379 additional existing image
URLs in figures across 26 English articles and their FR/AR/ES editions. These
were visible in server-rendered HTML but absent from their image sitemap entries.

`src/data/articleEditorialSitemapImages.json` records only the actual figure
`img src` and `srcset` URLs. The helper merges these into each article's existing
sitemap entry. It does not assign article images to homepage/category entries,
change hero mappings, rename assets or create an additional sitemap.

The registry is intentionally limited to verified published figure images.
When adding or replacing editorial figures, update the relevant registry entry
or existing source-driven collection. After a production build, run:

- `node tools/test-editorial-sitemap.cjs`
- `node tools/test-editorial-sitemap-coverage.cjs`
- `node tools/test-image-attribution.cjs`

The coverage test checks every built article edition, catches missing figure
src/srcset associations and rejects registry images not rendered in figures in
all four editions. Existing source-driven Architecture, Paintings, Giraffe and
Panama collections remain unchanged. Animal Testing gains its existing mouse
and lung-on-a-chip image URLs in each of its four article entries.

No article copy, localized alt text, image binary, credits, creator, licenses,
JSON-LD, social metadata, canonical, hreflang, RTL or page UI is changed.
Unknown rights remain omitted; a creation credit is not a license. AI illustration
disclosures remain as published. Hashed responsive URLs are intentionally stable
and are not renamed for keywords.

Image sitemaps aid discovery but cannot guarantee indexing, rankings or Google's
choice of landing page for a reused image. Correct article associations are
technical signals, not a command that forces Google to stop showing a homepage.

References:
https://developers.google.com/search/docs/appearance/google-images
https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata
