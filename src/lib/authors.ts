import { articles } from "@/data/articles";

export type AuthorProfile = {
  name: string;
  slug: string;
  role: string;
  bio: string;
};

export function toAuthorSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAuthorProfiles(): AuthorProfile[] {
  const names = Array.from(new Set(articles.map((article) => article.author))).sort();

  return names.map((name) => ({
    name,
    slug: toAuthorSlug(name),
    role: name === "PRESDA Editorial" ? "Editorial Team" : "Contributor Desk",
    bio:
      name === "PRESDA Editorial"
        ? "PRESDA Editorial is the independent newsroom team behind PRESDA coverage across world affairs, sport, business, technology, culture, travel, lifestyle, and science."
        : `${name} contributes focused reporting and analysis for PRESDA readers.`
  }));
}

export function getAuthorProfile(slug: string) {
  return getAuthorProfiles().find((author) => author.slug === slug);
}
