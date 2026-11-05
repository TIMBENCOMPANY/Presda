# Pre-publication validation

- Optimized production build passed, including type checking and all 1,684 generated pages. Existing ReaderPoll image lint advice and future Next.js quality notices remain unchanged.
- Global social-preview regression passed for 1,616 server-rendered article editions and 404 decoded JPEG heroes. No valid-hero logo fallback; original artwork, existing SEO and schema preserved.
- Batch browser regression passed all 84 combinations: 3 articles, 4 languages and 7 viewport sizes (320×844, 390×844, 768×1024, 844×390, 1024×768, 1366×768, 1920×1080).
- Verified localized H1/H2 text, descriptions, canonicals, reciprocal hreflang, Article/ImageObject citations, alt text, image disclosures, all four FAQs per edition, internal links, category discovery, image-sitemap mappings and crawl access.
- Original JPEG dimensions, file sizes and SHA-256 hashes match the approved attachments. No image transforms or horizontal zoom; both side edges remain visible. Desktop follows the bounded Bruno contract and mobile uses the full natural image with the existing readable copy area. Title, subtitle, date, category and read time fit inside the hero. Read time is above the fold at standard desktop sizes and 390×844 mobile.
- Reviewed all twelve editions in six EN/FR/AR/ES desktop/mobile contact sheets, plus direct comparisons with Bruno. White/red/gold accents, text readability, native image proportions and Arabic RTL were confirmed. No new CSS or source-image changes were needed.
- Preservation checks retain 401 existing articles' image rights, 1,191 generated translation records, 1,203 routing records and 462 original-image dimensions against 72532e3efe1eb79b06cc6de99431a038b612ea23. Additions are exactly 9 translations, 9 routes and 3 dimensions.
- Headline text/colour, Arabic reading-time grammar, invariant blocks, full translation coverage, multilingual routing, schema and published-page rendering checks passed. New editorial text contains no literal or encoded em dashes.

Run `npm run test:mind-existence` with a built server on port 3057. Set BASE_URL to production for all 12 live editions at desktop/mobile sizes (24 cases). Separate raw-crawler verification checks localized social metadata and all 9 original, SEO and social image URLs. Deployment and live verification evidence is retained in the workspace outputs directory.
