import type { ArticleCategory } from "@/data/articles";

export const categoryLabels: Record<ArticleCategory, string> = {
  AI: "AI",
  GAMING: "Gaming",
  SPORT: "Sport",
  BUSINESS: "Business",
  WORLD: "World",
  PAPARAZZI: "Paparazzi",
  LIFESTYLE: "Lifestyle"
};

export const categoryDescriptions: Record<ArticleCategory, string> = {
  AI: "Artificial intelligence, automation, models, platforms, and the companies shaping the next digital layer.",
  GAMING: "Games, esports, creator ecosystems, studios, streaming culture, and the future of interactive entertainment.",
  SPORT: "Elite performance, fan economies, clubs, leagues, broadcast rights, and the new technology inside sport.",
  BUSINESS: "Markets, companies, money, founders, strategy, and the forces moving global business.",
  WORLD: "Global affairs, geopolitics, public life, cities, security, diplomacy, and the stories defining the day.",
  PAPARAZZI: "Celebrity culture, entertainment signal, public image, fashion moments, and the business of attention.",
  LIFESTYLE: "Luxury, wellness, design, travel, daily performance, and modern living with intelligent restraint."
};

export function toCategorySlug(category: ArticleCategory) {
  return category.toLowerCase();
}

export function fromCategorySlug(slug: string): ArticleCategory | undefined {
  const upper = slug.toUpperCase();
  if (
    upper === "AI" ||
    upper === "GAMING" ||
    upper === "SPORT" ||
    upper === "BUSINESS" ||
    upper === "WORLD" ||
    upper === "PAPARAZZI" ||
    upper === "LIFESTYLE"
  ) {
    return upper;
  }

  return undefined;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00Z`));
}
