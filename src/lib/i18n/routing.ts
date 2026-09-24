export const locales = ["en", "ar", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export type TranslationLocale = Exclude<Locale, "en">;
export const languageNames: Record<Locale, string> = { en: "English", ar: "العربية", fr: "Français", es: "Español" };
export type TranslationRoute = { locale: TranslationLocale; englishPath: string; path: string };

export function isTranslationLocale(value: string): value is TranslationLocale {
  return value === "ar" || value === "fr" || value === "es";
}

export function normalizePath(path: string) {
  let clean = path.split(/[?#]/)[0];
  try { clean = decodeURI(clean); } catch { /* Keep malformed input for the 404 path. */ }
  return clean === "/" ? "/" : `/${clean.split("/").filter(Boolean).join("/")}/`;
}

export function englishPathFor(path: string, routes: readonly TranslationRoute[]) {
  const normalized = normalizePath(path);
  const translation = routes.find((route) => route.path === normalized);
  return translation?.englishPath ?? (normalized.replace(/^\/(ar|fr|es)(?=\/)/, "") || "/");
}

export function languageDestination(path: string, locale: Locale, routes: readonly TranslationRoute[]) {
  const englishPath = englishPathFor(path, routes);
  return locale === "en" ? englishPath : routes.find((route) => route.englishPath === englishPath && route.locale === locale)?.path ?? englishPath;
}

export function languageAlternates(path: string, routes: readonly TranslationRoute[]) {
  const englishPath = englishPathFor(path, routes);
  return Object.fromEntries([
    ["en", `https://presda.com${englishPath}`],
    ...routes.filter((route) => route.englishPath === englishPath).map((route) => [route.locale, `https://presda.com${route.path}`]),
    ["x-default", `https://presda.com${englishPath}`]
  ]);
}
