# Deployment and image usage

The application remains on its existing Vercel plan. Do not delete published
articles or required public assets to reclaim retained deployment storage.

## Publishing images

- Published artwork is cached by the image optimizer for at least 31 days.
- When replacing artwork, use a new filename and update its content references.
  Do not overwrite a published file at the same URL and expect immediate refresh.
  Keep old files that are still referenced by pages or external links.
- Do not add timestamps, random query strings, deployment IDs, or locale codes
  to image URLs. The same artwork should reuse the same URL across languages.
- The local optimizer accepts `/articles/**`, `/images/**`, and the brand mark,
  without source query strings. Originals and SEO image URLs remain public.
- Keep the existing quality levels (72, 75, 76, 82) and WebP output. Large hero
  widths through 3840 remain available for high-density screens.
- Existing optimizer widths remain supported for cached pages and old image URLs.
  Accurate `sizes` hints reduce unnecessary variants requested by new pages.
- `sizes` must describe the rendered CSS slot. Homepage cards switch to two
  columns at 640px; other article grids switch at 768px. Both use three columns
  at 1280px. Update `sizes` when changing those layouts.
- Do not disable optimization for large PNG artwork or clear the whole image
  cache to reduce usage; doing so can increase delivery or regeneration costs.

## Deployment size

The Header imports the generated lightweight translation route map into a shared
client bundle. Do not pass the full route list through `PublicationDocument`
again: it would be serialized into every HTML/RSC page. The existing build and
predev steps regenerate this map from published records.

`.vercelignore` excludes local development artifacts from uploads. It does not
delete existing deployments or reduce the required public-image archive.
Root-level legacy assets are not automatically served by the Next.js build;
repository size and deployed output size are different metrics.

## Checks

```sh
npm ci
npm run build
npm run test:i18n
npm run test:images
npm start -- --port 4175
# In another terminal, set BASE_URL=http://localhost:4175 and run:
npm run validate:publishing
```

The image-policy check verifies all published hero/card/localized image paths,
the existing quality values, high-density widths, and equality of the client
route map with the published translation registry.

## Vercel dashboard review

Use the same team, project and date range when comparing usage. Deployment
Storage and Functions Storage are separate from the build cache and image write
units. A lower current total does not reconstruct an earlier usage warning.

On 2026-09-30, PRESDA already had one-week retention for production and preview
deployments, and one day for canceled/errored deployments. Review these at
Settings > Build and Deployment > Deployment Retention Policy (the dashboard
location may differ from the documentation). Preserve the current deployment,
required rollback releases, aliases and previews still needed for review.

An old Analytics preview for the `vercel/install-vercel-web-analytics-w-bxbxw2`
branch remained active. Review whether that branch/preview is still needed;
active branch previews can survive age-based retention. Any removal is a manual
owner decision. Do not restore or purge recently deleted deployments just to
make the usage chart change.

After releasing the changes, verify image responses and cache HITs on Vercel,
then compare Image Transformations and Cache Writes over equivalent traffic
periods. Local build savings are not a promise of an identical billed reduction.
