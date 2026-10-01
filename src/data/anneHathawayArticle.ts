import type { Article } from "@/data/articles";

const sources = {
  premiere: { name: "Us Weekly: Hathaway at the September 29 Verity premiere", url: "https://www.usmagazine.com/celebrity-body/news/anne-hathaway-shows-off-growing-baby-bump-at-verity-premiere/" },
  confirmation: { name: "Associated Press: Hathaway announces third pregnancy, June 19, 2026", url: "https://apnews.com/article/anne-hathaway-pregnant-third-child-305cb80044368952bcc2d5929b705b9f" },
  vogue: { name: "Vogue: interview with Hathaway at the New York premiere", url: "https://www.vogue.com/slideshow/verity-premiere-new-york-anne-hathaway-dakota-johnson-josh-hartnett" },
  film: { name: "Amazon MGM Studios: Verity release, cast and synopsis", url: "https://www.aboutamazon.com/news/entertainment/verity-colleen-hoover-amazon-mgm-studios" },
  director: { name: "The Credits: interview with director Michael Showalter, October 1, 2026", url: "https://www.motionpictures.org/2026/10/verity-director-michael-showalter-on-how-anne-hathaway-hitchcock-upstate-new-york-were-key-to-his-vision/" },
  marriage: { name: "ABC News: Hathaway and Adam Shulman's September 2012 wedding", url: "https://abcnews.com/blogs/entertainment/2012/09/anne-hathaway-marries-adam-shulman" },
  porter: { name: "PORTER: Hathaway on family boundaries and her career, November 2023", url: "https://www.net-a-porter.com/en-jp/porter/article-624926e64c1dc5dc/cover-stories/cover-stories/anne-hathaway" },
  projects: { name: "Associated Press: Verity interview and Hathaway's five-film year", url: "https://apnews.com/article/verity-movie-hathaway-interview-643881e3fc9971e4f3eb243ede159188" },
  oscar: { name: "Academy of Motion Picture Arts and Sciences: 2013 Oscar winners", url: "https://www.oscars.org/oscars/ceremonies/embed/2013" }
};
const cite = (key: keyof typeof sources) => ` [${sources[key].name}](${sources[key].url})`;

