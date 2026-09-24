import { getPublishedArticles } from "@/data/articles";
import { fromCategorySlug } from "@/lib/categories";
import { getAuthorProfiles } from "@/lib/authors";

const staticPaths = new Set(["/", "/articles/", "/about/", "/contact/", "/authors/", "/editorial-policy/", "/corrections-policy/", "/newsletter/", "/trending/", "/privacy-policy/", "/cookie-policy/", "/terms/"]);
export function isEnglishPage(path: string) {
  if (staticPaths.has(path)) return true;
  const articleSlug = path.match(/^\/articles\/([^/]+)\/$/)?.[1];
  if (articleSlug) return getPublishedArticles().some((article) => article.slug === articleSlug);
  const category = path.match(/^\/category\/([^/]+)\/$/)?.[1];
  if (category) return Boolean(fromCategorySlug(category));
  const author = path.match(/^\/authors\/([^/]+)\/$/)?.[1];
  return Boolean(author && getAuthorProfiles().some((profile) => profile.slug === author));
}
