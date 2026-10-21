# Travel batch publication review

Reviewed: 21 October 2026.

Four independent Travel features, completed in order: Africa destinations, safaris, Pompeii, Orient Express. Each has EN/FR/AR/ES editions, matching section structure and citation/internal-link parity. English features contain 2,078, 1,648, 1,542 and 1,509 whitespace-delimited words respectively (including source labels). Translations are localized prose, not separate competing English pages.

## Evidence and editorial decisions

- Africa: 15-place editorial selection, explicitly not a statistical ranking or safety ranking. Sources include national tourism boards, UNESCO, government travel advice and meteorological information. Cost guidance identifies expense drivers rather than inventing quotations. Rwanda route advice identifies the separate Kamembe/Rusizi advisory. Health guidance recommends itinerary-specific professional advice and does not endorse lake swimming.
- Safaris: park authorities and tourism organizations support destination information. Kruger conservation charges are explicitly dated to the tariff expiring 31 October 2026, not represented as an inclusive safari price. Wildlife observations and migration crossings are not guaranteed. Ethical guidance separates tourism revenue mechanisms from claims of universal community benefit.
- Pompeii: official archaeological park, UNESCO, Smarthistory and Max Planck research. The eruption year is distinguished from the disputed day; casts are explained as archaeological casts, not petrified bodies. Current ticket information links to the park's Vivaticket gateway. No invented victim biographies.
- Orient Express: SNCF archives, railway timetable history, the Agatha Christie estate and current operator material. Belmond's service, La Dolce Vita and the separate 2027 restored-carriage plan are distinguished. No claim that the 2027 project already operates. Historical carriage features are not projected onto every modern cabin.
- Practical information is date-stamped and readers are directed to current official rules before booking.

## Assets

The four user-approved PNG originals were copied byte-for-byte. SHA-256 equality is asserted in tools/test-travel-batch.cjs. Existing image preparation generates static delivery derivatives without altering the originals. All four are explicitly credited in each language as AI-generated editorial illustrations, not documentary destination/operator photographs. No external photographs or third-party image licenses are introduced.

## Implementation scope

Four records, twelve translation records, localized hero captions and generated registry/image data. ArticleLayout receives only the caption lookup. Existing shared hero styling, original articles, homepage layout, middleware logic and caching configuration are unchanged. Earlier uncommitted ISR work in another checkout is excluded.

## Validation

- Next production build: passed; existing ReaderPoll img lint warning only.
- Headline, reading-time and image-policy tests: passed.
- Local browser verification: 16 editions at 1366x768, 1920x1080, 768x1024 and 390x844, sequential by article; all 64 passed.
- Checks cover status, unique slugs, original image hashes, image decode and alt text, localized credits, all body headings, internal links, source links, localized title/description, Article schema and citations, self-canonicals, reciprocal hreflang, sitemap, RTL, horizontal overflow and desktop hero/metadata bounds.
- Desktop/mobile screenshots reviewed for every language and article. Local evidence is in test-results/travel-batch-local.json and travel-*-review.png (test artifacts are not production assets).
- Repeat the browser checks against https://presda.com after the GitHub-triggered deployment reaches READY.
