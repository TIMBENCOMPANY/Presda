// Phase 3 must explicitly approve each language path and section boundary.
// Intentionally empty: flags and a publisher ID alone cannot activate ads.
export const reviewedManualPlacements: Readonly<Record<string, readonly string[]>> = Object.freeze({});

export const forbiddenAdAncestors = [
  "header", "nav", "footer", "aside", "a", "button", "form", "figure", "details", "table", "svg", "h1", "h2", "h3",
  "[role='button']", "[role='dialog']", "[role='navigation']", "[data-ad-free]",
  "[data-gallery]", "[data-reader-poll]", ".image-gallery", ".article-hero",
  ".home-hero-section", ".category-featured", "[aria-roledescription='carousel']",
  "[data-breaking-news]", "[data-news-ticker]", "#newsletter", "#reader-poll"
].join(",");

export function isReviewedManualPlacement(path: string | null, sectionId: string): boolean {
  if (!path || !/^\/(?:ar\/|fr\/|es\/)?articles\/[a-z0-9-]+\/$/.test(path)) return false;
  return reviewedManualPlacements[path]?.includes(sectionId) === true;
}

export function isSafeAdElement(element: Element): boolean {
  return !!element.closest("article [data-presda-ad-region='article-body']") &&
    !element.closest(forbiddenAdAncestors);
}
