# Editorial and publication review, 29 October 2026

Scope: three new articles, four complete editions each. No existing articles, hero CSS, navigation, robots rules or billing settings changed. IDs 351–353 are new; duplicate checks run against the published registry.

## Reporting decisions

- Red sprites: NOAA/NSSL, NASA research and citizen-science pages, and ESA ASIM documentation. Explain upper-atmosphere electrical discharges, approximate 50–90 km emission region, millisecond duration, nitrogen emission, the 1989 camera evidence, and limits of observation. Distinguish sprites from blue jets and ELVES. No invented sighting, scientist interview or claim that the illustration is a scientific diagram.
- Ronaldo: official B.O.A.T. final results and participation conditions, organizer explanation, contemporary UEFA account, Manchester United and Real Madrid statements, and official annual award rules. The winning entry is Ronaldo 2008; second is Messi 2012. The €1 photograph purchase, repeat participation and lack of a new physical trophy are explicit. The 5,009 repeat participants are people, not total votes or a candidate percentage. The result does not create a sixth official Ballon d'Or or a Super Ballon d'Or. No invented final vote percentage.
- NVIDIA/Meta: official NVIDIA announcement dated 26 October, Reuters reporting, Meta's Muse launch, product, model and infrastructure pages, and NVIDIA's inference glossary. The headline uses a prospective investment formulation because completion is forward-looking. No invented share price, ownership percentage, closing date, hardware quantity, exclusive relationship or measured savings. OpenShell and Sentry are described as being considered, not deployed. Product security descriptions are attributed to Meta rather than independently certified.

Source links are attached to the relevant English paragraphs and retained in the corresponding FR/AR/ES blocks. Each edition has the same source set and section sequence. Original explanatory analysis is distinguished from measured results. No invented quotations or interviews. No em dashes in editorial copy. Review attribution identifies Codex source and terminology review, not an invented human expert.

## Images and layout

All three approved source images are AI editorial illustrations. Each has a localized visible disclosure and descriptive alt text. The Ronaldo caption expressly disclaims an authentic B.O.A.T. trophy ceremony. The sprites image is not to scale. The Meta/NVIDIA image is not a meeting or signing photograph.

WebP conversion uses Sharp quality 90, effort 6, preserves original dimensions and does not crop or replace source pixels compositionally. The manifest records source and converted SHA-256 hashes. Image credit is PRESDA; no unsupported licence or copyright ownership is asserted.

The articles use the existing Giordano Bruno shared hero component with no article-specific fit override. Desktop fills the existing fixed frame with the same cover positioning; mobile uses the natural image ratio and shared cinematic copy treatment. Source composition and rendering are checked against Bruno at 1366, 1920, 768 and 390 pixel viewport widths. Exact full-frame filling can entail the same aspect-ratio crop as Bruno, consistent with the user's earlier reference-fit preference; no additional zoom is introduced.

## Search and AI answer readiness

Applied SEO, content, GEO/AEO, image, schema, hreflang and sitemap guidance. No cached record existed for these new pages, so source checks were fresh. Answer-first introductions, descriptive headings, readable factual distinctions and citations support discovery and reuse without promising rankings or AI citations. No unnecessary FAQ markup, keyword stuffing, invented expert credentials or altered crawler permissions.

The existing publishing pipeline generates self-canonicals, reciprocal hreflang with x-default, localized metadata, Article/NewsArticle schema, image associations and XML sitemap entries. Internal links resolve to the matching language. Verification must check all 12 pages, image HTTP responses, alt text, visible captions, structured data, news sitemap eligibility, headings, RTL and responsive geometry before publication.

## Validation record

Local production build passed, including TypeScript and static generation. Publishing checks passed for multilingual routing, the pilot translations, translation library, citation repairs, invariant blocks, reading time, headline accents and image delivery policy. Existing image-quality warnings for a future Next.js version and the existing ReaderPoll image lint warning remain outside this change.

An older pilot test assumed the header's class attribute appeared before every other attribute. The existing hero already has a style attribute first. Its matcher was corrected to accept attribute order and optional hero classes; no production layout was changed for this test repair.

The targeted browser suite passed 48 local views: three articles, four languages, four widths (1366, 1920, 768, 390). It checked actual decoded images, all headings, visible credits, no horizontal overflow, Arabic RTL, original WebP hashes, Bruno frame geometry and scaling, localized metadata, canonical and alternate URLs, schema citations and image associations, internal links, robots access, image responses, XML image sitemap and news sitemap eligibility. Desktop/mobile contact sheets were visually inspected for every language and article. All copy remains readable and images fill the shared layout without additional scaling overrides.

One production deployment is planned after this verification. Post-deployment checks use the same suite at desktop/mobile widths, producing 24 live views. See tools/test-news-oct29.cjs and the ignored test-results/news-oct29-local.json and news-oct29-live.json for measured results. Live status is reported only after those checks run.
