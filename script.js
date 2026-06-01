const root = document.documentElement;
const body = document.body;

const articleRecords = [
  {
    title: "Top 10 Hidden Gems To Visit In 2026",
    category: "Travel",
    date: "2026-06-01",
    author: "PRESDA Editorial",
    readingTime: "7 min read",
    source: "PRESDA Travel Desk",
    imageDark: "/images/articles/travel-hidden-gems.svg",
    imageLight: "/images/articles/travel-hidden-gems.svg",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Futuristic travel collage of hidden destinations for PRESDA",
    excerpt: "A cinematic guide to ten under-the-radar destinations where culture, nature, architecture, and quiet luxury meet in 2026.",
    content: [
      "The best travel stories in 2026 are not only happening in the cities everyone already knows. They are unfolding in smaller islands, mountain towns, desert edges, creative districts, and coastal places where the experience still feels personal.",
      "PRESDA's hidden-gems list focuses on places that reward curiosity: the Albanian Riviera, the Azores, Matera, Georgia's Kakheti wine region, Oman beyond Muscat, Slovenia's Soča Valley, Japan's Setouchi islands, Colombia's coffee triangle, Namibia's Skeleton Coast, and the Faroe Islands.",
      "What connects these destinations is not hype. It is atmosphere. Each offers a different kind of escape, from cinematic landscapes and local food scenes to slow architecture, boutique stays, and routes that still feel discovered rather than consumed.",
      "For travelers, the new luxury is space, authenticity, and a story worth remembering. In 2026, the smartest itinerary may be the one that avoids the obvious headline."
    ],
    tags: ["Travel", "Hidden Gems", "2026"],
    highlightTerms: ["Top 10", "Hidden Gems", "2026", "Travel"],
    featured: true,
    trending: true,
    editorPick: true,
    mostRead: true
  },
  {
    title: "World's Most Valuable Companies In 2026",
    category: "Business",
    date: "2026-05-31",
    author: "PRESDA Editorial",
    readingTime: "6 min read",
    source: "PRESDA Business Desk",
    imageDark: "/images/articles/valuable-companies-2026.svg",
    imageLight: "/images/articles/valuable-companies-2026.svg",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Premium skyline showing the world's most valuable companies in 2026",
    excerpt: "Artificial intelligence, chips, cloud platforms, software, energy, and consumer ecosystems continue to define the top of global market value.",
    content: [
      "The world's most valuable companies in 2026 reflect a clear market signal: artificial intelligence infrastructure, cloud computing, semiconductors, software ecosystems, and global consumer platforms are still commanding investor attention.",
      "Nvidia, Microsoft, Apple, Alphabet, Amazon, Meta, Saudi Aramco, Broadcom, TSMC, and Tesla remain central names in the conversation, though their exact order can shift quickly with market prices, earnings, regulation, and currency movement.",
      "The deeper story is how value is being created. Companies that control compute power, operating systems, distribution networks, chips, advertising platforms, and energy capacity are shaping the next decade of business.",
      "For PRESDA, market capitalization is not only a scoreboard. It is a map of where the world expects growth, influence, and technological leverage to concentrate next."
    ],
    tags: ["Business", "Markets", "Technology"],
    highlightTerms: ["Most Valuable", "Companies", "2026", "AI", "Nvidia", "Microsoft", "Apple"],
    featured: true,
    trending: true,
    editorPick: true
  },
  {
    title: "Katy Perry & Justin Trudeau Spark Global Speculation",
    category: "Paparazzi",
    date: "2026-05-30",
    author: "PRESDA Editorial",
    readingTime: "4 min read",
    source: "PRESDA Culture Desk",
    imageDark: "/images/articles/katy-trudeau-speculation.svg",
    imageLight: "/images/articles/katy-trudeau-speculation.svg",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Red carpet media lights representing global celebrity speculation",
    excerpt: "A wave of online attention shows how quickly celebrity culture, politics, and social media can turn public appearances into a worldwide conversation.",
    content: [
      "Katy Perry and Justin Trudeau have become the center of global speculation after online audiences began connecting public moments, social posts, and media chatter into a larger celebrity narrative.",
      "PRESDA is treating the story carefully: speculation is not confirmation. What is confirmed is the speed at which attention now moves when entertainment culture and political celebrity intersect.",
      "The reaction says as much about the internet as it does about the people involved. Fans, commentators, and tabloids can transform a small signal into a worldwide conversation within hours.",
      "In the modern attention economy, the line between public image, private life, and viral interpretation keeps getting thinner."
    ],
    tags: ["Paparazzi", "Celebrity", "Culture"],
    highlightTerms: ["Katy Perry", "Justin Trudeau", "Speculation", "Global"],
    featured: true,
    trending: true
  },
  {
    title: "Palestine: A Humanitarian Crisis The World Cannot Ignore",
    category: "World",
    date: "2026-05-29",
    author: "PRESDA Editorial",
    readingTime: "7 min read",
    source: "PRESDA World Desk",
    imageDark: "/images/articles/palestine-humanitarian-crisis.svg",
    imageLight: "/images/articles/palestine-humanitarian-crisis.svg",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Respectful PRESDA visual representing Palestine humanitarian crisis and urgent aid",
    excerpt: "Beyond politics and headlines, the humanitarian emergency in Palestine remains a human story of displacement, hunger, medical pressure, and survival.",
    content: [
      "The crisis in Palestine remains one of the world's most urgent humanitarian emergencies, with civilians facing displacement, insecurity, damaged infrastructure, and severe pressure on access to food, water, healthcare, and shelter.",
      "Behind every statistic is a family trying to survive. Hospitals, aid workers, journalists, and local communities continue to operate under conditions that make ordinary life almost impossible.",
      "International agencies and humanitarian organizations have repeatedly warned that sustained access, protection of civilians, and reliable aid delivery are essential to preventing deeper catastrophe.",
      "PRESDA's focus is the human dimension: the people living through the crisis, the systems under strain, and the responsibility of the world to keep watching, documenting, and responding."
    ],
    tags: ["World", "Palestine", "Humanitarian Crisis"],
    highlightTerms: ["Palestine", "Humanitarian Crisis", "World", "civilians"],
    featured: true,
    trending: true,
    mostRead: true
  },
  {
    id: "001",
    slug: "openai-next-gen-model",
    title: "OpenAI Unveils Next-Gen Model",
    category: "AI",
    date: "2026-05-27",
    author: "PRESDA Editorial",
    readingTime: "4 min read",
    source: "PRESDA Tech Desk",
    imageDark: "/images/articles/openai-sam-dark.png",
    imageLight: "/images/articles/openai-sam-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Sam Altman and OpenAI cinematic PRESDA poster on a dark background",
    excerpt: "A new generation of artificial intelligence is pushing faster reasoning, sharper multimodal work, and a more cinematic future for digital assistants.",
    content: [
      "OpenAI's newest model signals a sharper phase for artificial intelligence, where speed, context, and multimodal understanding are no longer experimental luxuries but expected parts of the modern workflow.",
      "The shift is especially important for creators, developers, researchers, and media teams. AI systems are moving from passive chat windows into active editorial, analytical, and operational tools.",
      "For PRESDA, the story is not only about model performance. It is about how intelligent systems change the rhythm of culture, business, creativity, and public information.",
      "The next era of digital news will be faster, more visual, and more personalized, while still depending on trust, clarity, and human editorial judgment."
    ],
    tags: ["AI", "OpenAI", "Technology"],
    highlightTerms: ["OpenAI", "artificial intelligence", "AI"],
    featured: true,
    trending: true,
    editorPick: true,
    mostRead: true
  },
  {
    id: "002",
    slug: "xabi-alonso-chelsea-pressure",
    title: "Xabi Alonso Steps Into The Chelsea Spotlight",
    category: "Sport",
    date: "2026-05-22",
    author: "PRESDA Editorial",
    readingTime: "5 min read",
    source: "PRESDA Sport Desk",
    imageDark: "/images/articles/xabi-alonso-dark.png",
    imageLight: "/images/articles/xabi-alonso-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Xabi Alonso cinematic football poster with Chelsea flag",
    excerpt: "A new tactical era takes shape as Xabi Alonso becomes the face of pressure, expectation, and elite football control.",
    content: [
      "Xabi Alonso's rise as a modern coach has become one of football's sharpest leadership stories, built on control, calm decisions, and a clear tactical identity.",
      "Chelsea's global spotlight makes every detail bigger. Training ideas, squad chemistry, transfers, and early results all become part of the public conversation.",
      "For supporters, the question is whether a new manager can turn potential into rhythm fast enough for a demanding club culture.",
      "PRESDA will follow the season through tactics, dressing-room pressure, and the business machine surrounding elite European football."
    ],
    tags: ["Sport", "Football", "Chelsea"],
    highlightTerms: ["Xabi Alonso", "Chelsea", "football"],
    featured: true,
    trending: true,
    editorPick: true
  },
  {
    id: "003",
    slug: "gta6-trailer-culture-shift",
    title: "GTA 6 Becomes A Culture Moment",
    category: "Lifestyle",
    date: "2026-05-21",
    author: "PRESDA Editorial",
    readingTime: "4 min read",
    source: "PRESDA Culture Desk",
    imageDark: "/images/articles/gta6-poster-dark.png",
    imageLight: "/images/articles/gta6-poster-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "GTA 6 neon Vice City cinematic poster",
    excerpt: "The next major gaming release is already behaving less like a product and more like a global entertainment event.",
    content: [
      "Major game releases now sit beside film premieres, fashion launches, and live sport in the cultural calendar. GTA 6 is one of the clearest examples.",
      "Fans are not only waiting to play. They are decoding trailers, building theories, debating visuals, and turning every detail into social media momentum.",
      "The business impact stretches across streaming, hardware, advertising, music, and digital fashion. One game can move an entire entertainment ecosystem.",
      "PRESDA will track how gaming continues to shape taste, youth culture, celebrity influence, and the future of interactive storytelling."
    ],
    tags: ["Gaming", "Lifestyle", "Culture"],
    highlightTerms: ["GTA 6", "gaming", "global entertainment"],
    featured: true,
    trending: true,
    mostRead: true
  },
  {
    id: "004",
    slug: "elon-mars-signal",
    title: "Elon Musk Turns Mars Into A Media Signal",
    category: "Business",
    date: "2026-05-20",
    author: "PRESDA Editorial",
    readingTime: "6 min read",
    source: "PRESDA Business Desk",
    imageDark: "/images/articles/elon-mars-dark.png",
    imageLight: "/images/articles/elon-mars-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Elon Musk above a futuristic city with SpaceX and Tesla branding",
    excerpt: "Space ambition, investor attention, and spectacle continue to merge as Mars becomes a brand, a mission, and a market narrative.",
    content: [
      "The Mars story is no longer only a scientific ambition. It is a media signal, a capital magnet, and a symbol of how technology companies sell the future.",
      "Every launch, prototype, and public statement becomes part of a larger narrative about risk, acceleration, and human expansion.",
      "Investors watch the engineering, but audiences watch the mythology. That combination gives space companies unusual cultural power.",
      "The PRESDA business desk will continue following the money, the engineering milestones, and the public imagination around the new space economy."
    ],
    tags: ["Business", "Space", "Tesla"],
    highlightTerms: ["Elon Musk", "Mars", "Space"],
    featured: true,
    trending: true,
    editorPick: true
  },
  {
    id: "005",
    slug: "world-cup-2026-countdown",
    title: "World Cup 2026 Countdown Enters Full Speed",
    category: "Sport",
    date: "2026-05-28",
    author: "PRESDA Editorial",
    readingTime: "5 min read",
    source: "PRESDA Sport Desk",
    imageDark: "/images/articles/fifa-world-cup-dark.png",
    imageLight: "/images/articles/fifa-world-cup-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "FIFA football official in a stadium cinematic poster",
    excerpt: "Cities, sponsors, broadcasters, and fans are preparing for one of the largest sports spectacles of the decade.",
    content: [
      "The World Cup countdown is now a full media operation. Host cities are preparing infrastructure, broadcasters are building narratives, and brands are planning global campaigns.",
      "Football remains the core, but the modern tournament is also tourism, technology, fashion, music, and national identity compressed into one month.",
      "For players, the pressure is immense. For supporters, the tournament becomes a shared calendar of emotion and expectation.",
      "PRESDA will cover the road to the tournament through performance, culture, and the worldwide business of football."
    ],
    tags: ["Sport", "World Cup", "Football"],
    highlightTerms: ["World Cup 2026", "football"],
    featured: true,
    trending: true,
    mostRead: true
  },
  {
    id: "006",
    slug: "bill-gates-foundation-impact",
    title: "Bill Gates Foundation Turns Innovation Into Impact",
    category: "Business",
    date: "2026-05-18",
    author: "PRESDA Editorial",
    readingTime: "4 min read",
    source: "PRESDA Business Desk",
    imageDark: "/images/articles/bill-gates-dark.png",
    imageLight: "/images/articles/bill-gates-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Bill Gates foundation cinematic poster with global health and innovation panels",
    excerpt: "Global health, climate innovation, education, and science remain the pillars of one of the world's most watched philanthropic machines.",
    content: [
      "The Bill and Melinda Gates Foundation continues to sit at the center of global conversations about health, education, climate innovation, and scientific progress.",
      "Its influence is measured not only in funding, but in the way large-scale philanthropy can direct attention toward urgent problems that markets often move too slowly to solve.",
      "From vaccines and disease prevention to clean technology and learning access, the foundation has built a model where innovation is expected to create measurable impact.",
      "PRESDA will keep tracking how philanthropic capital shapes policy, technology, and the future of global development."
    ],
    tags: ["Business", "Innovation", "Health"],
    highlightTerms: ["Bill Gates", "Foundation", "Innovation", "Impact"],
    editorPick: true
  },
  {
    id: "007",
    slug: "japan-enters-ai-care-era",
    title: "Japan Enters The AI Care Era",
    category: "World",
    date: "2026-05-17",
    author: "PRESDA Editorial",
    readingTime: "5 min read",
    source: "PRESDA World Desk",
    imageDark: "/images/articles/japan-ai-care-dark.png",
    imageLight: "/images/articles/japan-ai-care-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Japanese elder holding hands with a care robot in a cinematic poster",
    excerpt: "Facing an aging population and caregiver shortages, Japan is turning to AI-powered robots to support daily care.",
    content: [
      "Japan is entering a new AI care era as hospitals, nursing homes, and families look for support in a country facing severe demographic pressure.",
      "Robots are beginning to assist with medication reminders, conversation, mobility support, and emotional comfort for elderly citizens.",
      "The technology raises practical questions about trust, privacy, cost, and the balance between human warmth and machine assistance.",
      "PRESDA will follow how Japan's experiment with care robotics influences the future of aging societies worldwide."
    ],
    tags: ["World", "AI", "Japan"],
    highlightTerms: ["Japan", "AI Care", "robots", "care"],
    editorPick: true
  },
  {
    id: "008",
    slug: "keanu-reeves-kindness-powerful",
    title: "Keanu Reeves Shows Kindness Is Powerful",
    category: "Paparazzi",
    date: "2026-05-16",
    author: "PRESDA Editorial",
    readingTime: "3 min read",
    source: "PRESDA Culture Desk",
    imageDark: "/images/articles/keanu-kindness-dark.png",
    imageLight: "/images/articles/keanu-kindness-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Keanu Reeves comforting a child in a hospital room with kindness overlays",
    excerpt: "The actor's quiet generosity becomes a reminder that compassion can travel further than performance.",
    content: [
      "Keanu Reeves has long been treated as a rare Hollywood figure because his public image is built less on spectacle and more on quiet humanity.",
      "Reports of private generosity continue to resonate because they point to a kind of celebrity influence that does not need cameras to feel powerful.",
      "In a culture that rewards attention, a private act of compassion can still become the story people remember.",
      "PRESDA will keep tracking the human stories behind fame, where character can matter as much as visibility."
    ],
    tags: ["Paparazzi", "Hollywood", "Culture"],
    highlightTerms: ["Keanu Reeves", "Kindness", "compassion", "humanity"],
    mostRead: true
  },
  {
    id: "009",
    slug: "mourinho-real-madrid-return-signal",
    title: "Mourinho Return Talk Shakes Madrid Again",
    category: "Sport",
    date: "2026-05-15",
    author: "PRESDA Editorial",
    readingTime: "4 min read",
    source: "PRESDA Sport Desk",
    imageDark: "/images/articles/mourinho-real-madrid-dark.png",
    imageLight: "/images/articles/mourinho-real-madrid-light.png",
    imageFit: "cover",
    imagePosition: "center center",
    imageAlt: "Jose Mourinho with Real Madrid crest and Santiago Bernabeu stadium",
    excerpt: "Real Madrid nostalgia, tactical identity, and elite football pressure collide whenever Mourinho's name returns to the conversation.",
    content: [
      "Jose Mourinho remains one of football's most cinematic figures, a manager whose name still carries memory, conflict, trophies, and theatre.",
      "Whenever Real Madrid enters the conversation, the story becomes bigger than a coaching rumor. It becomes a debate about identity, power, and the emotional pull of past eras.",
      "Modern football moves fast, but legendary managers keep shaping how supporters imagine the future of their clubs.",
      "PRESDA will follow the signals, the politics, and the tactical questions behind one of football's most durable narratives."
    ],
    tags: ["Sport", "Real Madrid", "Football"],
    highlightTerms: ["Mourinho", "Real Madrid", "football"]
  }
];

