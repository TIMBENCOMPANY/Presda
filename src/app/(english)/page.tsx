import type { Metadata } from "next";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { toArticleCardRecord } from "@/lib/articleCards";
import { getPublishedArticles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";
import { curateLatestStories, developingLeadSlug } from "@/lib/homeCuration";

// Keep the homepage cached; refresh its daily edition without a deployment.
export const revalidate = 3600;

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  path: "/"
});

// Homepage-only selection; category archive curation remains independent.
const featuredHeroSlugs = [
  "illuminati-secret-society-real-history-myth",
  "places-that-dont-look-real-surreal-landscapes-travel",
  "self-driving-trucks-future-truck-drivers",
  "muhammad-ali-fighter-bigger-than-boxing",
  "history-of-money-gold-paper-digital",
  "bajau-people-sea-nomads-diving",
  "ancient-egypt-pharaohs-nile-3000-years-history",
  "keanu-reeves-kindness-powerful",
  "anime-how-japanese-animation-conquered-the-world",
  "natural-disasters-earthquakes-volcanoes-tsunamis",
  "top-10-hidden-gems-to-visit-in-2026",
  "carl-sagan-journey-through-our-universe"
] as const;

const editorialPickSlugs = [
  "avicii-life-music-death-tim-bergling",
  "galileo-and-the-church"
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
  const visibleSlugs = new Set([...featured, ...editorialPicks]
    .filter((article) => article.slug !== developingLeadSlug)
    .map((article) => article.slug));
  const moreStories = curateLatestStories(articles, visibleSlugs, new Date(), moreStoriesCount);

  return <HomeReferenceExperience slides={featured.map(toArticleCardRecord)} editorialPicks={editorialPicks.map(toArticleCardRecord)} moreStories={moreStories.map(toArticleCardRecord)} />;
}
