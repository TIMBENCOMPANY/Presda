const articles = [
  {
    id: "001",
    slug: "openai-next-gen-model",
    title: "OpenAI Unveils Next-Gen Model",
    category: "AI",
    date: "2026-05-23",
    author: "PRESDA Editorial",
    source: "PRESDA Tech Desk",
    excerpt: "A new generation of artificial intelligence is pushing faster reasoning, sharper multimodal work, and a more cinematic future for digital assistants.",
    content: [
      "OpenAI's newest model signals a sharper phase for artificial intelligence, where speed, context, and multimodal understanding are no longer experimental luxuries but expected parts of the modern workflow.",
      "The shift is especially important for creators, developers, researchers, and media teams. AI systems are moving from passive chat windows into active editorial, analytical, and operational tools.",
      "For PRESDA, the story is not only about model performance. It is about how intelligent systems change the rhythm of culture, business, creativity, and public information.",
      "The next era of digital news will be faster, more visual, and more personalized, while still depending on trust, clarity, and human editorial judgment."
    ],
    image: "/images/articles/ai.jpg",
    imageAlt: "Futuristic AI interface with red PRESDA lighting",
    readingTime: "4 min read"
  },
  {
    id: "002",
    slug: "ronaldo-final-season-pressure",
    title: "Ronaldo Faces The Final Season Pressure",
    category: "Sport",
    date: "2026-05-22",
    author: "Mikael Stone",
    source: "PRESDA Sport",
    excerpt: "The world's most watched football icon enters another decisive season with legacy, pressure, and global attention all colliding.",
    content: [
      "Every season around Cristiano Ronaldo now feels like a global media event. The goals still matter, but the story has become larger than the pitch.",
      "Sponsors, broadcasters, supporters, and rivals all understand the same thing: a final chapter can be as powerful as a beginning when the entire world is watching.",
      "The modern sports economy turns every match into content, every celebration into a headline, and every quiet moment into analysis.",
      "PRESDA will follow the season through performance, culture, and the business machine surrounding football's biggest names."
    ],
    image: "/images/articles/ronaldo.jpg",
    imageAlt: "Cinematic football stadium under red lights",
    readingTime: "5 min read"
  },
  {
    id: "003",
    slug: "gta6-trailer-culture-shift",
    title: "GTA 6 Becomes A Culture Moment",
    category: "Lifestyle",
    date: "2026-05-21",
    author: "Lina Reyes",
    source: "PRESDA Culture",
    excerpt: "The next major gaming release is already behaving less like a product and more like a global entertainment event.",
    content: [
      "Major game releases now sit beside film premieres, fashion launches, and live sport in the cultural calendar. GTA 6 is one of the clearest examples.",
      "Fans are not only waiting to play. They are decoding trailers, building theories, debating visuals, and turning every detail into social media momentum.",
      "The business impact stretches across streaming, hardware, advertising, music, and digital fashion. One game can move an entire entertainment ecosystem.",
      "PRESDA will track how gaming continues to shape taste, youth culture, celebrity influence, and the future of interactive storytelling."
    ],
    image: "/images/articles/gta6.jpg",
    imageAlt: "Neon city street inspired by a premium gaming release",
    readingTime: "4 min read"
  },
  {
    id: "004",
    slug: "elon-mars-signal",
    title: "Elon Musk Turns Mars Into A Media Signal",
    category: "Business",
    date: "2026-05-20",
    author: "Noah Vance",
    source: "PRESDA Business",
    excerpt: "Space ambition, investor attention, and spectacle continue to merge as Mars becomes a brand, a mission, and a market narrative.",
    content: [
      "The Mars story is no longer only a scientific ambition. It is a media signal, a capital magnet, and a symbol of how technology companies sell the future.",
      "Every launch, prototype, and public statement becomes part of a larger narrative about risk, acceleration, and human expansion.",
      "Investors watch the engineering, but audiences watch the mythology. That combination gives space companies unusual cultural power.",
      "The PRESDA business desk will continue following the money, the engineering milestones, and the public imagination around the new space economy."
    ],
    image: "/images/articles/elon.jpg",
    imageAlt: "Mars mission control room with deep red cinematic lighting",
    readingTime: "6 min read"
  },
  {
    id: "005",
    slug: "world-cup-2026-countdown",
    title: "World Cup 2026 Countdown Enters Full Speed",
    category: "Sport",
    date: "2026-05-19",
    author: "PRESDA Sport Desk",
    source: "PRESDA Football",
    excerpt: "Cities, sponsors, broadcasters, and fans are preparing for one of the largest sports spectacles of the decade.",
    content: [
      "The World Cup countdown is now a full media operation. Host cities are preparing infrastructure, broadcasters are building narratives, and brands are planning global campaigns.",
      "Football remains the core, but the modern tournament is also tourism, technology, fashion, music, and national identity compressed into one month.",
      "For players, the pressure is immense. For supporters, the tournament becomes a shared calendar of emotion and expectation.",
      "PRESDA will cover the road to the tournament through performance, culture, and the worldwide business of football."
    ],
    image: "/images/articles/worldcup.jpg",
    imageAlt: "Premium football stadium prepared for the World Cup",
    readingTime: "5 min read"
  },
  {
    id: "006",
    slug: "markets-watch-ai-economy",
    title: "Markets Watch The AI Economy",
    category: "Business",
    date: "2026-05-18",
    author: "Dara Collins",
    source: "PRESDA Markets",
    excerpt: "AI infrastructure is becoming a central force in market expectations, boardroom strategy, and investor attention.",
    content: [
      "The AI economy is now being priced into hardware, cloud infrastructure, software platforms, and media businesses at the same time.",
      "Companies are under pressure to show practical adoption rather than vague ambition. Investors want margins, productivity, and defensible products.",
      "The result is a market cycle where technical progress and corporate storytelling move together.",
      "PRESDA will continue watching how artificial intelligence reshapes capital flows, jobs, and the companies defining the next decade."
    ],
    image: "/images/articles/business.jpg",
    imageAlt: "Premium financial dashboard with red market data",
    readingTime: "4 min read"
  },
  {
    id: "007",
    slug: "world-cities-climate-front",
    title: "Cities Watch A Fast-Moving Climate Front",
    category: "World",
    date: "2026-05-17",
    author: "Amal Haddad",
    source: "PRESDA World",
    excerpt: "Urban leaders are using data, emergency planning, and public communication to respond to climate pressure in real time.",
    content: [
      "Cities are increasingly on the front line of climate pressure. Heat, flooding, air quality, and infrastructure strain are now everyday planning concerns.",
      "The most advanced urban centers are combining satellite data, sensors, public alerts, and emergency logistics to react faster.",
      "The question is not only whether cities can adapt, but whether they can communicate risk clearly enough for citizens to act.",
      "PRESDA will follow the global cities reshaping policy, design, and public safety under a changing climate."
    ],
    image: "/images/articles/climate.jpg",
    imageAlt: "Cinematic city skyline under a dramatic climate front",
    readingTime: "5 min read"
  },
  {
    id: "008",
    slug: "paparazzi-red-carpet-economy",
    title: "The Red Carpet Becomes A Real-Time Economy",
    category: "Paparazzi",
    date: "2026-05-16",
    author: "Sofia Lane",
    source: "PRESDA Paparazzi",
    excerpt: "Celebrity appearances now travel through cameras, clips, stylists, fan accounts, and brand analytics within seconds.",
    content: [
      "The red carpet has become a real-time media market. A single look can move through fashion accounts, entertainment desks, fan communities, and brand dashboards almost instantly.",
      "Paparazzi culture is no longer only about access. It is about timing, framing, distribution, and the emotional economy of celebrity attention.",
      "For stars and brands, the moment is designed before it is photographed. For audiences, the reaction becomes part of the story.",
      "PRESDA will keep tracking fame as a visual business, where image, speed, and narrative control matter more than ever."
    ],
    image: "/images/articles/paparazzi.jpg",
    imageAlt: "Red carpet camera flashes in a premium cinematic scene",
    readingTime: "3 min read"
  }
];

