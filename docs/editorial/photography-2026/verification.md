# Photography feature: editorial and production verification

Reviewed 15 October 2026. Science article ID 265, `invention-photography-first-photo-digital-age`.

## Editorial review

- Original chronological feature, approximately 1,980 English words including headings and source labels. French, Spanish and Arabic preserve all 45 blocks and citation targets.
- The camera obscura forms an image; recording and fixing it are separate achievements. Niépce's 1816 temporary images are distinguished from the surviving heliograph.
- The surviving Le Gras image is dated 1826/1827, with the Harry Ransom Center's current 1827 cataloguing explicitly stated. Its current account describes several days of exposure; an exact eight-hour duration is not asserted.
- Daguerre's January 7, 1839 presentation and August 19 disclosure are separated. The unique metal daguerreotype is distinguished from Talbot's reproducible paper negative and 1841 calotype.
- Wet collodion (published 1851), Maddox's dry-plate work (1871), Kodak (1888), Brownie (1900), Autochrome (1907), and Kodachrome's initial movie-film introduction (1935) are sourced to museum, archive and manufacturer records.
- Sasson's 1975 experimental prototype is not conflated with the 1991 professional Kodak DCS. Computational burst photography is distinguished from generating an unrecorded scene.
- C2PA provenance is not described as proof of factual truth; absent credentials are not treated as proof of fabrication.
- No invented historical scene is presented as testimony. The user-supplied hero is explicitly identified in every language as an AI artistic reconstruction.
- Contextual internal link to the existing conspiracy-theory psychology feature. References are adjacent to relevant claims and included in Article schema.

## Historical images

Detailed source records, downloaded-file hashes, dimensions, author credits and license evidence are preserved in `image-rights.json`.

1. Daderot's photograph of Niépce's surviving plate: CC0. Its faint reflective appearance is preserved, not replaced with an enhanced invented view.
2. Liudmila & Nelson's photograph of a Susse Frères camera of 1839: copyright-holder public-domain dedication.
3. Alan Levine/cogdogblog's Brownie photograph: CC0 confirmed in the Commons file's Flickr review. Older EXIF mentions BY-SA, but the explicit reviewed file license is CC0. Caption identifies this as a later Brownie, not the 1888 Kodak or first Brownie.
4. Lange's Migrant Mother: US federal-government public-domain status and Library of Congress advisory of no known publication restrictions. Caption discloses the historical thumb removal and documented Commons scan cleanup, rotation and border cropping. No new retouching by PRESDA.
5. Morio's photograph of the 1991 Kodak DCS, taken in 2014: CC BY-SA 3.0. Visible attribution, source, license and processing notice; resized derivatives remain under the same license.

All five images are editorial historical illustrations, not endorsements. PRESDA processing consists only of proportional resizing and WebP conversion. The 400/800/1200/1600px variants preserve the downloaded source ratios. Every figure is directly after its corresponding H2, with localized alt text and captions, explicit dimensions, lazy loading and asynchronous decoding.

## Validation before deployment

- `prepare-translations.cjs`: 792 complete translations; paragraph and citation parity passed.
- `tsc --noEmit`: passed.
- `tools/test-photography.cjs`: four route responses, Article schema headline/date/language/citations, canonical URLs, hreflang, RTL, historical image and license presence, sitemap and Science listing passed.
- Chrome through the bundled Playwright runtime: EN/FR/AR/ES at 1440px and 390px. All 40 historical images decoded, preserved aspect ratios and followed their H2. All eight hero images decoded, desktop titles overlaid and mobile titles remained below images. No horizontal overflow or page exceptions.
- Local screenshots and browser measurements: ignored `test-results/photography/local/`. English and Arabic desktop heroes and a mobile historical image inspected visually.
- No em dashes or duplicate article ID/slug. Existing unrelated untracked files excluded.
- Existing hero/layout and licensed-image components reused. Only article-specific additions and generated registries change. No redundant local full-site build; the Git production pipeline performs the release build.

Production is checked separately after deployment using the same targeted route and browser checks.
