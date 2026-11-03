# PRESDA social preview audit and cache refresh

The pre-fix audit made 96 raw HTML requests across six articles, four languages
and browser, Facebook, Threads and Twitter user agents. These returned article-specific
images and metadata in the server-rendered head. All six images returned HTTP 200.
No live logo fallback or homepage redirect was reproduced. Image dimensions and MIME
type were absent from the social metadata. Meta Sharing Debugger required Facebook
login; the user chose to receive debugger links instead of signing in.

## Correction

Article Open Graph and Twitter metadata now use dedicated, content-addressed JPEGs
derived from each original hero, without cropping, upscaling or source replacement.
Explicit width, height, MIME type, secure URL and localized alt text accompany the
image. Reader artwork, ImageObject/Article schema and sitemap image URLs are unchanged.
The same share asset is reused across all languages. A missing asset fails the build
instead of silently substituting a brand mark.

Every build prepares these assets and checks the static HTML of every article edition.
`npm run test:social` verifies the generated HTML and JPEGs; with BASE_URL set it also
tests crawler responses, every public JPEG, and redirect variants. Existing article
tests distinguish the social JPEG from the unchanged schema/sitemap image.

Local verification passed for all 1,528 generated article editions and 382 decoded
JPEGs. Raw HTTP verification passed 144 page requests across six crawler/browser
user agents and all four languages, all 382 public JPEG URLs, and slash/tracking
redirect variants. The before/after baseline confirmed identical canonicals,
hreflang, JSON-LD, HTML titles/descriptions and reader hero attributes. Original
artwork SHA-256 hashes also match. A regression assertion checks that a missing
future social asset raises an error rather than returning the brand mark.

## Refresh cached Meta previews

A site deployment cannot confirm or clear the separate Meta preview cache without an
authenticated debugger request. Sign in, open each affected URL below, choose Debug
and then Scrape Again. Confirm the new /social-images/ JPEG, article title and description.
Do not share the debugger URL itself. Share the original article URL after refreshing.
Existing posts may retain their earlier attachment; inspect a newly composed share too.

| Article | English | French | Arabic | Spanish |
|---|---|---|---|---|
| laika-first-dog-orbit-never-came-home | [EN](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Farticles%2Flaika-first-dog-orbit-never-came-home%2F) | [FR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Ffr%2Farticles%2Flaika-first-dog-orbit-never-came-home%2F) | [AR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Far%2Farticles%2Flaika-first-dog-orbit-never-came-home%2F) | [ES](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Fes%2Farticles%2Flaika-first-dog-orbit-never-came-home%2F) |
| catatumbo-lightning-lake-maracaibo-recurring-storms | [EN](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Farticles%2Fcatatumbo-lightning-lake-maracaibo-recurring-storms%2F) | [FR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Ffr%2Farticles%2Fcatatumbo-lightning-lake-maracaibo-recurring-storms%2F) | [AR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Far%2Farticles%2Fcatatumbo-lightning-lake-maracaibo-recurring-storms%2F) | [ES](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Fes%2Farticles%2Fcatatumbo-lightning-lake-maracaibo-recurring-storms%2F) |
| milka-free-chocolate-campaign-2013-chain-of-tenderness | [EN](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Farticles%2Fmilka-free-chocolate-campaign-2013-chain-of-tenderness%2F) | [FR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Ffr%2Farticles%2Fmilka-free-chocolate-campaign-2013-chain-of-tenderness%2F) | [AR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Far%2Farticles%2Fmilka-free-chocolate-campaign-2013-chain-of-tenderness%2F) | [ES](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Fes%2Farticles%2Fmilka-free-chocolate-campaign-2013-chain-of-tenderness%2F) |
| aye-aye-madagascar-primate-tap-foraging | [EN](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Farticles%2Faye-aye-madagascar-primate-tap-foraging%2F) | [FR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Ffr%2Farticles%2Faye-aye-madagascar-primate-tap-foraging%2F) | [AR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Far%2Farticles%2Faye-aye-madagascar-primate-tap-foraging%2F) | [ES](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Fes%2Farticles%2Faye-aye-madagascar-primate-tap-foraging%2F) |
| eye-of-sahara-richat-structure-mauritania | [EN](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Farticles%2Feye-of-sahara-richat-structure-mauritania%2F) | [FR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Ffr%2Farticles%2Feye-of-sahara-richat-structure-mauritania%2F) | [AR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Far%2Farticles%2Feye-of-sahara-richat-structure-mauritania%2F) | [ES](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Fes%2Farticles%2Feye-of-sahara-richat-structure-mauritania%2F) |
| giordano-bruno-philosopher-heresy | [EN](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Farticles%2Fgiordano-bruno-philosopher-heresy%2F) | [FR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Ffr%2Farticles%2Fgiordano-bruno-philosopher-heresy%2F) | [AR](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Far%2Farticles%2Fgiordano-bruno-philosopher-heresy%2F) | [ES](https://developers.facebook.com/tools/debug/?q=https%3A%2F%2Fpresda.com%2Fes%2Farticles%2Fgiordano-bruno-philosopher-heresy%2F) |

Protocol reference: https://ogp.me/
Next.js metadata behavior: https://nextjs.org/docs/app/api-reference/config/next-config-js/htmlLimitedBots
