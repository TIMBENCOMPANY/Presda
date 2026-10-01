import type { Article } from "@/data/articles";

const sources = {
  marriage: { name: "PEOPLE: spokesperson confirms marriage, September 30, 2026, via Yahoo", url: "https://malaysia.news.yahoo.com/jim-carrey-marries-min-ah-033335840.html" },
  ceremony: { name: "Entertainment Weekly: representative confirmation and ceremony reporting, via Yahoo", url: "https://malaysia.news.yahoo.com/jim-carrey-marries-girlfriend-min-043824580.html" },
  speech: { name: "Parade: Carrey's French-language speech and relationship timeline, February 27, 2026", url: "https://parade.com/news/jim-carrey-thanks-his-sublime-companion-in-emotional-speech-delivered-in-french" },
  academy: { name: "Académie des César: Jim Carrey's 2026 Honorary César and speech archive", url: "https://www.academie-cinema.org/personnes/198904/" },
  family: { name: "Nine: Jim Carrey's marriage and family history", url: "https://amp.nine.com.au/article/2c58c912-1281-4b0b-9f14-6a4692ace952" },
  interview: { name: "ABC News: Carrey's comments to Howard Stern, October 28, 2014", url: "https://abcnews.com/Entertainment/jim-carrey-married/story?id=26516499" },
  career: { name: "Académie des César: career tribute announcing Carrey's honorary award", url: "https://www.academie-cinema.org/wp-content/uploads/2025/10/cp-cesar-251001-cesar-honneur-jim-carrey.pdf" },
  sonic: { name: "Paramount: Sonic the Hedgehog 3 cast and production details", url: "https://paramountglobalcontent.com/title/sonic-the-hedgehog-3" },
  rockhall: { name: "Rock & Roll Hall of Fame: Carrey inducts Soundgarden in 2025", url: "https://www.youtube.com/watch?v=I-TsffhGQIg" }
};
const cite = (key: keyof typeof sources) => ` [${sources[key].name}](${sources[key].url})`;

