import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: ["https://presda.com/sitemap.xml", "https://presda.com/news-sitemap.xml"]
  };
}
