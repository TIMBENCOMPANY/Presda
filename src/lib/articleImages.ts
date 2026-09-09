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

export function getArticleCardImagePosition(article: Pick<Article, "slug">) {
  switch (article.slug) {
    case "achraf-hakimi-king-of-africa":
      return "50% 18%";
    case "yassine-bounou-africas-safest-hands":
      return "50% 16%";
    default:
      return undefined;
  }
}

export function getArticleHeroImagePosition(article: Pick<Article, "slug" | "homepageImagePosition">) {
  switch (article.slug) {
    case "achraf-hakimi-king-of-africa":
      return "50% 16%";
    case "yassine-bounou-africas-safest-hands":
      return "50% 14%";
    default:
      return article.homepageImagePosition;
  }
}