export const anneHathawayArticle: Article = {
  id: "168",
  slug: "anne-hathaway-baby-bump-verity-premiere-2026",
  title: "Anne Hathaway Reveals Her Baby Bump at the Verity Premiere",
  seoTitle: "Anne Hathaway Reveals Baby Bump at Verity Premiere",
  metaDescription: "Anne Hathaway at Verity's September 29 premiere: her confirmed third pregnancy, the film's cast and release, family privacy and five-film year.",
  schemaType: "NewsArticle",
  headlineHighlights: { red: "Anne Hathaway", gold: "Verity Premiere" },
  excerpt: "Hathaway brought her maternity style to Verity's New York premiere. Her third pregnancy was announced in June, ahead of the final film in a busy 2026 slate.",
  category: "Paparazzi",
  date: "2026-10-01",
  lastUpdated: "2026-10-01",
  author: "PRESDA Editorial",
  coverImage: "/articles/anne-hathaway-verity-premiere-2026.png",
  coverAlt: "Editorial illustration of Anne Hathaway in a black gown cradling her baby bump at a premiere-style event",
  homepageImagePosition: "68% 25%",
  status: "published",
  readingTime: "4 min read",
  relatedSlugs: ["zendaya-tom-holland-relationship-marriage-careers", "jim-carrey-marries-min-ah-private-los-angeles-ceremony", "rihanna-barbados-music-fenty-beauty-empire"],
  tags: ["Anne Hathaway", "Verity", "Dakota Johnson", "Josh Hartnett", "film", "Hollywood", "family"],
  content: [
    "Anne Hathaway showed her baby bump at the New York premiere of Verity on September 29, 2026, arriving in a black beaded Atelier Prabal Gurung gown. The appearance brought her already-announced third pregnancy onto the red carpet as she promoted the psychological thriller." + cite("premiere"),
    "Hathaway had already announced her third pregnancy in June. The premiere was a later public appearance, not the first announcement." + cite("confirmation"),
    "## THE NEW YORK PREMIERE",
    "The cast gathered at AMC Lincoln Square for the film's New York premiere, days before its October release. Hathaway's fitted gown had a sweetheart neckline, intricate beading and a dramatic cape, according to Us Weekly's account of the evening. The design framed her bump while keeping the look firmly in the tradition of a film-premiere gown." + cite("vogue") + cite("premiere"),
    "Speaking to Vogue at the event, Hathaway described learning she was pregnant as her favourite personal moment of the year. Her comments placed the pregnancy alongside a demanding run of releases and publicity commitments, without turning the occasion into a detailed announcement about the baby." + cite("vogue"),
    "## WHAT IS CONFIRMED ABOUT THE PREGNANCY?",
    "On June 19, 2026, Hathaway posted an Instagram video revealing her pregnancy. The Associated Press reported that her spokesperson acknowledged the announcement when asked for confirmation. She and her husband, Adam Shulman, are expecting their third child." + cite("confirmation"),
    "The reporting reviewed for this article does not establish a confirmed due date or the baby's sex. Neither a red-carpet photograph nor the shape of a gown provides reliable evidence of those private details.",
    "## VERITY: THE FILM AND ITS CAST",
    "Verity is Amazon MGM Studios' adaptation of Colleen Hoover's bestselling psychological thriller, directed by Michael Showalter. The studio lists October 2, 2026 as its theatrical release date. The story centres on a writing assignment that takes a struggling author into a household where the truth is difficult to pin down." + cite("film"),
    "Hathaway plays successful novelist Verity Crawford. Dakota Johnson is Lowen Ashleigh, the writer recruited to complete Verity's work after an injury. Josh Hartnett plays Jeremy Crawford, Verity's husband. The studio's cast list also includes Brady Wagner as Crew Crawford, Asel Swango as Frida and Daniel Echevarria as Alex." + cite("film"),
    "Once Lowen moves into the Crawford estate, she discovers disturbing material that appears to be autobiographical. The premise turns on whether she can trust what she reads and the people around her. That is the film's setup, without resolving its central mystery." + cite("film"),
    "In an October 1 interview with The Credits, Showalter identified classic Hitchcock films and Jagged Edge among his influences. He described seeking glamour as well as suspense, with the cast and the house at the centre of that approach. The interview offers a filmmaker's account of the adaptation's tone, rather than a promise that every detail follows the novel." + cite("director"),
    "Showalter also praised Hathaway's creative involvement, describing an actor who repeatedly brought ideas for making her character more complicated. That account gives the premiere a professional context beyond the attention surrounding her pregnancy." + cite("director"),
    "## ADAM SHULMAN, THEIR FAMILY AND PRIVACY",
    "Hathaway and Shulman married in Big Sur, California, in September 2012. ABC News reported the wedding at the time, citing PEOPLE. They are parents to sons Jonathan and Jack." + cite("marriage") + cite("confirmation"),
    "Hathaway has explained her approach to family privacy in her own words. In a November 2023 PORTER interview, she said her children's needs include the freedom to define their own lives. She discussed her public career and private family life as connected through her, while keeping a boundary between them." + cite("porter"),
    "That distinction helps explain why she can speak openly about expecting another child without making every detail public. The June announcement and this week's premiere are specific moments she has shared; they do not provide access to the family's private preparations.",
    "For another perspective on public milestones and personal boundaries, read [PRESDA's feature on Zendaya and Tom Holland](/articles/zendaya-tom-holland-relationship-marriage-careers/). Our [report on Jim Carrey and Min Ah's marriage](/articles/jim-carrey-marries-min-ah-private-los-angeles-ceremony/) likewise distinguishes public confirmation from details the couple have not disclosed.",
    "## FIVE FILMS IN ONE YEAR",
    "Verity closes a notably busy release schedule. The Associated Press identifies five major theatrical releases for Hathaway in 2026: Mother Mary, The Devil Wears Prada 2, The Odyssey, The End of Oak Street and Verity. Together, they span sharply different screen worlds, from fashion and music to epic storytelling and psychological suspense." + cite("projects"),
    "The range continues a career that brought her to wide attention through The Princess Diaries and The Devil Wears Prada. PORTER's profile traced that progression through her later dramatic work and her continuing ambition to take on new challenges." + cite("porter"),
    "Her awards record includes the supporting actress Oscar for Les Misérables at the 2013 Academy Awards. The Academy's official record confirms that win, a major milestone in a career that has moved between comedy, drama and musical performance." + cite("oscar"),
    "The Verity premiere brings those professional and personal stories into the same frame: a major release, an established career and a pregnancy Hathaway has chosen to acknowledge publicly. The confirmed facts are enough to tell that story without guessing what comes next for her family.",
    "Information checked as of October 1, 2026. The supplied hero is an editorial illustration of a premiere-style appearance, not a verified documentary photograph from the September 29 event."
  ],
  faq: [
    { question: "Did Anne Hathaway first announce her pregnancy at the Verity premiere?", answer: "No. She announced her third pregnancy in June 2026. Her September 29 appearance was a later maternity red-carpet moment." },
    { question: "Where was Verity's New York premiere?", answer: "The premiere took place at AMC Lincoln Square in New York on September 29, 2026, with Anne Hathaway, Dakota Johnson and Josh Hartnett attending." },
    { question: "Who stars in Verity and when does it open?", answer: "Anne Hathaway plays Verity Crawford, Dakota Johnson plays Lowen Ashleigh and Josh Hartnett plays Jeremy Crawford. Amazon MGM Studios lists an October 2, 2026 theatrical release." },
    { question: "Has Hathaway confirmed a due date or the baby's sex?", answer: "The reliable reporting reviewed for this October 1 article does not establish a confirmed due date or the baby's sex." }
  ],
  references: Object.values(sources)
};
