const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const tiltCards = document.querySelectorAll(".poster-card, .trend-card, .mini-story");
const newsletterForm = document.querySelector(".newsletter-form");
const progressBar = document.querySelector(".reading-progress span");

menuToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navMenu.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

tiltCards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (y / rect.height - 0.5) * -8;
    card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "";
  });
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  if (!button) return;
  const original = button.textContent;
  button.textContent = "Signal Locked";
  setTimeout(() => {
    button.textContent = original;
  }, 1800);
});

function updateProgress() {
  if (!progressBar) return;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
