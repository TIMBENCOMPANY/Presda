export type ArticleCategory =
  | "AI"
  | "GAMING"
  | "SPORT"
  | "BUSINESS"
  | "WORLD"
  | "PAPARAZZI"
  | "LIFESTYLE";

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  date: string;
  author: string;
  coverImage: string;
  coverAlt: string;
  content: string[];
  quote?: string;
  source?: {
    name: string;
    url?: string;
  };
  tags: string[];
  readingTime?: string;
};

export const articles: Article[] = [
  {
    id: "001",
    slug: "openai-unveils-next-gen-model",
    title: "OpenAI Unveils Next-Gen Model",
    excerpt:
      "OpenAI introduces a new generation of AI technology with major improvements in speed, reasoning, and multimodal capabilities.",
    category: "AI",
    date: "2026-05-18",
    author: "PRESDA Editorial",
    coverImage: "/articles/openai-cover.svg",
    coverAlt: "Futuristic AI interface with red PRESDA lighting",
    content: [
      "OpenAI has introduced its latest generation of artificial intelligence technology, marking a major step forward in the evolution of digital assistants and intelligent systems.",
      "The new model focuses on improved reasoning, faster response times, and stronger multimodal performance, allowing users to interact through text, images, and other formats more naturally.",
      "For the tech industry, this release represents another signal that AI is becoming a core part of everyday products, from search engines and productivity tools to creative platforms and business automation.",
      "PRESDA will continue tracking how this technology affects creators, companies, developers, and digital culture worldwide."
    ],
    quote: "The future of news is fast, intelligent, and visual.",
    source: {
      name: "Official company announcement",
      url: "https://example.com"
    },
    tags: ["AI", "Technology", "OpenAI", "Innovation"],
    readingTime: "3 min read"
  },
  {
    id: "002",
    slug: "gaming-studios-redesign-live-service-economy",
    title: "Gaming Studios Redesign The Live-Service Economy",
    excerpt:
      "Major publishers are rebuilding game launches around seasons, creator clips, esports events, and always-on community feedback.",
    category: "GAMING",
    date: "2026-05-17",
    author: "PRESDA Gaming Coverage",
    coverImage: "/articles/gaming-cover.svg",
    coverAlt: "Minimal futuristic gaming arena in black and red",
    content: [
      "The modern game launch is no longer a single release date. It is a rolling media system built around seasons, creator moments, balance updates, and competitive events.",
      "Studios are investing in cleaner dashboards, faster patch communication, and community intelligence because player trust now moves as quickly as social clips.",
      "For publishers, the next phase of gaming is not only about better graphics. It is about building worlds that feel alive without exhausting the audience."
    ],
    quote: "The game is now the platform, the broadcast, and the community at the same time.",
    source: {
      name: "PRESDA industry analysis"
    },
    tags: ["Gaming", "Esports", "Creators", "Live Service"],
    readingTime: "4 min read"
  },
  {
    id: "003",
    slug: "stadiums-become-data-arenas",
    title: "Stadiums Become Data Arenas",
    excerpt:
      "Elite clubs are turning match day into a biometric, broadcast, and commerce engine for the next generation of sport.",
    category: "SPORT",
    date: "2026-05-16",
    author: "PRESDA Sport Lab",
    coverImage: "/articles/sport-cover.svg",
    coverAlt: "Futuristic stadium line art with red data rings",
    content: [
      "The modern stadium is no longer only a venue. It is a sensor network, content studio, retail platform, and loyalty engine.",
      "Teams are packaging data-rich experiences for broadcasters while giving fans more personalized access to the game around them.",
      "The result is a sport economy where atmosphere, analytics, and media rights are increasingly inseparable."
    ],
    quote: "The next broadcast deal may be shaped as much by sensors as by superstars.",
    source: {
      name: "PRESDA Sport Lab"
    },
    tags: ["Sport", "Broadcast", "Data", "Fans"],
    readingTime: "4 min read"
  },
  {
    id: "004",
    slug: "markets-price-the-shock",
    title: "Markets Price The Shock",
    excerpt:
      "Investors move defensively as policy risk, energy exposure, and AI valuations collide across global markets.",
    category: "BUSINESS",
    date: "2026-05-15",
    author: "PRESDA Markets Coverage",
    coverImage: "/articles/business-cover.svg",
    coverAlt: "Black trading dashboard with thin red market lines",
    content: [
      "The opening session reflected a market that wants growth but is pricing risk with unusual discipline. Defensive sectors held firm while high-beta names moved unevenly.",
      "Analysts are watching whether AI capital expenditure becomes a durable productivity story or a pressure point for margins.",
      "PRESDA's business Coverage is tracking both the numbers and the narrative shaping investor conviction."
    ],
    quote: "Markets are reacting not only to news, but to the velocity of uncertainty.",
    source: {
      name: "PRESDA Markets Coverage"
    },
    tags: ["Business", "Markets", "Policy", "AI"],
    readingTime: "5 min read"
  },
  {
    id: "005",
    slug: "world-under-watch",
    title: "World Under Watch",
    excerpt:
      "Civilians, markets, leaders, and cities move through a volatile news cycle as PRESDA tracks the stories defining the day.",
    category: "WORLD",
    date: "2026-05-14",
    author: "PRESDA Global Coverage",
    coverImage: "/articles/world-cover.svg",
    coverAlt: "Abstract global map with red radar signal",
    content: [
      "The global news cycle is moving at the speed of live video, market alerts, satellite feeds, and emergency briefings.",
      "Across capitals and border cities, the story is no longer a single event. It is a layered map of policy, security, energy, trade, and public emotion.",
      "The newsroom priority is simple: show what matters, explain why it matters, and give readers a clean path from headline to evidence."
    ],
    quote: "The new media front page has to feel alive, but it still has to earn trust line by line.",
    source: {
      name: "PRESDA Global Coverage"
    },
    tags: ["World", "Politics", "Security", "Global"],
    readingTime: "6 min read"
  },
  {
    id: "006",
    slug: "celebrity-signal-economy",
    title: "The Celebrity Signal Economy",
    excerpt:
      "Studios and creators are treating every public appearance as a data-rich media asset in the premium attention market.",
    category: "PAPARAZZI",
    date: "2026-05-13",
    author: "PRESDA Culture Coverage",
    coverImage: "/articles/paparazzi-cover.svg",
    coverAlt: "Red carpet camera flashes drawn in minimal red and white lines",
    content: [
      "Celebrity coverage is becoming more structured, more measurable, and more immediate. A single public appearance can move streaming charts, fashion sales, and brand sentiment in minutes.",
      "Entertainment desks are building live dashboards around what used to be soft coverage.",
      "The audience still wants glamour, but the business behind that glamour is increasingly technical."
    ],
    quote: "The modern celebrity launch is part premiere, part market signal, part social experiment.",
    source: {
      name: "PRESDA Culture Coverage"
    },
    tags: ["Paparazzi", "Culture", "Entertainment", "Creators"],
    readingTime: "5 min read"
  },
  {
    id: "007",
    slug: "luxury-wellness-turns-precision-market",
    title: "Luxury Wellness Turns Into A Precision Market",
    excerpt:
      "Premium health, travel, and daily performance brands are redesigning modern lifestyle around data and trust.",
    category: "LIFESTYLE",
    date: "2026-05-12",
    author: "PRESDA Lifestyle Coverage",
    coverImage: "/articles/lifestyle-cover.svg",
    coverAlt: "Minimal luxury wellness space with red accent lighting",
    content: [
      "Lifestyle brands are moving from broad aspiration to measurable personal systems. Sleep, nutrition, travel, and wellness now sit inside a premium data economy.",
      "The best brands are using technology quietly, with cleaner design, stronger privacy promises, and more credible guidance.",
      "For consumers, the question is not whether a product looks premium. It is whether the product can earn a place inside daily life."
    ],
    quote: "Luxury is becoming less about noise and more about intelligent calm.",
    source: {
      name: "PRESDA Lifestyle Coverage"
    },
    tags: ["Lifestyle", "Wellness", "Luxury", "Design"],
    readingTime: "4 min read"
  }
];

export const categories: ArticleCategory[] = [
  "AI",
  "GAMING",
  "SPORT",
  "BUSINESS",
  "WORLD",
  "PAPARAZZI",
  "LIFESTYLE"
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((article) => article.category === category);
}

export function getRelatedArticles(article: Article, limit = 3) {
  const sameCategory = articles.filter(
    (item) => item.category === article.category && item.slug !== article.slug
  );
  const fallback = articles.filter(
    (item) => item.category !== article.category && item.slug !== article.slug
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
