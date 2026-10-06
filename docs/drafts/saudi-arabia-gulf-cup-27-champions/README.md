# Gulf Cup 27 conditional victory draft

Status: unpublished in EN, FR, AR and ES. Prepared 2026-10-06. No deployment or scheduled publication.

SAFF's fixtures page showed no final result when checked. The requested championship headline is held as conditional copy, not verified news. All four versions carry an explicit draft notice.

## Publication hold

1. Confirm full time and Saudi championship through SAFF/AGCFF and a reliable match report. If UAE wins, discard the Saudi victory framing.
2. Verify final score, extra time, shootout score, scorers and minutes, cards, substitutions, lineups and match chronology.
3. Verify player awards, trophy recipient, ceremony, attendance and celebrations. Do not infer these from the illustration.
4. Replace every pending block and conditional passage in all four languages. Update headline and deck if required. Remove the internal draft notice only once verified.
5. Add direct official final-report and Reuters citations. Check current 2027 and 2034 tournament context and add a verified existing related SPORT link.
6. Set actual publication dates, perform final language/source review, and update metadata. Remove draft-only descriptions.
7. Only then change both English guards (status and draft) and the three translation statuses. Prepare translations/images, run publication checks and inspect responsive/RTL output before deployment.

## Integration

English: src/data/saudiGulfCup27Article.ts, ID 198. Registered with status draft and draft true.
Translations: localizations/fr.json, localizations/ar.json and localizations/es.json in this draft folder. All status draft; no publication dates or fabricated review approval. The current translation loader requires a published English source, so move these records to src/data/localizations/articles/saudi-arabia-gulf-cup-27-champions/ only during verified publication. No routing architecture was changed.
Hero: /articles/saudi-gulf-cup-27.png. Editorial AI-generated illustration.
The existing publisher excludes drafts from article routes, listings, search, schema and sitemaps. Canonicals and reciprocal hreflang become active only on actual publication.

Readable versions: en.md, fr.md, ar.md, es.md.
