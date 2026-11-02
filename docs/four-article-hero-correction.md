# Four-article hero correction

Scope: Milka, Catatumbo Lightning, Aye-Aye and Richat Structure, in EN/FR/AR/ES.

The November 2 batch introduced an uncapped natural-image desktop frame. It
overrode the shared viewport-aware height, producing taller heroes than Bruno.
Remove that override and reuse the existing `article-hero--full-image` contract.
No source artwork, quality settings, typography, content, homepage or other
article layout is changed.

Desktop uses Bruno's bounded height with a source-aspect-ratio ceiling to keep
both sides visible. Vertical cropping is allowed, as in the approved Bruno
framing. Mobile retains the shared natural image above the editorial text.
The existing desktop text fitter accommodates translations inside the frame.

`npm run build` now runs `test:hero-contract` before generating the site. This
checks the viewport cap, aspect ceiling, image fit and lack of transforms, and
rejects additional desktop batch sizing overrides after the shared contract.
New article batches should use this existing contract, not add uncapped rules.

With a built server running, `BASE_URL=http://localhost:3051 npm run test:heroes`
checks all sixteen editions at seven viewport sizes. It compares frame geometry
and typography against Bruno, verifies no side crop or horizontal overflow,
checks title/subtitle/category/date/read-time bounds and desktop/portrait-mobile
read-time visibility above the fold, and verifies unchanged image hashes and SEO.
On a public BASE_URL it runs desktop and mobile for all sixteen editions.
