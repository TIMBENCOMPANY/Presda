import type { Locale, TranslationRoute } from "./routing";

// Keep this route manifest independent of article bodies for client and middleware use.
export const listingEnglishPaths = ["/", "/articles/", ...[
  "world", "sport", "business", "ai", "science", "history", "travel", "lifestyle", "paparazzi"
].map(category => `/category/${category}/`)];
export const listingPath = (path: string, locale: Locale) => locale === "en" ? path : `/${locale}${path}`;
export const listingRoutes: TranslationRoute[] = (["fr", "ar", "es"] as const).flatMap(locale =>
  listingEnglishPaths.map(englishPath => ({ locale, englishPath, path: listingPath(englishPath, locale) }))
);
