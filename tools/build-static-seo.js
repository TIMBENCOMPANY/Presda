const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://presda.com";
const cacheVersion = "presda-home-layout-20260525";

const script = fs.readFileSync(path.join(root, "script.js"), "utf8");
const match = script.match(/const articles = ([\s\S]*?\n\];)/);
if (!match) throw new Error("Could not find articles array in script.js");

const articles = vm.runInNewContext(match[1]);
const categories = ["AI", "Business", "Sport", "World", "Paparazzi", "Lifestyle"];

const esc = (value = "") =>
  String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

const escapeRegExp = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function highlightText(text, terms = []) {
  const cleanTerms = [...new Set(terms.filter(Boolean))].sort((a, b) => b.length - a.length);
  if (!cleanTerms.length) return esc(text);

  const value = String(text);
  const pattern = new RegExp(`(^|[^A-Za-z0-9])(${cleanTerms.map(escapeRegExp).join("|")})(?=$|[^A-Za-z0-9])`, "gi");
  let output = "";
  let lastIndex = 0;

  value.replace(pattern, (match, prefix, term, offset) => {
    const termStart = offset + prefix.length;
    const termEnd = termStart + term.length;
    output += esc(value.slice(lastIndex, termStart));
    output += `<mark class="title-red">${esc(value.slice(termStart, termEnd))}</mark>`;
    lastIndex = termEnd;
    return match;
  });

  output += esc(value.slice(lastIndex));
  return output;
}

const formatDate = (value) =>
  new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

const articleUrl = (article) => `/articles/${encodeURIComponent(article.slug)}/`;
const absoluteArticleUrl = (article) => `${siteUrl}${articleUrl(article)}`;
const imageWithVersion = (image) => `${image}?v=presda-posters-20260524`;
const absoluteImage = (image) => `${siteUrl}${image}`;
const titleHtml = (article) => highlightText(article.title, article.highlightTerms);
const textHtml = (article, text) => highlightText(text, article.highlightTerms);

function commonHead({ title, description, canonical, image, type = "website", published, modified }) {
  const imageUrl = image ? absoluteImage(image) : `${siteUrl}/favicon-light.png`;
  return `    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${esc(description)}" />
    <title>${esc(title)}</title>
    <link rel="canonical" href="${esc(canonical)}" />
    <meta property="og:type" content="${esc(type)}" />
    <meta property="og:site_name" content="PRESDA" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${esc(canonical)}" />
    <meta property="og:image" content="${esc(imageUrl)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${esc(imageUrl)}" />${published ? `
    <meta property="article:published_time" content="${esc(published)}" />
    <meta property="article:modified_time" content="${esc(modified || published)}" />` : ""}
    <link rel="icon" data-dynamic-favicon type="image/png" href="/favicon-dark.png?v=presda-20260523-dark" />
    <link rel="shortcut icon" data-dynamic-favicon href="/favicon-dark.png?v=presda-20260523-dark" />
    <link rel="apple-touch-icon" href="/favicon-light.png?v=presda-20260523" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Orbitron:wght@600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/style.css?v=${cacheVersion}" />`;
}

function analytics() {
  return `    <script src="/script.js?v=${cacheVersion}"></script>
    <script>
      window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
    </script>
    <script defer src="/_vercel/insights/script.js"></script>`;
}

function header() {
  return `    <header class="site-header">
      <div class="nav-shell">
        <a class="brand" href="/" aria-label="PRESDA home">
          <img class="brand-logo logo-dark" data-logo-dark src="/logo-dark.png" alt="PRESDA official logo for dark mode" />
          <img class="brand-logo logo-light" data-logo-light src="/logo-light.png" alt="PRESDA official logo for light mode" />
        </a>

        <nav class="main-nav" id="main-nav" aria-label="Primary navigation">
          <a href="/category/ai/">AI</a>
          <a href="/category/business/">Business</a>
          <a href="/category/sport/">Sport</a>
          <a href="/category/world/">World</a>
          <a href="/category/paparazzi/">Paparazzi</a>
          <a href="/category/lifestyle/">Lifestyle</a>
        </nav>

        <div class="nav-actions">
          <button class="search-button" type="button" aria-label="Search"></button>
          <button class="theme-toggle" type="button" aria-label="Switch color mode" aria-pressed="false">
            <span class="toggle-dot" aria-hidden="true"></span>
            <span class="moon-mark" aria-hidden="true"></span>
            <span class="sun-mark" aria-hidden="true"></span>
          </button>
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-nav">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>`;
}

