import type { Article } from "@/data/articles";

const sources = {
  records: { name: "Variety: Swift's two Spotify records, September 26, 2026", url: "https://au.variety.com/2026/music/news/taylor-swift-breaks-spotify-records-most-streamed-female-40723/" },
  numbers: { name: "HITS: September 25 Spotify debut figures, reported September 26", url: "https://www.hitsdailydouble.com/news/streaming/spot-check-the-taylor-takeover-2026-09-26" },
  charts: { name: "Spotify for Artists: chart eligibility, filtering and reporting periods", url: "https://support.spotify.com/bn-en/artists/article/understanding-spotify-charts/" },
  disney: { name: "Disney: I Knew It, I Knew You release announcement, June 1, 2026", url: "https://thewaltdisneycompany.com/news/taylor-swift-toy-story-5/" },
  videos: { name: "Spotify: Swift's 58 music videos arrive, September 16, 2026", url: "https://newsroom.spotify.com/2026-09-16/taylor-swift-music-videos-catalog-spotify/" },
  poets: { name: "Spotify: The Tortured Poets Department milestones, April 24, 2024", url: "https://newsroom.spotify.com/2024-04-24/tortured-poets-department-taylor-swift-one-billion-record-streams/" },
  wrapped2024: { name: "Spotify: 2024 Wrapped global rankings", url: "https://newsroom.spotify.com/2024-12-04/top-songs-artists-podcasts-audiobooks-albums-trends-2024/" },
  wrapped2025: { name: "Spotify: 2025 Wrapped global and US rankings", url: "https://newsroom.spotify.com/2025-12-03/wrapped-top-artists-songs-albums-podcasts-audiobooks/" },
  history: { name: "Spotify: all-time rankings as of April 2026", url: "https://newsroom.spotify.com/2026-04-23/spotify-20-most-streamed-music-podcasts-audiobooks/" }
};
const cite = (key: keyof typeof sources) => ` [${sources[key].name}](${sources[key].url})`;

