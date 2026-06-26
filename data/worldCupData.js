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
    fixtures: "Schedule updates",
    liveScores: "No live matches right now",
    results: "Results update after full time",
    standings: "Group tables",
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

  const staticStandings = {
    "Group A": [
      { name: "Mexico", played: 3, wins: 3, draws: 0, losses: 0, points: 9 },
      { name: "South Africa", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "South Korea", played: 3, wins: 1, draws: 0, losses: 2, points: 3 },
      { name: "Czechia", played: 3, wins: 0, draws: 1, losses: 2, points: 1 }
    ],
    "Group B": [
      { name: "Switzerland", played: 3, wins: 2, draws: 1, losses: 0, points: 7 },
      { name: "Canada", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "Bosnia and Herzegovina", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "Qatar", played: 3, wins: 0, draws: 1, losses: 2, points: 1 }
    ],
    "Group C": [
      { name: "Brazil", played: 3, wins: 3, draws: 0, losses: 0, points: 9 },
      { name: "Morocco", played: 3, wins: 2, draws: 0, losses: 1, points: 6 },
      { name: "Scotland", played: 3, wins: 1, draws: 0, losses: 2, points: 3 },
      { name: "Haiti", played: 3, wins: 0, draws: 0, losses: 3, points: 0 }
    ],
    "Group D": [
      { name: "United States", played: 3, wins: 2, draws: 0, losses: 1, points: 6 },
      { name: "Turkiye", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "Paraguay", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "Australia", played: 3, wins: 1, draws: 0, losses: 2, points: 3 }
    ],
    "Group E": [
      { name: "Germany", played: 3, wins: 2, draws: 1, losses: 0, points: 7 },
      { name: "Cote d'Ivoire", played: 3, wins: 1, draws: 2, losses: 0, points: 5 },
      { name: "Ecuador", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "Curacao", played: 3, wins: 0, draws: 0, losses: 3, points: 0 }
    ],
    "Group F": [
      { name: "Netherlands", played: 3, wins: 2, draws: 0, losses: 1, points: 6 },
      { name: "Tunisia", played: 3, wins: 1, draws: 2, losses: 0, points: 5 },
      { name: "Sweden", played: 3, wins: 1, draws: 1, losses: 1, points: 4 },
      { name: "Japan", played: 3, wins: 0, draws: 1, losses: 2, points: 1 }
    ],
    "Group G": [
      { name: "Belgium", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Egypt", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "IR Iran", played: 2, wins: 0, draws: 2, losses: 0, points: 2 },
      { name: "New Zealand", played: 2, wins: 0, draws: 0, losses: 2, points: 0 }
    ],
    "Group H": [
      { name: "Spain", played: 2, wins: 2, draws: 0, losses: 0, points: 6 },
      { name: "Uruguay", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
      { name: "Saudi Arabia", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
      { name: "Cabo Verde", played: 2, wins: 0, draws: 0, losses: 2, points: 0 }
    ],
    "Group I": [
      { name: "France", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Norway", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Senegal", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
      { name: "Iraq", played: 2, wins: 0, draws: 0, losses: 2, points: 0 }
    ],
    "Group J": [
      { name: "Argentina", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Jordan", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Austria", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
      { name: "Algeria", played: 2, wins: 0, draws: 0, losses: 2, points: 0 }
    ],
    "Group K": [
      { name: "Portugal", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Colombia", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "DR Congo", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
      { name: "Uzbekistan", played: 2, wins: 0, draws: 0, losses: 2, points: 0 }
    ],
    "Group L": [
      { name: "England", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Croatia", played: 2, wins: 1, draws: 1, losses: 0, points: 4 },
      { name: "Ghana", played: 2, wins: 1, draws: 0, losses: 1, points: 3 },
      { name: "Panama", played: 2, wins: 0, draws: 0, losses: 2, points: 0 }
    ]
  };

  const groupTables = groups.map(([name, teams]) => {
    const codeByName = Object.fromEntries(teams);
    const tableOrder = staticStandings[name] || teams.map(([teamName]) => ({ name: teamName }));

    return {
      name,
      status: "Updated table",
      teams: tableOrder.map((team) => ({
        name: team.name,
        flag: flagUrl(codeByName[team.name]),
        played: team.played ?? 0,
        wins: team.wins ?? 0,
        draws: team.draws ?? 0,
        losses: team.losses ?? 0,
        points: team.points ?? 0
      }))
    };
  });

  const worldCupPanels = [
    {
      key: "stadiums",
      eyebrow: "Host Cities",
      title: "Stadiums",
      description: "Explore the venues carrying the tournament across North America.",
      image: "/images/world-cup/stadiums/metlife-stadium.webp",
      href: "#stadiums"
    },
    {
      key: "ball",
      eyebrow: "Official Ball",
      title: "Trionda",
      description: "The match ball of 2026, framed for PRESDA's World Cup coverage.",
      image: "/images/world-cup/trionda-ball.png",
      href: "#official-ball"
    },
    {
      key: "vote",
      eyebrow: "Fan Vote",
      title: "Vote For Your Nation",
      description: "Choose your champion and watch the fan table respond.",
      image: "/images/articles/the-last-dance-football-2026.png",
      href: "#fan-vote"
    },
    {
      key: "standings",
      eyebrow: "Group Tables",
      title: "Standings",
      description: "Follow every nation as the group stage develops.",
      image: "/images/world-cup/presda-wc26-logo.png",
      href: "#standings"
    },
    {
      key: "groups",
      eyebrow: "48 Nations",
      title: "Groups",
      description: "Browse all twelve groups with flags and live table context.",
      image: "/images/editorial/vote-argentina.png",
      href: "#standings"
    },
    {
      key: "road",
      eyebrow: "Predictor",
      title: "Road To The Final",
      description: "Build your knockout path from Round of 32 to champion.",
      image: "/images/world-cup/world-cup-2026-cover.png",
      href: "#road-to-final"
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
    { name: "MetLife Stadium", city: "New York / New Jersey", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "82,500", image: "/images/world-cup/stadiums/metlife-stadium.webp", label: "Final venue" },
    { name: "AT&T Stadium", city: "Dallas", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "80,000", image: "/images/world-cup/stadiums/att-stadium.webp", label: "Host stadium" },
    { name: "SoFi Stadium", city: "Los Angeles", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "70,240", image: "/images/world-cup/stadiums/sofi-stadium.webp", label: "Host stadium" },
    { name: "Mercedes-Benz Stadium", city: "Atlanta", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "75,000", image: "/images/world-cup/stadiums/mercedes-benz-stadium.webp", label: "Host stadium" },
    { name: "Hard Rock Stadium", city: "Miami", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "65,000", image: "/images/world-cup/stadiums/hard-rock-stadium.webp", label: "Host stadium" },
    { name: "Levi's Stadium", city: "San Francisco Bay Area", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "68,500", image: "/images/world-cup/stadiums/levis-stadium.webp", label: "Host stadium" },
    { name: "NRG Stadium", city: "Houston", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "72,220", image: "/images/world-cup/stadiums/nrg-stadium.webp", label: "Host stadium" },
    { name: "GEHA Field at Arrowhead", city: "Kansas City", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "76,416", image: "/images/world-cup/stadiums/arrowhead-stadium.webp", label: "Host stadium" },
    { name: "Gillette Stadium", city: "Boston", country: "United States", flag: "https://flagcdn.com/us.svg", capacity: "65,878", image: "/images/world-cup/stadiums/gillette-stadium.webp", label: "Host stadium" },
    { name: "BMO Field", city: "Toronto", country: "Canada", flag: "https://flagcdn.com/ca.svg", capacity: "45,500", image: "/images/world-cup/stadiums/bmo-field.webp", label: "Host stadium" },
    { name: "BC Place", city: "Vancouver", country: "Canada", flag: "https://flagcdn.com/ca.svg", capacity: "54,500", image: "/images/world-cup/stadiums/bc-place.webp", label: "Host stadium" },
    { name: "Estadio Azteca", city: "Mexico City", country: "Mexico", flag: "https://flagcdn.com/mx.svg", capacity: "87,523", image: "/images/world-cup/stadiums/estadio-azteca.webp", label: "Opening match" },
    { name: "Estadio BBVA", city: "Monterrey", country: "Mexico", flag: "https://flagcdn.com/mx.svg", capacity: "53,500", image: "/images/world-cup/stadiums/estadio-bbva.webp", label: "Host stadium" },
    { name: "Estadio Akron", city: "Guadalajara", country: "Mexico", flag: "https://flagcdn.com/mx.svg", capacity: "46,232", image: "/images/world-cup/stadiums/estadio-akron.webp", label: "Host stadium" }
  ];

  const quickLinks = [
    { label: "Stadiums", href: "#stadiums" },
    { label: "Official Ball", href: "#official-ball" },
    { label: "Fan Vote", href: "#fan-vote" },
    { label: "Standings", href: "#standings" },
    { label: "Groups", href: "#standings" },
    { label: "Road To The Final", href: "#road-to-final" },
    { label: "Match Center", href: "/world-cup-2026/match-center/" },
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
    quickLinks,
    worldCupPanels,
    knockoutSeeds
  };
})(typeof window !== "undefined" ? window : globalThis);
