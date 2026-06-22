const fs = require("fs");
const path = require("path");

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "world-cup-2026/index.html",
  "world-cup-2026/match-center/index.html",
  "data/worldCupData.js",
  "services/footballDataService.js",
  ".env.example",
  "sitemap.xml"
];

const requiredWorldCupText = [
  "Today's Matches",
  "Live Scores",
  "Fixtures",
  "Results",
  "Group Standings",
  "TV Channels",
  "Stadiums Diaporama",
  "Latest World Cup News",
  "Awaiting official confirmation",
  "No live matches"
];

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

const missing = requiredFiles.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  console.error(`Missing files: ${missing.join(", ")}`);
  process.exit(1);
}

const worldCupPage = read("world-cup-2026/index.html");
const missingText = requiredWorldCupText.filter((text) => !worldCupPage.includes(text));
if (missingText.length) {
  console.error(`World Cup page missing text: ${missingText.join(", ")}`);
  process.exit(1);
}

const env = read(".env.example");
for (const key of ["FOOTBALL_API_KEY", "FOOTBALL_API_HOST", "NEWS_API_KEY"]) {
  if (!env.includes(key)) {
    console.error(`Missing env key: ${key}`);
    process.exit(1);
  }
}

const sitemap = read("sitemap.xml");
for (const url of ["https://presda.com/world-cup-2026/", "https://presda.com/world-cup-2026/match-center/"]) {
  if (!sitemap.includes(url)) {
    console.error(`Missing sitemap URL: ${url}`);
    process.exit(1);
  }
}

console.log("PRESDA static verification passed.");

