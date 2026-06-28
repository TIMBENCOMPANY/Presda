(function attachPresdaWorldCupData(global) {
  const worldCupConfig = {
    competition: "FIFA World Cup 2026",
    season: "2026",
    apiProvider: "api-football",
    apiReady: true,
    apiHostEnv: "FOOTBALL_API_HOST",
    apiKeyEnv: "FOOTBALL_API_KEY",
    newsKeyEnv: "NEWS_API_KEY"
  };

  const dashboardStatus = {
    fixtures: "Official group fixtures",
    liveScores: "No live matches right now",
    results: "Results update after full time",
    standings: "Official group tables",
    lineups: "Team sheets",
    events: "Match timeline"
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

  const groups = [
    ["Group A", [["Mexico", "mx"], ["South Africa", "za"], ["South Korea", "kr"], ["Czechia", "cz"]]],
    ["Group B", [["Switzerland", "ch"], ["Canada", "ca"], ["Bosnia and Herzegovina", "ba"], ["Qatar", "qa"]]],
    ["Group C", [["Brazil", "br"], ["Morocco", "ma"], ["Scotland", "gb-sct"], ["Haiti", "ht"]]],
    ["Group D", [["United States", "us"], ["Turkiye", "tr"], ["Paraguay", "py"], ["Australia", "au"]]],
    ["Group E", [["Germany", "de"], ["Cote d'Ivoire", "ci"], ["Ecuador", "ec"], ["Curacao", "cw"]]],
    ["Group F", [["Netherlands", "nl"], ["Tunisia", "tn"], ["Sweden", "se"], ["Japan", "jp"]]],
    ["Group G", [["Belgium", "be"], ["Egypt", "eg"], ["IR Iran", "ir"], ["New Zealand", "nz"]]],
    ["Group H", [["Spain", "es"], ["Uruguay", "uy"], ["Saudi Arabia", "sa"], ["Cabo Verde", "cv"]]],
    ["Group I", [["France", "fr"], ["Norway", "no"], ["Senegal", "sn"], ["Iraq", "iq"]]],
    ["Group J", [["Argentina", "ar"], ["Jordan", "jo"], ["Austria", "at"], ["Algeria", "dz"]]],
    ["Group K", [["Portugal", "pt"], ["Colombia", "co"], ["DR Congo", "cd"], ["Uzbekistan", "uz"]]],
    ["Group L", [["England", "gb-eng"], ["Croatia", "hr"], ["Ghana", "gh"], ["Panama", "pa"]]]
  ];

  const flagUrl = (code) => (code ? `/images/world-cup/flags/${code}.svg` : "");

  // Final group tables calculated from FIFA's 72 official group-stage results.
  const officialGroupStandings = {
    "Group A": [["Mexico", "mx", 3, 3, 0, 0, 6, 0, 9, true], ["South Africa", "za", 3, 1, 1, 1, 2, 3, 4, true], ["South Korea", "kr", 3, 1, 0, 2, 2, 3, 3, false], ["Czechia", "cz", 3, 0, 1, 2, 2, 6, 1, false]],
    "Group B": [["Switzerland", "ch", 3, 2, 1, 0, 7, 3, 7, true], ["Canada", "ca", 3, 1, 1, 1, 8, 3, 4, true], ["Bosnia and Herzegovina", "ba", 3, 1, 1, 1, 5, 6, 4, true], ["Qatar", "qa", 3, 0, 1, 2, 2, 10, 1, false]],
    "Group C": [["Brazil", "br", 3, 2, 1, 0, 7, 1, 7, true], ["Morocco", "ma", 3, 2, 1, 0, 6, 3, 7, true], ["Scotland", "gb-sct", 3, 1, 0, 2, 1, 4, 3, false], ["Haiti", "ht", 3, 0, 0, 3, 2, 8, 0, false]],
    "Group D": [["United States", "us", 3, 2, 0, 1, 8, 4, 6, true], ["Australia", "au", 3, 1, 1, 1, 2, 2, 4, true], ["Paraguay", "py", 3, 1, 1, 1, 2, 4, 4, true], ["Turkiye", "tr", 3, 1, 0, 2, 3, 5, 3, false]],
    "Group E": [["Germany", "de", 3, 2, 0, 1, 10, 4, 6, true], ["Cote d'Ivoire", "ci", 3, 2, 0, 1, 4, 2, 6, true], ["Ecuador", "ec", 3, 1, 1, 1, 2, 2, 4, true], ["Curacao", "cw", 3, 0, 1, 2, 1, 9, 1, false]],
    "Group F": [["Netherlands", "nl", 3, 2, 1, 0, 10, 4, 7, true], ["Japan", "jp", 3, 1, 2, 0, 7, 3, 5, true], ["Sweden", "se", 3, 1, 1, 1, 7, 7, 4, true], ["Tunisia", "tn", 3, 0, 0, 3, 2, 12, 0, false]],
    "Group G": [["Belgium", "be", 3, 1, 2, 0, 6, 2, 5, true], ["Egypt", "eg", 3, 1, 2, 0, 5, 3, 5, true], ["IR Iran", "ir", 3, 0, 3, 0, 3, 3, 3, false], ["New Zealand", "nz", 3, 0, 1, 2, 4, 10, 1, false]],
    "Group H": [["Spain", "es", 3, 2, 1, 0, 5, 0, 7, true], ["Cabo Verde", "cv", 3, 0, 3, 0, 2, 2, 3, true], ["Uruguay", "uy", 3, 0, 2, 1, 3, 4, 2, false], ["Saudi Arabia", "sa", 3, 0, 2, 1, 1, 5, 2, false]],
    "Group I": [["France", "fr", 3, 3, 0, 0, 10, 2, 9, true], ["Norway", "no", 3, 2, 0, 1, 8, 7, 6, true], ["Senegal", "sn", 3, 1, 0, 2, 8, 6, 3, true], ["Iraq", "iq", 3, 0, 0, 3, 1, 12, 0, false]],
    "Group J": [["Argentina", "ar", 3, 3, 0, 0, 8, 1, 9, true], ["Austria", "at", 3, 1, 1, 1, 6, 6, 4, true], ["Algeria", "dz", 3, 1, 1, 1, 5, 7, 4, true], ["Jordan", "jo", 3, 0, 0, 3, 3, 8, 0, false]],
    "Group K": [["Colombia", "co", 3, 2, 1, 0, 4, 1, 7, true], ["Portugal", "pt", 3, 1, 2, 0, 6, 1, 5, true], ["Congo DR", "cd", 3, 1, 1, 1, 4, 3, 4, true], ["Uzbekistan", "uz", 3, 0, 0, 3, 2, 11, 0, false]],
    "Group L": [["England", "gb-eng", 3, 2, 1, 0, 6, 2, 7, true], ["Croatia", "hr", 3, 2, 0, 1, 5, 5, 6, true], ["Ghana", "gh", 3, 1, 1, 1, 2, 2, 4, true], ["Panama", "pa", 3, 0, 0, 3, 0, 4, 0, false]]
  };

  const groupTables = Object.entries(officialGroupStandings).map(([name, teams]) => ({
    name,
    status: "Final table",
    teams: teams.map(([teamName, code, played, wins, draws, losses, goalsFor, goalsAgainst, points, qualified], index) => ({
      rank: index + 1,
      name: teamName,
      flag: flagUrl(code),
      played,
      wins,
      draws,
      losses,
      goalsFor,
      goalsAgainst,
      goalDifference: goalsFor - goalsAgainst,
      points,
      qualified
    }))
  }));

  const groupFixtures = groups.flatMap(([groupName, teams]) => {
    const names = teams.map(([name]) => name);
    return [
      [names[0], names[1]],
      [names[2], names[3]],
      [names[0], names[2]],
      [names[3], names[1]],
      [names[3], names[0]],
      [names[1], names[2]]
    ].map(([home, away]) => ({
      home,
      away,
      status: groupName,
      venue: "Official venue and kickoff time"
    }));
  });

  const worldCupPanels = [
    {
      key: "hero",
      eyebrow: "World Cup Hero",
      title: "World Cup 2026",
      description: "The tournament hub starts here: nations, venues, fixtures and PRESDA coverage.",
      image: "/images/world-cup/presda-wc26-logo.png",
      href: "#top"
    },
    {
      key: "vote",
      eyebrow: "Vote For Your Nation",
      title: "Vote For Your Nation",
      description: "Choose your champion and follow the fan table.",
      image: "/images/articles/the-last-dance-football-2026.png",
      href: "#fan-vote"
    },
    {
      key: "standings",
      eyebrow: "Standings",
      title: "Standings",
      description: "Official groups are shown without invented scores.",
      image: "/images/world-cup/presda-wc26-logo.png",
      href: "#standings"
    },
    {
      key: "road",
      eyebrow: "Road To Final",
      title: "Road To Final",
      description: "Pick winners and watch each team advance through your bracket.",
      image: "/images/world-cup/world-cup-2026-cover.png",
      href: "#road-to-final"
    },
    {
      key: "stadiums",
      eyebrow: "Stadiums",
      title: "Stadiums",
      description: "Small venue cards with city, country and capacity.",
      image: "/images/world-cup/stadiums/metlife-stadium.webp",
      href: "#stadiums"
    },
    {
      key: "ball",
      eyebrow: "TRIONDA Ball",
      title: "TRIONDA",
      description: "The official ball framed in the PRESDA World Cup language.",
      image: "/images/world-cup/trionda-ball.png",
      href: "#official-ball"
    },
    {
      key: "fixtures",
      eyebrow: "Fixtures",
      title: "Fixtures",
      description: "Official group pairings without scores until verified data is available.",
      image: "/images/world-cup/world-cup-command-center.webp",
      href: "#fixtures"
    },
    {
      key: "news",
      eyebrow: "News / Articles",
      title: "News",
      description: "PRESDA stories around the tournament.",
      image: "/images/articles/world-cup-2026-brands-kits.png",
      href: "#world-cup-news"
    }
  ];

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
    { name: "FOX Sports", region: "United States", status: "English-language coverage", logoText: "FOX" },
    { name: "Telemundo", region: "United States", status: "Spanish-language coverage", logoText: "T" },
    { name: "TSN", region: "Canada", status: "Canadian coverage", logoText: "TSN" },
    { name: "CTV", region: "Canada", status: "Canadian coverage", logoText: "CTV" },
    { name: "beIN SPORTS", region: "MENA", status: "Regional coverage", logoText: "beIN" },
    { name: "BBC / ITV", region: "United Kingdom", status: "UK coverage", logoText: "BBC" }
  ];

  const matchCenterPages = [
    { label: "Match Center", href: "/world-cup-2026/match-center/", description: "Fixtures, scores, results and match details" },
    { label: "Group Standings", href: "/world-cup-2026/#standings", description: "Every group in one clean table" },
    { label: "TV Channels", href: "/world-cup-2026/#tv-channels", description: "Broadcast partners by region" }
  ];

  const stadiums = [
    { name: "MetLife Stadium", city: "New York / New Jersey", country: "United States", capacity: "82,500", image: "/images/world-cup/stadiums/metlife-stadium.webp", label: "Final venue" },
    { name: "AT&T Stadium", city: "Dallas", country: "United States", capacity: "80,000", image: "/images/world-cup/stadiums/att-stadium.webp", label: "Host stadium" },
    { name: "SoFi Stadium", city: "Los Angeles", country: "United States", capacity: "70,240", image: "/images/world-cup/stadiums/sofi-stadium.webp", label: "Host stadium" },
    { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "United States", capacity: "75,000", image: "/images/world-cup/stadiums/mercedes-benz-stadium.webp", label: "Host stadium" },
    { name: "Hard Rock Stadium", city: "Miami", country: "United States", capacity: "65,000", image: "/images/world-cup/stadiums/hard-rock-stadium.webp", label: "Host stadium" },
    { name: "Levi's Stadium", city: "San Francisco Bay Area", country: "United States", capacity: "68,500", image: "/images/world-cup/stadiums/levis-stadium.webp", label: "Host stadium" },
    { name: "NRG Stadium", city: "Houston", country: "United States", capacity: "72,220", image: "/images/world-cup/stadiums/nrg-stadium.webp", label: "Host stadium" },
    { name: "GEHA Field at Arrowhead", city: "Kansas City", country: "United States", capacity: "76,416", image: "/images/world-cup/stadiums/arrowhead-stadium.webp", label: "Host stadium" },
    { name: "Gillette Stadium", city: "Boston", country: "United States", capacity: "65,878", image: "/images/world-cup/stadiums/gillette-stadium.webp", label: "Host stadium" },
    { name: "BMO Field", city: "Toronto", country: "Canada", capacity: "45,500", image: "/images/world-cup/stadiums/bmo-field.webp", label: "Host stadium" },
    { name: "BC Place", city: "Vancouver", country: "Canada", capacity: "54,500", image: "/images/world-cup/stadiums/bc-place.webp", label: "Host stadium" },
    { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", capacity: "87,523", image: "/images/world-cup/stadiums/estadio-azteca.webp", label: "Opening match" },
    { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", capacity: "53,500", image: "/images/world-cup/stadiums/estadio-bbva.webp", label: "Host stadium" },
    { name: "Estadio Akron", city: "Guadalajara", country: "Mexico", capacity: "46,232", image: "/images/world-cup/stadiums/estadio-akron.webp", label: "Host stadium" }
  ];

  const quickLinks = [
    { label: "World Cup", href: "#top" },
    { label: "Fan Vote", href: "#fan-vote" },
    { label: "Standings", href: "#standings" },
    { label: "Road To The Final", href: "#road-to-final" },
    { label: "Stadiums", href: "#stadiums" },
    { label: "TRIONDA Ball", href: "#official-ball" },
    { label: "Fixtures", href: "#fixtures" },
    { label: "News", href: "#world-cup-news" }
  ];

  // Official FIFA knockout path: ordered by bracket branch rather than kickoff time.
  const knockoutSeeds = [
    ["Germany", "de"], ["Paraguay", "py"], ["France", "fr"], ["Sweden", "se"],
    ["South Africa", "za"], ["Canada", "ca"], ["Netherlands", "nl"], ["Morocco", "ma"],
    ["Portugal", "pt"], ["Croatia", "hr"], ["Spain", "es"], ["Austria", "at"],
    ["United States", "us"], ["Bosnia and Herzegovina", "ba"], ["Belgium", "be"], ["Senegal", "sn"],
    ["Brazil", "br"], ["Japan", "jp"], ["Cote d'Ivoire", "ci"], ["Norway", "no"],
    ["Mexico", "mx"], ["Ecuador", "ec"], ["England", "gb-eng"], ["Congo DR", "cd"],
    ["Argentina", "ar"], ["Cabo Verde", "cv"], ["Australia", "au"], ["Egypt", "eg"],
    ["Switzerland", "ch"], ["Algeria", "dz"], ["Colombia", "co"], ["Ghana", "gh"]
  ].map(([name, code]) => ({ name, flag: `/images/world-cup/flags/${code}.svg` }));

  global.PRESDA_WORLD_CUP_DATA = {
    worldCupConfig,
    dashboardStatus,
    todayMatches,
    liveScores,
    fixtures: groupFixtures,
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
    quickLinks,
    worldCupPanels,
    knockoutSeeds
  };
})(typeof window !== "undefined" ? window : globalThis);
