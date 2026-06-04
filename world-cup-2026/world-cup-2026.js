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

const fanVoteData = {
  storageKey: "presda_wc2026_fan_vote_v1",
  readyForDatabase: true,
  futureProvider: "supabase",
  favorites: [
    "Argentina",
    "Brazil",
    "France",
    "Spain",
    "England",
    "Portugal",
    "Morocco",
    "Netherlands",
    "Belgium",
    "Germany",
    "United States",
    "Mexico"
  ],
  fifaRankings: {
    France: 1,
    Spain: 2,
    Argentina: 3,
    England: 4,
    Portugal: 5,
    Brazil: 6,
    Morocco: 7,
    Netherlands: 8,
    Belgium: 9,
    Germany: 10
  },
  seedVotes: {
    France: 1240,
    Spain: 1180,
    Argentina: 1110,
    Brazil: 1040,
    England: 950,
    Portugal: 900,
    Morocco: 820,
    Netherlands: 760,
    Belgium: 710,
    Germany: 670,
    "United States": 520,
    Mexico: 500
  },
  colors: {
    Argentina: ["#74acdf", "#ffffff", "#f6b40e"],
    Brazil: ["#009c3b", "#ffdf00", "#002776"],
    France: ["#0055a4", "#ffffff", "#ef4135"],
    Spain: ["#c60b1e", "#ffc400", "#c60b1e"],
    England: ["#ffffff", "#cf142b", "#1f3f8b"],
    Portugal: ["#006600", "#ff0000", "#ffcc00"],
    Germany: ["#111111", "#dd0000", "#ffce00"],
    Netherlands: ["#ff6f00", "#ffffff", "#21468b"],
    Belgium: ["#111111", "#ffe936", "#ef3340"],
    Morocco: ["#c1272d", "#006233", "#ffffff"],
    "United States": ["#3c3b6e", "#ffffff", "#b22234"],
    Mexico: ["#006847", "#ffffff", "#ce1126"],
    Canada: ["#ff0000", "#ffffff", "#ff0000"],
    Uruguay: ["#75aadb", "#ffffff", "#fcd116"],
    Colombia: ["#fcd116", "#003893", "#ce1126"],
    Croatia: ["#f00000", "#ffffff", "#171796"],
    Japan: ["#ffffff", "#bc002d", "#ffffff"],
    Senegal: ["#00853f", "#fdef42", "#e31b23"],
    "Saudi Arabia": ["#006c35", "#ffffff", "#006c35"],
    Australia: ["#012169", "#ffffff", "#ffcd00"],
    "South Africa": ["#007a4d", "#ffb612", "#de3831"],
    Ghana: ["#ce1126", "#fcd116", "#006b3f"],
    Tunisia: ["#e70013", "#ffffff", "#e70013"],
    Egypt: ["#ce1126", "#ffffff", "#111111"],
    Iran: ["#239f40", "#ffffff", "#da0000"],
    Norway: ["#ba0c2f", "#ffffff", "#00205b"],
    Sweden: ["#006aa7", "#fecc00", "#006aa7"],
    Switzerland: ["#ff0000", "#ffffff", "#ff0000"],
    Austria: ["#ed2939", "#ffffff", "#ed2939"],
    Paraguay: ["#d52b1e", "#ffffff", "#0038a8"],
    Ecuador: ["#ffdd00", "#034ea2", "#ed1c24"],
    "Cote d'Ivoire": ["#f77f00", "#ffffff", "#009e60"],
    Algeria: ["#006233", "#ffffff", "#d21034"],
    "Cape Verde": ["#003893", "#ffffff", "#cf2027"],
    "Korea Republic": ["#ffffff", "#c60c30", "#003478"],
    "New Zealand": ["#00247d", "#ffffff", "#cc142b"],
    "Bosnia and Herzegovina": ["#002f6c", "#fcd116", "#ffffff"],
    Qatar: ["#8a1538", "#ffffff", "#8a1538"],
    Czechia: ["#11457e", "#ffffff", "#d7141a"],
    Haiti: ["#00209f", "#ffffff", "#d21034"],
    Scotland: ["#005eb8", "#ffffff", "#005eb8"],
    Turkiye: ["#e30a17", "#ffffff", "#e30a17"],
    Curacao: ["#002b7f", "#f9e814", "#ffffff"],
    Iraq: ["#ce1126", "#ffffff", "#007a3d"],
    Jordan: ["#ce1126", "#ffffff", "#007a3d"],
    "DR Congo": ["#007fff", "#f7d618", "#ce1021"],
    Uzbekistan: ["#1eb6e7", "#ffffff", "#009b3a"],
    Panama: ["#005293", "#ffffff", "#d21034"]
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
    if (days) days.textContent = pad(d);
    if (hours) hours.textContent = pad(h);
    if (minutes) minutes.textContent = pad(m);
    if (seconds) seconds.textContent = pad(s);
  };

  draw();
  window.setInterval(draw, 1000);
})();

