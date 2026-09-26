# Second multilingual batch

Selection is recorded in `2026-09-26-second.json`: the next ten untranslated canonical English articles ranked by Google Search Console clicks, then impressions, for 26 August through 23 September 2026. This is an English-site priority signal, not a claim about localized keyword volumes. Private analytics remain outside the repository.

Each language received separate SEO/GEO terminology research, source comparison and editorial review. Review provenance identifies Codex; it does not claim independent human certification. The translations preserve the original reporting dates, historical qualifications, sources, imagery, article structure and shared design.

The batch contains 30 translations, 4,395 body blocks, 132 FAQs and 642 source-list entries. Original English records and the four translated pilots are protected by saved hashes. Existing English titles, descriptions and structured data are checked against their pre-publication live baseline.

## Review decisions

- Retain original financial snapshots, earnings periods, gross-versus-net distinctions and market-cap scale. French milliards, Spanish billones and Arabic تريليون are checked against the ten source table values.
- Preserve the NAZA article's dated perspective, non-revocation statement, attribution of allegations, official responses and distinction between proposals and enacted law.
- Preserve travel advisories, dated prices, currency units and the composite-image disclosure; historical and scientific uncertainty remains explicit.
- Keep established names, standalone years and original bibliographic names when legitimately identical across languages. `tools/reviewed-invariant-blocks.json` allows only individually reviewed article/locale/block/source-text combinations. Untranslated prose and unreviewed URL changes remain rejected.
- Review numerical audit flags manually: written-out numbers, Roman-numeral centuries, decimal conventions, 1.4 billion expressed as 1,400 million, abbreviated decades and expansion of the source date range 532-37 to 532-537 are equivalent values.
- Preserve occurrence-specific citation labels when the same URL appears with different descriptions. Three French Byzantium labels were corrected before publication.
- Improve idiomatic travel, chess, Arabic scientific/news phrasing and generic FAQ titles during the final rereads. No new factual claims or changes to English originals are introduced.

The shared Arabic reading-time grammar correction and first-batch review are documented in `2026-09-26-review.md`.

## Pre-deployment verification

- Production build, TypeScript, lint and all multilingual regression suites pass.
- 204 indexable article pages plus 324 missing-translation redirects pass 528 HTTP checks. All 72 localized articles pass metadata, canonical, hreflang, schema and indexability checks; the sitemap contains 226 unique URLs.
- Across both ten-article batches, all 7,722 translated body blocks and 261 FAQs appear in visible HTML. All 141 inline internal-language mappings and reciprocal sitemap alternates pass.
- All 1,360 unique internal links were checked, including 142 page destinations and 1,257 fragment targets.
- Eighty desktop/mobile views cover the ten English originals and all thirty new translations. French/Spanish component styles match English; the English desktop/mobile baselines are unchanged. No page overflow or clipped hero titles were found. Arabic has right-aligned headings and RTL content, including a horizontally scrollable financial table with readable original values.
- External-source verification found no HTTP 404/410 responses among the 214 unique new-batch source URLs. Some publishers block or rate-limit automated checks; those sources retain the original citations and are not claimed as fully verified.
