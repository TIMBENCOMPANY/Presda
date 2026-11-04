# Pre-publication validation

- Optimized production build passed, including type checking and generation of all 1,652 pages. Existing ReaderPoll image lint advice and future Next.js image-quality notices remain unchanged.
- All 1,584 server-rendered article editions and 396 decoded JPEG social heroes passed the global social-preview regression. No valid-hero logo fallback; existing SEO, schema and original images preserved.
- Final batch browser run passed 112 combinations: 4 articles, 4 languages and 7 viewport sizes (320×844, 390×844, 768×1024, 844×390, 1024×768, 1366×768, 1920×1080).
- Confirmed localized titles and H2 headings, descriptions, canonicals, reciprocal hreflang, Article/ImageObject citations, alternative text, editorial disclosures, FAQs, internal links, localized category discovery, image sitemap mapping and crawl access.
- Native dimensions and source hashes match the approved JPEGs. Images have no transforms or horizontal zoom, both side edges remain visible, desktop follows the bounded Bruno contract and mobile uses the natural full image. Title, subtitle, date, category and reading time stay inside the frame; reading time is above the fold at standard desktop sizes and 390×844 mobile.
- Visual review covers all 16 editions through 8 contact sheets at desktop/mobile, with direct comparisons to Bruno. French samurai H1 spacing was corrected to prevent a colon starting a separate line, then rebuilt and checked again.
- The repeat browser run encountered a process crash while screenshots and four test workers ran together. The final suite uses two workers and passed the full matrix. The last interrupted screenshot was recaptured separately. No application workaround or additional image/CSS changes were introduced.
- Existing 392 articles' image-rights output, 1,164 generated translation records, 1,176 routing records and 453 dimensions are preserved against ad417aa0f6f7185d420720d235a59e0525a17c3a. Additions are exactly 12 translations, 12 routes and 4 dimensions.
- Headline colour/text, Arabic reading-time grammar, invariant blocks, translation completeness, multilingual routing, schema and publication rendering checks passed.

The suite is available through `npm run test:world-wildlife`, with a built local server on port 3055. Set BASE_URL to production to run all 16 public editions at desktop and mobile sizes (32 cases). Separate crawler checks verify raw metadata and all 12 original, SEO and social image URLs.
