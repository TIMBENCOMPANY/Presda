import type { Article } from "@/data/articles";
import type { ArticleSearchRecord } from "@/lib/articleSearch";
import { toArticleSearchRecord } from "@/lib/articleSearch";

export type ArticleCardRecord = Pick<Article, "slug" | "title" | "headlineAccent" | "headlineHighlights" | "excerpt" | "category" | "date" | "coverImage" | "coverAlt" | "homepageImagePosition" | "readingTime">;
export type ArticleListRecord = ArticleCardRecord & ArticleSearchRecord & Pick<Article, "id">;

// Select fields at runtime; a Pick type alone does not strip article bodies.
export function toArticleCardRecord(article: Article): ArticleCardRecord {
  const { slug, title, headlineAccent, headlineHighlights, excerpt, category, date, coverImage, coverAlt, homepageImagePosition, readingTime } = article;
  return { slug, title, headlineAccent, headlineHighlights, excerpt, category, date, coverImage, coverAlt, homepageImagePosition, readingTime };
}

export function toArticleListRecord(article: Article): ArticleListRecord {
  return { ...toArticleCardRecord(article), ...toArticleSearchRecord(article), id: article.id };
}
