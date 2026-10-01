import type { Article } from "@/data/articles";

const sources = {
  approval: { name: "PEOPLE: Zahara's court-approved name change, September 28, 2026", url: "https://people.com/angelina-jolie-brad-pitt-daughter-zahara-drops-pitt-from-last-name-12145815" },
  docket: { name: "USA TODAY: court docket reporting, September 29, 2026, via AOL", url: "https://www.aol.com/articles/angelina-jolie-brad-pitts-daughter-134324000.html" },
  process: { name: "California Courts: adult name change process", url: "https://selfhelp.courts.ca.gov/name-change/name-adult" },
  decree: { name: "California Courts: name change decrees and identity documents", url: "https://selfhelp.courts.ca.gov/name-change/name-adult/get-decree" },
  campus: { name: "ESSENCE: Zahara's Alpha Kappa Alpha membership at Spelman", url: "https://www.essence.com/lifestyle/zahara-jolie-sorority" },
  shiloh: { name: "Associated Press: Shiloh's approved name change, August 2024", url: "https://www.news4jax.com/entertainment/2024/08/20/shiloh-jolie-daughter-of-angelina-jolie-and-brad-pitt-officially-drops-pitt-surname/" },
  maddox: { name: "PEOPLE: Maddox's approved name change, September 14, 2026", url: "https://people.com/angelina-jolie-brad-pitt-son-maddox-legally-drops-pitt-from-last-name-12121527" },
  vivienne: { name: "PEOPLE: Vivienne's petition and scheduled hearing, August 21, 2026", url: "https://people.com/brad-pitt-angelina-jolie-daughter-vivienne-takes-next-legal-step-to-change-name-12065415" },
  divorce: { name: "Associated Press: Jolie and Pitt's divorce settlement, December 2024", url: "https://ktvz.com/news/ap-national-news/2024/12/30/angelina-jolie-and-brad-pitt-reach-divorce-settlement-after-8-years/" }
};
const cite = (key: keyof typeof sources) => ` [${sources[key].name}](${sources[key].url})`;

