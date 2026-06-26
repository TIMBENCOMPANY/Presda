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

  const flagUrl = (code) => (code ? `https://flagcdn.com/${code}.svg` : "");

  const groupTables = groups.map(([name, teams]) => {
    const codeByName = Object.fromEntries(teams);
    const tableOrder = teams.map(([teamName]) => ({ name: teamName }));

    return {
      name,
      status: "Official group",
      teams: tableOrder.map((team) => ({
        name: team.name,
        flag: flagUrl(codeByName[team.name]),
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
      }))
    };
  });

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

  const knockoutSeeds = [
    "Mexico", "South Africa", "Switzerland", "Canada", "Brazil", "Morocco", "United States", "Turkiye",
    "Germany", "Cote d'Ivoire", "Netherlands", "Tunisia", "Belgium", "Egypt", "Spain", "Uruguay",
    "France", "Norway", "Argentina", "Jordan", "Portugal", "Colombia", "England", "Croatia",
    "South Korea", "Bosnia and Herzegovina", "Scotland", "Paraguay", "Ecuador", "Sweden", "Senegal", "Ghana"
  ].map((name) => {
    const team = groupTables.flatMap((group) => group.teams).find((entry) => entry.name === name);
    return team || { name, flag: "" };
  });

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