const categories = ["AI", "Business", "Sport", "World", "Paparazzi", "Lifestyle"];
const root = document.documentElement;
const body = document.body;
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const themeToggle = document.querySelector(".theme-toggle");

const formatDate = (value) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

const articleUrl = (article) => `article.html?slug=${encodeURIComponent(article.slug)}`;

function setTheme(mode) {
  const isLight = mode === "light";
  root.classList.toggle("light-mode", isLight);
  body.classList.toggle("light-mode", isLight);
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  localStorage.setItem("presda-mode", mode);

  document.querySelectorAll("[data-dynamic-favicon]").forEach((link) => {
    const icon = isLight ? "favicon-light.png?v=presda-20260523-light" : "favicon-dark.png?v=presda-20260523-dark";
    link.setAttribute("href", icon);
  });
}

setTheme(localStorage.getItem("presda-mode") === "light" ? "light" : "dark");

themeToggle?.addEventListener("click", () => {
  setTheme(body.classList.contains("light-mode") ? "dark" : "light");
});

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
});

function renderTicker() {
  const tickerTrack = document.querySelector("[data-ticker-track]");
  if (!tickerTrack) return;
  const headlines = [...articles.slice(0, 6), ...articles.slice(0, 6)];
  tickerTrack.innerHTML = headlines.map((article) => `<span>${article.title}</span>`).join("");
}

function articleCard(article, size = "standard") {
  return `
    <a class="article-card ${size}" href="${articleUrl(article)}">
      <figure>
        <img src="${article.image}" alt="${article.imageAlt}" loading="lazy" />
      </figure>
      <div>
        <span>${article.category}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <small>${formatDate(article.date)} / ${article.readingTime}</small>
      </div>
    </a>
  `;
}