export const taylorSpotifyArticle: Article = {
  id: "169",
  slug: "taylor-swift-spotify-records-2026-patient-zero",
  title: "Taylor Swift Breaks Two Spotify Records in 2026",
  seoTitle: "Taylor Swift Spotify Records 2026: Patient Zero Explained",
  metaDescription: "Taylor Swift's two 2026 Spotify records explained: Patient Zero's 13.7 million debut streams, the artist-wide milestone and their historical limits.",
  schemaType: "NewsArticle",
  headlineHighlights: { red: "Taylor Swift", gold: "Spotify Records" },
  excerpt: "Patient Zero led a four-song release to two female single-day Spotify records for 2026. Here are the reported figures and what the records actually measure.",
  category: "Paparazzi",
  date: "2026-10-01",
  lastUpdated: "2026-10-01",
  author: "PRESDA Editorial",
  coverImage: "/articles/taylor-swift-spotify-records-2026.png",
  coverAlt: "Editorial illustration of Taylor Swift in a dark lounge beside a glowing green Spotify symbol",
  homepageImagePosition: "72% 25%",
  status: "published",
  readingTime: "4 min read",
  relatedSlugs: ["rihanna-barbados-music-fenty-beauty-empire", "avicii-life-music-death-tim-bergling", "anne-hathaway-baby-bump-verity-premiere-2026"],
  tags: ["Taylor Swift", "Spotify", "Patient Zero", "music", "streaming", "The Life of a Showgirl"],
  content: [
    "Taylor Swift set two female single-day Spotify records for 2026 following her September 25 release: one for Patient Zero and another for listening across her catalogue. Variety reported both achievements on September 26, after The Life of a Showgirl: The Encore arrived with four new songs." + cite("records"),
    "The clearest published number is the song's debut: approximately 13.7 million global Spotify chart streams, including about 6.1 million in the United States, according to music trade publication HITS. Those figures describe Patient Zero, not Swift's total streams across every recording." + cite("numbers"),
    "## WHICH TWO SPOTIFY RECORDS DID TAYLOR SWIFT BREAK?",
    "Patient Zero registered the highest one-day song total by a female artist on Spotify in 2026 up to that point. Separately, Swift recorded the year's biggest single-day streaming total for a female artist. The first measures one song; the second measures the artist's wider catalogue." + cite("records"),
    "Both achievements concern the September 25 release day. They are year-to-date records in a specified category, not claims that Swift surpassed every song or artist in Spotify history. They also do not establish the final ranking for the whole of 2026, which was still in progress at publication.",
    "The record coverage reviewed for this article does not disclose an exact artist-wide total. It would be misleading to label the 13.7 million song figure as that missing number, or to treat a sum of the four new tracks as the entire catalogue's performance.",
    "## PATIENT ZERO: THE NUMBERS IN CONTEXT",
    "HITS placed the four new tracks at the top of Spotify's global daily chart. Its rounded debut figures were 13.7 million for Patient Zero, 9.6 million for Cleveland!, 8.8 million for Pink Clouding and 8.4 million for Babylon. These are reported chart figures, not unique listener counts." + cite("numbers"),
    "The same report put Patient Zero behind BTS's SWIM, which debuted with 14.6 million streams, among new-song debuts in 2026. The female-artist record was not an overall debut record." + cite("numbers"),
    "Spotify explains that its chart totals are filtered, so not every play qualifies for the charts. Numbers shown in its charts can therefore differ from those displayed in the app or Spotify for Artists. Its daily charting period runs from midnight to 11:59 p.m. UTC. A chart-day total should not automatically be described as the first 24 hours after a release." + cite("charts"),
    "## WHAT SWIFT RELEASED IN 2026",
    "The Encore added Patient Zero, Cleveland!, Pink Clouding and Babylon to her 2025 album. Variety traced the new writing to sessions with Max Martin and Shellback in Sweden." + cite("records"),
    "There was also new music earlier in the year. Disney announced I Knew It, I Knew You, written and produced by Swift and Jack Antonoff for Toy Story 5, with a June 5 single release and inclusion on the June 19 soundtrack. The company described the song as inspired by Jessie's story and drawing on Swift's country roots." + cite("disney"),
    "Spotify added another form of access to her catalogue on September 16, announcing that all 58 of her then-existing official music videos were available to Premium subscribers in its video beta markets. The selection included 2026's Opalite. That was a video-catalogue rollout, distinct from a new audio album release." + cite("videos"),
    "These releases and platform additions provide context for the September news. They do not, by themselves, show how much listening came from a particular promotional appearance, recommendation or video. The published totals measure the result, not each listener's reason for pressing play.",
    "## HOW THE RECORDS COMPARE HISTORICALLY",
    "Swift's earlier Spotify milestones were larger in scope. On April 19, 2024, The Tortured Poets Department became the first album to exceed 300 million streams in one day on the platform. Spotify's April 24 update said it had passed one billion streams since release, only five days earlier. The same announcement identified Fortnight, featuring Post Malone, as the platform's single-day song record-holder at that time." + cite("poets"),
    "Those were historical records announced in 2024. The new Patient Zero achievement has a narrower description: a female-artist song record within 2026. Album totals, song totals and artist totals should remain separate even when they concern the same performer.",
    "For a longer view, Spotify's 2024 Wrapped named Swift its global top artist with more than 26.6 billion streams. Its 2025 Wrapped placed her second globally behind Bad Bunny and first in the United States. A global annual ranking and a national ranking answer different questions." + cite("wrapped2024") + cite("wrapped2025"),
    "Spotify's own twentieth-anniversary list, published on April 23, 2026, ranked Swift first among artists by all-time global streams, followed by Bad Bunny and Drake. The company explicitly dated that dataset to April. It is a useful historical benchmark, not a continuously updated October total." + cite("history"),
    "## WHAT THESE RECORDS DO, AND DO NOT, TELL US",
    "The phrase most streamed female artist in 2026 needs a time window attached. In this news, it refers to one day's listening, not cumulative streams for the entire year. Monthly listeners, followers and daily streams are also different measures, and none should substitute for the missing artist-wide figure.",
    "These are Spotify achievements. They do not establish records across Apple Music, YouTube, physical sales, radio or the music industry as a whole. They demonstrate the scale of this release's performance on one major platform, within the categories reported.",
    "For a different view of a music career extending across industries, read [PRESDA's feature on Rihanna's music and Fenty businesses](/articles/rihanna-barbados-music-fenty-beauty-empire/). Our [Avicii profile](/articles/avicii-life-music-death-tim-bergling/) explores another influential catalogue and the person behind it.",
    "Information checked as of October 1, 2026. Contemporary record claims are attributed to the reporting above; historical rankings and chart methodology come from Spotify. The supplied hero is an editorial illustration, not a documentary photograph of a Spotify event or an endorsement."
  ],
  faq: [
    { question: "What two Spotify records did Taylor Swift set in September 2026?", answer: "She set the year's female single-day records for a song, Patient Zero, and for an artist's catalogue-wide streams." },
    { question: "How many Spotify streams did Patient Zero debut with?", answer: "HITS reported approximately 13.7 million global chart streams for its September 25 debut, including about 6.1 million in the United States. These are rounded figures." },
    { question: "Was Patient Zero Spotify's biggest song debut of 2026 overall?", answer: "No. HITS put its debut behind BTS's SWIM at 14.6 million streams. Patient Zero's reported record was specifically for a female artist." },
    { question: "Was Swift's exact artist-wide record total disclosed?", answer: "The record reporting reviewed here does not disclose that total. Patient Zero's 13.7 million figure must not be presented as her catalogue-wide total." }
  ],
  references: Object.values(sources)
};
