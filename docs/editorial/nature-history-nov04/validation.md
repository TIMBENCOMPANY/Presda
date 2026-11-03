# Pre-release validation

- Optimized Next.js production build passed, including type checking and generation of 1,636 pages. Existing ReaderPoll image lint advice and future Next.js image-quality configuration notices are unchanged.
- Social-preview regression passed for all 1,568 server-rendered article editions and 392 decoded JPEG share images. No valid-hero logo fallback; existing SEO/schema and original images preserved.
- New batch browser regression passed 140 combinations: 5 articles, 4 languages and 7 viewport sizes (320×844, 390×844, 768×1024, 844×390, 1024×768, 1366×768, 1920×1080).
- Confirmed localized H1/H2, descriptions, canonical, reciprocal hreflang, schema citations, ImageObject article mapping, image alt text, disclosure, FAQs, working internal links, article/category discovery, sitemap image mapping and crawl access.
- Verified native source aspect ratios and bytes, no image transforms, both horizontal edges visible, shared Bruno desktop height limits, full natural mobile image and Arabic RTL. Date, category, title, subtitle and reading-time bounds passed. Reading time is above the fold at standard desktop and 390×844 mobile viewports.
- Visually reviewed all 20 editions using 10 EN/FR/AR/ES contact sheets at desktop and mobile, plus 2 direct comparisons of Bruno with all 5 English heroes. No CSS changes or source-image edits were needed.
- Source URL check returned 200 for all 14 final source pages. A transient Bat Conservation International request failure passed on retry. DENSO soft-404 URL was replaced before build.
- Baseline comparison against f562f87 preserved the existing 387 articles' image-rights output, 1,149 generated translation records, 1,161 routing records and 448 image-dimension entries. Exactly 15 translations, 15 routing entries and 5 original-image dimension entries added.
- Headline color/text regression, Arabic reading-time grammar, invariant blocks, multilingual routing and pilot coverage, and reviewed-citation parity passed. The legacy i18n fixture now uses a real registered image so the current mandatory social-image lookup can run.

The full batch suite can be rerun with `npm run test:nature-history` against the local production server on port 3054, or with BASE_URL pointing at production. Production uses the same suite at desktop and mobile sizes, plus independent raw Meta-crawler and public-image checks.
