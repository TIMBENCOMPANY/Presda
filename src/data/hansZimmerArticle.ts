import type { Article } from "@/data/articles";

const sources = {
  meeting: { name: "CNN Arabic: the January 21, 2025 meeting announcement", url: "https://arabic.cnn.com/amphtml/entertainment/article/2025/01/21/saudi-arabia-turki-al-sheikh-reveals-future-projects-with-hans-zimmer" },
  proposals: { name: "Saudi Gazette: proposed musical collaborations, January 22, 2025", url: "https://saudigazette.com.sa/article/648799/SAUDI-ARABIA/Hans-Zimmer-to-reimagine-Saudi-national-anthem-and-collaborate-on-future-projects" },
  anthem: { name: "Arab News: anthem arrangement discussions, January 23, 2025", url: "https://www.arabnews.com/entertainment/iconic-composer-hans-zimmer-working-on-new-interpretation-of-saudi-national-anthem-2587519" },
  concert: { name: "Arab News: report from Zimmer's Riyadh concert, January 25, 2025", url: "https://www.arabnews.com/entertainment/oscar-winning-composer-hans-zimmer-wows-fans-in-riyadh-2587763" },
  awards: { name: "CNN Arabic: Joy Awards lifetime achievement recipients, January 19, 2025", url: "https://arabic.cnn.com/entertainment/article/2025/01/19/joy-awards-lifetime-achievement-winners-in-saudi-arabia?hpt=amp-related-article" },
  film: { name: "Saudi Gazette: Alalshikh's studio visit, December 2, 2025", url: "https://saudigazette.com.sa/article/657063/SAUDI-ARABIA/Al-Sheikh-reviews-progress-on-major-Khalid-bin-Al-Walid-historical-film-at-Qiddiya-studios" },
  production: { name: "Screen Global Production: Unbroken Sword at PlayMaker, December 8, 2025", url: "https://www.screenglobalproduction.com/news/2025/12/08/playmaker-studios-opens-saudi-arabia-Qiddiya-city-unbroken-sword-production" },
  studio: { name: "4D Studio: PlayMaker project update, published March 2026", url: "https://www.4d-studio.co.uk/playmaker-studios-supporting-the-rise-of-saudi-arabias-film-industry/" },
  release: { name: "CNN Arabic: film preparations and 2027 release plan, December 8, 2025", url: "https://arabic.cnn.com/entertainment/video/2025/12/08/v185247-trending-segment-angham-in-the-embrace-of-the-pyramids" }
};
const cite = (key: keyof typeof sources) => ` [${sources[key].name}](${sources[key].url})`;

