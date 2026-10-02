import "server-only";
import type { Article } from "@/data/articles";
import { toArticleCardRecord, toArticleListRecord } from "@/lib/articleCards";
import { publishedTranslations } from "./registry";
import { translationArticle } from "./article-presentation";
import type { Locale } from "./routing";

const records = new Map(publishedTranslations.map(record => [`${record.locale}:${record.englishPath}`, record]));
function localizedArticle(article: Article, locale: Locale) {
  if (locale === "en") return { article, href: `/articles/${article.slug}/` };
  const record = records.get(`${locale}:/articles/${article.slug}/`);
  if (!record) throw new Error(`Missing published card translation: ${locale}/${article.slug}`);
  return { article: translationArticle(record, article), href: record.path };
}
export function listingCard(article: Article, locale: Locale) {
  const localized = localizedArticle(article, locale);
  return { ...toArticleCardRecord(localized.article), href: localized.href };
}
export function listingSearchCard(article: Article, locale: Locale) {
  const localized = localizedArticle(article, locale);
  return { ...toArticleListRecord(localized.article), href: localized.href };
}
