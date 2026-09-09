import type { MetadataRoute } from "next";
import { categories, getPublishedArticles } from "@/data/articles";
import { getArticleLastUpdated } from "@/lib/articleSeo";
import { getArticleCanonicalUrl } from "@/lib/articleValidation";
import { getAuthorProfiles } from "@/lib/authors";
import { toCategorySlug } from "@/lib/categories";
import { siteUrl } from "@/lib/seo";

const staticRouteDates: Record<string, string> = {
  "/about/": "2026-06-26",
  "/contact/": "2026-06-26",
  "/authors/": "2026-06-26",
  "/editorial-policy/": "2026-06-26",
  "/corrections-policy/": "2026-06-26",
  "/newsletter/": "2026-06-26",
  "/privacy-policy/": "2026-06-26",
  "/cookie-policy/": "2026-06-26",
  "/terms/": "2026-06-26",
  "/world-cup-2026/": "2026-06-26",
  "/world-cup-2026/match-center/": "2026-06-26"
};

function latestArticleUpdate(articles: ReturnType<typeof getPublishedArticles>) {
  return articles.reduce((latest, article) => {
    const updated = getArticleLastUpdated(article);
    return updated > latest ? updated : latest;
  }, "2026-06-26");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getPublishedArticles();
  const latestPublishedUpdate = latestArticleUpdate(articles);
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
      lastModified: new Date(staticRouteDates[route] ?? latestPublishedUpdate),
      changeFrequency: route === "/" || route === "/articles/" || route === "/trending/" ? "daily" as const : "monthly" as const,
      priority: route === "/" ? 1 : route === "/articles/" || route === "/trending/" ? 0.85 : 0.65
    })),
    ...articles.map((article) => ({
      url: getArticleCanonicalUrl(article.slug),
      lastModified: new Date(getArticleLastUpdated(article)),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/category/${toCategorySlug(category)}/`,
      lastModified: new Date(
        latestArticleUpdate(articles.filter((article) => article.category === category)) || latestPublishedUpdate
      ),
      changeFrequency: "daily" as const,
      priority: 0.75
    })),
    ...getAuthorProfiles().map((author) => ({
      url: `${siteUrl}/authors/${author.slug}/`,
      lastModified: new Date(latestPublishedUpdate),
      changeFrequency: "monthly" as const,
      priority: 0.55
    }))
  ];
}
