# Multilingual publication workflow

All published English articles use the same translation registry, routing, metadata, search and sitemap pipeline. There is one `ArticleLayout` for EN, FR, AR and ES. Arabic uses the same components with RTL direction and logical alignment. Do not create language-specific article components.

## Existing content and URLs

- English stays at `/articles/<existing-slug>/`.
- New translations use `/fr/articles/<existing-slug>/`, `/ar/articles/<existing-slug>/` or `/es/articles/<existing-slug>/`.
- The twelve reviewed pilot records retain their existing localized slugs in `src/data/localizations/ar.json`, `fr.json` and `es.json`. Edit those records in place; do not create a second record for the same article/language.
- No English content, translation text, date or SEO field is filled by machine translation. No empty localized URL is indexed.

## Add one article in one language

```sh
node tools/translations.cjs status
node tools/translations.cjs source <existing-English-slug>
node tools/translations.cjs create <existing-English-slug> fr
```

The status command lists every published English article and each language's `missing`, `draft` or `published` state. `source` prints the complete English reference, expanded tables and editorial FAQs. `create` writes a blank draft to `src/data/localizations/articles/<slug>/<locale>.json`. It refuses unknown articles, unsupported languages and existing translations. It preserves identity, attribution, dates, image path and citation URLs while leaving localized text blank. It does not publish anything.

Fill the draft independently for the language's search intent. Provide title, excerpt, body, table captions/headers/cells, image alt, SEO title, description, keywords, search intent, source labels, quotes and FAQs where present. Use established historical terminology. Preserve facts, citations, image assignments and section order. Do not use editorial em dashes. Never copy English text as a substitute for missing localization.

`headlineHighlights.red` and `.gold` select exact phrases in the localized title for the existing PRESDA renderer. They do not change the title. `readingTimeMinutes` is an optional positive integer; otherwise the source estimate gets a localized label. Article publication and modification dates are explicit fields. Page title, SEO title and description may differ to support independent keyword optimization. Open Graph and Twitter metadata use the localized SEO fields and image alt. Article/NewsArticle schema follows the English article type; FAQ schema includes only the translated visible editorial FAQs.

Inline link targets should retain their original English source URLs. The renderer points internal links to the published version in the current language when available, otherwise English. Keep external citations unchanged. Inline FAQs in older English articles are extracted to the draft's `faq` array, avoiding duplicated FAQ sections. Each source table keeps its `sourceMarker`, dimensions and original shared presentation.

After language and factual review, fill `review.reviewer`, `review.reviewedAt` (YYYY-MM-DD), set `review.terminologyChecked` to true and change `status` to `published`. These fields record a real editorial review; do not fabricate approval. Automated checks validate completeness and source structure, not linguistic quality or historical accuracy.

```sh
node tools/prepare-translations.cjs
npm run test:i18n
npm run build
```

The preparer validates all editorial files before writing `articles.generated.json` and the lightweight `translation-routes.json`. Draft content is not included in either generated file. Both generated files are committed with the source record. Never edit them directly. `npm run build` and `npm run dev` run preparation automatically; rerun preparation and restart the dev server after changing records during development.

Verify a production build with `node tools/verify-multilingual-pilot.cjs` and `node tools/verify-translation-library.cjs` (default `http://localhost:3100`; set `BASE_URL` to test another environment). Inspect desktop/mobile and RTL before deployment.

Publishing a complete record automatically adds its static page, localized search entry, self-canonical, reciprocal hreflang, sitemap URL and same-article language-selector destination. Hreflang includes English, x-default=English and **only actually published translations**. Missing/draft versions redirect temporarily to English with `X-Robots-Tag: noindex`; no duplicate localized English page is rendered. Removing a record from publication removes those entries on the next build.

## Navigation and categories

`src/lib/i18n/messages.ts` contains typed EN/AR/FR/ES navigation, search, footer and category labels. `article-presentation.ts` and `article-controls.ts` contain article, date/read-time, share and newsletter labels. Category identifiers remain stable English data keys; display labels are localized. Category and other editorial landing-page translations can use the existing `Translation` registry's `category` and `page` kinds with the same completeness/review gates. Header, footer and article breadcrumbs resolve published translations through `languageDestination`; unavailable editorial landing pages fall back to their English URL. Translating a navigation label alone does not create an indexable landing page.

## Regression coverage

The pilot test protects all twelve existing translations. The library test covers every English article's blank draft shape and fallback, all source table formats, inline FAQs, partial language sets, shared rendering and Article/NewsArticle schema. Synthetic translations exist only in the test process and never enter publication files. No test assumes the whole library must remain limited to twelve translations.
