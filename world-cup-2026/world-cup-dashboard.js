(function initWorldCupDashboard() {
  const data = window.PRESDA_WORLD_CUP_DATA || {};
  const service = window.PresdaFootballDataService;
  const articles = window.PRESDA_ARTICLES || [];
  const qs = (selector) => document.querySelector(selector);
  let activeGroupPage = 0;
  let activePanelIndex = 0;

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
          : "Kickoff time to be listed";
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

  function renderPanelSlider(panels) {
    const stage = qs("[data-wc-panel-stage]");
    if (!stage || !panels?.length) return;
    const panel = panels[activePanelIndex % panels.length];
    stage.innerHTML = `
      <article class="wc-feature-panel">
        <div>
          <span>${panel.eyebrow}</span>
          <h2>${panel.title}</h2>
          <p>${panel.description}</p>
          <a href="${panel.href}">Open</a>
        </div>
        <figure>
          <img src="${panel.image}" alt="${panel.title}" loading="lazy">
        </figure>
      </article>
    `;
    qs("[data-wc-panel-prev]")?.addEventListener("click", () => {
      activePanelIndex = (activePanelIndex - 1 + panels.length) % panels.length;
      renderPanelSlider(panels);
    }, { once: true });
    qs("[data-wc-panel-next]")?.addEventListener("click", () => {
      activePanelIndex = (activePanelIndex + 1) % panels.length;
      renderPanelSlider(panels);
    }, { once: true });
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
      target.innerHTML = `<div class="wc-empty">Group tables</div>`;
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
                <span>Group table</span>
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
                <p>${stadium.country}</p>
                <p>${stadium.city}</p>
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

  function renderBracket(seedTeams) {
    const target = qs("[data-wc-bracket]");
    if (!target || !seedTeams?.length) return;
    const storageKey = "presda-road-to-final";
    const selected = JSON.parse(localStorage.getItem(storageKey) || "{}");
    const rounds = ["Round of 32", "Round of 16", "Quarter Finals", "Semi Finals", "Final", "Champion"];

    function getRoundTeams(roundIndex) {
      if (roundIndex === 0) return seedTeams;
      const previous = getRoundTeams(roundIndex - 1);
      const teams = [];
      for (let i = 0; i < previous.length; i += 2) {
        const key = `r${roundIndex - 1}m${i / 2}`;
        teams.push(selected[key] ? JSON.parse(selected[key]) : { name: "TBD", flag: "" });
      }
      return teams;
    }

    function selectWinner(roundIndex, matchIndex, team) {
      if (!team || team.name === "TBD") return;
      selected[`r${roundIndex}m${matchIndex}`] = JSON.stringify(team);
      Object.keys(selected).forEach((key) => {
        const round = Number(key.match(/^r(\d+)m/)?.[1] || 0);
        if (round > roundIndex) delete selected[key];
      });
      localStorage.setItem(storageKey, JSON.stringify(selected));
      renderBracket(seedTeams);
    }

    const html = rounds
      .map((roundName, roundIndex) => {
        if (roundIndex === rounds.length - 1) {
          const finalWinner = selected.r4m0 ? JSON.parse(selected.r4m0) : { name: "Choose finalists", flag: "" };
          return `
            <section class="wc-bracket-round is-champion">
              <h3>${roundName}</h3>
              <div class="wc-champion-card">
                ${finalWinner.flag ? `<img src="${finalWinner.flag}" alt="">` : ""}
                <strong>${finalWinner.name}</strong>
              </div>
            </section>
          `;
        }
        const roundTeams = getRoundTeams(roundIndex);
        const matches = [];
        for (let i = 0; i < roundTeams.length; i += 2) matches.push([roundTeams[i], roundTeams[i + 1]]);
        return `
          <section class="wc-bracket-round">
            <h3>${roundName}</h3>
            ${matches
              .map((match, matchIndex) => `
                <article class="wc-bracket-match">
                  ${match
                    .map((team) => {
                      const isWinner = selected[`r${roundIndex}m${matchIndex}`] === JSON.stringify(team);
                      return `
                      <button class="wc-bracket-team${isWinner ? " is-winner" : ""}" type="button" data-round="${roundIndex}" data-match="${matchIndex}" data-team="${encodeURIComponent(JSON.stringify(team))}">
                        ${team.flag ? `<img src="${team.flag}" alt="">` : ""}
                        <span>${team.name}</span>
                      </button>
                    `;
                    })
                    .join("")}
                </article>
              `)
              .join("")}
          </section>
        `;
      })
      .join("");

    target.innerHTML = `<div class="wc-bracket">${html}</div>`;
    target.querySelectorAll("[data-team]").forEach((button) => {
      button.addEventListener("click", () => {
        selectWinner(
          Number(button.dataset.round),
          Number(button.dataset.match),
          JSON.parse(decodeURIComponent(button.dataset.team))
        );
      });
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

  function prioritizeWorldCupLayout() {
    const main = qs(".wc-dashboard");
    const slider = qs(".wc-panel-slider");
    const grid = qs(".wc-grid");
    const fanVote = qs("#fan-vote");
    const standings = qs("#standings");
    const road = qs("#road-to-final");
    const stadiums = qs("#stadiums");
    const ball = qs("#official-ball");
    const fixtures = qs("#fixtures");
    const news = qs("#world-cup-news");
    if (!main || !slider) return;

    let anchor = slider;
    [fanVote, standings, road, stadiums, ball, fixtures, news].forEach((node) => {
      if (!node) return;
      main.insertBefore(node, anchor.nextSibling);
      anchor = node;
    });

    if (grid && grid.children.length) main.insertBefore(grid, anchor.nextSibling);
  }

  async function renderDashboard() {
    const dashboard = service ? await service.getWorldCupDashboard() : data;
    renderQuickLinks();
    renderPanelSlider(dashboard.worldCupPanels || data.worldCupPanels || []);
    renderMatchRows("[data-wc-today]", dashboard.todayMatches, "No matches listed today");
    renderMatchRows("[data-wc-live]", dashboard.liveScores, "No live matches right now");
    renderMatchRows("[data-wc-fixtures]", dashboard.fixtures, "Schedule updates will appear here");
    renderMatchRows("[data-wc-results]", dashboard.results, "Results update after full time");
    renderGroups(dashboard.groupTables);
    renderList("[data-wc-scorers]", dashboard.topScorers, "Tournament stats");
    renderList("[data-wc-assists]", dashboard.topAssists, "Tournament stats");
    renderMatchCenterLinks(dashboard.matchCenterPages);
    renderFanVote(dashboard.fanVote);
    renderTv(dashboard.tvChannels);
    renderStadiums(dashboard.stadiums);
    renderBracket(dashboard.knockoutSeeds || data.knockoutSeeds || []);
    renderNews();
    prioritizeWorldCupLayout();
  }

  renderDashboard();
})();
