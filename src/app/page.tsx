import type { Metadata } from "next";
import { HomeReferenceExperience } from "@/components/HomeReferenceExperience";
import { articles } from "@/data/articles";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  path: "/"
});

const featuredSlugs = [
  "jon-snow-backs-morocco",
  "why-people-trust-ai-like-a-friend",
  "will-ai-agents-replace-jobs",
  "katy-perry-and-justin-trudeau-spark-global-speculation",
  "worlds-most-valuable-companies-in-2026",
  "top-10-hidden-gems-to-visit-in-2026",
  "the-brands-behind-world-cup-2026",
  "japan-enters-ai-care-era",
  "achraf-hakimi-king-of-africa",
  "yassine-bounou-africas-safest-hands"
];

export default function HomePage() {
  const featured = featuredSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const latest = [
    ...featured.slice(1),
    ...articles.filter((article) => !featuredSlugs.includes(article.slug))
  ].slice(0, 4);

  return <HomeReferenceExperience slides={featured} latest={latest} />;
}