export const jimCarreyArticle: Article = {
  id: "167",
  slug: "jim-carrey-marries-min-ah-private-los-angeles-ceremony",
  title: "Jim Carrey Marries Min Ah in a Private Los Angeles Ceremony",
  seoTitle: "Jim Carrey Marries Min Ah in Private Los Angeles Ceremony",
  metaDescription: "Jim Carrey's marriage to Min Ah was confirmed September 30, 2026. The verified timeline, César Awards debut, past marriages and recent appearances.",
  schemaType: "NewsArticle",
  headlineHighlights: { red: "Jim Carrey", gold: "Min Ah" },
  excerpt: "A representative confirmed the marriage on September 30. The news follows the couple's César Awards debut and years of keeping their relationship largely private.",
  category: "Paparazzi",
  date: "2026-10-01",
  lastUpdated: "2026-10-01",
  author: "PRESDA Editorial",
  coverImage: "/articles/jim-carrey-min-ah-marriage-2026.png",
  coverAlt: "Editorial illustration of Jim Carrey holding an award beside Min Ah at a red-carpet event",
  homepageImagePosition: "55% 25%",
  status: "published",
  readingTime: "4 min read",
  relatedSlugs: ["zendaya-tom-holland-relationship-marriage-careers", "angelina-jolie-ukraine-2026-humanitarian-work", "zahara-jolie-legally-drops-pitt-name-2026"],
  tags: ["Jim Carrey", "Min Ah", "marriage", "César Awards", "Hollywood", "film"],
  content: [
    "Jim Carrey has married his longtime partner Min Ah, a spokesperson confirmed to PEOPLE on September 30, 2026. Entertainment Weekly also reported confirmation from his representative, while attributing the account of a small, private Los Angeles ceremony to TMZ." + cite("marriage") + cite("ceremony"),
    "September 30 is the date of the public confirmation. The reports reviewed do not establish it as the date the couple exchanged vows. A precise wedding date, venue and guest list have not been confirmed in those accounts.",
    "The news follows their February appearance at the César Awards in Paris, where Carrey publicly thanked Min Ah while accepting an honorary prize. For a relationship that has largely remained outside the spotlight, the speech offered an unusually direct acknowledgment in the actor's own words." + cite("marriage"),
    "## FROM 2022 SIGHTINGS TO A PUBLIC DEBUT",
    "Published photographs place Carrey and Min Ah together as far back as February 2022. Parade's account of their timeline, citing PEOPLE and Just Jared, described them leaving a charity comedy show hosted by Judd Apatow at Largo in Los Angeles." + cite("speech"),
    "That sighting is a documented point in the public record, not a verified date for the beginning of their romance. The reporting does not establish when they met or precisely when they began dating. Their subsequent appearance as a couple at a major awards ceremony made the relationship more public without supplying those missing details.",
    "## HIS 'SUBLIME COMPANION' AT THE CÉSAR AWARDS",
    "On February 26, 2026, Carrey attended the César Awards at the Olympia in Paris with Min Ah, his daughter Jane and grandson Jackson. The occasion marked the couple's public awards-show debut. Carrey accepted the Honorary César, a recognition also recorded in the French academy's official archive." + cite("speech") + cite("academy"),
    "In a speech delivered in French, he called Min Ah his \"sublime companion\" and added, \"I love you, Min Ah.\" He also thanked his daughter and grandson and paid tribute to his late father, Percy Joseph Carrey. The academy hosts a recording of the acceptance speech." + cite("speech") + cite("academy"),
    "The distinction matters: these were public remarks at an awards ceremony. They were not an engagement announcement or a disclosure of wedding plans. The marriage confirmation arrived months later.",
    "## A RELATIONSHIP KEPT LARGELY PRIVATE",
    "Entertainment Weekly's report describes a relationship whose details have remained scarce despite sightings dating back to 2022. The representative's confirmation establishes the marriage; it does not provide a wider account of their life together." + cite("ceremony"),
    "Their public record reflects a largely private relationship, but the available statements do not explain a joint decision or the reasons behind it. There is no basis here to assign Min Ah an age, nationality, family background or personal history that the reliable reporting has not established.",
    "The same balance between public milestones and personal boundaries features in [PRESDA's story of Zendaya and Tom Holland](/articles/zendaya-tom-holland-relationship-marriage-careers/). For Carrey and Min Ah, the verified story rests on the marriage confirmation, earlier photographs and his public acknowledgment in Paris.",
    "## TWO PREVIOUS MARRIAGES AND HIS FAMILY",
    "Carrey married Melissa Womer in 1987. They share daughter Jane, and their divorce was finalised in 1995. He then married Lauren Holly, his Dumb and Dumber co-star, in September 1996. That marriage lasted less than a year." + cite("family"),
    "Jane and her son Jackson were among the family members present at the César ceremony. Their attendance and Carrey's thanks from the stage are documented; they do not establish who attended the private wedding." + cite("marriage"),
    "The marriage to Min Ah is Carrey's third. His previous marriages provide biographical context, but they do not explain the choices he and Min Ah have made.",
    "## WHAT HE PREVIOUSLY SAID ABOUT MARRYING AGAIN",
    "In an October 2014 interview with Howard Stern, Carrey expressed little interest in another marriage. ABC News quoted him saying, \"I just don't see it as necessary, at this point.\" The phrasing reflected his view at that time, rather than a statement about a future partner." + cite("interview"),
    "Those comments now form part of the history surrounding the announcement. They do not establish why his position changed, and neither the confirmation nor his César speech supplies that explanation.",
    "## A CAREER HONOUR AND SELECTIVE PUBLIC APPEARANCES",
    "The César recognition celebrated a career that began in Canadian stand-up, continued through television's In Living Color and reached a defining breakthrough in 1994 with Ace Ventura: Pet Detective, The Mask and Dumb and Dumber. The academy's tribute highlighted that progression and his distinctive performance style." + cite("career"),
    "His recent screen work includes Sonic the Hedgehog 3, in which Paramount credits him as both Ivo Robotnik and Gerald Robotnik. That dual role brought his physical comedy to another generation of viewers." + cite("sonic"),
    "Carrey also appeared at the 2025 Rock & Roll Hall of Fame ceremony to induct Soundgarden. The institution's official recording documents his tribute to the band. He was the induction speaker, not an inductee himself." + cite("rockhall"),
    "Together with the César appearance, those events show a continuing public presence built around selected projects and honours. The marriage announcement adds a confirmed personal milestone, without turning the couple's private life into an open record.",
    "Reporting checked as of October 1, 2026. The supplied hero is an editorial illustration of an awards-style appearance, not a verified photograph of the private wedding."
  ],
  faq: [
    { question: "When was Jim Carrey's marriage to Min Ah confirmed?", answer: "A spokesperson confirmed the marriage to PEOPLE on September 30, 2026. That is the announcement date; the reporting reviewed does not establish the exact wedding date." },
    { question: "Where did Jim Carrey and Min Ah marry?", answer: "Entertainment Weekly reported confirmation of the marriage from his representative and attributed the small, private Los Angeles ceremony details to TMZ. A specific venue was not established." },
    { question: "When did they make their public debut as a couple?", answer: "Their public awards-show debut was at the February 2026 César Awards in Paris. Published sightings date back to 2022, but their dating start date is not confirmed." },
    { question: "Who were Jim Carrey's previous wives?", answer: "He was previously married to Melissa Womer, with whom he shares daughter Jane, and to his Dumb and Dumber co-star Lauren Holly. His marriage to Min Ah is his third." }
  ],
  references: Object.values(sources)
};
