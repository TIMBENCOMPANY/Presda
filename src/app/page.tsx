import type { Metadata } from "next";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { getPublishedArticles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  path: "/"
});

const featuredArticleCount = 8;
const moreStoriesCount = 12;

export default function HomePage() {
  const articles = getPublishedArticles();
  const featured = articles.slice(0, featuredArticleCount);
  const latest = articles
    .filter((article) => !featured.some((featuredArticle) => featuredArticle.slug === article.slug))
    .slice(0, 4);
  const visibleSlugs = new Set([...featured, ...latest].map((article) => article.slug));
  const moreStories = articles.filter((article) => !visibleSlugs.has(article.slug)).slice(0, moreStoriesCount);

  return <HomeReferenceExperience slides={featured} latest={latest} moreStories={moreStories} />;
}
