(function attachFootballDataService(global) {
  const fallback = () => global.PRESDA_WORLD_CUP_DATA || {};
  const env = () => global.PRESDA_ENV || {};

  const endpoints = {
    fixtures: "/fixtures",
    liveScores: "/fixtures",
    results: "/fixtures",
    standings: "/standings",
    events: "/fixtures/events",
    lineups: "/fixtures/lineups",
    topScorers: "/players/topscorers",
    topAssists: "/players/topassists"
  };

  const worldCupParams = {
    league: 1,
    season: 2026
  };

  async function requestApi(path, params = {}) {
    const config = env();
    if (!config.FOOTBALL_API_KEY || !config.FOOTBALL_API_HOST) {
      return { ok: false, reason: "missing-api-key", data: null };
    }

    const url = new URL(`https://${config.FOOTBALL_API_HOST}${path}`);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") url.searchParams.set(key, value);
    });

    const response = await fetch(url, {
      headers: {
        "x-rapidapi-host": config.FOOTBALL_API_HOST,
        "x-rapidapi-key": config.FOOTBALL_API_KEY
      }
    });

    if (!response.ok) return { ok: false, reason: `api-${response.status}`, data: null };
    return { ok: true, data: await response.json() };
  }

  async function requestWorldCup(path, params = {}) {
    return requestApi(path, { ...worldCupParams, ...params });
  }

  function fallbackDashboard(provider = "fallback-static") {
    const staticData = fallback();
    return {
      provider,
      status: staticData.dashboardStatus,
      todayMatches: staticData.todayMatches || [],
      liveScores: staticData.liveScores || [],
      fixtures: staticData.fixtures || [],
      results: staticData.results || [],
      standings: staticData.standings || [],
      groupTables: staticData.groupTables || [],
      matchEvents: staticData.matchEvents || [],
      lineups: staticData.lineups || [],
      topScorers: staticData.topScorers || [],
      topAssists: staticData.topAssists || [],
      fanVote: staticData.fanVote || { totalVotes: 0, teams: [] },
      tvChannels: staticData.tvChannels || [],
      stadiums: staticData.stadiums || [],
      matchCenterPages: staticData.matchCenterPages || []
    };
  }

  function normalizeFixture(fixture = {}) {
    const teams = fixture.teams || {};
    const goals = fixture.goals || {};
    const status = fixture.fixture?.status?.short || fixture.fixture?.status?.long || "Upcoming";
    return {
      id: fixture.fixture?.id,
      home: teams.home?.name || "TBC",
      away: teams.away?.name || "TBC",
      homeLogo: teams.home?.logo || "",
      awayLogo: teams.away?.logo || "",
      homeGoals: goals.home,
      awayGoals: goals.away,
      status,
      venue: fixture.fixture?.venue?.name || "Awaiting official confirmation",
      city: fixture.fixture?.venue?.city || "",
      date: fixture.fixture?.date || "",
      timestamp: fixture.fixture?.timestamp || 0
    };
  }

  function normalizeStanding(group = {}) {
    return {
      rank: group.rank,
      name: group.team?.name || "TBC",
      flag: group.team?.logo || "",
      played: group.all?.played ?? 0,
      wins: group.all?.win ?? 0,
      draws: group.all?.draw ?? 0,
      losses: group.all?.lose ?? 0,
      points: group.points ?? 0,
      status: group.description || ""
    };
  }

  async function getWorldCupDashboard() {
    const config = env();
    if (!config.FOOTBALL_API_KEY || !config.FOOTBALL_API_HOST) {
      return fallbackDashboard("fallback-static");
    }

    try {
      const [live, fixtures, results, standings] = await Promise.all([
        requestWorldCup(endpoints.liveScores, { live: "all" }),
        requestWorldCup(endpoints.fixtures, { next: 12 }),
        requestWorldCup(endpoints.results, { last: 12 }),
        requestWorldCup(endpoints.standings)
      ]);

      if (![live, fixtures, results, standings].some((result) => result.ok)) {
        return fallbackDashboard("fallback-api-unavailable");
      }

      const staticData = fallbackDashboard("api-football-ready");
      const liveRows = live.ok ? (live.data?.response || []).map(normalizeFixture) : [];
      const fixtureRows = fixtures.ok ? (fixtures.data?.response || []).map(normalizeFixture) : [];
      const resultRows = results.ok ? (results.data?.response || []).map(normalizeFixture) : [];
      const apiStandings = standings.ok
        ? (standings.data?.response?.[0]?.league?.standings || []).map((group, index) => ({
            name: `Group ${String.fromCharCode(65 + index)}`,
            status: "Official table",
            teams: group.map(normalizeStanding)
          }))
        : [];

      return {
        ...staticData,
        liveScores: liveRows,
        todayMatches: fixtureRows.filter((match) => {
          if (!match.date) return false;
          return new Date(match.date).toDateString() === new Date().toDateString();
        }),
        fixtures: fixtureRows,
        results: resultRows,
        groupTables: apiStandings.length ? apiStandings : staticData.groupTables
      };
    } catch (error) {
      console.warn("PRESDA football data fallback:", error);
      return fallbackDashboard("fallback-error");
    }
  }

  global.PresdaFootballDataService = {
    endpoints,
    worldCupParams,
    requestApi,
    requestWorldCup,
    getWorldCupDashboard
  };
})(typeof window !== "undefined" ? window : globalThis);
