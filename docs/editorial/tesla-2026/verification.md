# Nikola Tesla feature: editorial and production verification

Reviewed 15 October 2026. Science article ID 266, `nikola-tesla-genius-helped-electrify-world`.

## Editorial review

- Original chronological feature, approximately 2,185 English words including headings and citation labels. All four editions preserve 44 blocks, 11 section headings and 18 external source targets. French, Spanish and Arabic have localized source labels and a contextual link to the existing photography feature.
- Birthplace distinguishes the Austrian Empire from present-day Croatia and Serbian family identity. Graz attendance is not described as graduation; Prague lectures are not a completed degree.
- Edison bonus anecdotes are qualified as retrospective rather than a verified contract. No fabricated dialogue, quotations or retrospective diagnoses.
- Tesla's polyphase motor patents are distinguished from invention of electricity or AC itself. Ferraris and Dolivo-Dobrovolsky are acknowledged. Westinghouse manufacturing, other engineers and General Electric are not erased from Niagara's history.
- IEEE's Adams milestone establishes August 26, 1895 local supply; Buffalo transmission is separated as 1896. Chicago's 1893 exhibit is supported by Smithsonian archival records.
- Motor, coil, wireless control and turbine claims are linked to original patents. Radio's cumulative development is distinguished from the narrow 1943 Supreme Court patent ruling.
- Colorado Springs double exposure is disclosed in every body and caption. The opening explicitly refers to this archival photograph, not the AI hero.
- Wardenclyffe began in 1901 and its tower was demolished in 1917. A contradictory 1916 date in Commons descriptive text was not adopted; the site institution and IEEE support 1917. Financial failure is not treated as proof of suppressed limitless energy. Wireless transfer is distinguished from generation.
- The Smithsonian, IEEE, Tesla Museum, Tesla Memorial Center, Tesla Science Center and primary patents/court judgment informed review. Britannica was attempted but its page was inaccessible; no inaccessible passage was represented as reviewed evidence. Museum chronology errors outside the cited education material were not repeated.
- No fabricated patent total or exact financial figure. No em dashes. Hero clearly credited as an AI artistic reconstruction in all languages.

## Image evidence and reuse

`image-rights.json` preserves the six file records, source URLs, author credits, commercial-reuse licenses, metadata and original-file SHA-256 hashes.

1. Sarony portrait: public domain, photographer died 1896; caption uses archive range 1890-1896 rather than false precision.
2. Induction-motor model: Nikola Tesla Museum donation, CC BY-SA 4.0 with Wikimedia VRT confirmation. Caption explicitly identifies a museum-object photograph, not an 1888 photograph; photograph date is not established. Not an AI artifact substitute.
3. Niagara generator: HABS/National Park Service archival copy, public-domain record. Original photographer and date are unknown and disclosed; not misrepresented as opening-day coverage.
4. New York laboratory: Tesla Museum record dates image 1896; CC BY-SA 4.0. Tesla sits before the spiral secondary of a high-frequency transformer.
5. Colorado Springs: Wellcome M0014782, photographer Dickenson V. Alley, circa 1899; public-domain archive image. Double exposure and 1901 inscription context disclosed; no unsafe claim that Tesla sat amidst active discharges.
6. Wardenclyffe: unknown photographer, image record dated 1904, documented publication in Popular Electricity June 1911; public domain. Existing Commons border crop disclosed. Tower correctly located behind, not atop, the laboratory.

All six photographs were viewed before publication. No AI editing, reconstruction, recoloring or additional cropping of archival files. Proportional WebP resizing with no upscaling; responsive widths capped at actual original resolution. CC BY-SA 4.0 derivatives remain under that license with visible attribution, license link and processing notice. The supplied AI hero is separately labeled. Figures follow their relevant H2 directly; explicit dimensions, lazy loading and localized alt text/captions are provided.

## Validation before publication

- Translation generation: 795 complete translations; 44-block and citation parity passed.
- TypeScript `tsc --noEmit`: passed.
- `tools/test-tesla.cjs`: four language routes, Article schema headline/date/language/citations, self-canonicals, reciprocal hreflang presence, Arabic RTL, image/license presence, sitemap and Science category passed.
- Real Chrome through bundled Playwright: EN/FR/AR/ES at 1440 and 390 pixels. Eight hero images and 48 body-image instances decoded, with preserved aspect ratios, direct H2 placement, caption/source links, no horizontal overflow and no page exceptions. Desktop heading overlays and unchanged mobile heading placement passed; red/gold accents confirmed.
- English and Arabic desktop heroes and Arabic mobile Niagara figure inspected visually. Browser dismisses the consent panel after waiting for its delayed appearance for final screenshots.
- Duplicate ID/slug checks and editorial punctuation scan passed. Only article-specific files and required generated registries are included; unrelated untracked files remain excluded.

Local evidence is in ignored `test-results/tesla/local/`. Production receives the same targeted route and browser checks after the Git deployment pipeline finishes. No redundant full local build.
