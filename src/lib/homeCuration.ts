import type { Article } from "@/data/articles";

// Editorial selections, separate from article metadata and publication dates.
export const featuredHeroSlugs = [
  "ancient-egypt-pharaohs-nile-3000-years-history",
  "house-music-brain-rhythm-128-bpm-science-dancing",
  "muhammad-ali-fighter-bigger-than-boxing",
  "history-of-money-gold-paper-digital",
  "self-driving-trucks-future-truck-drivers",
  "history-of-perfume-scent-beauty-power-luxury",
  "mali-empire-mansa-musa-gold-pilgrimage-history",
  "alzheimers-disease-brain-memory-loss",
  "dubai-future-cities-rise-above-the-desert",
  "diego-maradona-genius-napoli-life-death-legacy",
  "keanu-reeves-kindness-powerful",
  "top-10-hidden-gems-to-visit-in-2026"
] as const;

// Reviewed evergreen candidates. Time-sensitive news does not automatically
// resurface just because it is old. Featured stories are excluded by the caller.
export const evergreenStorySlugs = [
  "france-history-kings-revolution-empire-republic",
  "japan-samurai-meiji-restoration-modern-empire-history",
  "aztec-empire-tenochtitlan-mexica-rise-fall",
  "umayyad-caliphate-damascus-expansion-rise-fall",
  "han-dynasty-china-silk-road-history-legacy",
  "spanish-empire-columbus-conquest-silver-global-history",
  "inca-empire-andes-machu-picchu-rise-fall",
  "morocco-history-dynasties-kingdom-independence",
  "british-empire-history-rise-fall-global-legacy",
  "abbasid-caliphate-baghdad-islamic-golden-age",
  "persian-empire-cyrus-great-achaemenid-history",
  "byzantine-empire-eastern-rome-constantinople-1453",
  "mongol-empire-genghis-khan-conquests-legacy",
  "endless-scrolling-phone-attention-sleep-science",
  "good-vs-evil-human-nature-morality",
  "hachiko-why-dogs-loyal-to-humans",
  "denisovans-lost-humans-dna",
  "cats-humans-domestication-history",
  "dinosaurs-rise-fall-fossils-extinction",
  "how-humans-learned-to-speak",
  "carl-sagan-journey-through-our-universe",
  "natural-disasters-earthquakes-volcanoes-tsunamis",
  "domain-investing-premium-domain-sales",
  "samsung-from-food-to-tech-empire",
  "mark-zuckerberg-facebook-meta-story",
  "bill-gates-foundation-impact",
  "will-ai-agents-replace-jobs",
  "why-people-trust-ai-like-a-friend",
  "robot-revolution-ai-future-2030",
  "kobe-bryant-mamba-mentality-life-legacy",
  "lonely-genius-great-minds-solitude-creativity",
  "real-history-of-coffee",
  "history-of-gold",
  "titanic-what-really-happened",
  "history-of-the-vikings",
  "history-of-egyptian-pyramids"
] as const;

const evergreen = new Set<string>(evergreenStorySlugs);
const dayMilliseconds = 86_400_000;

function dailyRank(slug: string, day: number) {
  let hash = 2166136261;
  for (const character of `${day}:${slug}`) {
    hash = Math.imul(hash ^ character.charCodeAt(0), 16777619);
  }
  return hash >>> 0;
}

/** One server-selected UTC daily edition. Never reshuffle during hydration. */
export function curateLatestStories(
  articles: readonly Article[],
  excludedSlugs: ReadonlySet<string>,
  now: Date,
  limit = 12
): Article[] {
  const available = Array.from(new Map(articles.map((article) => [article.slug, article])).values())
    .filter((article) => !excludedSlugs.has(article.slug))
    // Stable ties retain the editorial ordering in the source catalogue.
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  if (limit <= 0 || available.length === 0) return [];

  const day = Math.floor(now.getTime() / dayMilliseconds);
  const recent = available.slice(0, 24);
  const recentSlugs = new Set(recent.map((article) => article.slug));
  const archive = available.filter((article) => evergreen.has(article.slug) && !recentSlugs.has(article.slug));
  const reviewed = available.filter((article) => evergreen.has(article.slug));
  const selected: Article[] = [available[0]];
  const used = new Set([available[0].slug]);
  const counts = new Map<string, number>([[available[0].category, 1]]);

  function pick(pool: Article[], categoryCap: number, avoidPrevious = true) {
    return pool.filter((article) =>
      !used.has(article.slug)
      && (!avoidPrevious || article.category !== selected[selected.length - 1].category)
      && (counts.get(article.category) ?? 0) < categoryCap
    ).sort((a, b) =>
      (counts.get(a.category) ?? 0) - (counts.get(b.category) ?? 0)
      || dailyRank(a.slug, day) - dailyRank(b.slug, day)
      || a.slug.localeCompare(b.slug)
    )[0];
  }

  while (selected.length < limit) {
    // Every third slot gives the older, reviewed archive first choice.
    const preferred = selected.length % 3 === 2 ? archive : recent;
    const next = pick(preferred, 2)
      ?? pick(reviewed, 2)
      ?? pick(recent, 2)
      ?? pick(available, 2)
      // Graceful fallback for smaller catalogues or heavy exclusions.
      ?? pick(available, Infinity)
      ?? pick(available, Infinity, false);
    if (!next) break;
    selected.push(next);
    used.add(next.slug);
    counts.set(next.category, (counts.get(next.category) ?? 0) + 1);
  }
  return selected;
}
