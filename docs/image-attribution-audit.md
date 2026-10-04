# Google Images attribution audit

Date: 2026-10-05. Scope: article hero attribution, without editorial, URL, design or image-delivery changes.

## Evidence and limits

The live baseline for Tyson, Messi, Uzbekistan Chess and Phoenicians in EN/FR/AR/ES showed correct self-canonicals, reciprocal language links, indexable article pages and crawlable image files. None redirected to the homepage. All four homepages already linked story images to article routes and used brand social metadata.

The same hero appears on the homepage and article, so both are discoverable landing pages for it. Article JSON-LD and social metadata named original PNG/JPEG files while rendered heroes generally used existing static WebP derivatives. The sitemap contained no image-to-article associations. These are signal gaps, not proof of Google's exact ranking decision. Search Console URL Inspection failed with `invalid_grant`, preventing confirmation of Google's indexed state.

## Changes

- Shared helper resolves the existing delivered hero URL. The existing unoptimized Phoenicians exception is preserved.
- Article/NewsArticle image is now an ImageObject identified by the localized canonical plus `#primaryimage`, with contentUrl, localized description, representativeOfPage and a relationship to that page.
- The article's WebPage node explicitly references its primaryImageOfPage.
- Article OG/Twitter image URLs use that same delivered hero, preserving localized alt text.
- Existing sitemap article entries associate both the existing original file and delivered primary variant with the canonical article. Listing/home entries do not claim article images. Canonicals, hreflang and page URLs are unchanged.
- Regression tests cover every published English article and translation, plus an HTTP verifier for 16 example articles and four homepages.

No new image files, widths, qualities, transformations, licensing claims, redirects or crawler blocks are introduced. Static image delivery, cache policy, homepage rendering, content and design remain unchanged.

## Validation and deployment

Run the production build pipeline, `tools/test-image-attribution.cjs`, `tools/test-i18n.cjs`, `tools/test-news-discovery.cjs` and `tools/test-image-policy.cjs`. Run `tools/verify-image-attribution.cjs` against the local production server and again with `BASE_URL=https://presda.com` after deployment. Compare generated sitemap page URLs and hreflang against the live baseline and inspect desktop/mobile rendering.

Current content includes the three articles published independently during this audit, bringing coverage to 190 English articles and 570 translations. Those publications are retained.

## Search Console follow-up

Reconnect the expired Search Console integration. Resubmit `https://presda.com/sitemap.xml` and request indexing for the affected canonical article URLs. Google must recrawl and reprocess the signals; landing-page selection is automated and cannot be guaranteed or immediately forced.

## Official references

- https://developers.google.com/search/docs/appearance/google-images
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://schema.org/primaryImageOfPage
- https://schema.org/representativeOfPage
