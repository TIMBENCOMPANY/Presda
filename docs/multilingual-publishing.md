# Multilingual publishing

English remains the default at its existing URLs. The `(english)` route group changes only source organization, not public paths. Separate root layouts render the correct HTML `lang` and `dir` on the server without making English routes request-dependent. Arabic uses RTL layout and Arabic-capable typography. All pages use the permanent dark identity.

## Publish a translation

1. Add a complete record in `src/data/translations.ts`, initially with `status: "draft"`. Link it to the exact existing English canonical path via `englishPath`. Never edit the English article to add translations or copy it using object spread.
2. Choose a unique localized `path` under `/ar/`, `/fr/` or `/es/`. Articles use `/{locale}/articles/{localized-slug}/`; categories use `/{locale}/category/{localized-slug}/`. Slugs may be localized independently. A homepage uses `/{locale}/` and maps to `/`.
3. Write independent title, SEO title, description, keywords, search intent, all content blocks, image alt text, source labels and any FAQs. Preserve citations, historically correct names and established terminology. Adapt framing to the readership rather than translating word for word. Follow AGENTS.md, including the editorial punctuation rule.
4. A language-competent editor checks completeness, terminology, factual equivalence and search intent, then records reviewer and review date and sets `terminologyChecked: true`. The review fields are an editorial attestation, not automated proof of translation quality.
5. Set `status: "published"` only after review. Run `node tools/test-i18n.cjs`, TypeScript, lint and the production build. Review the page in its language on desktop and mobile before deployment.

## Data and rendering

`Translation` in `src/lib/i18n/content.ts` supports articles, category introductions and standalone pages. Content blocks include paragraphs, headings, quotations, lists and tables. Sources and FAQs are localized explicitly. Category identity stays stable while its visible labels and archive slug can differ. Category and landing pages list only published articles in their own language. Localized search indexes contain only published translations.

The registry rejects incomplete published records and duplicate language/source pairs or paths. Source existence is checked during static generation and sitemap generation. Draft records are excluded from selectors, routes, search, sitemaps and hreflang.

## URLs and indexing

Published translations have self-canonicals and reciprocal hreflang entries for every available language plus English and `x-default` pointing to English. Unpublished languages are deliberately omitted, even though the selector shows all four choices. Do not advertise missing translations in hreflang.

A missing localized page with a real English equivalent returns a temporary redirect to that English URL. Unknown pages return 404. The selector links directly to the English equivalent and explains availability when it is already on that page. No empty translation pages, automatic article translations or duplicate English pages under locale prefixes are created. Language selection does not use cookies, browser detection, or automatic redirects from English.

The registry is empty for this infrastructure release. No articles have been translated. A future translation becomes discoverable only when its full reviewed record is published and deployed.
