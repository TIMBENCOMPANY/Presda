# Verified image rights metadata, 21 October 2026

Scope: existing ImageObject nodes only. No new schema nodes, images, captions,
credits, alt text, article copy, URLs or licensing pages are created.

## Evidence and additions

- All exact paths credited to PRESDA in `imageCreators.ts` receive `creditText:
  "PRESDA"`. Their evidence is itemized in `image-creator-metadata.md`. This
  includes the existing official brand mark and nine credited AI illustrations.
- Three newer heroes also receive this published credit: `/articles/bilingual-brains-hero.png`,
  `/articles/electric-cars-2026-hero.png`, `/articles/psg-qsi-hero.png`. Their
  `*HeroCaptions.json` files and article `coverAlt` explicitly credit PRESDA.
  The existing creator nodes remain unchanged.
- Seven further published `coverAlt` fields explicitly credit the original
  illustration or reconstruction to PRESDA: Roman Empire, Natural Disasters,
  Highest Paid Athletes 2026, History and Future of Medicine, Denisovans, Peter
  and Margaret Dolphin, and Apple Future Products. Their exact original asset
  keys are listed in `imageRights.ts`. Only the published name credit is copied;
  no creator, copyright-holder or license is inferred. Merely appearing on a
  PRESDA poster or being described as supplied "for PRESDA" is insufficient.
- `/articles/rj-mitte-gage-skidmore-2018.jpg` receives `creditText:
  "Gage Skidmore / Wikimedia Commons"`, matching the existing ArticleLayout
  caption. Its existing visible CC BY-SA 2.0 link is copied to `license`.
  `acquireLicensePage` points to the actual source's Licensing section:
  https://commons.wikimedia.org/wiki/File:RJ_Mitte_at_San_Diego_Con.jpg#Licensing
  The Commons record was checked on 21 October 2026 and confirms author Gage
  Skidmore, CC BY-SA 2.0, attribution and ShareAlike conditions. It also identifies
  the original Flickr source and the confirmed Flickr license review.
- The twenty natural-phenomena editorial images already provide all four
  requested fields from their source records. They are preserved unchanged.
- The original `/images/editorial/yassine-bounou.jpg` is the only one of 301
  audited hero files with embedded rights metadata. Its IPTC and XMP identify
  Franco Arland, Getty Images credit, copyright `2026 Getty Images`, Getty
  AssetID 2269536756, the Getty EULA WebStatement and the image's LicensorURL.
  Both URLs were verified in the browser on 21 October 2026. The asset page
  confirms the same photographer, date, subject, asset ID and rights-managed
  licensing. Copy these exact rights URLs and copyright notice; use its source
  caption credit `Franco Arland/Getty Images` and verified Person creator.
  No PRESDA ownership or free reuse is asserted. This metadata audit does not
  verify a particular license purchase or invoice for PRESDA.

## Deliberately unresolved optional recommendations

Creation credit is not evidence of copyright ownership. Apart from the embedded
Getty notice, no new copyrightNotice is added: neither the downloaded RJ Mitte file nor the inspected source record
provides an explicit copyright-holder notice, and AI creation credits alone do
not establish copyright status. We do not turn those credits into ownership
claims.

No verified image reuse terms or image-licensing page was found for the PRESDA
brand mark or credited AI illustrations. Their license and acquireLicensePage
remain omitted. The general site homepage, contact page, privacy policy and
article URL are not substituted for actual licensing terms.

Other hero images have no verified exact-source rights record connected to their
existing ImageObject. They receive no fallback credit, copyright or license.
The numerous licensed inline illustrations in the editorial rights documents
are distinct assets, not evidence for an article's different hero. This patch
does not add new ImageObjects for those inline images.

Ten credit-only PRESDA hero records retain their previously omitted creator
field. A published illustration credit is not silently promoted into a new
authorship node in this four-field patch. Google can show an optional creator
recommendation on these newly eligible image items. The Getty author is the
exception because the exact original file independently identifies its actual
photographer, separately from the credit agency and copyright notice.

All four locales use the same exact original asset key, so proper names, license
URLs and rights records remain consistent. Existing localized descriptions and
visible captions remain intact, including Arabic RTL.

## Validation

Google's image metadata documentation defines creditText as the credited name,
copyrightNotice as the current copyright owner, license as the applicable terms,
and acquireLicensePage as information about obtaining an image license:
https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata

Missing optional fields can remain where facts are unknown. The Licensable badge
requires a license; creditText alone does not establish eligibility for that
badge. Rich Results validity does not guarantee indexing or a particular display.

Run `node tools/test-image-rights.cjs`, existing creator and image-attribution
tests, multilingual and sitemap regressions, and the production build. The
outside-repository audit compares every generated page before and after, allowing
only these four rights fields and the newly verified Getty photographer to
change on existing ImageObjects.
