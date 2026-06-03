const worldCupHubData = {
  openingMatch: "2026-06-11T20:00:00Z",
  sourceMode: "mock",
  readyForApi: true,
  endpoints: {
    standings: null,
    fixtures: null,
    scorers: null,
    assists: null,
    stadiums: null
  }
};

(() => {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const target = new Date(worldCupHubData.openingMatch).getTime();
  const days = countdown.querySelector("[data-days]");
  const hours = countdown.querySelector("[data-hours]");
  const minutes = countdown.querySelector("[data-minutes]");
  const seconds = countdown.querySelector("[data-seconds]");

  const pad = (value) => String(value).padStart(2, "0");
  const draw = () => {
    const distance = Math.max(0, target - Date.now());
    const totalSeconds = Math.floor(distance / 1000);
    const d = Math.floor(totalSeconds / 86400);
    const h = Math.floor((totalSeconds % 86400) / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    if (days) days.textContent = String(d);
    if (hours) hours.textContent = pad(h);
    if (minutes) minutes.textContent = pad(m);
    if (seconds) seconds.textContent = pad(s);
  };

  draw();
  window.setInterval(draw, 1000);
})();

(() => {
  const tabs = document.querySelectorAll("[data-match-filter]");
  const cards = document.querySelectorAll("[data-match-status]");
  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.matchFilter || "all";
      tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.matchStatus === filter;
        card.hidden = !show;
      });
    });
  });
})();