(() => {
  const list = document.querySelector("[data-fan-vote-list]");
  const toggle = document.querySelector("[data-fan-vote-toggle]");
  const totalNode = document.querySelector("[data-fan-vote-total]");
  const stateNode = document.querySelector("[data-fan-vote-state]");
  if (!list) return;

  const rows = Array.from(document.querySelectorAll(".wc-group-card tbody tr"));
  const seen = new Set();
  const favoriteOrder = new Map(fanVoteData.favorites.map((team, index) => [team, index]));
  let expanded = false;

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

  const stableSeed = (name) => 34 + Array.from(name).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 128;

  const teams = rows.map((row) => {
    const name = row.querySelector("span")?.textContent?.trim();
    const flag = row.querySelector("img.flag")?.getAttribute("src");
    const group = row.closest(".wc-group-card")?.querySelector("h3")?.textContent?.trim() || "";
    if (!name || !flag || seen.has(name)) return null;
    seen.add(name);
    return {
      name,
      flag,
      group,
      ranking: fanVoteData.fifaRankings[name] || null,
      colors: fanVoteData.colors[name] || ["#ff1a1a", "#ffffff", "#101010"],
      seedVotes: fanVoteData.seedVotes[name] || stableSeed(name)
    };
  }).filter(Boolean);

  teams.sort((a, b) => {
    const aFav = favoriteOrder.has(a.name) ? favoriteOrder.get(a.name) : 999;
    const bFav = favoriteOrder.has(b.name) ? favoriteOrder.get(b.name) : 999;
    if (aFav !== bFav) return aFav - bFav;
    return a.name.localeCompare(b.name);
  });

  const selectedTeam = () => localStorage.getItem(fanVoteData.storageKey) || "";
  const votesFor = (team) => team.seedVotes + (selectedTeam() === team.name ? 1 : 0);
  const allVotes = () => teams.reduce((sum, team) => sum + votesFor(team), 0);

  const render = () => {
    const voted = selectedTeam();
    const total = allVotes();
    const sorted = [...teams].sort((a, b) => {
      if (!voted) {
        const aFav = favoriteOrder.has(a.name) ? favoriteOrder.get(a.name) : 999;
        const bFav = favoriteOrder.has(b.name) ? favoriteOrder.get(b.name) : 999;
        if (aFav !== bFav) return aFav - bFav;
        return a.name.localeCompare(b.name);
      }
      return votesFor(b) - votesFor(a);
    });
    const visible = expanded || voted ? sorted : sorted.slice(0, fanVoteData.favorites.length);

    if (totalNode) totalNode.textContent = `${total.toLocaleString()} votes`;
    if (stateNode) {
      stateNode.textContent = voted
        ? `Your vote: ${voted}`
        : "Choose one team to unlock results.";
    }
    if (toggle) {
      toggle.hidden = !!voted || teams.length <= fanVoteData.favorites.length;
      toggle.textContent = expanded ? "Show favorites" : "View all teams";
    }

    list.innerHTML = visible.map((team) => {
      const count = votesFor(team);
      const percent = total ? Math.round((count / total) * 100) : 0;
      const exact = total ? ((count / total) * 100).toFixed(1) : "0.0";
      const [a, b, c] = team.colors;
      const ranking = team.ranking ? `FIFA ranking ${team.ranking}` : team.group;
      const buttonText = voted ? `${team.name} fan vote result ${exact}%` : `Vote for ${team.name}`;
      return `<button class="wc-fan-vote-row ${voted === team.name ? "is-selected" : ""}" type="button" data-vote-team="${escapeHtml(team.name)}" style="--vote-a:${a};--vote-b:${b};--vote-c:${c};--vote-width:${exact}%;" aria-label="${escapeHtml(buttonText)}">
        <span class="wc-fan-team">
          <img src="${escapeHtml(team.flag)}" alt="${escapeHtml(team.name)} flag" loading="lazy" />
          <span><strong>${escapeHtml(team.name)}</strong><small>${escapeHtml(ranking)}</small></span>
        </span>
        <span class="wc-fan-progress" aria-hidden="true"><i></i></span>
        <span class="wc-fan-percent">${percent}%<small>${count.toLocaleString()} votes</small></span>
      </button>`;
    }).join("");
  };

  list.addEventListener("click", (event) => {
    const row = event.target.closest("[data-vote-team]");
    if (!row || selectedTeam()) return;
    localStorage.setItem(fanVoteData.storageKey, row.dataset.voteTeam || "");
    expanded = true;
    render();
  });

  toggle?.addEventListener("click", () => {
    expanded = !expanded;
    render();
  });

  render();
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

(() => {
  const grid = document.querySelector("[data-wc-news-grid]");
  if (!grid || typeof articles === "undefined" || !Array.isArray(articles)) return;

  const escapeHtml = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);

  const categoriesFor = (article) => {
    if (typeof articleCategories === "function") return articleCategories(article);
    return [article.category, article.secondaryCategory, ...(article.secondaryCategories || [])].filter(Boolean);
  };

  const imageFor = (article) => {
    const light = document.documentElement.classList.contains("light-mode");
    return light ? article.imageLight || article.imageDark || article.image : article.imageDark || article.imageLight || article.image;
  };

  const worldCupArticles = articles
    .filter((article) => categoriesFor(article).includes("World Cup 2026"))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  if (!worldCupArticles.length) return;

  grid.innerHTML = worldCupArticles.map((article, index) => `
    <a class="wc-news-card ${index === 0 ? "feature" : ""}" href="/articles/${article.slug}/">
      <img src="${imageFor(article)}?v=presda-wc-polish-20260603" alt="${escapeHtml(article.imageAlt || article.title)}" loading="lazy" />
      <span>${escapeHtml(article.category)}</span>
      <strong>${escapeHtml(article.title)}</strong>
    </a>
  `).join("");
})();
