(function attachPresdaWorldCupData(global) {
  const worldCupConfig = {
    competition: "FIFA World Cup 2026",
    season: "2026",
    openingMatchUtc: "2026-06-11T20:00:00Z",
    apiProvider: "api-football",
    apiReady: true,
    apiHostEnv: "FOOTBALL_API_HOST",
    apiKeyEnv: "FOOTBALL_API_KEY",
    newsKeyEnv: "NEWS_API_KEY",
    fallbackMode: "static-safe"
  };

  const dashboardStatus = {
    fixtures: "Awaiting official confirmation",
    liveScores: "No live matches",
    results: "Awaiting official confirmation",
    standings: "Awaiting official group draw",
    lineups: "Lineups appear on matchday",
    events: "Match events appear live"
  };

  const todayMatches = [];
  const liveScores = [];
  const fixtures = [];
  const results = [];
  const standings = [];
  const topScorers = [];
  const topAssists = [];
  const matchEvents = [];
  const lineups = [];

  const groupTables = Array.from({ length: 12 }, (_, index) => ({
    name: `Group ${String.fromCharCode(65 + index)}`,
    status: "Awaiting official draw",
    teams: [
      { name: "Team 1", flag: "", played: 0, wins: 0, draws: 0, losses: 0, points: 0, status: "To be confirmed" },
      { name: "Team 2", flag: "", played: 0, wins: 0, draws: 0, losses: 0, points: 0, status: "To be confirmed" },
      { name: "Team 3", flag: "", played: 0, wins: 0, draws: 0, losses: 0, points: 0, status: "To be confirmed" },
      { name: "Team 4", flag: "", played: 0, wins: 0, draws: 0, losses: 0, points: 0, status: "To be confirmed" }
    ]
  }));

  const fanVote = {
    totalVotes: 18420,
    teams: [
      { name: "Morocco", flag: "https://flagcdn.com/ma.svg", percent: 24, votes: 4421, colors: ["#c1272d", "#006233"] },
      { name: "Brazil", flag: "https://flagcdn.com/br.svg", percent: 21, votes: 3868, colors: ["#009739", "#ffdf00"] },
      { name: "Argentina", flag: "https://flagcdn.com/ar.svg", percent: 18, votes: 3316, colors: ["#6cace4", "#ffffff"] },
      { name: "France", flag: "https://flagcdn.com/fr.svg", percent: 16, votes: 2947, colors: ["#0055a4", "#ef4135"] },
      { name: "Spain", flag: "https://flagcdn.com/es.svg", percent: 12, votes: 2210, colors: ["#aa151b", "#f1bf00"] },
      { name: "Portugal", flag: "https://flagcdn.com/pt.svg", percent: 9, votes: 1658, colors: ["#ff0000", "#006600"] }
    ]
  };

  const tvChannels = [
    { name: "FOX Sports", region: "United States", status: "Official broadcaster", logoText: "FOX" },
    { name: "Telemundo", region: "United States", status: "Official broadcaster", logoText: "T" },
    { name: "TSN", region: "Canada", status: "Official broadcaster", logoText: "TSN" },
    { name: "CTV", region: "Canada", status: "Official broadcaster", logoText: "CTV" },
    { name: "beIN SPORTS", region: "MENA", status: "Regional broadcaster", logoText: "beIN" },
    { name: "BBC / ITV", region: "United Kingdom", status: "Expected coverage", logoText: "BBC" }
  ];

  const matchCenterPages = [
    { label: "Match Center", href: "/world-cup-2026/match-center/", description: "Fixtures, live scores, results, lineups and events" },
    { label: "Group Standings", href: "/world-cup-2026/#standings", description: "All groups when the official draw is confirmed" },
    { label: "TV Channels", href: "/world-cup-2026/#tv-channels", description: "Official broadcast partners by region" }
  ];

  const stadiums = [
    { name: "MetLife Stadium", city: "New York / New Jersey", country: "United States", capacity: "82,500", image: "/images/articles/worldcup.jpg", label: "Final venue" },
    { name: "AT&T Stadium", city: "Dallas", country: "United States", capacity: "80,000", image: "/images/articles/fifa-world-cup-dark.png", label: "Host stadium" },
    { name: "SoFi Stadium", city: "Los Angeles", country: "United States", capacity: "70,240", image: "/images/articles/fifa-world-cup-light.png", label: "Host stadium" },
    { name: "BMO Field", city: "Toronto", country: "Canada", capacity: "45,500", image: "/images/articles/worldcup.jpg", label: "Host stadium" },
    { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", capacity: "87,523", image: "/images/articles/fifa-world-cup-dark.png", label: "Opening match" }
  ];

  const quickLinks = [
    { label: "Match Center", href: "/world-cup-2026/match-center/" },
    { label: "Today\'s Matches", href: "#todays-matches" },
    { label: "Live Scores", href: "#live-scores" },
    { label: "Fixtures", href: "#fixtures" },
    { label: "Results", href: "#results" },
    { label: "Standings", href: "#standings" },
    { label: "Events", href: "#match-events" },
    { label: "Lineups", href: "#lineups" },
    { label: "TV Channels", href: "#tv-channels" },
    { label: "Fan Vote", href: "#fan-vote" },
    { label: "Stadiums", href: "#stadiums" },
    { label: "News", href: "#world-cup-news" }
  ];
  global.PRESDA_WORLD_CUP_DATA = {
    worldCupConfig,
    dashboardStatus,
    todayMatches,
    liveScores,
    fixtures,
    results,
    standings,
    groupTables,
    matchEvents,
    lineups,
    topScorers,
    topAssists,
    fanVote,
    tvChannels,
    stadiums,
    matchCenterPages,
    quickLinks
  };
})(typeof window !== "undefined" ? window : globalThis);