const slugify = (value = "") =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const articles = articleRecords
  .map((article, index) => {
    const imageFit = article.imageFit || "cover";
    return {
      ...article,
      id: article.id || String(index + 1).padStart(3, "0"),
      slug: article.slug || slugify(article.title),
      imageFit,
      imagePosition: article.imagePosition || (imageFit === "contain" ? "center center" : "center center")
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const imagePairs = Object.fromEntries(
  articles.map((article) => [
    article.slug,
    {
      dark: article.imageDark || article.image,
      light: article.imageLight || article.imageDark || article.image
    }
  ])
);

const versioned = (src) => `${src}?v=presda-content-20260601`;

function updateThemeImages(mode) {
  const key = mode === "light" ? "light" : "dark";
  document.querySelectorAll("[data-article-image-slug]").forEach((image) => {
    const pair = imagePairs[image.dataset.articleImageSlug];
    if (pair) image.src = versioned(pair[key]);
  });
}

function updateFavicons(mode) {
  const icon = mode === "light" ? "favicon-light.png?v=presda-20260523-light" : "favicon-dark.png?v=presda-20260523-dark";
  document.querySelectorAll("[data-dynamic-favicon]").forEach((link) => {
    link.href = `/${icon}`;
  });
}

function setTheme(mode) {
  const isLight = mode === "light";
  root.classList.toggle("light-mode", isLight);
  body.classList.toggle("light-mode", isLight);
  document.querySelector(".theme-toggle")?.setAttribute("aria-pressed", String(isLight));
  updateFavicons(mode);
  updateThemeImages(mode);
}

const savedMode = localStorage.getItem("presda-mode");
const preferredMode = savedMode || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
setTheme(preferredMode);

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const nextMode = root.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem("presda-mode", nextMode);
  setTheme(nextMode);
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open") || false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector(".newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  if (!button) return;
  const original = button.textContent;
  button.textContent = "Subscribed";
  window.setTimeout(() => {
    button.textContent = original;
  }, 1600);
});

/* PRESDA rotating hero progressive enhancement */
(() => {
  if (window.__presdaHeroRotator) return;
  window.__presdaHeroRotator = true;

  const shell = document.querySelector(".hero-shell");
  const category = document.querySelector(".hero-meta span");
  const date = document.querySelector(".hero-meta time");
  const title = document.querySelector(".hero-copy h1");
  const excerpt = document.querySelector(".hero-copy p");
  const link = document.querySelector(".hero-actions .primary-link");
  const reading = document.querySelector(".hero-actions span");
  const image = document.querySelector(".hero-media img");
  const caption = document.querySelector(".hero-media figcaption");
  const progress = document.querySelector(".hero-progress");

  if (!shell || !title || !excerpt || !image || !progress || !Array.isArray(articles)) return;

  const featuredStories = articles
    .filter((article) => article.featured)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 6);
  if (!featuredStories.length) return;

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

  const highlight = (value, terms = []) => {
    let output = escapeHtml(value);
    [...new Set(terms.filter(Boolean))]
      .sort((a, b) => b.length - a.length)
      .forEach((term) => {
        const safe = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        output = output.replace(new RegExp(`(^|[^A-Za-z0-9])(${safe})(?=$|[^A-Za-z0-9])`, "gi"), `$1<mark class="title-red">$2</mark>`);
      });
    return output;
  };

  const formatDate = (value) => new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const articleImage = (article) => {
    const themeKey = document.documentElement.classList.contains("light-mode") ? "imageLight" : "imageDark";
    return versioned(article[themeKey] || article.imageDark || article.imageLight || article.image);
  };

  let active = 0;
  let timer;

  const draw = (index, animate = true) => {
    const article = featuredStories[index % featuredStories.length];
    if (!article) return;
    if (animate) shell.classList.add("is-transitioning");

    window.setTimeout(() => {
      active = index % featuredStories.length;
      if (category) category.textContent = article.category;
      if (date) {
        date.textContent = formatDate(article.date);
        date.setAttribute("datetime", article.date);
      }
      title.innerHTML = highlight(article.title, article.highlightTerms);
      excerpt.innerHTML = highlight(article.excerpt, article.highlightTerms);
      if (link) link.href = `/articles/${article.slug}/`;
      if (reading) reading.textContent = article.readingTime;
      image.dataset.articleImageSlug = article.slug;
      image.dataset.imageFit = article.imageFit || "cover";
      image.dataset.imagePosition = article.imagePosition || (image.dataset.imageFit === "contain" ? "center center" : "50% 18%");
      image.style.objectFit = image.dataset.imageFit;
      image.style.objectPosition = image.dataset.imagePosition;
      image.src = articleImage(article);
      image.alt = article.imageAlt;
      if (caption) caption.textContent = `Source: ${article.source}`;
      progress.querySelectorAll("button").forEach((button, buttonIndex) => {
        const isActive = buttonIndex === active;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-current", isActive ? "true" : "false");
      });
      if (animate) requestAnimationFrame(() => shell.classList.remove("is-transitioning"));
    }, animate ? 250 : 0);
  };

  const play = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => draw(active + 1), 2800);
  };

  progress.innerHTML = "";
  featuredStories.forEach((article, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Show featured story: ${article.title}`);
    button.addEventListener("click", () => {
      draw(index);
      play();
    });
    progress.appendChild(button);
  });

  ["mouseenter", "focusin"].forEach((eventName) => shell.addEventListener(eventName, () => window.clearInterval(timer)));
  ["mouseleave", "focusout"].forEach((eventName) => shell.addEventListener(eventName, play));
  draw(0, false);
  play();
})();

/* PRESDA navigation and section motion */
(() => {
  const path = window.location.pathname;
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isHome = href === "/" && path === "/";
    const isSection = href !== "/" && !href.startsWith("/#") && path.startsWith(href);
    link.classList.toggle("is-active", isHome || isSection);
  });

  const revealItems = document.querySelectorAll(".content-section, .newsletter-section, .social-contact-section, .article-layout");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => {
    item.classList.add("reveal-section");
    observer.observe(item);
  });
})();
