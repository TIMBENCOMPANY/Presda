# Nature and travel publication review

Publication date: 29 October 2026. Research and seller-price snapshot: 28 October 2026.
Review: Codex source, terminology, localization and rendered-page review. This is not a claim of external expert approval or firsthand travel reporting.

## Scope

Three original articles, with complete independently written EN/FR/AR/ES editions:

- `/articles/rainbow-mountain-colors-peru-andes/`
- `/articles/frogs-freeze-come-back-to-life-science/`
- `/articles/chile-marble-caves-patagonia-blue-masterpiece/`

French, Arabic and Spanish routes use the existing `/fr`, `/ar` and `/es` prefixes. No existing article copy, metadata or image was replaced. Mbappe's existing article receives the shared full-composition hero frame change only.

## Evidence and editorial distinctions

Each English source paragraph contains its supporting link. Matching citations are retained in every localized paragraph and in structured data. The generated article records contain the full source ledger.

### Rainbow Mountain

MINCETUR's destination inventory identifies Vinicunca/Winikunka and the Cusipata sector at 5,036 metres. Columbia's 2019 Peru field guide describes an approximately 5,200-metre ridge. These are not presented as measurements of one identical point. The Columbia source is identified as a teaching guide rather than a definitive mineral survey. USGS explains sedimentary layering and iron-based coloration. Exact color-to-mineral recipes are not asserted.

The World Bank Cusco assessment supports regional seasonality, not a ridge weather forecast. CDC guidance supports gradual ascent, the limits of physical fitness as protection, symptoms and descent advice. No preventive drug regimen is prescribed. The June 2026 PCM statement concerns a temporary community tourism-income arrangement, not current opening status or a verified permanent entrance charge. No unverified local fee is published.

### Freeze-tolerant frogs

Colorado, Minnesota and Tennessee wildlife agencies support species identification, winter behavior and breeding. Peer-reviewed papers support extracellular ice, glucose and urea defenses, differences between Alaska and Ohio populations, repeated freeze-thaw cycles and seasonal differences. The 2014 field result is explicitly limited to 18 monitored frogs: all survived, with an average 193 consecutive frozen days and recorded minima from -8.9 to -18.1 degrees Celsius. It is not a universal temperature limit.

Freeze tolerance is survival, not biological death followed by resurrection. Not all frogs possess this adaptation. Results in frogs do not establish human cryonic revival or a validated clinical procedure. The article includes the role of litter, snow and habitat, using UAF and NPS reporting alongside the primary research.

### Marble Caves

Chile Travel and the national monuments authority establish the General Carrera freshwater-lake setting, Puerto Rio Tranquilo access, metamorphic marble, reflected color and the nature sanctuary's 1994 designation. Rock age is distinguished from cavity age; no precise unsupported formation date is assigned. The regional guide hosted by CIEP supports seasonal operation, peak January/February demand and water-safety guidance.

Tuki's advertised starting prices, CLP 25,000 for a launch tour and CLP 55,000 for kayaking, are dated seller snapshots checked on 28 October 2026. They are neither official entry tariffs nor guaranteed dated availability. Weather cancellation and final booking conditions must be confirmed with the operator.

## Images and rights metadata

The approved files are matched in `specs.json` and recorded by SHA-256 in `manifest.json`. All retain their original 1672 x 941 dimensions. Sharp converts to quality-90 WebP without cropping, resizing, stretching or replacing the composition. Existing deterministic responsive derivatives serve smaller screens.

The frog image is visibly identified in all four languages as an AI-generated editorial illustration, not a field photograph or a species-identification reference. It receives a PRESDA editorial credit. Neither travel image contains embedded photographer/licensing metadata; captions say supplied for PRESDA. No photographer, copyright holder, reusable license or acquisition terms are invented for those files.

Full WebP sizes are 237,980 bytes (Rainbow Mountain), 216,464 bytes (frog) and 331,744 bytes (Marble Caves), compared with 621,940, 2,381,192 and 654,821 bytes for the supplied originals.

## Hero root cause and correction

The shared desktop hero previously had a fixed height independent of the source aspect ratio. Cover crops an image when those ratios differ; Mbappe's existing contain mode instead left side bands inside that frame. Changing the image files cannot fix the mismatch.

The new opt-in `article-hero--natural-frame` uses the existing `heroImageFit: contain` field. It retains Bruno's desktop height budget, overlay, typography, colors and text-fit behavior, but derives the centered frame width from the image aspect ratio. This necessarily uses a narrower frame where a full-width fixed-height frame would crop. Mobile retains the existing Bruno treatment: full-proportion image followed by readable copy. Only the three new articles and Mbappe opt in. Bruno and other existing heroes retain their layout.

## Local validation

- Production Next build passed, including static generation of 1,464 routes. Existing ReaderPoll img lint warning remains unrelated.
- Translation preparation passed for 1,047 complete localized article records.
- Headline test passed for 1,396 published titles, including red/gold phrase preservation.
- Image policy passed for 410 published sources and 1,818 delivery files. No new image-optimizer endpoint was introduced.
- Multilingual routing/schema test passed.
- `tools/test-nature-oct28.cjs` passed 64 rendered combinations: four affected articles, four languages and widths 390, 768, 1366 and 1920.
- Checks cover one H1, expected H2/H3, title and metadata bounds, full image ratio, no horizontal overflow, Arabic RTL, captions, image decoding, source parity, internal links, localized metadata, reciprocal hreflang, self-canonicals, Article/NewsArticle fields, image URL and exact-article sitemap association.
- Screenshot review covered every new edition and Mbappe on desktop/mobile. Bruno's production and local dimensions, fonts and image positioning matched exactly at desktop/mobile sizes.

## SEO, GEO and AEO

Applied installed SEO, content, image and GEO guidance to the existing publisher workflow. No cached analysis existed at intake. Definitions and question-led sections answer intent directly, quantify research with context and distinguish evidence from travel recommendations. Source citations, author links, explicit dates and concise paragraphs support attribution and extraction without fabricated expertise.

Each hero is a real HTML img with localized alt, responsive source selection and a stable crawlable URL. Open Graph, Twitter, Article.image and WebPage.primaryImageOfPage use the same article-specific asset. The XML sitemap associates each image with each correct localized landing page. Existing robots rules and crawler access are unchanged. No FAQPage or HowTo schema was added. No claim is made that indexing, Discover placement, AI citations or field Core Web Vitals are guaranteed by these checks.

Production deployment and bounded live verification are recorded in the final delivery message and local test-results artifacts.
