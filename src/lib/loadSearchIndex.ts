import type { ArticleSearchRecord } from "@/lib/articleSearch";

let pending: Promise<ArticleSearchRecord[]> | undefined;

// Share one request across both search inputs and subsequent client navigations.
// Failed requests can be retried the next time search is opened.
export function loadSearchIndex() {
  if (!pending) {
    pending = fetch("/search-index.json")
      .then(async response => {
        if (!response.ok) throw new Error("Search index unavailable");
        return await response.json() as ArticleSearchRecord[];
      })
      .catch(error => { pending = undefined; throw error; });
  }
  return pending;
}
