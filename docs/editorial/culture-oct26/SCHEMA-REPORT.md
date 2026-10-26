# Structured-data review

Scope: five articles, four locales each. Existing shared generators are reused, with no duplicate schema injection.

| Entity | Validation |
| --- | --- |
| Article / NewsArticle | Localized headline, language, author, publisher, publication and modification dates, cited source URLs and image |
| WebPage | Nested in mainEntityOfPage; exact self-canonical URL; primaryImageOfPage references the article ImageObject ID |
| ImageObject | Stable canonical-page fragment ID, crawlable WebP contentUrl/url, descriptive localized alt-derived description, dimensions, PRESDA credit, representativeOfPage, exact article landing page |
| BreadcrumbList | Existing article-route hierarchy retained |

Brazil is the sole NewsArticle in this batch. The four cultural and business explainers use Article. No Event schema, FAQPage rich-result claims, aggregate ratings, unsupported creator identities or invented licensing URLs were added.

The viewport suite parses rendered JSON-LD, checks headline and language against each edition, verifies citations and publisher credit, and resolves primaryImageOfPage against image.@id. OG and Twitter images must match image.contentUrl. The dedicated image suite validates real HTML img markup, HTTP responses, robots/indexability and XML image-sitemap associations.

The WebPage entity is intentionally nested in Article.mainEntityOfPage. It need not be a separate top-level graph node. Validation follows that actual structure.

These checks establish technical consistency and supported schema properties. They do not claim a Google Rich Results Test execution, indexed status, rich-result eligibility approval or Discover inclusion. Final local and production results are retained in ignored test-results/culture-oct26-*.json files.
