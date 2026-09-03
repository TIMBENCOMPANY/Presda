import type { ArticleCategory } from "@/data/articles";

export const categoryLabels: Record<ArticleCategory, string> = {
  AI: "AI",
  Business: "Business",
  Sport: "Sport",
  World: "World",
  Paparazzi: "Paparazzi",
  Lifestyle: "Lifestyle",
  Travel: "Travel",
  Science: "Science",
  "World Cup 2026": "World Cup 2026"
};

export const categoryDescriptions: Record<ArticleCategory, string> = {
  AI: "Artificial intelligence, automation, models, platforms, and the companies shaping the next digital layer.",
  Business: "Markets, companies, money, founders, strategy, and the forces moving global business.",
  Sport: "Elite performance, fan economies, clubs, leagues, broadcast rights, and the new technology inside sport.",
  World: "Global affairs, geopolitics, public life, cities, security, diplomacy, and the stories defining the day.",
  Paparazzi: "Celebrity culture, entertainment signal, public image, fashion moments, and the business of attention.",
  Lifestyle: "Luxury, wellness, design, travel, daily performance, and modern living with intelligent restraint.",
  Travel: "Destinations, hidden gems, future cities, cultural experiences, and premium journeys.",
  Science: "Research, discovery, space, archaeology, health, and evidence-led explanations.",
  "World Cup 2026": "Tournament coverage, football culture, fixtures, stadiums, fans, and World Cup analysis."
};

export function toCategorySlug(category: ArticleCategory) {
  return category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const categoriesBySlug: Record<string, ArticleCategory> = {
  ai: "AI",
  business: "Business",
  sport: "Sport",
  world: "World",
  paparazzi: "Paparazzi",
  lifestyle: "Lifestyle",
  travel: "Travel",
  science: "Science",
  "world-cup-2026": "World Cup 2026"
};

export function fromCategorySlug(slug: string): ArticleCategory | undefined {
  return categoriesBySlug[slug];
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00Z`));
}
