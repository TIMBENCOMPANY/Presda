# Gaming feature batch: editorial and release review

Reviewed 2026-10-21. Two independent AI & Tech features, with EN/FR/AR/ES editions. The requested AI & Tech section uses the existing `AI` registry key and existing localized category labels. History was drafted and its three translation structures validated before the console feature was completed.

## Scope and sourcing

- History: 1970s commercial origins through the 2026 market, with earlier research context; Atari, Nintendo, Sega, PlayStation, Xbox, PC, mobile, franchises, culture, technology and preservation.
- Console feature: generations, distinct business strategies, dated manufacturer figures, successes and failures, subscriptions, acquisitions and consumer considerations.
- Historical sources include the Computer History Museum and The Strong. Corporate sources establish product dates, disclosures and announced policies, not independent verdicts on product quality.
- Newzoo's June 18, 2026 retrospective gives a revised 2025 market estimate of USD 201.6 billion, up 9.1%, with PC at USD 43.6 billion. These are estimates with a defined scope, not a 2026 completed-year result or a hardware-inclusive comparison with other entertainment industries.
- Sony's business-data page reports PS5 sell-in above 95 million at June 30, 2026. Its FY26 Q1 supplemental report records March cumulative sell-in of 93.7 million and Q1 shipments of 1.6 million, consistent with that threshold. The same report defines June MAU as 125 million accounts, not Plus subscribers or PS5 owners.
- Nintendo's June 30, 2026 disclosure: Switch 156.59 million; Switch 2 23.68 million; Wii U lifetime 13.56 million. Different product lifetimes are explicit. No unverified Series X/S total is substituted for missing comparable official disclosure.
- EA's series changed to EA Sports FC in 2023. The hero's fictional FIFA 27 label is expressly identified as illustration, not product evidence.
- Microsoft's April 21, 2026 Call of Duty subscription policy is distinguished from the future November cloud changes announced September 3. No universal day-one availability promise or speculative successor-console date appears.
- Activision transaction value is labeled as the announced USD 68.7 billion including net cash. Completion is sourced to the October 13, 2023 SEC filing. The article does not confuse that figure with accounting purchase consideration.
- Concord, Xbox warranty failures/policy reversal and Wii U are discussed without invented budgets or unsupported single-cause explanations.

## Images and localization

Exact user-approved Desktop assets copied to `public/articles/gaming-history-hero.png` and `gaming-console-hero.png`. Original SHA-256 equality is checked by the browser validation script. Existing image preparation produces delivery derivatives without replacing source compositions. Localized visible captions and alt text identify editorial AI illustrations; no official endorsement, screenshot authenticity, copyright ownership or reuse license is invented. Structured image credit is PRESDA, with unknown license fields omitted.

Each language retains the English heading/paragraph structure and contextual sources. Internal cross-links use the existing locale-aware renderer. No homepage design, caching policy, middleware logic or other article content is changed.

## Validation

`tools/test-gaming-batch.cjs` checks both articles sequentially, each in EN/FR/AR/ES at 1366, 1920, 768 and 390 pixel widths. It checks HTTP status, image decoding and exact originals, title/meta containment, horizontal overflow, RTL, one H1, translated headings, canonical and reciprocal hreflang, Article schema and citations, image credits, description/social metadata, internal links and sitemap coverage. It saves local/live screenshots and JSON reports under ignored `test-results/`.

Repository headline, reading-time, image-rights and image-attribution tests passed before the production build. The build's existing ReaderPoll native-image warning is unrelated and was not modified. Production status and live checks must be confirmed after the GitHub push before reporting publication complete.
