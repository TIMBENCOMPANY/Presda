import type { MetadataRoute } from "next";
import { articles, categories } from "@/data/articles";
import { toCategorySlug } from "@/lib/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://presda.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/articles`, lastModified: new Date() },
    ...articles.map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
      lastModified: new Date(article.date)
    })),
    ...categories.map((category) => ({
      url: `${baseUrl}/category/${toCategorySlug(category)}`,
      lastModified: new Date()
    }))
  ];
}
