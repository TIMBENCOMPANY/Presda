import type { Article } from "@/data/articles";

export function getArticleCardImage(article: Pick<Article, "category" | "coverImage">) {
  if (!article.coverImage.startsWith("/images/articles/")) {
    return article.coverImage;
  }

  if (article.category === "World Cup 2026") {
    return article.coverImage;
  }

  const filename = article.coverImage.split("/").pop();

  if (!filename || filename.includes("world-cup-2026")) {
    return article.coverImage;
  }

  const basename = filename.replace(/\.[^.]+$/, "");
  return `/images/articles/thumbnails/${basename}.webp`;
}
