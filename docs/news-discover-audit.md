# PRESDA Google News, Top Stories and Discover audit

Audited 2026-10-03 against production and origin/main 6bd3fab. Changes are local and have not been committed, pushed or deployed by this task. Google News and Top Stories consideration is automatic; technical compliance does not guarantee indexing, inclusion or ranking.

## Coverage and existing implementation retained

- 183 published English articles and 549 FR/AR/ES translations: 732 article URLs.
- 44 listing pages: Home, Latest Articles and nine categories in four languages.
- Existing regular sitemap: 788 unique URLs, including all article and listing URLs. No existing sitemap URLs removed.
- robots.txt allows all public paths through the wildcard user-agent group, including Googlebot, Googlebot-News and Googlebot-Image. No redundant agent-specific rules added. Sample live requests using Googlebot/Googlebot-News user-agent strings returned 200 without indexing restrictions. This is not proof of Google's own network access; URL Inspection is authoritative for that.
- Self-canonicals, reciprocal EN/FR/AR/ES and x-default hreflang, localized destinations, language attributes and Arabic RTL retained.
- HTTP, www, missing trailing slash and legacy author URLs already redirect to canonical destinations. Tracking query URLs retain a clean canonical.
- Article/NewsArticle headline, description, original hero image, original publication date, modification date, visible byline and linked author profiles already existed. Explicit Article versus NewsArticle selections were preserved. No publication dates were changed or inferred.
- Open Graph article type, image and publication/modification dates, Twitter large-image cards, source citations and server-rendered article text retained.
- All 183 article hero originals and the publisher logo respond as images on production. The logo is 1536 by 1024. All original assets and compositions retained.
- About, Contact, Authors, Editorial Policy and Corrections pages are reachable and linked from the footer. Existing author profile pages are reachable.
- Existing performance protections retained: statically generated article pages, priority hero images, reserved image geometry, responsive static WebP variants, immutable derivative caching and font-display swap. No new client JavaScript or visual components added.

## Changes

1. Enable max-image-preview:large in shared document/page metadata and localized article metadata. Localized robots overrides no longer omit this setting.
2. Correct both PRESDA Editorial and PRESDA Sport to Organization authors, consistently in English article markup, localized markup and author profile markup. Add the previously missing localized Sport author URL. Unknown future individual authors remain Person.
3. Add English article schema URL, stable article identifier and inLanguage=en. Preserve all existing fields.
4. Add Open Graph author profile URLs across languages, localized HTML author metadata and English Open Graph locale.
5. Describe the publisher as NewsMediaOrganization with the same existing organization identifier. Link the existing editorial and corrections policies. Align social identity links with the current footer, replacing the removed X link with Pinterest and Flipboard.
6. Add /news-sitemap.xml and advertise it in robots.txt. The route includes only published, explicitly classified NewsArticle records and their published translations within the 48-hour window. Both original and localized publication dates must qualify. Updates and newly translated old stories cannot reset the window. Date-only records expire conservatively 48 hours after UTC midnight; no timestamp is fabricated. The response is computed per request with no-store, so expiry does not require another deployment. Empty periods remain valid XML. Volumes above 1,000 entries automatically produce an index and paged News sitemaps.
7. Add targeted News/discovery regression tests and an HTTP verification script. Repair two existing stale test assumptions: listing routes were omitted from the image test route comparison, and the translation test required an untranslated news article even though coverage is now complete. No production translation logic changed.

At the verification time the News sitemap contains five recent stories across four languages, 20 URLs. The regular sitemap continues to contain older news and evergreen articles. News sitemap expiry does not remove any page or image.

## Validation

- Production Next.js build passed, including lint/type checking and 799 generated pages.
- All 732 built article routes return 200 with matching headline/image/dates, visible publication date, self-canonical, reciprocal hreflang, author schema, HTML language/direction and large-image preview permission.
- All 33 localized listing routes and 11 English listing routes passed rendered metadata, localized card destination and sitemap checks.
- News tests cover expiry at the exact 48-hour boundary, future/draft/evergreen exclusion, translation/update non-revival, XML escaping, empty sitemaps, pagination and the 1,000-entry limit. Generated News XML parsed successfully with Python's XML parser.
- Image tests passed for 253 published sources and 1,011 unique delivery files, including decoding, geometry, responsive selection, shared variants and absence of Vercel optimizer URLs.
- Multilingual routing, pilot integration, translation library, citation repair, invariant block and reading-time tests passed. Existing test-only Next/Image quality warnings come from the mock default image configuration; production configuration includes those qualities.
- git diff --check passed. No stylesheet, article record, translation, image, navigation layout or article template changes in this task.

## Remaining evidence limits

Five original hero images are narrower than Google's recommended 1,200 pixels. They are retained rather than artificially enlarged or replaced:

| Original | Dimensions |
| --- | --- |
| /images/articles/ottoman-empire-rise-and-fall.jpg | 1024 x 1536 |
| /images/articles/galileo-and-the-church.jpg | 1145 x 1374 |
| /images/articles/valuable-companies-2026.webp | 1024 x 1536 |
| /images/articles/world-cup-2026-brands-kits.png | 1086 x 1448 |
| /images/editorial/achraf-hakimi-trophies.jpg | 1080 x 1350 |

These affect five English articles and their translations, not basic crawl/index eligibility. Several existing images are portrait compositions; no automatic landscape cropping was introduced. Google recommends suitable landscape images, but the present scope preserves existing imagery.

Trust pages identify PRESDA and its editorial desks and provide contact/policy links. They do not clearly name the operating company or owners, and desk profiles are brief. Full publisher transparency cannot be certified from these pages. No identities, credentials or ownership claims were invented, and no trust-page copy was changed.

Historical date-only records lack precise publication times/timezones. Their recorded dates were preserved. The News sitemap accepts complete dates; precise timestamps are useful only when genuinely recorded.

Search Console connector returned invalid_grant. PageSpeed Insights API returned HTTP 429 quota exceeded. No field Core Web Vitals pass/fail, Google-selected canonical, crawl stats, policy/manual-action status or actual Google News/Discover inclusion can be confirmed from this audit. Local build sizes and image tests are not substitutes for field measurements.

No RSS feed was added: the existing regular sitemap plus rolling News sitemap meet the identified discovery need. No obsolete Publisher Center submission workflow, AMP conversion or special AI crawler file was introduced. Google AI features use the same crawlable, indexable content and accurate structured data foundations.

## Manual Search Console actions after deployment

1. In the presda.com property, submit news-sitemap.xml once. Keep sitemap.xml submitted; add it only if missing. An empty News sitemap is normal when no stories are recent.
2. Run URL Inspection live tests for one recent English story and its FR/AR/ES counterparts. Confirm crawl access, rendered metadata/images and Google-selected canonicals. Request indexing for representative updated URLs if needed.
3. Review Page indexing, Core Web Vitals, Security Issues and Manual Actions. Review News and Discover performance reports when available; absence of those reports alone does not prove ineligibility.

## Official sources

- [Google News and automatic Top Stories consideration](https://support.google.com/news/publisher-center/answer/9607025)
- [Google News policies and publisher transparency](https://support.google.com/news/publisher-center/answer/6204050)
- [News sitemap rules](https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap)
- [Discover image and eligibility guidance](https://developers.google.com/search/docs/appearance/google-discover)
- [Article and author structured data](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [Localized pages and hreflang](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Robots preview controls](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Google AI features and existing SEO foundations](https://developers.google.com/search/docs/appearance/ai-features)
