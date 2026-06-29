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
                <span>${group.status || "Group table"}</span>
              </header>
              <table>
                <thead><tr><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead>
                <tbody>
                  ${group.teams
                    .map((team) => `
                      <tr class="${team.qualified ? "is-qualified" : ""}">
                        <td>${team.flag ? `<img src="${team.flag}" alt="">` : ""}<span>${team.name}</span>${team.qualified ? `<abbr title="Qualified for the Round of 32">Q</abbr>` : ""}</td>
                        <td>${team.played}</td>
                        <td>${team.wins}</td>
                        <td>${team.draws}</td>
                        <td>${team.losses}</td>
                        <td>${team.goalDifference > 0 ? "+" : ""}${team.goalDifference ?? 0}</td>
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
    const shareText = "My FIFA World Cup 2026 Road To The Final prediction is ready 🏆\nWho beats my bracket?\nBuild yours on PRESDA.";
    const shareModal = qs("[data-share-modal]");
    const sharePreview = qs("[data-share-preview]");
    const sharePreviewFrame = qs("[data-share-preview-frame]");
    const sharePreviewStatus = qs("[data-share-preview-status]");
    const shareFeedback = qs("[data-share-feedback]");
    let capturedBracket = null;
    let capturedBracketId = "";
    let capturePromise = null;

    function blankState() {
      return { r32: Array(16).fill(null), r16: Array(8).fill(null), qf: Array(4).fill(null), sf: Array(2).fill(null), final: [null] };
    }

    const findTeam = (name) => seedTeams.find((team) => team.name === name) || emptyTeam;

    function matchesForState(state, key) {
      if (key === "r32") {
        return Array.from({ length: 16 }, (_, index) => [seedTeams[index * 2], seedTeams[index * 2 + 1]]);
      }
      const previousKey = roundKeys[roundKeys.indexOf(key) - 1];
      return Array.from({ length: state[key].length }, (_, index) => [
        state[previousKey][index * 2] ? findTeam(state[previousKey][index * 2]) : emptyTeam,
        state[previousKey][index * 2 + 1] ? findTeam(state[previousKey][index * 2 + 1]) : emptyTeam
      ]);
    }

    function parseBase36(value) {
      return value.split("").reduce((total, character) => {
        const digit = parseInt(character, 36);
        if (!Number.isFinite(digit)) throw new Error("Invalid prediction ID");
        return total * 36n + BigInt(digit);
      }, 0n);
    }

    function encodePrediction(state) {
      let packed = 0n;
      let place = 1n;
      roundKeys.forEach((key) => {
        const matches = matchesForState(state, key);
        state[key].forEach((winner, index) => {
          const digit = winner === matches[index][0].name ? 1 : winner === matches[index][1].name ? 2 : 0;
          packed += BigInt(digit) * place;
          place *= 3n;
        });
      });
      return `1${packed.toString(36).toUpperCase()}`;
    }

    function decodePrediction(id) {
      if (!/^1[0-9A-Z]{1,11}$/i.test(id || "")) return null;
      const state = blankState();
      let packed = parseBase36(id.slice(1).toLowerCase());
      roundKeys.forEach((key) => {
        const matches = matchesForState(state, key);
        state[key].forEach((_, index) => {
          const digit = Number(packed % 3n);
          packed /= 3n;
          const team = digit > 0 ? matches[index][digit - 1] : null;
          state[key][index] = team && team.name !== emptyTeam.name ? team.name : null;
        });
      });
      return state;
    }

    function hydrateState(saved) {
      const state = blankState();
      roundKeys.forEach((key) => {
        if (Array.isArray(saved?.[key])) state[key] = state[key].map((_, index) => saved[key][index] || null);
      });
      return state;
    }

    function readState() {
      const params = new URLSearchParams(window.location.search);
      const shortId = params.get("p");
      const legacy = params.get("bracket");
      try {
        if (shortId) return decodePrediction(shortId) || blankState();
        if (legacy) return hydrateState(JSON.parse(atob(legacy.replace(/-/g, "+").replace(/_/g, "/"))));
        return hydrateState(JSON.parse(localStorage.getItem(storageKey) || "null"));
      } catch (_) {
        return blankState();
      }
    }

    const selected = readState();
    const matchesFor = (key) => matchesForState(selected, key);

    function sanitizeState() {
      roundKeys.forEach((key) => {
        const matches = matchesFor(key);
        selected[key] = selected[key].map((winner, index) =>
          matches[index].some((team) => team.name === winner) ? winner : null
        );
      });
    }

    function saveState() {
      const serialized = JSON.stringify(selected);
      const id = encodePrediction(selected);
      localStorage.setItem(storageKey, serialized);
      localStorage.setItem(`presda-prediction-${id}`, serialized);
      return id;
    }

    function chooseWinner(key, matchIndex, teamName) {
      if (!teamName || teamName === emptyTeam.name) return;
      selected[key][matchIndex] = teamName;
      sanitizeState();
      saveState();
      invalidateBracketCapture();
      history.replaceState(null, "", `${window.location.pathname}#road-to-final`);
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

    function drawConnections(bracketRoot = target) {
      if (!bracketRoot?.querySelector) bracketRoot = target;
      const canvas = bracketRoot.querySelector(".wc-bracket");
      const svg = bracketRoot.querySelector(".wc-bracket-lines");
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

    function invalidateBracketCapture() {
      capturedBracket = null;
      capturedBracketId = "";
      if (sharePreview) sharePreview.removeAttribute("src");
    }

    function waitForCaptureImages(root) {
      return Promise.all(Array.from(root.querySelectorAll("img")).map((image) => {
        if (image.complete) return Promise.resolve();
        return new Promise((resolve) => {
          image.addEventListener("load", resolve, { once: true });
          image.addEventListener("error", resolve, { once: true });
        });
      }));
    }

    function canvasBlob(canvas) {
      return new Promise((resolve) => canvas?.toBlob(resolve, "image/png", 1));
    }

    async function captureFullBracket() {
      const predictionId = encodePrediction(selected);
      if (capturedBracket && capturedBracketId === predictionId) return capturedBracket;
      if (capturePromise) return capturePromise;
      if (typeof window.html2canvas !== "function") throw new Error("Bracket capture library is unavailable");

      capturePromise = (async () => {
        const source = qs("#road-to-final");
        if (!source) throw new Error("Road To The Final section is unavailable");
        const capture = source.cloneNode(true);
        capture.removeAttribute("id");
        capture.classList.add("is-share-capture");
        capture.querySelector(".wc-bracket-actions")?.remove();
        capture.querySelector(".wc-bracket-status")?.remove();

        const brand = document.createElement("div");
        brand.className = "wc-capture-brand";
        brand.innerHTML = '<img src="/images/brand/ptransparent.png" alt=""><strong>PRESDA.COM</strong>';
        capture.prepend(brand);
        document.body.appendChild(capture);

        try {
          await document.fonts?.ready;
          await waitForCaptureImages(capture);
          drawConnections(capture.querySelector("[data-wc-bracket]"));
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
          const canvas = await window.html2canvas(capture, {
            backgroundColor: "#000000",
            scale: 2,
            useCORS: true,
            allowTaint: false,
            logging: false,
            imageTimeout: 15000,
            scrollX: 0,
            scrollY: 0
          });
          capturedBracket = canvas;
          capturedBracketId = predictionId;
          if (sharePreview) sharePreview.src = canvas.toDataURL("image/png");
          return canvas;
        } finally {
          capture.remove();
        }
      })();

      try {
        return await capturePromise;
      } finally {
        capturePromise = null;
      }
    }

    async function predictionFile() {
      const canvas = await captureFullBracket();
      const blob = await canvasBlob(canvas);
      return blob ? new File([blob], `presda-world-cup-prediction-${encodePrediction(selected)}.png`, { type: "image/png" }) : null;
    }

    async function downloadPredictionImage() {
      const file = await predictionFile();
      if (!file) return false;
      const url = URL.createObjectURL(file);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = file.name;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      return true;
    }

    function setShareFeedback(message) {
      if (shareFeedback) shareFeedback.textContent = message;
    }

    function predictionShareUrl() {
      const id = saveState();
      return `${window.location.origin}${window.location.pathname}?p=${id}#road-to-final`;
    }

    async function copyShareLink(url) {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(url);
          return true;
        } catch (_) {
          // Continue to the selection fallback when clipboard permission is denied.
        }
      }
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      const copied = document.execCommand("copy");
      if (copied) {
        input.remove();
        return true;
      }
      input.remove();
      const fallback = shareModal?.querySelector("[data-share-link-fallback]");
      const fallbackInput = shareModal?.querySelector("[data-share-link-value]");
      if (fallback && fallbackInput) {
        fallback.hidden = false;
        fallbackInput.value = url;
        fallbackInput.focus();
        fallbackInput.select();
      }
      return false;
    }

    async function openShareModal() {
      const shareUrl = predictionShareUrl();
      const actions = shareModal?.querySelectorAll("[data-share-channel]") || [];
      actions.forEach((button) => {
        button.dataset.shareUrl = shareUrl;
        const channel = button.dataset.shareChannel;
        if (channel === "facebook") button.dataset.shareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        if (channel === "whatsapp") button.dataset.shareHref = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
        if (channel === "x") button.dataset.shareHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      });
      setShareFeedback("");
      const fallback = shareModal?.querySelector("[data-share-link-fallback]");
      if (fallback) fallback.hidden = true;
      if (sharePreviewFrame) sharePreviewFrame.setAttribute("aria-busy", "true");
      if (sharePreviewStatus) sharePreviewStatus.textContent = "Capturing your full bracket...";
      if (shareModal?.showModal && !shareModal.open) shareModal.showModal();
      else if (!shareModal?.open) shareModal?.setAttribute("open", "");
      await captureFullBracket();
      if (sharePreviewFrame) sharePreviewFrame.setAttribute("aria-busy", "false");
      if (sharePreviewStatus) sharePreviewStatus.textContent = "Full bracket ready";
      const nativeButton = shareModal?.querySelector('[data-share-channel="native"]');
      if (nativeButton) {
        const file = await predictionFile();
        nativeButton.hidden = !(file && navigator.canShare?.({ files: [file] }));
      }
    }

    async function handleShareAction(button) {
      const channel = button.dataset.shareChannel;
      const shareUrl = button.dataset.shareUrl || predictionShareUrl();
      if (["facebook", "whatsapp", "x"].includes(channel)) {
        window.open(button.dataset.shareHref, "_blank", "noopener,noreferrer");
        setShareFeedback(`${channel === "x" ? "X / Twitter" : channel[0].toUpperCase() + channel.slice(1)} share window opened.`);
        return;
      }
      if (channel === "copy") {
        const copied = await copyShareLink(shareUrl);
        setShareFeedback(copied ? "Short prediction link copied." : "Clipboard access is blocked. The short link is selected and ready to copy.");
        return;
      }
      if (channel === "download") {
        await downloadPredictionImage();
        setShareFeedback("Prediction PNG downloaded.");
        return;
      }
      if (channel === "instagram") {
        await downloadPredictionImage();
        setShareFeedback("Download your prediction image and post it to Instagram Story.");
        return;
      }
      if (channel === "native") {
        const file = await predictionFile();
        if (file && navigator.canShare?.({ files: [file] })) {
          await navigator.share({ title: "My PRESDA World Cup 2026 Prediction", text: shareText, files: [file] });
          setShareFeedback("Prediction image shared.");
        } else {
          await copyShareLink(shareUrl);
          setShareFeedback("Image sharing is unavailable here. Short link copied instead.");
        }
      }
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
      const currentId = encodePrediction(selected);
      roundKeys.forEach((key) => selected[key].fill(null));
      localStorage.removeItem(storageKey);
      localStorage.removeItem(`presda-prediction-${currentId}`);
      invalidateBracketCapture();
      history.replaceState(null, "", window.location.pathname + "#road-to-final");
      qs("[data-bracket-status]").textContent = "Bracket reset.";
      shareModal?.close?.();
      render();
    });

    qs("[data-bracket-share]")?.addEventListener("click", async () => {
      try {
        await openShareModal();
        qs("[data-bracket-status]").textContent = "Share options ready.";
      } catch (error) {
        console.warn("PRESDA share modal:", error);
        qs("[data-bracket-status]").textContent = "Share options are temporarily unavailable.";
      }
    });

    shareModal?.querySelector("[data-share-close]")?.addEventListener("click", () => shareModal.close());
    shareModal?.querySelector("[data-share-link-select]")?.addEventListener("click", () => {
      const input = shareModal.querySelector("[data-share-link-value]");
      input?.focus();
      input?.select();
      setShareFeedback("Short prediction link selected.");
    });
    shareModal?.addEventListener("click", (event) => {
      if (event.target === shareModal) shareModal.close();
    });
    shareModal?.querySelectorAll("[data-share-channel]").forEach((button) => {
      button.addEventListener("click", async () => {
        try {
          await handleShareAction(button);
        } catch (error) {
          if (error?.name !== "AbortError") {
            console.warn("PRESDA share action:", error);
            setShareFeedback("That share option could not open. Your short link is still ready to copy.");
          }
        }
      });
    });

    window.addEventListener("resize", () => requestAnimationFrame(drawConnections), { passive: true });
    sanitizeState();
    const initialId = saveState();
    if (new URLSearchParams(window.location.search).has("bracket")) {
      history.replaceState(null, "", `${window.location.pathname}?p=${initialId}#road-to-final`);
    }
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
