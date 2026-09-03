import type { MetadataRoute } from "next";
import { articles, categories } from "@/data/articles";
import { getArticleLastUpdated } from "@/lib/articleSeo";
import { getAuthorProfiles } from "@/lib/authors";
import { toCategorySlug } from "@/lib/categories";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = [
    "/",
    "/articles/",
    "/about/",
    "/contact/",
    "/authors/",
    "/editorial-policy/",
    "/corrections-policy/",
    "/newsletter/",
    "/trending/",
    "/privacy-policy/",
    "/cookie-policy/",
    "/terms/",
    "/world-cup-2026/",
    "/world-cup-2026/match-center/"
  ];

  return [
    ...publicRoutes.map((route) => ({
      url: route === "/" ? `${siteUrl}/` : `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" || route === "/articles/" || route === "/trending/" ? "daily" as const : "monthly" as const,
      priority: route === "/" ? 1 : route === "/articles/" || route === "/trending/" ? 0.85 : 0.65
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}/`,
      lastModified: new Date(getArticleLastUpdated(article)),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/category/${toCategorySlug(category)}/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.75
    })),
    ...getAuthorProfiles().map((author) => ({
      url: `${siteUrl}/authors/${author.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55
    }))
  ];
}
