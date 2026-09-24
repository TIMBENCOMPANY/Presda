import type { ArticleSearchRecord } from "@/lib/articleSearch";
import type { Locale } from "@/lib/i18n/routing";

const pending = new Map<Locale, Promise<ArticleSearchRecord[]>>();

// Share one request across both search inputs and subsequent client navigations.
// Failed requests can be retried the next time search is opened.
export function loadSearchIndex(locale: Locale = "en") {
  if (!pending.has(locale)) {
    pending.set(locale, fetch(locale === "en" ? "/search-index.json" : `/${locale}/search-index.json/`)
      .then(async response => {
        if (!response.ok) throw new Error("Search index unavailable");
        return await response.json() as ArticleSearchRecord[];
      })
      .catch(error => { pending.delete(locale); throw error; }));
  }
  return pending.get(locale)!;
}
