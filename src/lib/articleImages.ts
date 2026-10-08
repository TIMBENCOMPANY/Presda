import dimensions from "./image-dimensions.generated.json";
import imageRules from "./image-rules.json";
import type { Article } from "@/data/articles";

export function getArticleCardImage(article: Pick<Article, "category" | "coverImage">) {
  // NAZA cards share the published hero asset; no separate thumbnail exists.
  if (article.coverImage === "/images/articles/naza-israel-film-documentary-war-palestine.webp") {
    return article.coverImage;
  }

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
  const thumbnail = `/images/articles/thumbnails/${basename}.webp`;
  const geometry = dimensions as Record<string, { width: number; height: number }>;
  const original = geometry[article.coverImage];
  const preview = geometry[thumbnail];
  // Older thumbnails were pre-cropped. Crop the original only once in the frame,
  // so the configured source focal point still refers to the same composition.
  if (!original || !preview || Math.abs(original.width / original.height - preview.width / preview.height) > 0.02) return article.coverImage;
  return thumbnail;
}

export function getArticleCardImagePosition(article: Pick<Article, "slug"> & Partial<Pick<Article, "homepageImagePosition">>) {
  switch (article.slug) {
    case "achraf-hakimi-king-of-africa":
      return "50% 18%";
    case "yassine-bounou-africas-safest-hands":
      return "50% 16%";
    default:
      return article.homepageImagePosition ?? imageRules.defaultFocalPoint;
  }
}

export function getArticleHeroImagePosition(article: Pick<Article, "slug" | "homepageImagePosition">) {
  switch (article.slug) {
    case "achraf-hakimi-king-of-africa":
      return "50% 16%";
    case "yassine-bounou-africas-safest-hands":
      return "50% 14%";
    default:
      return article.homepageImagePosition ?? imageRules.defaultFocalPoint;
  }
}

export function getArticleDesktopHeroImagePosition(article: Pick<Article, "slug">) {
  switch (article.slug) {
    case "epstein-island-little-st-james-investigation":
      return "50% 68%";
    default:
      return imageRules.defaultFocalPoint;
  }
}

/** Original geometry keeps reader artwork complete without letterboxing. */
export function getArticleImageDimensions(source: string) {
  return (dimensions as Record<string, { width: number; height: number }>)[source] ?? { width: 1600, height: 900 };
}
