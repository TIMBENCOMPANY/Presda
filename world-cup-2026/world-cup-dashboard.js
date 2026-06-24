(function initWorldCupDashboard() {
  const data = window.PRESDA_WORLD_CUP_DATA || {};
  const service = window.PresdaFootballDataService;
  const articles = window.PRESDA_ARTICLES || [];

  const qs = (selector) => document.querySelector(selector);
  let activeGroupPage = 0;

  function renderQuickLinks() {
    const target = qs("[data-wc-quick-links]");
    if (!target) return;
    target.innerHTML = (data.quickLinks || [])
      .map((link) => `<a href="${link.href}">${link.label}</a>`)
      .join("");
  }

  function renderList(selector, items, emptyText) {
    const target = qs(selector);
    if (!target) return;
    if (!items?.length) {
      target.innerHTML = `<div class="wc-empty">${emptyText}</div>`;
      return;
    }
    target.innerHTML = `<ul class="wc-mini-list">${items
      .map((item) => `<li><strong>${item.home || item.name}</strong><span>${item.status || item.away || ""}</span></li>`)
      .join("")}</ul>`;
  }

  function renderMatchRows(selector, items, emptyText) {
    const target = qs(selector);
    if (!target) return;
    if (!items?.length) {
      target.innerHTML = `<div class="wc-empty">${emptyText}</div>`;
      return;
    }
    target.innerHTML = `<ul class="wc-match-list">${items
      .map((match) => {
        const score =
          Number.isFinite(match.homeGoals) && Number.isFinite(match.awayGoals)
            ? `${match.homeGoals} - ${match.awayGoals}`
            : match.status || "Upcoming";
        const when = match.date
          ? new Date(match.date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit"
            })
          : "Awaiting official confirmation";
        return `
          <li>
            <div>
              <strong>${match.home}</strong>
              <span>${match.away}</span>
            </div>
            <em>${score}</em>
            <small>${when}${match.venue ? ` / ${match.venue}` : ""}</small>
          </li>
        `;
      })
      .join("")}</ul>`;
  }

  function renderMatchCenterLinks(items) {
    const target = qs("[data-wc-match-center]");
    if (!target) return;
    target.innerHTML = (items || [])
      .map((item) => `
        <a class="wc-center-link" href="${item.href}">
          <strong>${item.label}</strong>
          <span>${item.description}</span>
        </a>
      `)
      .join("");
  }

  function renderTv(items) {
    const target = qs("[data-wc-tv]");
    if (!target) return;
    target.innerHTML = (items || [])
      .map((item) => `
        <article class="wc-broadcaster-card">
          <div class="wc-logo-mark" aria-hidden="true">${item.logoText || item.name.slice(0, 3)}</div>
          <div>
            <strong>${item.name}</strong>
            <span>${item.region}</span>
          </div>
        </article>
      `)
      .join("");
  }

  function renderGroups(items) {
    const target = qs("[data-wc-groups]");
    if (!target) return;
    if (!items?.length) {
      target.innerHTML = `<div class="wc-empty">Awaiting official group draw</div>`;
      return;
    }
    const pages = Math.ceil(items.length / 4);
    const page = Math.min(activeGroupPage, Math.max(0, pages - 1));
    const visibleGroups = items.slice(page * 4, page * 4 + 4);
    target.innerHTML = `
      <div class="wc-group-tabs" role="tablist" aria-label="World Cup group pages">
        ${Array.from({ length: pages }, (_, index) => {
          const start = String.fromCharCode(65 + index * 4);
          const end = String.fromCharCode(65 + Math.min(index * 4 + 3, items.length - 1));
          return `<button type="button" class="${index === page ? "is-active" : ""}" data-group-page="${index}">Groups ${start}-${end}</button>`;
        }).join("")}
      </div>
      <div class="wc-group-page">
        ${visibleGroups
      .map((group) => `
        <article class="wc-group-card">
          <header>
            <strong>${group.name}</strong>
            <span>${group.status}</span>
          </header>
          <table>
            <thead><tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>Pts</th></tr></thead>
            <tbody>
              ${group.teams
                .map((team) => `
                  <tr>
                    <td>${team.flag ? `<img src="${team.flag}" alt="">` : ""}<span>${team.name}</span></td>
                    <td>${team.played}</td>
                    <td>${team.wins}</td>
                    <td>${team.draws}</td>
                    <td>${team.losses}</td>
                    <td>${team.points}</td>
                  </tr>
                `)
                .join("")}
            </tbody>
          </table>
        </article>
      `)
      .join("")}
      </div>
    `;
    target.querySelectorAll("[data-group-page]").forEach((button) => {
      button.addEventListener("click", () => {
        activeGroupPage = Number(button.dataset.groupPage || 0);
        renderGroups(items);
      });
    });
  }

  function renderFanVote(vote) {
    const target = qs("[data-wc-fan-vote]");
    if (!target) return;
    const teams = vote?.teams || [];
    if (!teams.length) {
      target.innerHTML = `<div class="wc-empty">Fan voting opens soon</div>`;
      return;
    }
    const selected = localStorage.getItem("presda-worldcup-vote");
    target.innerHTML = `
      <div class="wc-vote-summary">
        <strong>${Number(vote.totalVotes || 0).toLocaleString("en-US")}</strong>
        <span>fan predictions</span>
      </div>
      <div class="wc-vote-list">
        ${teams
          .slice()
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 5)
          .map((team) => {
            const gradient = `linear-gradient(90deg, ${team.colors?.[0] || "#ff1a1a"}, ${team.colors?.[1] || "#ff6464"})`;
            const isSelected = selected === team.name;
            return `
              <button class="wc-vote-row${isSelected ? " is-selected" : ""}" type="button" data-vote-team="${team.name}" style="--vote-width:${team.percent}%;--vote-gradient:${gradient}">
                <img src="${team.flag}" alt="${team.name} flag" loading="lazy">
                <span>${team.name}</span>
                <strong>${team.percent}%</strong>
                <i aria-hidden="true"></i>
                <em>${isSelected ? "Vote counted" : "Vote"}</em>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
    target.querySelectorAll("[data-vote-team]").forEach((button) => {
      button.addEventListener("click", () => {
        localStorage.setItem("presda-worldcup-vote", button.dataset.voteTeam);
        renderFanVote(vote);
      });
    });
  }

  function renderStadiums(items) {
    const target = qs("[data-wc-stadiums]");
    if (!target) return;
    target.innerHTML = `
      <div class="wc-carousel-controls" aria-label="Stadium carousel controls">
        <button type="button" data-stadium-prev aria-label="Previous stadium">&lsaquo;</button>
        <button type="button" data-stadium-next aria-label="Next stadium">&rsaquo;</button>
      </div>
      <div class="wc-stadium-track" data-stadium-track>
        ${(items || [])
      .map((stadium) => `
        <article class="wc-stadium-card">
          <figure><img src="${stadium.image}" alt="${stadium.name} in ${stadium.city}" loading="lazy"></figure>
          <div>
            <span class="wc-mini-status">${stadium.label}</span>
            <h3>${stadium.name}</h3>
            <p>${stadium.city} / ${stadium.country}</p>
            <small>Capacity ${stadium.capacity}</small>
          </div>
        </article>
      `)
      .join("")}
      </div>
    `;
    const track = target.querySelector("[data-stadium-track]");
    const step = () => Math.max(280, Math.floor((track?.clientWidth || 900) * 0.85));
    target.querySelector("[data-stadium-prev]")?.addEventListener("click", () => {
      track?.scrollBy({ left: -step(), behavior: "smooth" });
    });
    target.querySelector("[data-stadium-next]")?.addEventListener("click", () => {
      track?.scrollBy({ left: step(), behavior: "smooth" });
    });
  }

  function articleCard(article) {
    return `
      <a class="article-card standard" href="/articles/${article.slug}/">
        <figure><img src="${article.imageDark || article.image}" alt="${article.imageAlt}" loading="lazy" data-article-image-slug="${article.slug}" /></figure>
        <div>
          <span>${article.category}</span>
          <h3>${article.cardTitleHtml || article.titleHtml || article.title}</h3>
          <p>${article.excerptHtml || article.excerpt}</p>
          <small>${new Date(`${article.date}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} / ${article.readingTime}</small>
        </div>
      </a>
    `;
  }

  function renderNews() {
    const target = qs("[data-wc-news]");
    if (!target) return;
    const worldCupArticles = articles
      .filter((article) => /world cup|fifa|football/i.test([article.category, article.title, ...(article.tags || [])].join(" ")))
      .slice(0, 4);
    target.innerHTML = worldCupArticles.map(articleCard).join("");
  }

  function updateCountdown() {
    const target = qs("[data-wc-countdown]");
    if (!target) return;
    const opening = new Date(data.worldCupConfig?.openingMatchUtc || "2026-06-11T20:00:00Z").getTime();
    const distance = Math.max(0, opening - Date.now());
    const day = 24 * 60 * 60 * 1000;
    const hour = 60 * 60 * 1000;
    const minute = 60 * 1000;
    const values = [
      Math.floor(distance / day),
      Math.floor((distance % day) / hour),
      Math.floor((distance % hour) / minute),
      Math.floor((distance % minute) / 1000)
    ];
    [...target.querySelectorAll("strong")].forEach((node, index) => {
      node.textContent = String(values[index]).padStart(2, "0");
    });
  }

  async function renderDashboard() {
    const dashboard = service ? await service.getWorldCupDashboard() : data;
    renderQuickLinks();
    renderMatchRows("[data-wc-today]", dashboard.todayMatches, "Upcoming");
    renderMatchRows("[data-wc-live]", dashboard.liveScores, "Awaiting official live data");
    renderMatchRows("[data-wc-fixtures]", dashboard.fixtures, "Awaiting official confirmation");
    renderMatchRows("[data-wc-results]", dashboard.results, "Awaiting official confirmation");
    renderGroups(dashboard.groupTables);
    renderList("[data-wc-events]", dashboard.matchEvents, "Match events appear live");
    renderList("[data-wc-lineups]", dashboard.lineups, "Lineups appear on matchday");
    renderList("[data-wc-scorers]", dashboard.topScorers, "Stats begin when matches start");
    renderList("[data-wc-assists]", dashboard.topAssists, "Stats begin when matches start");
    renderMatchCenterLinks(dashboard.matchCenterPages);
    renderFanVote(dashboard.fanVote);
    renderTv(dashboard.tvChannels);
    renderStadiums(dashboard.stadiums);
    renderNews();
    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  renderDashboard();
})();
