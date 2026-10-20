# Image creator metadata, 20 October 2026

This change affects JSON-LD only. Original images, rendered markup, captions, source links, credits, licenses, article content, URLs, canonicals, language alternates and sitemaps are retained.

## Verified creator registry

`src/lib/imageCreators.ts` uses exact original image paths, shared by all four languages. It deliberately has no publisher, filename, AI-image or supplied-artwork fallback.

| Image | Creator | Existing evidence |
| --- | --- | --- |
| `/favicon-dark.png` | PRESDA, Organization | Existing official PRESDA brand mark; `src/lib/seo.ts` and branding metadata |
| `/articles/bee-hero.png` | PRESDA, Organization | `BeeEditorialMedia.tsx`, English hero credit: PRESDA AI-generated scientific illustration |
| `/articles/dna-hero.png` | PRESDA, Organization | `DnaEditorialMedia.tsx`, English hero credit: PRESDA AI-generated scientific illustration |
| `/articles/brain-hero.png` | PRESDA, Organization | Published cover alt identifies the PRESDA AI-generated anatomical illustration; `BrainEditorialMedia.tsx` preserves its disclosure |
| `/articles/bacteria-hero.png` | PRESDA, Organization | `bacteriaHeroCaptions.json`: PRESDA AI-generated scientific illustration |
| `/articles/universe-presda-hero.png` | PRESDA, Organization | `universeHeroCaptions.json`: PRESDA AI-generated artistic illustration |
| `/articles/solar-hero.png` | PRESDA, Organization | `solarHeroCaptions.json`: PRESDA artistic illustration generated with AI |
| `/articles/extinct-2026-hero.jpg` | PRESDA, Organization | Published cover alt explicitly identifies the PRESDA AI-generated illustration; `docs/editorial/extinction-tartary-2026/README.md` records original preservation and disclosure |
| `/articles/tartaria-2026-hero.jpg` | PRESDA, Organization | Published cover alt explicitly identifies the PRESDA AI-generated symbolic illustration; same publication record |
| `/articles/supermarket-2026-hero.png` | PRESDA, Organization | `docs/editorial/supermarkets-2026/README.md`, Image provenance, and published cover alt |
| `/articles/rj-mitte-gage-skidmore-2018.jpg` | Gage Skidmore, Person | Existing localized ArticleLayout credit and source: https://commons.wikimedia.org/wiki/File:RJ_Mitte_at_San_Diego_Con.jpg |

No copyright ownership or new license is inferred from a creator credit, including AI illustrations. Other supplied or editorial images remain unassigned unless their creator is verified.

## Existing natural-phenomena ImageObjects

Nineteen images already provide creator metadata. The existing source and rights records identify the photographers in three compound credits: R. Hadian (USGS credit), Peter Rejcek (NSF credit), and Chris Ratzlaff (NASA Goddard source). Their creator nodes now identify the person; the complete existing `creditText`, `copyrightNotice`, `license`, source and visible caption remain untouched.

Source records checked 20 October 2026:

- https://commons.wikimedia.org/wiki/File:Galunggung.jpg identifies R. Hadian in its author credit.
- https://commons.wikimedia.org/wiki/File:Blood_Falls_by_Peter_Rejcek.jpg identifies Peter Rejcek in its embedded author metadata.
- https://commons.wikimedia.org/wiki/File:The_Aurora_Named_STEVE_(26938621998).jpg identifies Chris Ratzlaff in its image courtesy line and embedded author metadata, separately from the NASA Goddard publishing account.

The ball-lightning illustration, image 11, is from page 267 of G. Hartwig's *The Aerial World* (1886), via the NOAA Library collection. Its source identifies an uploader but not the illustrator. Hartwig is the book author, NOAA is the holding source and the uploader is not a verified creator. Its creator remains omitted. Existing public-domain licensing and attribution remain valid. The optional missing-creator recommendation may remain for this image in all four editions.

Source checked 20 October 2026: https://commons.wikimedia.org/wiki/File:Ball_lightning.jpg

## Google requirements and scope

Google accepts a `Person` or `Organization` creator with a nonempty name. For image metadata, `contentUrl` (or supported `url`) plus one of creator, creditText, copyrightNotice or license is required; the remaining attribution fields are recommended. An unknown creator must not be invented merely to eliminate a recommendation.

Reference checked 20 October 2026: https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata

Run `node tools/test-image-creators.cjs`, the existing image-attribution and multilingual suites, and a production build. The audit's outside-repository before/after snapshots compare every built page's non-creator schema, titles, metadata, canonical/hreflang, image and link attributes, and sitemap bytes. GSC can continue showing old warnings until recrawl and report reprocessing.
