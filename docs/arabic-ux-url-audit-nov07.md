# Arabic UX and URL audit, 7 November 2026

## URL decision before implementation

The audit covers all 411 published Arabic article routes. There are 407 Latin slugs matching the English article under `/ar/`, and four original Arabic-script pilot slugs. All four exceed a 200-character encoded full-URL review threshold. This threshold is a readability heuristic, not a search-engine URL limit or evidence of an indexing defect.

All 411 live routes returned 200 directly, with matching self-canonicals, EN/FR/AR/ES alternates and sitemap entries. The registry has no duplicate paths, conflicting locale-to-English mappings or inconsistent Latin Arabic slugs.

Search Console property: `sc-domain:presda.com`. Search Analytics window: 7 July 2025 through 6 November 2026, web search, page dimension, URLs containing `/ar/articles/`. Returned 370 page rows, including the Latest listing. The 369 article rows total 29,174 impressions and 190 clicks; 81 articles had clicks. Latest adds 39 impressions and zero clicks. These are available Search Console rows, not a complete inventory of every indexed page, visit or backlink. Absence from this report does not prove absence of traffic or indexing.

Direct URL Inspection confirmed all four Arabic-script pilot URLs as submitted and indexed, with Google-selected canonicals matching the declared URLs:

| Article | Encoded URL characters | Clicks | Impressions | Decision |
| --- | ---: | ---: | ---: | --- |
| Al-Andalus | 230 | 2 | 216 | Preserve indexed URL |
| Maya civilization | 228 | 1 | 94 | Preserve indexed URL |
| Aztec empire | 313 | 0 | 10 | Preserve indexed URL |
| Morocco history | 283 | 3 | 369 | Preserve indexed URL |

The existing paths are recorded in `tools/test-arabic-url-policy.cjs`. Proposed Latin equivalents would be `/ar` plus the English source path, but no migration was justified by a functional routing defect. The safe action is preservation while these pages are indexed and receiving search exposure. No redirect is necessary when no URL changes.

**Result:** 411 audited, four non-Latin, four long encoded, zero migrated, zero redirects added, four problematic paths intentionally preserved. All 407 established Latin paths are also preserved. Internal links, self-canonicals, hreflang, schema URLs, sitemaps and English/French/Spanish URLs retain their existing mappings. No backlink export was required for a migration because no existing URL was migrated; backlink absence is not asserted.

The build now checks for duplicate localized paths, conflicting language identities, changes to the four protected routes and new Arabic routes that fail to reuse their English Latin slug. New translation records already enforce that Latin-slug convention.

## Arabic typography implementation

Cairo variable WOFF2 subsets are self-hosted under `public/fonts/cairo/`, with the SIL Open Font License and source URLs/checksums. Arabic and Latin subsets are preloaded only on Arabic documents. No visitor request to Google Fonts is needed. Existing EN/FR/ES font variables and computed typography remain unchanged.

Arabic rules use Cairo 900 for article heroes, 800 for H1/H2, 700 for cards/categories/navigation, 500/600 for excerpts/metadata/UI, and 400 for body text. Arabic tracking is zero. Heading, excerpt and badge line heights provide room for Arabic shaping and marks. The existing RTL direction, hero fitting, image geometry and red/white/gold styling remain in place.

## Verification artifacts

The workspace outputs include the full 411-route inventory, Search Console analytics and four URL inspections. Browser baselines and subsequent local/live checks are stored in `test-results/arabic-ux-nov07-*.json` and screenshots. The browser suite covers Home, Latest, all nine categories, Bruno, all four indexed pilot articles and the recent Green March/Catatumbo articles at desktop/mobile widths. It compares EN/FR/ES styles to the pre-change baseline, checks font delivery, RTL, horizontal overflow, hero text bounds, search/menu operation and observed layout shifts.

Production verification is complete only after the release is READY on presda.com and the live browser and URL checks pass. See the workspace publication proof for the actual deployment and final counts.

Pre-release results: the final production build generated 1,712 pages successfully. All 60 local browser cases passed: 36 Arabic cases across 18 pages and 24 EN/FR/ES baseline comparisons. Cairo 900 heroes and 600 metadata were checked explicitly. No layout shift was observed in the final local run; these laboratory checks are not a claim about field Core Web Vitals. The 1,644-edition social metadata/schema preservation suite, translation routing/library checks and shared hero contract also passed.
