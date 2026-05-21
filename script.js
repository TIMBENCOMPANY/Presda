const body = document.body;
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const modeToggle = document.querySelector(".mode-toggle");
const newsletterForm = document.querySelector(".newsletter-form");
const darkLogos = document.querySelectorAll("[data-logo-dark]");
const lightLogos = document.querySelectorAll("[data-logo-light]");

const logoBackgroundFix = document.createElement("style");
logoBackgroundFix.textContent = `
  .brand-logo { background: transparent !important; }
  body:not(.light-mode) .logo-dark { mix-blend-mode: screen; }
  body.light-mode .logo-light { mix-blend-mode: multiply; }
`;
document.head.appendChild(logoBackgroundFix);

const savedMode = localStorage.getItem("presda-mode");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedMode === "light" || (!savedMode && prefersLight)) {
  body.classList.add("light-mode");
  modeToggle?.setAttribute("aria-pressed", "true");
}

function updateFavicon() {
  const mode = body.classList.contains("light-mode") ? "light" : "dark";
  const icon = `favicon-${mode}.png?v=presda-favicon-20260520-${mode}`;

  document.querySelectorAll("link[data-dynamic-favicon]").forEach((link) => {
    link.setAttribute("href", icon);

    // Replacing the node forces Chromium/Safari to refresh cached tab icons after the mode switch.
    link.replaceWith(link.cloneNode(true));
  });
}

function updateBrandAssets() {
  const isLight = body.classList.contains("light-mode");
  darkLogos.forEach((logo) => {
    logo.setAttribute("aria-hidden", String(isLight));
  });
  lightLogos.forEach((logo) => {
    logo.setAttribute("aria-hidden", String(!isLight));
  });
  updateFavicon();
}

updateBrandAssets();

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  }
});

modeToggle?.addEventListener("click", () => {
  const isLight = body.classList.toggle("light-mode");
  localStorage.setItem("presda-mode", isLight ? "light" : "dark");
  modeToggle.setAttribute("aria-pressed", String(isLight));
  updateBrandAssets();
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector("button");
  if (!button) return;
  const original = button.textContent;
  button.textContent = "Subscribed";
  setTimeout(() => {
    button.textContent = original;
  }, 1700);
});
