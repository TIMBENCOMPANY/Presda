# PRESDA category badges

`category-badge.json` is the shared specification. It takes its red from the existing `home-red-deep` web token and native `colors.red`, with white type. No category-specific colors are supported.

The web and native repositories each carry an identical JSON copy, so either application can build independently. Keep these copies synchronized when changing the specification:

- Website: `src/lib/design-system/category-badge.json`
- Native: `src/design-system/category-badge.json`

Each platform has one `CategoryBadge` presentation component. Callers supply the localized category name. The component owns colors, typography, padding and radius; its parent owns links, touch targets and placement. Existing headline accent colors and image rules are separate and unchanged.

Image badges use the upper inline-start corner, mirrored for Arabic, with a small inset. They are overlays and do not add card height. Article headers use one category badge and one publication date in a shared row, with the date at inline-end. Category navigation, filters, page headings and breadcrumbs retain their navigation semantics.

The badge is static text rather than a separate button. Category links retain the existing category destination and accessible touch target. Labels may wrap under enlarged system text instead of being truncated.