export const hansZimmerArticle: Article = {
  id: "170",
  slug: "hans-zimmer-saudi-arabia-battle-of-yarmouk-project",
  title: "Hans Zimmer and Saudi Arabia: The Battle of Yarmouk Project Explained",
  seoTitle: "Hans Zimmer, Saudi Arabia and the Battle of Yarmouk",
  metaDescription: "What was proposed to Hans Zimmer in Saudi Arabia, from Yarmouk and Arabia to the anthem, and what later film updates actually confirm.",
  schemaType: "NewsArticle",
  headlineHighlights: { red: "Hans Zimmer", gold: "Battle of Yarmouk" },
  excerpt: "A meeting, a concert and an evolving film project: the evidence behind Zimmer's Saudi connections, with proposals kept separate from confirmed work.",
  category: "Paparazzi",
  date: "2026-10-02",
  lastUpdated: "2026-10-02",
  author: "PRESDA Editorial",
  coverImage: "/articles/hans-zimmer-saudi-arabia-yarmouk.png",
  coverAlt: "Editorial illustration of Turki Alalshikh and Hans Zimmer beside a grand piano",
  homepageImagePosition: "72% 20%",
  status: "published",
  readingTime: "3 min read",
  relatedSlugs: ["taylor-swift-spotify-records-2026-patient-zero", "avicii-life-music-death-tim-bergling", "rihanna-barbados-music-fenty-beauty-empire"],
  tags: ["Hans Zimmer", "Saudi Arabia", "Turki Alalshikh", "Battle of Yarmouk", "Unbroken Sword", "film music"],
  content: [
    "The Hans Zimmer and Saudi Arabia story involves several separate projects. Understanding it requires distinguishing a public discussion, a concert that happened and a film whose development later advanced. None of those stages automatically establishes a completed Zimmer soundtrack.",
    "As of October 2, 2026, the sources reviewed for this article do not verify a signed scoring commitment or a completed score by Zimmer for The Battle of Yarmouk. That is a limit of the available evidence, not an announcement that the collaboration has been cancelled.",
    "## WHAT HAPPENED IN JANUARY 2025?",
    "On January 21, CNN Arabic reported Turki Alalshikh's account of meeting Zimmer. The General Entertainment Authority chairman described future ideas, including a possible score for The Battle of Yarmouk." + cite("meeting"),
    "The announcement came from Alalshikh. Reporting his invitation accurately requires preserving the difference between an idea presented to a composer and a publicly confirmed commission. A meeting photograph does not settle that contractual question.",
    "## ARABIA AND THE NATIONAL ANTHEM",
    "Saudi Gazette described Arabia as a proposed original composition inspired by the Kingdom. It also reported discussions about a differently orchestrated national anthem and a new concert concept for a future Riyadh Season." + cite("proposals"),
    "Arab News subsequently described anthem work as underway, attributing that account to Alalshikh. Its report also identified the Yarmouk soundtrack as an opportunity offered to Zimmer." + cite("anthem"),
    "These accounts do not establish that an anthem arrangement was completed, released or officially adopted. Nor should Arabia be presented as the film's soundtrack: it was discussed as a separate composition. The reviewed reporting supplies no verified release date for it.",
    "## THE RIYADH APPEARANCE DID HAPPEN",
    "Zimmer performed at Mohammed Abdo Arena on January 24, 2025, during Riyadh Season. Arab News reported music from Dune, Interstellar and The Lion King among the concert selections." + cite("concert"),
    "He was also among the recipients of a lifetime achievement honour at the January 2025 Joy Awards, according to CNN Arabic." + cite("awards"),
    "The concert is a documented event. It should not be confused with the separate, future concert concept discussed at the meeting, or treated as a premiere of the proposed Yarmouk score.",
    "## HOW THE FILM DEVELOPED",
    "In December 2025, Saudi Gazette connected The Battle of Yarmouk / Khalid bin Al-Walid with the working title Unbroken Sword. It named director Alik Sakharov and reported Alalshikh's visit to the production facilities." + cite("film"),
    "Screen Global Production then identified an English-language feature produced by Sela, backed by GEA and Riyadh Season, at PlayMaker Studios in Qiddiya. Its December report scheduled principal photography for early 2026." + cite("production"),
    "A 2026 update from 4D Studio, an architectural contributor to PlayMaker, described Unbroken Sword as in production. This is evidence from a participant in the studio development, not a final film credit list." + cite("studio"),
    "CNN Arabic's December 2025 coverage reported Alalshikh's planned 2027 release. That remains an announced target in the reviewed material, rather than proof of a finished film or a fixed theatrical date." + cite("release"),
    "Taken together, the reports show the project moving beyond its earliest announcement. They do not demonstrate that every proposal associated with it became a contract. In particular, a director, studio and production update cannot substitute for confirmation of the composer.",
    "## WHAT REMAINS UNCONFIRMED?",
    "No reviewed source establishes Zimmer's final scoring credit, a completed recording, a soundtrack release or official adoption of his proposed anthem arrangement. Further confirmation would need to identify the specific work and its status, rather than simply repeat the January meeting announcement.",
    "The distinction is useful beyond this project. Announcing an intention, preparing a film, shooting it and releasing its music are different milestones. Keeping the dates and speakers attached to each claim makes the account clearer without dismissing the ambitions behind it.",
    "For more music coverage, explore [PRESDA's explanation of Taylor Swift's Spotify records](/articles/taylor-swift-spotify-records-2026-patient-zero/) and [our profile of Avicii's life and music](/articles/avicii-life-music-death-tim-bergling/).",
    "Checked as of October 2, 2026. The supplied hero is an editorial illustration, not an authenticated photograph of the January meeting."
  ],
  faq: [
    { question: "Has Hans Zimmer completed the Battle of Yarmouk score?", answer: "The reviewed sources do not confirm either a completed score or a signed scoring commitment by Zimmer." },
    { question: "Are Arabia and the film soundtrack the same project?", answer: "They were presented as separate proposals. The reviewed evidence does not establish a release date for Arabia." },
    { question: "Does the anthem discussion mean Saudi Arabia adopted a new anthem?", answer: "No. A discussion about an arrangement does not establish completion or official adoption." },
    { question: "Is the film's 2027 release guaranteed?", answer: "2027 was the announced target. The reviewed material does not establish a fixed theatrical release date." }
  ],
  references: Object.values(sources)
};
