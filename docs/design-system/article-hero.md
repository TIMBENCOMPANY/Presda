# Article hero framing

GIORDANO BRUNO remains the reference for container width, typography, accents, spacing and the viewport-aware desktop text area. Preserve approved source files and their real dimensions. The 1672 by 941 reference does not authorize stretching, cropping or upscaling a supplied original file.

The default bounded desktop frame remains unchanged. It can crop vertically, as previously approved for existing articles, while keeping both sides visible. Mobile retains the complete natural image above the readable text area.

When the brief explicitly requires the entire approved composition, set `heroPreserveAspect: true` on the source Article. The shared component uses the image's native ratio, `contain` and no transform. The complete image can extend below the fold, while the desktop text area remains capped at the Bruno frame height. Do not add per-batch dimensions, change the source artwork or enlarge the image to fill a mismatched box.

`translationArticle` must carry this option into FR, AR and ES. Test the rendered pages, not just the English source record: a dropped presentation option can make translations crop even when English is correct. Existing articles without the option retain their established framing.

Before publication, run the build-time hero contract guard and the batch browser checks. Compare every edition with Bruno at desktop and mobile widths, including Arabic RTL. Verify full source geometry, category/date placement, headline/subtitle/read-time bounds, desktop read-time visibility above the fold and no horizontal overflow. Use full-page screenshots cropped to the hero region for visual review; scrolling a tall hero into view can let the fixed navigation cover its top in a screenshot.

The six-article regression in `tools/test-history-sport-nov06.cjs` exercises the full-composition option in all four languages at seven local viewport sizes. The original bounded default is independently protected by `tools/test-hero-contract.cjs`.