function footer() {
  return socialSection()
    .replace('<section class="social-contact-section"', '<footer class="social-contact-section presda-footer-contact"')
    .replace('</section>', '</footer>');
}

function ticker() {
  const headlines = [...articles.slice(0, 6), ...articles.slice(0, 6)];
  return `      <section class="ticker" aria-label="Breaking news">
        <div class="ticker-inner">
          <strong>Breaking News</strong>
          <div class="ticker-window">
            <div class="ticker-track" data-ticker-track>${headlines.map((article) => `<span>${esc(article.title)}</span>`).join("")}</div>
          </div>
        </div>
      </section>`;
}

function articleCard(article, size = "standard") {
  return `<a class="article-card ${size}" href="${articleUrl(article)}">
      <figure>
        <img src="${imageWithVersion(article.imageDark || article.image)}" alt="${esc(article.imageAlt)}" loading="lazy" data-article-image-slug="${esc(article.slug)}" />
      </figure>
      <div>
        <span>${esc(article.category)}</span>
        <h3>${titleHtml(article)}</h3>
        <p>${textHtml(article, article.excerpt)}</p>
        <small>${formatDate(article.date)} / ${esc(article.readingTime)}</small>
      </div>
    </a>`;
}

function socialIcon(type) {
  const attrs = `viewBox="0 0 64 64" aria-hidden="true" focusable="false"`;
  const icons = {
    instagram: `<svg ${attrs}><rect x="12" y="12" width="40" height="40" rx="12"></rect><circle cx="32" cy="32" r="10"></circle><circle cx="44" cy="20" r="2.5"></circle></svg>`,
    x: `<svg ${attrs}><path d="M16 14l33 36"></path><path d="M48 14L15 50"></path><path d="M20 14h9l15 36h-9z"></path></svg>`,
    facebook: `<svg ${attrs}><path d="M38 14h-6a9 9 0 0 0-9 9v7h-6v9h6v13h10V39h7l2-9h-9v-6a2.5 2.5 0 0 1 2.5-2.5H42V14z"></path></svg>`,
    gps: `<svg ${attrs}><path d="M32 56s18-17 18-31a18 18 0 0 0-36 0c0 14 18 31 18 31z"></path><circle cx="32" cy="25" r="6"></circle></svg>`,
    email: `<svg ${attrs}><rect x="10" y="16" width="44" height="32" rx="7"></rect><path d="M12 20l20 16 20-16"></path><path d="M12 46l14-13"></path><path d="M52 46L38 33"></path></svg>`
  };
  return icons[type] || icons.email;
}

