import type { Metadata } from "next";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { getPublishedArticles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  path: "/"
});

const featuredHeroSlugs = [
  "dinosaurs-rise-fall-fossils-extinction",
  "how-humans-learned-to-speak",
  "titanic-what-really-happened",
  "ancient-greece-civilization-history",
  "history-of-slavery",
  "al-andalus-rise-glory-fall-muslim-iberia",
  "mark-zuckerberg-facebook-meta-story",
  "carl-sagan-journey-through-our-universe",
  "charles-darwin-theory-of-evolution",
  "history-of-the-vikings",
  "ottoman-empire-rise-and-fall",
  "history-of-egyptian-pyramids"
];
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
  const moreStories = articles.filter((article) => !visibleSlugs.has(article.slug)).slice(0, moreStoriesCount);

  return <HomeReferenceExperience slides={featured} editorialPicks={editorialPicks} moreStories={moreStories} />;
}