export const zaharaJolieArticle: Article = {
  id: "166",
  slug: "zahara-jolie-legally-drops-pitt-name-2026",
  title: "Brad Pitt’s Daughter Zahara Legally Drops His Last Name",
  seoTitle: "Zahara Legally Drops Pitt: Court Approves Jolie Name",
  metaDescription: "Zahara's September 28, 2026 name change to Zahara Marley Jolie, the court reporting, her earlier public use and her siblings' separate legal statuses.",
  schemaType: "NewsArticle",
  headlineHighlights: { red: "Zahara", gold: "Last Name" },
  excerpt: "A Los Angeles judge approved Zahara Marley Jolie as her legal name. Here is what the court reporting establishes and how her siblings' cases differ.",
  category: "Paparazzi",
  date: "2026-10-01",
  lastUpdated: "2026-10-01",
  author: "PRESDA Editorial",
  coverImage: "/articles/zahara-marley-jolie-name-change-2026.png",
  coverAlt: "Editorial illustration of Angelina Jolie, a younger Zahara and Brad Pitt walking together",
  homepageImagePosition: "50% 30%",
  status: "published",
  readingTime: "4 min read",
  relatedSlugs: ["angelina-jolie-ukraine-2026-humanitarian-work", "zendaya-tom-holland-relationship-marriage-careers", "rihanna-barbados-music-fenty-beauty-empire"],
  tags: ["Zahara Jolie", "Angelina Jolie", "Brad Pitt", "name change", "Hollywood", "family"],
  content: [
    "Zahara, the daughter of Angelina Jolie and Brad Pitt, legally became Zahara Marley Jolie on September 28, 2026, according to court records obtained by PEOPLE. A California judge approved the removal of Pitt from her previous legal name, Zahara Marley Jolie-Pitt." + cite("approval"),
    "The decision formalises a name she had already used publicly. It also requires a clear distinction between three different developments in coverage of the family: a name used at an event, a petition asking a court for a change, and an approved legal change.",
    "## WHAT THE COURT APPROVED",
    "USA TODAY reported that Los Angeles Superior Court Judge Virginia Keeny granted Zahara's request on September 28 with no recorded objections. The newspaper cited the court's online docket. Its report and PEOPLE's account agree on the approval date and the resulting name." + cite("docket"),
    "PRESDA's account of the ruling relies on those outlets' court-record reporting. We have not independently obtained the signed order. The absence of recorded objections should not be read as a statement of either parent's private views.",
    "California Courts explains that an adult can petition for a legal name change and receive a decree after judicial approval. A newspaper notice is part of the ordinary process, but publication of a notice does not itself mean the request has been granted." + cite("process"),
    "The decree can then be used to update identity documents. The state's guidance notes that government records are not automatically updated: the person must take the decree to the relevant agencies. These are general procedural facts, not a claim that Zahara has completed any particular document update." + cite("decree"),
    "## A NAME ALREADY USED AT SPELMAN",
    "Zahara introduced herself as Zahara Marley Jolie when joining Alpha Kappa Alpha at Spelman College in 2023. USA TODAY also reported that the same name was announced at her May 2026 graduation, although the commencement programme still listed Zahara Marley Jolie-Pitt." + cite("docket"),
    "Her sorority membership was a campus milestone in its own right. ESSENCE published photographs shared with the magazine from the celebration, attended by Angelina Jolie and Zahara's brothers Maddox and Pax. The outlet reported that Zahara began studying at the historically Black women's college in 2022." + cite("campus"),
    "Those earlier appearances establish public usage. The September court approval establishes the later legal change. Keeping the two dates separate avoids presenting a public introduction as if it were a court decree.",
    "## WHICH OTHER CHILDREN HAVE CHANGED THEIR NAMES?",
    "Shiloh: a completed legal change. A Los Angeles court approved Shiloh Nouvel Jolie in August 2024, the Associated Press reported. She had filed the petition on May 27, her 18th birthday. The approval removed Pitt from her former name, Shiloh Nouvel Jolie-Pitt." + cite("shiloh"),
    "Maddox: a completed legal change. PEOPLE reported that a Los Angeles County Superior Court judge approved Maddox Chivan Jolie on September 14, 2026, citing public court records. His previous legal name was Maddox Chivan Jolie-Pitt." + cite("maddox"),
    "Vivienne: public usage and a pending petition. PEOPLE reported that she requested Vivienne Marcheline Jolie and published the required legal notice. The report scheduled her hearing for November 2, 2026. USA TODAY's September 29 account still described the case as pending. She had already appeared as Vivienne Jolie in the programme for Broadway's The Outsiders." + cite("vivienne") + cite("docket"),
    "Pax and Knox: the reporting reviewed for this article does not establish court-approved name changes for them. They should not be included in a list of confirmed legal changes without supporting documentation.",
    "## THE FAMILY AND DIVORCE CONTEXT",
    "Jolie and Pitt have six children: Maddox, Pax, Zahara, Shiloh, Knox and Vivienne. The actors married in 2014, and Jolie filed for divorce in 2016. A judge declared them legally single in 2019 while other matters remained unresolved. Their divorce settlement received judicial approval in December 2024." + cite("shiloh") + cite("divorce"),
    "Their legal history included disputes over custody and a separate lawsuit concerning the French winery Chateau Miraval. The Associated Press reported that the 2024 divorce agreement did not resolve the winery lawsuit. Those proceedings are distinct from the children's individual name-change petitions." + cite("divorce"),
    "For a separate account of Jolie's public work, read [PRESDA's feature on Angelina Jolie's humanitarian visits and decades of advocacy](/articles/angelina-jolie-ukraine-2026-humanitarian-work/). That story follows her work with refugees and displaced people, including her years with UNHCR.",
    "## WHAT THE RECORD DOES AND DOES NOT SHOW",
    "The court reporting establishes Zahara's new legal name. It does not establish her motives, feelings or the state of her relationships with either parent. A surname change should not be used to fill in those private details.",
    "Information checked as of October 1, 2026. The supplied family hero is an editorial illustration depicting the family in earlier years, not a photograph of the September 2026 court proceedings."
  ],
  faq: [
    { question: "What is Zahara's legal name now?", answer: "Zahara Marley Jolie. PEOPLE and USA TODAY reported that a judge approved the change on September 28, 2026, citing court records." },
    { question: "Had Zahara used Jolie before the court decision?", answer: "Yes. She publicly used Zahara Marley Jolie at her 2023 sorority introduction and her 2026 graduation. Public usage preceded the legal approval." },
    { question: "Have Shiloh and Maddox legally dropped Pitt?", answer: "Yes. AP reported Shiloh's approval in August 2024. PEOPLE reported Maddox's approval on September 14, 2026. Their legal names are Shiloh Nouvel Jolie and Maddox Chivan Jolie." },
    { question: "Has Vivienne's legal name change been approved?", answer: "The latest court reporting reviewed still described her petition as pending, with a November 2, 2026 hearing scheduled. Her earlier public use of Vivienne Jolie is separate from legal approval." }
  ],
  references: Object.values(sources)
};