function socialSection() {
  const socials = [
    { type: "x", label: "X / Twitter", href: "https://x.com/PresdaOfficial" },
    { type: "instagram", label: "Instagram", href: "https://www.instagram.com/presdaofficial" },
    { type: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589635535583" },
    { type: "email", label: "Contact", href: "mailto:contact@presda.com" }
  ];

  return `      <section class="social-contact-section" aria-labelledby="connect-title">
        <div class="social-contact-shell">
          <div class="social-copy">
            <span>Network</span>
            <h2 id="connect-title">CONNECT WITH PRESDA</h2>
            <p>Follow the signal across every platform.</p>
            <div class="social-badge" aria-label="PRESDA location Berlin, Germany">
              <img src="/images/brand/ptransparent.png?v=${cacheVersion}" alt="PRESDA P transparent badge" loading="lazy" />
              <div>
                <strong>PRESDA SIGNAL</strong>
                <small>Berlin, Germany</small>
              </div>
              <span class="badge-gps" aria-hidden="true">${socialIcon("gps")}</span>
            </div>
          </div>
          <div class="social-grid">
            ${socials.map((item) => `<a class="social-card social-${esc(item.type)}" href="${esc(item.href)}"${item.href.startsWith("mailto:") ? "" : ` target="_blank" rel="noopener noreferrer"`} aria-label="${esc(item.label)}">
              <span class="social-icon">${socialIcon(item.type)}</span>
              <span class="social-label">${esc(item.label)}</span>
            </a>`).join("")}
          </div>
        </div>
      </section>`;
}

function homePage() {
  const featured = articles[0];
  const featuredGrid = articles.slice(1, 6).map((article, index) => articleCard(article, index === 0 ? "large" : "standard")).join("");
  const categoryGrid = categories.map((category) => `<a class="category-tile" href="#${category.toLowerCase()}"><span>${category}</span><strong>${articles.filter((article) => article.category === category).length}</strong></a>`).join("");
  const categorySections = categories.map((category) => {
    const categoryArticles = articles.filter((article) => article.category === category);
    if (!categoryArticles.length) return "";
    const [lead, ...rest] = categoryArticles;
    const fallback = articles[(articles.indexOf(lead) + 1) % articles.length];
    return `<section class="category-block" id="${category.toLowerCase()}">
            <div class="section-title compact">
              <span>${category}</span>
              <h2>${category} Desk</h2>
            </div>
            <div class="category-story-grid">
              ${articleCard(lead, "wide")}
              <div class="side-list">
                ${rest.slice(0, 2).map((article) => articleCard(article, "mini")).join("") || articleCard(fallback, "mini")}
              </div>
            </div>
          </section>`;
  }).join("");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PRESDA",
    alternateName: "Your Daily Press",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/articles/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return `<!DOCTYPE html>
<html lang="en">
  <head>
${commonHead({
  title: "PRESDA - Your Daily Press",
  description: "PRESDA is a premium futuristic news magazine covering AI, business, sport, world, paparazzi, and lifestyle stories.",
  canonical: `${siteUrl}/`,
  image: featured.imageDark || featured.image
})}
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  </head>
  <body data-home>
${header()}

    <main>
${ticker()}

      <section class="hero-section" aria-label="Featured story">
        <div class="hero-shell">
          <div class="hero-copy">
            <div class="hero-meta">
              <span data-hero-category>${esc(featured.category)}</span>
              <time data-hero-date datetime="${esc(featured.date)}">${formatDate(featured.date)}</time>
            </div>
            <h1 data-hero-title>${titleHtml(featured)}</h1>
            <p data-hero-excerpt>${textHtml(featured, featured.excerpt)}</p>
            <div class="hero-actions">
              <a class="primary-link" data-hero-link href="${articleUrl(featured)}">Read Full Story</a>
              <span data-hero-reading>${esc(featured.readingTime)}</span>
            </div>
          </div>
          <figure class="hero-media">
            <img data-hero-image data-article-image-slug="${esc(featured.slug)}" src="${imageWithVersion(featured.imageDark || featured.image)}" alt="${esc(featured.imageAlt)}" />
            <figcaption data-hero-source>Source: ${esc(featured.source)}</figcaption>
          </figure>
          <div class="hero-progress" data-hero-progress aria-label="Featured article selector"></div>
        </div>
      </section>

      <section class="content-section">
        <div class="section-title">
          <span>Featured Desk</span>
          <h2>Stories With Signal</h2>
        </div>
        <div class="featured-grid" data-featured-grid>${featuredGrid}</div>
      </section>

      <section class="content-section category-overview">
        <div class="section-title">
          <span>Categories</span>
          <h2>Explore The Newsroom</h2>
        </div>
        <div class="category-grid" data-category-grid>${categoryGrid}</div>
      </section>

      <section class="content-section category-sections" data-category-sections>${categorySections}</section>

      <section class="newsletter-section">
        <div>
          <span>Newsletter</span>
          <h2>Stay ahead of the story.</h2>
          <p>Get PRESDA's sharpest headlines, cinematic explainers, and editorial briefings delivered to your inbox.</p>
        </div>
        <form class="newsletter-form">
          <label class="sr-only" for="email">Email address</label>
          <input id="email" name="email" type="email" placeholder="your@email.com" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>

${footer()}

${analytics()}
  </body>
</html>
`;
}

function articlePage(article) {
  const related = articles.filter((item) => item.category === article.category && item.id !== article.id)
    .concat(articles.filter((item) => item.id !== article.id))
    .slice(0, 3);
  const canonical = absoluteArticleUrl(article);
  const articleContent = article.content.map((paragraph, index) => {
    const html = textHtml(article, paragraph);
    return index === 1 ? `<blockquote>${html}</blockquote>` : `<p>${html}</p>`;
  }).join("");
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [absoluteImage(article.imageDark || article.image)],
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "PRESDA",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo-light.png`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical
    }
  };

  return `<!DOCTYPE html>
<html lang="en">
  <head>
${commonHead({
  title: `${article.title} | PRESDA`,
  description: article.excerpt,
  canonical,
  image: article.imageDark || article.image,
  type: "article",
  published: article.date,
  modified: article.date
})}
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  </head>
  <body data-article-page>
${header()}

    <main>
${ticker()}

      <article class="article-layout">
        <a class="back-link" href="/">Back To PRESDA</a>
        <header class="article-hero">
          <div class="article-heading">
            <span data-article-category>${esc(article.category)}</span>
            <h1 data-article-title>${titleHtml(article)}</h1>
            <p data-article-excerpt>${textHtml(article, article.excerpt)}</p>
            <div class="article-meta">
              <time data-article-date datetime="${esc(article.date)}">${formatDate(article.date)}</time>
              <span data-article-author>${esc(article.author)}</span>
              <span data-article-reading>${esc(article.readingTime)}</span>
              <span data-article-source>${esc(article.source)}</span>
            </div>
          </div>
          <figure class="article-image-frame">
            <img data-article-image data-article-image-slug="${esc(article.slug)}" src="${imageWithVersion(article.imageDark || article.image)}" alt="${esc(article.imageAlt)}" />
          </figure>
        </header>

        <div class="article-body-grid">
          <aside class="article-sidebar">
            <span>Filed Under</span>
            <strong data-article-sidebar-category>${esc(article.category)}</strong>
            <span data-article-source-small>${esc(article.source)}</span>
          </aside>
          <div class="article-content" data-article-content>${articleContent}</div>
        </div>
      </article>

      <section class="content-section related-section">
        <div class="section-title">
          <span>Related</span>
          <h2>Continue Reading</h2>
        </div>
        <div class="featured-grid related-grid" data-related-grid>${related.map((item) => articleCard(item)).join("")}</div>
      </section>
    </main>

${footer()}

${analytics()}
  </body>
</html>
`;
}

fs.writeFileSync(path.join(root, "index.html"), homePage());
fs.writeFileSync(path.join(root, "article.html"), articlePage(articles[0]));

const articlesDir = path.join(root, "articles");
fs.mkdirSync(articlesDir, { recursive: true });
for (const article of articles) {
  const dir = path.join(articlesDir, article.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), articlePage(article));
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${articles[0].date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${siteUrl}/contact.html</loc>
    <lastmod>2026-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
${articles.map((article) => `  <url>
    <loc>${absoluteArticleUrl(article)}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
fs.writeFileSync(path.join(root, "robots.txt"), robots);

console.log(`Generated homepage, ${articles.length} article pages, sitemap.xml, and robots.txt.`);
