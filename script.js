const root = document.documentElement;
const body = document.body;

const imagePairs = {
  "openai-next-gen-model": {
    dark: "/images/articles/openai-sam-dark.png",
    light: "/images/articles/openai-sam-light.png"
  },
  "xabi-alonso-chelsea-pressure": {
    dark: "/images/articles/xabi-alonso-dark.png",
    light: "/images/articles/xabi-alonso-light.png"
  },
  "gta6-trailer-culture-shift": {
    dark: "/images/articles/gta6-poster-dark.png",
    light: "/images/articles/gta6-poster-light.png"
  },
  "elon-mars-signal": {
    dark: "/images/articles/elon-mars-dark.png",
    light: "/images/articles/elon-mars-light.png"
  },
  "world-cup-2026-countdown": {
    dark: "/images/articles/fifa-world-cup-dark.png",
    light: "/images/articles/fifa-world-cup-light.png"
  },
  "bill-gates-foundation-impact": {
    dark: "/images/articles/bill-gates-dark.png",
    light: "/images/articles/bill-gates-light.png"
  },
  "japan-enters-ai-care-era": {
    dark: "/images/articles/japan-ai-care-dark.png",
    light: "/images/articles/japan-ai-care-light.png"
  },
  "keanu-reeves-kindness-powerful": {
    dark: "/images/articles/keanu-kindness-dark.png",
    light: "/images/articles/keanu-kindness-light.png"
  },
  "mourinho-real-madrid-return-signal": {
    dark: "/images/articles/mourinho-real-madrid-dark.png",
    light: "/images/articles/mourinho-real-madrid-light.png"
  }
};

const versioned = (src) => `${src}?v=presda-static-source-20260525`;

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
