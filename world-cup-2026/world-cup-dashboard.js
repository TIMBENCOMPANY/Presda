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
    const storageKey = "presda-road-to-final-v2";
    const roundKeys = ["r32", "r16", "qf", "sf", "final"];
    const roundLabels = { r32: "Round of 32", r16: "Round of 16", qf: "Quarter Finals", sf: "Semi Finals" };
    const matchNumbers = {
      r32: [74, 77, 73, 75, 83, 84, 81, 82, 76, 78, 79, 80, 86, 88, 85, 87],
      r16: [89, 90, 93, 94, 91, 92, 95, 96],
      qf: [97, 98, 99, 100],
      sf: [101, 102],
      final: [104]
    };
    const emptyTeam = { name: "To be decided", flag: "" };

    function blankState() {
      return { r32: Array(16).fill(null), r16: Array(8).fill(null), qf: Array(4).fill(null), sf: Array(2).fill(null), final: [null] };
    }

    function readState() {
      const base = blankState();
      let saved = null;
      const shared = new URLSearchParams(window.location.search).get("bracket");
      try {
        saved = shared
          ? JSON.parse(atob(shared.replace(/-/g, "+").replace(/_/g, "/")))
          : JSON.parse(localStorage.getItem(storageKey) || "null");
      } catch (_) {
        saved = null;
      }
      roundKeys.forEach((key) => {
        if (Array.isArray(saved?.[key])) base[key] = base[key].map((_, index) => saved[key][index] || null);
      });
      return base;
    }

    const selected = readState();
    const findTeam = (name) => seedTeams.find((team) => team.name === name) || emptyTeam;

    function matchesFor(key) {
      if (key === "r32") {
        return Array.from({ length: 16 }, (_, index) => [seedTeams[index * 2], seedTeams[index * 2 + 1]]);
      }
      const previousKey = roundKeys[roundKeys.indexOf(key) - 1];
      return Array.from({ length: selected[key].length }, (_, index) => [
        selected[previousKey][index * 2] ? findTeam(selected[previousKey][index * 2]) : emptyTeam,
        selected[previousKey][index * 2 + 1] ? findTeam(selected[previousKey][index * 2 + 1]) : emptyTeam
      ]);
    }

    function sanitizeState() {
      roundKeys.forEach((key) => {
        const matches = matchesFor(key);
        selected[key] = selected[key].map((winner, index) =>
          matches[index].some((team) => team.name === winner) ? winner : null
        );
      });
    }

    function saveState() {
      localStorage.setItem(storageKey, JSON.stringify(selected));
    }

    function chooseWinner(key, matchIndex, teamName) {
      if (!teamName || teamName === emptyTeam.name) return;
      selected[key][matchIndex] = teamName;
      sanitizeState();
      saveState();
      render();
    }

    function teamButton(team, key, matchIndex) {
      const unavailable = team.name === emptyTeam.name;
      const isWinner = selected[key][matchIndex] === team.name;
      return `
        <button class="wc-bracket-team${isWinner ? " is-winner" : ""}" type="button"
          data-round-key="${key}" data-match="${matchIndex}" data-team-name="${team.name}"
          aria-pressed="${isWinner}"${unavailable ? " disabled" : ""}>
          ${team.flag ? `<img src="${team.flag}" alt="" loading="lazy">` : `<span class="wc-team-seed" aria-hidden="true">?</span>`}
          <span>${team.name}</span>
        </button>`;
    }

    function matchCard(key, matchIndex) {
      const match = matchesFor(key)[matchIndex];
      return `
        <article class="wc-bracket-match" data-node="${key}-${matchIndex}">
          <small>M${matchNumbers[key][matchIndex]}</small>
          ${teamButton(match[0], key, matchIndex)}
          ${teamButton(match[1], key, matchIndex)}
        </article>`;
    }

    function roundColumn(key, indices, side) {
      return `
        <section class="wc-bracket-round is-${side} is-${key}">
          <h3>${roundLabels[key]}</h3>
          <div class="wc-round-matches">${indices.map((index) => matchCard(key, index)).join("")}</div>
        </section>`;
    }

    function drawConnections() {
      const canvas = target.querySelector(".wc-bracket");
      const svg = target.querySelector(".wc-bracket-lines");
      if (!canvas || !svg) return;
      const canvasRect = canvas.getBoundingClientRect();
      svg.setAttribute("viewBox", `0 0 ${canvasRect.width} ${canvasRect.height}`);
      svg.innerHTML = "";

      const connect = (fromSelector, toSelector) => {
        const from = canvas.querySelector(`[data-node="${fromSelector}"]`);
        const to = canvas.querySelector(`[data-node="${toSelector}"]`);
        if (!from || !to) return;
        const a = from.getBoundingClientRect();
        const b = to.getBoundingClientRect();
        const leftToRight = a.left < b.left;
        const x1 = (leftToRight ? a.right : a.left) - canvasRect.left;
        const y1 = a.top + a.height / 2 - canvasRect.top;
        const x2 = (leftToRight ? b.left : b.right) - canvasRect.left;
        const y2 = b.top + b.height / 2 - canvasRect.top;
        const mid = (x1 + x2) / 2;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`);
        svg.appendChild(path);
      };

      [["r32", "r16", 16], ["r16", "qf", 8], ["qf", "sf", 4]].forEach(([from, to, count]) => {
        for (let index = 0; index < count; index += 1) connect(`${from}-${index}`, `${to}-${Math.floor(index / 2)}`);
      });
      connect("sf-0", "final-0");
      connect("sf-1", "final-0");
      connect("final-0", "champion-0");
    }

    function render() {
      sanitizeState();
      const champion = selected.final[0] ? findTeam(selected.final[0]) : null;
      target.innerHTML = `
        <div class="wc-bracket" data-bracket-canvas>
          <svg class="wc-bracket-lines" aria-hidden="true"></svg>
          ${roundColumn("r32", [0, 1, 2, 3, 4, 5, 6, 7], "left")}
          ${roundColumn("r16", [0, 1, 2, 3], "left")}
          ${roundColumn("qf", [0, 1], "left")}
          ${roundColumn("sf", [0], "left")}
          <section class="wc-bracket-center">
            <span>World Cup 2026</span>
            <h3>Final</h3>
            ${matchCard("final", 0)}
            <div class="wc-champion-card${champion ? " is-complete" : ""}" data-node="champion-0">
              <small>Champion</small>
              ${champion?.flag ? `<img src="${champion.flag}" alt="">` : `<span class="wc-trophy-mark" aria-hidden="true">26</span>`}
              <strong>${champion?.name || "Your Champion"}</strong>
            </div>
          </section>
          ${roundColumn("sf", [1], "right")}
          ${roundColumn("qf", [2, 3], "right")}
          ${roundColumn("r16", [4, 5, 6, 7], "right")}
          ${roundColumn("r32", [8, 9, 10, 11, 12, 13, 14, 15], "right")}
        </div>`;

      target.querySelectorAll("[data-round-key]").forEach((button) => {
        button.addEventListener("click", () => chooseWinner(button.dataset.roundKey, Number(button.dataset.match), button.dataset.teamName));
      });
      requestAnimationFrame(drawConnections);
    }

    qs("[data-bracket-reset]")?.addEventListener("click", () => {
      roundKeys.forEach((key) => selected[key].fill(null));
      localStorage.removeItem(storageKey);
      history.replaceState(null, "", window.location.pathname + "#road-to-final");
      qs("[data-bracket-status]").textContent = "Bracket reset.";
      render();
    });

    qs("[data-bracket-share]")?.addEventListener("click", async () => {
      saveState();
      const encoded = btoa(JSON.stringify(selected)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
      const shareUrl = `${window.location.origin}${window.location.pathname}?bracket=${encoded}#road-to-final`;
      const status = qs("[data-bracket-status]");
      try {
        if (navigator.share) {
          await navigator.share({ title: "My PRESDA World Cup prediction", text: "My road to the World Cup 2026 final", url: shareUrl });
          status.textContent = "Prediction shared.";
        } else {
          await navigator.clipboard.writeText(shareUrl);
          status.textContent = "Prediction link copied.";
        }
      } catch (error) {
        if (error?.name !== "AbortError") {
          window.prompt("Copy your prediction link", shareUrl);
          status.textContent = "Prediction link ready.";
        }
      }
    });

    window.addEventListener("resize", () => requestAnimationFrame(drawConnections), { passive: true });
    render();
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