function renderHome() {
  renderTicker();

  const heroArticles = articles.slice(0, 5);
  let currentHero = 0;
  let heroTimer;

  const heroImage = document.querySelector("[data-hero-image]");
  const heroTitle = document.querySelector("[data-hero-title]");
  const heroExcerpt = document.querySelector("[data-hero-excerpt]");
  const heroCategory = document.querySelector("[data-hero-category]");
  const heroDate = document.querySelector("[data-hero-date]");
  const heroLink = document.querySelector("[data-hero-link]");
  const heroReading = document.querySelector("[data-hero-reading]");
  const heroSource = document.querySelector("[data-hero-source]");
  const heroProgress = document.querySelector("[data-hero-progress]");

  function setHero(index) {
    currentHero = index;
    const article = heroArticles[index];
    heroImage.src = article.image;
    heroImage.alt = article.imageAlt;
    heroTitle.textContent = article.title;
    heroExcerpt.textContent = article.excerpt;
    heroCategory.textContent = article.category;
    heroDate.textContent = formatDate(article.date);
    heroDate.dateTime = article.date;
    heroLink.href = articleUrl(article);
    heroReading.textContent = article.readingTime;
    heroSource.textContent = `Source: ${article.source}`;
    document.querySelectorAll(".hero-progress button").forEach((button, buttonIndex) => {
      button.classList.toggle("is-active", buttonIndex === index);
    });
  }

  if (heroProgress) {
    heroProgress.innerHTML = heroArticles
      .map((article, index) => `<button type="button" aria-label="Show ${article.title}" data-hero-index="${index}"></button>`)
      .join("");
    heroProgress.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) return;
      setHero(Number(button.dataset.heroIndex));
      window.clearInterval(heroTimer);
      heroTimer = window.setInterval(() => setHero((currentHero + 1) % heroArticles.length), 5000);
    });
  }

  setHero(0);
  heroTimer = window.setInterval(() => setHero((currentHero + 1) % heroArticles.length), 5000);

  const featuredGrid = document.querySelector("[data-featured-grid]");
  if (featuredGrid) {
    featuredGrid.innerHTML = articles.slice(1, 6).map((article, index) => articleCard(article, index === 0 ? "large" : "standard")).join("");
  }

  const categoryGrid = document.querySelector("[data-category-grid]");
  if (categoryGrid) {
    categoryGrid.innerHTML = categories
      .map((category) => `<a class="category-tile" href="#${category.toLowerCase()}"><span>${category}</span><strong>${articles.filter((article) => article.category === category).length}</strong></a>`)
      .join("");
  }

  const categorySections = document.querySelector("[data-category-sections]");
  if (categorySections) {
    categorySections.innerHTML = categories
      .map((category) => {
        const categoryArticles = articles.filter((article) => article.category === category);
        if (!categoryArticles.length) return "";
        const [lead, ...rest] = categoryArticles;
        return `
          <section class="category-block" id="${category.toLowerCase()}">
            <div class="section-title compact">
              <span>${category}</span>
              <h2>${category} Desk</h2>
            </div>
            <div class="category-story-grid">
              ${articleCard(lead, "wide")}
              <div class="side-list">
                ${rest.slice(0, 2).map((article) => articleCard(article, "mini")).join("") || articleCard(articles[(articles.indexOf(lead) + 1) % articles.length], "mini")}
              </div>
            </div>
          </section>
        `;
      })
      .join("");
  }
}

function renderArticlePage() {
  renderTicker();
  const params = new URLSearchParams(window.location.search);
  const article = articles.find((item) => item.slug === params.get("slug")) || articles[0];

  document.title = `${article.title} | PRESDA`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", article.excerpt);
  document.querySelector("[data-article-category]").textContent = article.category;
  document.querySelector("[data-article-title]").textContent = article.title;
  document.querySelector("[data-article-excerpt]").textContent = article.excerpt;
  document.querySelector("[data-article-date]").textContent = formatDate(article.date);
  document.querySelector("[data-article-date]").dateTime = article.date;
  document.querySelector("[data-article-author]").textContent = article.author;
  document.querySelector("[data-article-reading]").textContent = article.readingTime;
  document.querySelector("[data-article-source]").textContent = article.source;
  document.querySelector("[data-article-source-small]").textContent = article.source;
  document.querySelector("[data-article-sidebar-category]").textContent = article.category;

  const image = document.querySelector("[data-article-image]");
  image.src = article.image;
  image.alt = article.imageAlt;

  document.querySelector("[data-article-content]").innerHTML = article.content.map((paragraph, index) => {
    if (index === 1) return `<blockquote>${paragraph}</blockquote>`;
    return `<p>${paragraph}</p>`;
  }).join("");

  const related = articles.filter((item) => item.category === article.category && item.id !== article.id).concat(articles.filter((item) => item.id !== article.id)).slice(0, 3);
  document.querySelector("[data-related-grid]").innerHTML = related.map((item) => articleCard(item)).join("");
}

document.querySelector(".newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const original = button.textContent;
  button.textContent = "Subscribed";
  window.setTimeout(() => {
    button.textContent = original;
  }, 1600);
});

if (body.matches("[data-home]")) renderHome();
if (body.matches("[data-article-page]")) renderArticlePage();
