# PRESDA multilingual pilot

The first publication batch contains only Al-Andalus, Maya Civilization, the Aztec Empire and Morocco History, in Arabic, French and Spanish. English content remains in `../articles.ts`.

Each language file is an array of independent editorial `Translation` records. Titles, descriptions, keyword targets and search intent are authored per language. Body blocks preserve the original structure and qualifications. `review.reviewer` records the actual review method; a Codex review is not represented as a human review.

## Publication

1. Author complete records as `draft`, with a localized title, metadata, deck, image alt, full body, reference labels and any original FAQ/quote.
2. Preserve source image paths and every inline reference URL. Keep English internal paths in editorial Markdown; the renderer resolves them to the requested language when a published equivalent exists, otherwise to English.
3. Compare facts, dates, names, uncertainty, paragraph order, heading levels, links and reference lists against the English record. Do not reduce a full article to a summary.
4. Set `published` only after review. Run `node tools/prepare-translations.cjs` and `npm run test:i18n`, then `npm run build`.
5. Verify all language switches, Arabic RTL, self-canonicals, reciprocal alternates, visible FAQ/schema parity and sitemap entries against the built site using `node tools/verify-multilingual-pilot.cjs`. Set `BASE_URL` to verify deployment.

The build command validates published article parity and regenerates `../translation-routes.json`. This compact index lets middleware route translations without loading article bodies. Never edit it manually. Draft records are excluded from routes, hreflang, search indexes and the sitemap.

Arabic uses language-wide `ar` targeting and RTL, French `fr`, and Spanish `es`. English URLs remain unprefixed and are the `x-default` destination. Missing translations retain the existing temporary English fallback with noindex on the redirect.

FAQPage describes only the visible, article-specific FAQ. It is not a promise of a Google rich result or an AI citation. Keyword choices are qualitative research findings, not invented search-volume estimates.
