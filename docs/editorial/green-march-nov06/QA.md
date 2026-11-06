# Validation record

## Prepublication

- Production build: 1,712 static pages generated successfully.
- Translation preparation and library: 411 articles, 1,233 translated drafts; no English fallback editions.
- Image policy: 472 sources and 2,071 delivery files decoded; approved source hash preserved.
- Headline checks: 1,644 editions; reading time, invariant blocks and internationalization checks passed.
- Server-rendered social preview suite: 1,644 editions and 411 JPEG share assets passed. The prior 1,640 editions retained their baseline SEO, schema and hero metadata.
- Existing-content baseline: all 410 prior article records, 1,218 generated translation records, 1,230 translation routes, 471 source dimensions and shared hero CSS preserved.
- New article browser regression: 28 cases across EN/FR/AR/ES and seven viewports, from 320 px mobile to 1,920 px desktop. Canonical, hreflang, RTL, source aspect, visible hero text, priority image loading, six FAQs, headings, related links, category discovery and article/image/news sitemaps passed.

## Production release gates

After the reviewed commit reaches Vercel READY and the presda.com alias, verify eight live browser cases, twelve raw crawler page requests, original-image access under Googlebot-Image/Meta/Threads and responsive WebP responses. Inspect all four localized heroes and Bruno at desktop and mobile sizes. Store the actual production results outside the source tree under the workspace outputs directory. Do not describe these gates as passed until the results exist.
