import type { Metadata } from "next";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { getPublishedArticles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";
import { curateLatestStories, featuredHeroSlugs } from "@/lib/homeCuration";

// Keep the homepage cached; refresh its daily edition without a deployment.
export const revalidate = 3600;

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  path: "/"
});

const editorialPickSlugs = [
  "avicii-life-music-death-tim-bergling",
  "galileo-and-the-church",
  "anti-aging-can-we-slow-down-human-aging"
];
const moreStoriesCount = 12;

export default function HomePage() {
  const articles = getPublishedArticles();
  const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));
  const featured = featuredHeroSlugs
    .map((slug) => articlesBySlug.get(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const editorialPicks = editorialPickSlugs
    .map((slug) => articlesBySlug.get(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const visibleSlugs = new Set([...featured, ...editorialPicks].map((article) => article.slug));
  const moreStories = curateLatestStories(articles, visibleSlugs, new Date(), moreStoriesCount);

  return <HomeReferenceExperience slides={featured} editorialPicks={editorialPicks} moreStories={moreStories} />;
}
