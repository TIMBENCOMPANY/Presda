import type { Article } from "@/data/articles";

export type ArticleSearchRecord = Pick<Article, "slug" | "title" | "excerpt" | "category" | "author" | "tags" | "date" | "readingTime">;

export function toArticleSearchRecord(article: Article): ArticleSearchRecord {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    author: article.author,
    tags: article.tags,
    date: article.date,
    readingTime: article.readingTime
  };
}

export function articleMatchesSearch(article: ArticleSearchRecord, query: string) {
  const search = query.trim().toLowerCase();
  if (!search) return true;

  return [article.title, article.excerpt, article.category, article.author, ...article.tags]
    .join(" ")
    .toLowerCase()
    .includes(search);
}

export function searchArticles<T extends ArticleSearchRecord>(articles: T[], query: string) {
  return articles.filter((article) => articleMatchesSearch(article, query));
}
