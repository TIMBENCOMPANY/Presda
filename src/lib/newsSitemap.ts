import type { Article } from "@/data/articles";
import type { Translation } from "@/lib/i18n/content";
import { absoluteUrl, siteName } from "@/lib/seo";

export type NewsEntry = { url: string; language: string; title: string; published: string };
const newsWindowMs = 48 * 60 * 60 * 1000;

export function isRecentNewsDate(published: string, now: Date) {
  // Date-only records expire conservatively 48 hours after UTC midnight.
  // Preserve the recorded date in XML; never invent a publication time.
  const age = now.getTime() - Date.parse(published);
  return Number.isFinite(age) && age >= 0 && age < newsWindowMs;
}

export function getNewsEntries(articles: Article[], translations: Translation[], now = new Date()): NewsEntry[] {
  // Only explicit editorial classification qualifies. Category-based schema
  // fallbacks also include evergreen articles and are not a news selection rule.
  const recent = articles.filter(article => article.status !== "draft" && article.schemaType === "NewsArticle" && isRecentNewsDate(article.date, now));
  const sources = new Set(recent.map(article => `/articles/${article.slug}/`));
  return [
    ...recent.map(article => ({ url: absoluteUrl(`/articles/${article.slug}/`), language: "en", title: article.title, published: article.date })),
    ...translations.filter(record => record.status === "published" && record.kind === "article" && sources.has(record.englishPath) && isRecentNewsDate(record.publishedAt, now))
      .map(record => ({ url: absoluteUrl(record.path), language: record.locale, title: record.title, published: record.publishedAt }))
  ];
}

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, char => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char]!);
}

export function renderNewsSitemap(entries: NewsEntry[], page?: number): string | null {
  const header = '<?xml version="1.0" encoding="UTF-8"?>';
  // Split automatically if future publication volume exceeds Google's limit.
  if (page === undefined && entries.length > 1000) {
    return `${header}<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Array.from({ length: Math.ceil(entries.length / 1000) }, (_, index) => `<sitemap><loc>${absoluteUrl(`/news-sitemap.xml?page=${index + 1}`)}</loc></sitemap>`).join("")}</sitemapindex>`;
  }
  if (page !== undefined && (!Number.isInteger(page) || page < 1 || page > Math.max(1, Math.ceil(entries.length / 1000)))) return null;
  const chunk = entries.slice(((page ?? 1) - 1) * 1000, (page ?? 1) * 1000);
  return `${header}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">${chunk.map(entry => `<url><loc>${escapeXml(entry.url)}</loc><news:news><news:publication><news:name>${escapeXml(siteName)}</news:name><news:language>${escapeXml(entry.language)}</news:language></news:publication><news:publication_date>${escapeXml(entry.published)}</news:publication_date><news:title>${escapeXml(entry.title)}</news:title></news:news></url>`).join("")}</urlset>`;
}
