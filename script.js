const body = document.body;
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const modeToggle = document.querySelector(".mode-toggle");
const newsletterForm = document.querySelector(".newsletter-form");

const savedMode = localStorage.getItem("presda-mode");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

if (savedMode === "light" || (!savedMode && prefersLight)) {
  body.classList.add("light-mode");
  modeToggle?.setAttribute("aria-pressed", "true");
}

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
