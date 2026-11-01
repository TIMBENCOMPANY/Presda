# Hero frame and homepage carousel correction

The user authorized this release and clarified the geometry priority: match Bruno's desktop height, keep both image sides visible, and allow vertical cropping. Native image files are unchanged.

## Layout

The sixteen articles, IDs 364 through 379, used a batch-specific natural-height desktop override. At 1366x768, that produced approximately 751px heroes while Bruno used 614.5px. The shared Bruno height expression is now exposed as a CSS variable without changing its value for other heroes. These sixteen frames use that maximum height, explicit full width and the native image aspect ratio. Their media fills the frame with centered cover rendering. At narrower desktop widths, the frame's natural-ratio ceiling prevents horizontal cropping and side bars. Mobile retains Bruno's actual full image followed by readable copy layout.

Category, H1, subtitle, publication date and reading-time/byline bounds are checked in EN/FR/AR/ES. White/red/yellow highlights and shared copy fitting remain intact. Source images, article content and metadata are unchanged.

## Homepage order

Only the homepage featured selection changes. Existing article IDs in the requested order:

352 Cristiano B.O.A.T; 361 Zverev; 354 DiCaprio; 347 Mbappé; 330 Kim Kardashian SKIMS; 335 LeBron James; 310 Margot Robbie; 259 Beyoncé; 230 Megan Fox; 168 Anne Hathaway; 374 Alcaraz; 018 David Beckham.

The existing published records provide each localized title, image and destination. The carousel component and category carousel behavior are unchanged. Latest, more-articles and side selections are compared with the previous production implementation and remain identical in all four languages. The previous feed exclusion set is retained independently to avoid reshuffling those sections when the hero lineup changes.

## Verification before release

- Production build passed: 1,580 generated pages, TypeScript and lint checks. The existing ReaderPoll image advisory remains.
- 320 hero checks: sixteen articles, four languages, widths 320, 390, 1024, 1366 and 1920. All passed, including copy bounds, actual painted source width, no horizontal overflow, correct image alt text and preserved headline accents.
- Existing Bruno, Moon Landing and Area 51 heroes were measured on production before editing. Eighteen matching desktop/mobile control states were compared after the change and retain the same frame/media geometry, object fitting and typography, including all four languages for Moon Landing and Area 51.
- 128 article hero screenshots were visually reviewed in eight four-language atlases beside Bruno, covering all sixteen articles on desktop and mobile.
- Eight carousel browser cases passed: EN/FR/AR/ES at desktop and mobile, every slide's existing destination and image, both arrows, final-to-first wraparound and mobile swipe in LTR/RTL.
- Deterministic carousel checks passed for image readiness/preloading, pause/resume, automatic timing, swipe/click suppression, one H1, reduced motion and unchanged category behavior.
- Homepage selection checks passed against the previous production implementation, including exact IDs/order, localized card fields, preserved other sections, publication gates and sorting.
- The layout detector reported no findings. The first browser pass exposed an auto-width interaction, corrected with explicit width:100%. A carousel test-harness Touch constructor was corrected without changing product code.

Deployment and live verification evidence is retained in task outputs.
