import type { Article } from "@/data/articles";
export const newsOct23LateArticles: Article[] = [
  {
    "id": "321",
    "slug": "scentronic-smells-internet-ohio-state-research",
    "title": "Scientists Develop Technology to Send Smells Over the Internet",
    "seoTitle": "Scentronic: Sending Smells Over the Internet, Explained",
    "metaDescription": "Ohio State's Scentronic prototype recognizes five odors and triggers remote fragrance release. Explore the research, human tests, limitations and applications.",
    "excerpt": "Ohio State's Scentronic prototype recognizes five odors and triggers remote fragrance release. Explore the research, human tests, limitations and applications.",
    "category": "AI",
    "schemaType": "NewsArticle",
    "date": "2026-10-23",
    "lastUpdated": "2026-10-23",
    "author": "PRESDA Editorial",
    "status": "published",
    "readingTime": "6 min read",
    "coverImage": "/articles/news-oct23-late-scent-hero.png",
    "coverAlt": "AI illustration of an imagined fragrance laboratory with a scent interface",
    "headlineHighlights": {
      "red": "Scientists",
      "gold": "Smells Over the Internet"
    },
    "tags": [
      "Scentronic",
      "Ohio State University",
      "Digital scent",
      "Electronic noses"
    ],
    "content": [
      "Coffee can travel across a video call as an image, a description or the sound of a grinder. Its aroma has remained harder to share. Researchers at The Ohio State University and Zhejiang Laboratory have now demonstrated Scentronic, a system linking electronic odor detection to a remote fragrance dispenser. The achievement is a working connection between sensing and release, with an important boundary: data crosses the internet, while the smell is produced locally from material already inside the receiver. [Study record and abstract](https://europepmc.org/article/MED/42905806)",
      "The work, published in Science Advances on October 21, 2026, is led by Chunyu Yang and colleagues. It combines machine learning, gas sensing, network communication and a wearable piezoelectric interface. Calling it a technology for sending smells is convenient shorthand. Understanding what it actually sends reveals both why the experiment matters and why an ordinary phone cannot yet download the fragrance of any object placed in front of it. [Research DOI](https://doi.org/10.1126/sciadv.aee9266)",
      "## How does Scentronic send a smell?",
      "The system first collects a pattern of responses from gas sensors exposed to an odor. A trained machine-learning model assigns that pattern to a recognized category. An online connection passes the result to a receiving device, which releases a corresponding prepared fragrance. In the demonstration, the categories were coffee, beer, cake, orange and red wine. These five familiar examples define the demonstrated repertoire, rather than an unrestricted ability to copy the chemical world. [Reuters interview with lead author Chunyu Yang](https://www.channelnewsasia.com/business/new-scentronic-technology-can-detect-and-transmit-aromas-remotely-6486011)",
      "Think of the distinction between identifying a song and recording every vibration that produced it. Naming an odor category does not specify every molecule, concentration and temporal change in the original sample. A receiver supplied with a coffee formulation can create a recognizable coffee-like experience, but that does not establish an exact reconstruction of a particular roast, brewing method or kitchen. The useful innovation is the automated chain connecting an encounter with an odor to a remote sensory response.",
      "## An electronic nose is a trained measuring instrument",
      "An electronic nose does not smell in the biological sense. Sensors generate signals; software learns relationships between those signals and labeled examples. Its success therefore depends on the samples and conditions used during training. Identifying something among five expected categories is a different problem from deciding what an unfamiliar mixture contains. A useful consumer system would need to handle variation, interference and uncertain inputs, rather than always forcing a confident label onto them.",
      "The human comparison is revealing. According to the US National Institute on Deafness and Other Communication Disorders, airborne molecules stimulate receptors on olfactory sensory neurons, which send signals to the brain. A molecule can activate combinations of receptors. Smell also contributes strongly to flavor through aromas reaching the nose from the mouth. A digital interface must ultimately deliver a chemical stimulus that this biological system can perceive; a screen notification alone cannot do the job. [NIDCD: how smell works](https://www.nidcd.nih.gov/health/smell-disorders)",
      "## What did the experiments establish?",
      "The published abstract describes an integrated platform for remote sensing and olfactory stimulation, with additional demonstrations combining smell and taste. The result establishes that these components can operate together. It does not establish a universal scent codec, clinical effectiveness or the accuracy of every possible real-world transmission. Those are separate claims requiring separate experiments. [Science Advances study abstract](https://europepmc.org/article/MED/42905806)",
      "Science X's account of the paper reports tests with 14 healthy volunteers: identification was about 73% for individual scents and about 71% for pairs. Those are human recognition results in a limited experiment, not an overall accuracy score for the AI detector. The same account reports a 0.6-second response in one part of the system, while classifying more complex food odors took seconds to tens of seconds. The figures should not be converted into a promise of instantaneous, flawless smell transmission. [Science X: experimental results and limitations](https://techxplore.com/news/2026-10-scientists-aromas-internet.html)",
      "These distinctions matter because a successful sensory demonstration can fail at several different points. The detector might choose the wrong category; the dispenser might release an inconsistent amount; a participant might perceive the intended fragrance but name it differently. Larger studies, clearer controls and tests outside the laboratory would help separate these possibilities. The reported identification percentages show a measurable experience, while leaving substantial room for improvement.",
      "## Why the receiver still needs scented liquids",
      "The receiving device is physical equipment, not a software update that gives existing hardware a new sense. Yang told Reuters that expanding the repertoire would require both training the detector on additional odors and supplying suitable scented liquids. Reservoirs and atomizers take space, so a phone-connected accessory is a more straightforward possibility than placing an unlimited fragrance library inside a handset. No commercial launch date or consumer price was established in the reporting reviewed for this article. [Reuters: prototype constraints](https://www.channelnewsasia.com/business/new-scentronic-technology-can-detect-and-transmit-aromas-remotely-6486011)",
      "That creates a different distribution problem from streaming music. A downloaded file can be copied repeatedly, but a fragrance supply must be manufactured, delivered and replenished. For a product designer, maintaining the same experience between refills would be as important as getting the wireless connection right. Consent also belongs in the design: users should be able to decide whether, when and how strongly a remote device releases a scent.",
      "## A new step in an established research field",
      "Scentronic did not invent electronic smell delivery. A separate Nature Communications paper in 2024 investigated miniaturized odor generators and AI-assisted wearable interfaces for mixed reality. That work addressed response time, energy use and compactness. Its results provide context for the broader engineering effort, but they should not be attributed to the Ohio State system or used to inflate Scentronic's performance. Different prototypes answer different experimental questions. [Nature Communications: earlier wearable olfactory research](https://www.nature.com/articles/s41467-024-48884-z.pdf)",
      "The distinction is especially useful when a demonstration is described as a breakthrough. An advance can lie in integrating components into a practical experimental chain rather than discovering an entirely new physical principle. Comparing systems requires the same definitions of recognition, delivery, delay and user experience. A fast actuator and a reliable detector are both valuable, yet neither alone guarantees convincing reproduction.",
      "## Applications worth testing, rather than promising",
      "The authors describe potential uses in sensory research and multisensory interaction. Controlled delivery could help researchers investigate how people perceive odors; combining it with visual or taste cues could create new experimental environments. Such possibilities are not evidence that Scentronic diagnoses or treats a disease. Clinical use would require appropriate validation, and consumer use would require careful assessment of repeated exposure, usability and reliability. [Study scope](https://europepmc.org/article/MED/42905806)",
      "For shopping, entertainment or remote social contact, the central question is whether a small, dependable library adds enough value to justify dedicated equipment. That is an open product question, not a forecast of inevitable adoption. As PRESDA's examination of undersea cables shows, digital experiences depend on physical infrastructure. Scentronic makes that dependence unusually tangible: a network carries instructions, and a local device supplies the material that turns those instructions into an experience. [PRESDA: the internet's physical network](/articles/undersea-cables-hidden-network-connecting-world/)"
    ],
    "references": [
      {
        "name": "Study scope",
        "url": "https://europepmc.org/article/MED/42905806"
      },
      {
        "name": "Research DOI",
        "url": "https://doi.org/10.1126/sciadv.aee9266"
      },
      {
        "name": "Reuters: prototype constraints",
        "url": "https://www.channelnewsasia.com/business/new-scentronic-technology-can-detect-and-transmit-aromas-remotely-6486011"
      },
      {
        "name": "NIDCD: how smell works",
        "url": "https://www.nidcd.nih.gov/health/smell-disorders"
      },
      {
        "name": "Science X: experimental results and limitations",
        "url": "https://techxplore.com/news/2026-10-scientists-aromas-internet.html"
      },
      {
        "name": "Nature Communications: earlier wearable olfactory research",
        "url": "https://www.nature.com/articles/s41467-024-48884-z.pdf"
      }
    ],
    "relatedSlugs": [
      "undersea-cables-hidden-network-connecting-world"
    ],
    "faq": [],
    "homepageImagePosition": "50% 45%"
  },
  {
    "id": "322",
    "slug": "american-express-3500-job-cuts-q3-2026-profits",
    "title": "American Express to Cut About 3,500 Jobs Despite Surging Profits",
    "seoTitle": "American Express: About 3,500 Job Cuts, Q3 Profits Rise",
    "metaDescription": "American Express plans a 5% workforce cut as Q3 2026 profits rise. Understand the rounded job counts, restructuring charge, AI strategy and earnings outlook.",
    "excerpt": "American Express plans a 5% workforce cut as Q3 2026 profits rise. Understand the rounded job counts, restructuring charge, AI strategy and earnings outlook.",
    "category": "Business",
    "schemaType": "NewsArticle",
    "date": "2026-10-23",
    "lastUpdated": "2026-10-23",
    "author": "PRESDA Editorial",
    "status": "published",
    "readingTime": "6 min read",
    "coverImage": "/articles/news-oct23-late-amex-hero.png",
    "coverAlt": "AI illustration of an imagined American Express corporate entrance",
    "headlineHighlights": {
      "red": "American Express",
      "gold": "3,500 Jobs"
    },
    "tags": [
      "American Express",
      "Job cuts",
      "Q3 2026",
      "Automation"
    ],
    "content": [
      "American Express is reducing its workforce while its customers keep spending and its profits rise. On October 23, 2026, the payments company disclosed a restructuring affecting about 5% of its global staff. Dow Jones reported that the company put the number at roughly 3,500 roles. The announcement makes this a story about how a profitable business wants to operate, rather than an emergency response to a quarterly loss. [Dow Jones: company confirms roughly 3,500 roles](https://www.marketscreener.com/news/american-express-to-cut-5-of-global-workforce-3rd-update-ce785cdfdd89f12d)",
      "The earnings are strong, but their composition matters. Third-quarter net income reached $3.712 billion, up 28% from $2.902 billion a year earlier. Reported diluted earnings were $5.42 a share, while the adjusted figure was $4.68. The difference reflects an investment-sale gain net of restructuring costs. Treating those two earnings measures as interchangeable would obscure the economics of the announcement. [American Express: third-quarter results](https://www.marketscreener.com/news/american-express-third-quarter-2026-press-release-ce785cdfd888f227)",
      "## What has American Express announced?",
      "Reuters reported chief executive Stephen Squeri's statement that the third-quarter restructuring charge related to a plan expected to eliminate about 5% of the workforce. The plan's existence is confirmed; detailed implementation is a separate question. A global percentage does not identify which offices, countries or individual teams bear the reductions, and it cannot establish the circumstances of any particular employee's departure. [Reuters: restructuring and workforce reduction](https://www.investing.com/news/stock-market-news/amex-ceo-says-company-to-cut-5-of-total-workforce-4969405)",
      "The headcount should remain approximate. Reports have used differing rounded totals, including an updated Associated Press account describing about 4,000 employees, while Dow Jones subsequently attributed roughly 3,500 roles directly to the company. The common reported measure is around 5%. PRESDA uses the company-attributed estimate without presenting it as an exact arithmetic conversion from a headcount measured at a different date. [AP: updated account](https://www.ksat.com/business/2026/10/23/american-express-profits-rise-company-cuts-workforce-by-5-or-about-4000-employees/) [Dow Jones: company estimate](https://www.marketscreener.com/news/american-express-to-cut-5-of-global-workforce-3rd-update-ce785cdfdd89f12d)",
      "## Reading the profits without the accounting confusion",
      "Revenue net of interest expense was $20.062 billion, approximately $20.1 billion, up 9% year on year. Billed business, the spending measure rather than the company's own revenue, reached $454 billion, an 8% increase. Adjusted earnings per share rose 13%. Together these measures show expanding customer activity and underlying earnings growth, even though the much larger increase in reported earnings also reflects items outside ordinary card spending. [Company results and financial tables](https://www.marketscreener.com/news/american-express-third-quarter-2026-press-release-ce785cdfd888f227)",
      "The sale of American Express's equity interest in Global Business Travel Group produced a $982 million pretax gain. The quarter also included a $336 million pretax restructuring charge. The corresponding after-tax amounts were $751 million and $253 million. The adjusted earnings presentation excludes the net effect of those two items. This is why a headline about rising profits should still explain what part came from operations and what part came from a transaction. [American Express: earnings reconciliation](https://www.marketscreener.com/news/american-express-third-quarter-2026-presentation-ce785cdfd888fe23)",
      "Neither measure makes the other irrelevant. Reported earnings show the accounting outcome shareholders actually receive for the period. Adjusted earnings help isolate a comparison after the specified exclusions. Readers should also resist assuming that every unusual expense has disappeared from the adjusted number: management's earnings-call remarks said that it still included expenses for legal matters. The label is a defined calculation, not a synonym for a business free of complications. [Management's third-quarter earnings call](https://stockanalysis.com/stocks/axp/transcripts/655622-q3-2026/)",
      "## Premium spending brings premium costs",
      "American Express's model depends on persuading customers that membership fees, rewards, travel benefits and service justify keeping and using its cards. That creates a two-sided challenge: spending and fees can grow while delivering the promised benefits becomes more expensive. Consolidated expenses rose 9% to $14.5 billion in the quarter, with the company pointing to customer-engagement costs associated with higher spending and the US Platinum Card refresh. [American Express: expense drivers](https://www.marketscreener.com/news/american-express-third-quarter-2026-press-release-ce785cdfd888f227)",
      "An affluent customer base does not remove the need to defend value. It raises the importance of consistent service, useful benefits and reasons to renew. Cutting organizational layers can be part of management's response, but it does not itself prove that the customer experience will improve. That outcome must be judged through retention, reliability and subsequent operating results, rather than inferred from the announcement of fewer jobs.",
      "## Where automation and AI fit",
      "Chief financial officer Christophe Le Caillec told CNBC that the restructuring was intended to simplify the organization and prepare it for AI. His explanation was about redesigning processes before automating them, including reducing layers and widening management responsibility. That is more specific than saying robots have already replaced every departing employee. The interview described a path toward greater automation in coming quarters and years, not a verified one-for-one tally of jobs replaced by deployed systems. [CNBC interview with Le Caillec](https://www.cnbc.com/2026/10/23/american-express-job-cuts.html)",
      "There is also a customer-facing ambition. In its 2026 shareholder letter, American Express described AI agents that could help discover products, arrange travel, manage expenses and complete payments. Those capabilities create commercial opportunities, but payments require more than an appealing recommendation. A system must distinguish permission to suggest a purchase from permission to make it, and a service problem must still have an accountable route to resolution. These are implementation questions, not evidence of a failure in this restructuring. [American Express: 2026 shareholder letter](https://www.americanexpress.com/content/dam/amex/en-us/newsroom/pdfs/AXP-2026-Chairmans-Letter-to-Shareholders.pdf)",
      "PRESDA's reporting on automated supermarkets explores the same broader tension: automation can change individual tasks, staffing patterns and the customer journey without removing every human responsibility. For American Express, the relevant test is whether a simpler organization can deliver the promised service with appropriate controls. Announcing AI readiness is the beginning of that assessment, not its conclusion. [PRESDA: AI and the future of supermarkets](/articles/future-supermarkets-ai-robots-cashierless-shopping/)",
      "## The employee questions behind the percentage",
      "For affected workers, a restructuring charge is not a severance offer and an efficiency target is not a transition plan. The sources reviewed do not establish a complete country-by-country allocation, a universal severance package or a single timetable applying to every role. Those details should not be invented from a global headline. Employees need information relevant to their employer entity, position and local process, rather than an assumption that all departures follow identical terms.",
      "For those remaining, fewer management layers can mean changed reporting relationships and broader responsibilities. Whether that simplifies work depends on how tasks, authority and support are redistributed. It would be premature to describe all of these changes as either a demonstrated productivity success or an inevitable service collapse. The confirmed news is a significant workforce reduction alongside strong earnings; the operational and personal consequences will become clearer as implementation details emerge.",
      "## What the outlook does and does not say",
      "American Express raised its full-year reported earnings guidance to $18.30–$18.60 a share. Its adjusted guidance is $17.60–$17.90, compared with the previous $17.30–$17.90 range. The company also maintained its expectation of 10% revenue growth. These are management forecasts, not completed results, and the higher reported range includes the transaction-related effect that the adjusted presentation removes. [American Express: results presentation and outlook](https://www.marketscreener.com/news/american-express-third-quarter-2026-presentation-ce785cdfd888fe23)",
      "The next useful evidence will be whether spending and retention remain resilient, how expenses develop after restructuring, and whether automation supports dependable service. The announcement shows that profitability does not guarantee employment stability. It does not, by itself, demonstrate either a demand crisis or the final shape of AI's impact on the workforce. Those conclusions require more than one earnings release."
    ],
    "references": [
      {
        "name": "Dow Jones: company estimate",
        "url": "https://www.marketscreener.com/news/american-express-to-cut-5-of-global-workforce-3rd-update-ce785cdfdd89f12d"
      },
      {
        "name": "American Express: expense drivers",
        "url": "https://www.marketscreener.com/news/american-express-third-quarter-2026-press-release-ce785cdfd888f227"
      },
      {
        "name": "Reuters: restructuring and workforce reduction",
        "url": "https://www.investing.com/news/stock-market-news/amex-ceo-says-company-to-cut-5-of-total-workforce-4969405"
      },
      {
        "name": "AP: updated account",
        "url": "https://www.ksat.com/business/2026/10/23/american-express-profits-rise-company-cuts-workforce-by-5-or-about-4000-employees/"
      },
      {
        "name": "American Express: results presentation and outlook",
        "url": "https://www.marketscreener.com/news/american-express-third-quarter-2026-presentation-ce785cdfd888fe23"
      },
      {
        "name": "Management's third-quarter earnings call",
        "url": "https://stockanalysis.com/stocks/axp/transcripts/655622-q3-2026/"
      },
      {
        "name": "CNBC interview with Le Caillec",
        "url": "https://www.cnbc.com/2026/10/23/american-express-job-cuts.html"
      },
      {
        "name": "American Express: 2026 shareholder letter",
        "url": "https://www.americanexpress.com/content/dam/amex/en-us/newsroom/pdfs/AXP-2026-Chairmans-Letter-to-Shareholders.pdf"
      }
    ],
    "relatedSlugs": [
      "future-supermarkets-ai-robots-cashierless-shopping"
    ],
    "faq": [],
    "homepageImagePosition": "50% 50%"
  },
  {
    "id": "323",
    "slug": "arda-guler-real-madrid-contract-2032-reports",
    "title": "Arda Güler Signs New Real Madrid Deal Until 2032, Reports Say",
    "seoTitle": "Arda Güler to 2032: Real Madrid Contract Reports",
    "metaDescription": "Romano reports a signed Arda Güler deal to June 2032. What is known about club confirmation, conflicting dates, his form and unconfirmed salary details.",
    "excerpt": "Romano reports a signed Arda Güler deal to June 2032. What is known about club confirmation, conflicting dates, his form and unconfirmed salary details.",
    "category": "Sport",
    "schemaType": "NewsArticle",
    "date": "2026-10-23",
    "lastUpdated": "2026-10-23",
    "author": "PRESDA Editorial",
    "status": "published",
    "readingTime": "7 min read",
    "coverImage": "/articles/news-oct23-late-guler-hero.png",
    "coverAlt": "AI-generated illustration imagining Arda Güler signing a Real Madrid contract",
    "headlineHighlights": {
      "red": "Arda Güler",
      "gold": "Reports Say"
    },
    "tags": [
      "Arda Güler",
      "Real Madrid",
      "Contracts",
      "Fabrizio Romano"
    ],
    "content": [
      "Arda Güler has signed a new Real Madrid contract running until June 2032, according to transfer reporter Fabrizio Romano. His October 23, 2026 update followed a post the previous day saying the documents had been signed after an agreement reached in September. That is a reported contractual development, not an official announcement by Real Madrid. PRESDA found no corresponding renewal statement in the club's news and announcements reviewed before publication. [Romano's October 22 and 23 updates](https://t.me/s/fabrizioromanotg?before=67602) [Real Madrid news](https://www.realmadrid.com/en-US/news/football/first-team/latest-news)",
      "The distinction matters because the midfielder's progress is easier to document than the precise terms of his next contract. At 21, Güler is contributing in both domestic and European competition, and Madrid's own reporting has highlighted his growing importance. The renewal report therefore arrives against a clear sporting backdrop. It still requires careful separation of signed-document reporting, official confirmation and financial details that have not been disclosed.",
      "## What Romano reported, and what remains unconfirmed",
      "Romano's posts describe an agreement reached in September, completed paperwork and a club announcement still to follow. His October 23 message specifies June 2032. An earlier message described the next five years, with a subsequent clarification referring to a January start. Those formulations should not be turned into an independently verified commencement date or exact contractual duration. The underlying document is not publicly available in the material reviewed. [Romano's report](https://t.me/s/fabrizioromanotg?before=67602)",
      "There is also a documented discrepancy in the wider reporting. AS wrote on October 5 that Güler had agreed an extension until 2031, two years beyond his existing 2029 endpoint, with a salary increase. Romano's later account gives 2032. This article attributes that later date to him rather than silently treating the earlier account as if it had said the same thing. A club statement would provide the clearest public resolution of the end date. [AS: October 5 renewal report](https://as.com/futbol/primera/guler-acuerda-su-renovacion-hasta-2031-f202610-n/)",
      "The established starting point is Madrid's July 6, 2023 announcement of an agreement with Fenerbahçe and a contract for six seasons. That original commitment ran through 2029. A reported 2032 endpoint would extend the relationship three years beyond it, not add five years to 2029. Distinguishing the term of a replacement agreement from the years added to an existing deal avoids a common source of confusion. [Real Madrid: original signing announcement](https://www.realmadrid.com/en-US/news/club/announcements/official-announcement-arda-guler-06-07-2023)",
      "## From Ankara to a place in Madrid's midfield",
      "Born in Ankara on February 25, 2005, Güler developed at Gençlerbirliği and in Fenerbahçe's youth system before reaching the Istanbul club's senior team. Madrid's profile records his move to Spain in 2023 and his competitive debut against Arandina on January 6, 2024. That chronology is useful because it measures development across seasons, rather than treating the latest contract report as a sudden transformation. [Real Madrid: player profile and career](https://www.realmadrid.com/es-ES/futbol/primer-equipo-masculino/plantilla/arda-guler)",
      "He arrived with senior experience and a tangible achievement: the 2023 Turkish Cup. Madrid's contemporary introduction recorded that he supplied an assist in Fenerbahçe's 2-0 final victory over Başakşehir and was named the final's outstanding player. These are stronger foundations for describing his promise than retrospective labels suggesting his emergence was inevitable. An impressive teenager still has to adapt to a new league, training environment and competition for places. [Real Madrid: July 2023 introduction](https://www.realmadrid.com/es-ES/noticias/futbol/primer-equipo/actualidad/asi-juega-arda-guler)",
      "His first Spanish league season offered an unusually productive snapshot: six goals in ten appearances in 2023/24, according to UEFA's final preview. He scored the winner at Real Sociedad on his first LaLiga start. Those numbers established finishing quality in limited opportunities; they did not, on their own, measure a full season of midfield responsibility. The question since then has been how to turn memorable moments into a larger, repeatable role. [UEFA: 2023/24 season record](https://www.uefa.com/uefachampionsleague/news/028d-1aeb332cb9f3-a3b8aa15dac5-1000--champions-league-final-facts-borussia-dortmund-vs-real-m/)",
      "## What the current performances show",
      "At the October 23 check, Madrid's player page listed 11 appearances, three goals and four assists in its 2026/27 totals. The club's league breakdown and LaLiga's Spanish-language profile showed nine league appearances, seven starts, two goals and two assists across 504 minutes. These are explicitly competition-specific snapshots, not interchangeable totals. Assist definitions and update times can also differ between providers, so this report uses the named official records rather than combining figures from different outlets. [Real Madrid statistics](https://www.realmadrid.com/en-US/football/first-team/players/arda-guler) [LaLiga statistics](https://www.laliga.com/jugador/arda-guler)",
      "Madrid confirmed on October 8 that Güler had received its Mahou Five-Star Player award for September, after appearing in all four of the team's league matches that month. That recognition is evidence of how the club and its supporters are responding to his performances, not a neutral ranking of every midfielder in Europe. His message on the club website emphasized contributing to team victories and trophies. [Real Madrid: September award](https://www.realmadrid.com/en-US/news/football/first-team/latest-news/arda-guler-jugador-cinco-estrellas-mahou-de-septiembre-08-10-2026)",
      "The latest European example came in the 4-1 victory over Leipzig on October 21. Güler scored Madrid's second goal, and the club published his post-match reflections on the performance and the forthcoming Barcelona match. The goal supplies concrete context for the renewal story. It does not settle a salary negotiation, guarantee a starting position in the next fixture or justify treating a young player's future as already decided. [UEFA: Real Madrid against Leipzig](https://www.uefa.com/uefachampionsleague/match/2049599--real-madrid-vs-leipzig/) [Real Madrid: Güler after Leipzig](https://www.realmadrid.com/de-DE/news/fussball/erste-mannshaft/latest-news/arda-guler-post-rm-leipzig-j3-champions-21-10-2026)",
      "## Why Madrid would want continuity",
      "The sporting logic of a long agreement is straightforward, although it remains an interpretation rather than a disclosed negotiating brief. A club investing playing time in a developing midfielder can seek continuity through the years when experience, tactical understanding and physical maturity accumulate. A player can gain a clearer horizon without being exempt from competition. A contract can support that development; it cannot carry it out on the pitch.",
      "Güler's next steps are therefore broader than another highlight or another goal. Sustaining involvement across different opponents, helping the team progress the ball and meeting defensive responsibilities are the kinds of demands that make a midfielder dependable. An extended contract would signal commitment to that process, but it would not establish a permanent tactical role or eliminate selection decisions. PRESDA's coverage of Madrid's managerial direction provides additional context for those team-building choices. [PRESDA: Real Madrid's managerial direction](/articles/mourinho-real-madrid-return-signal/)",
      "## What can be said about his salary?",
      "AS reported a pay rise alongside its renewal account, but the sources reviewed do not provide an officially confirmed new salary. This article therefore does not assign Güler a precise annual income or claim a verified position in Madrid's pay hierarchy. A gross salary, net take-home amount, performance bonus and total contract value are different quantities. Repeating an unattributed figure without specifying which one it represents would create apparent precision without reliable information. [AS: reported salary improvement](https://as.com/futbol/primera/guler-acuerda-su-renovacion-hasta-2031-f202610-n/)",
      "The same restraint applies to release clauses, image rights and promises about playing time. None should be inferred from a photograph, an illustration of a signing or the length of a reported agreement. The approved image accompanying this article is an AI-generated editorial illustration, not evidence that a particular ceremony took place. The source of the contract claim remains the reporting identified above.",
      "## The next milestone is official clarification",
      "The defensible account on October 23 is that Romano reports a signed contract through June 2032, earlier reporting gave a different endpoint, and a corresponding club announcement was not found in the official material checked. Güler's recent playing record is independently documented by Madrid, LaLiga and UEFA. Keeping those categories separate allows readers to follow a meaningful development without mistaking confidence in a reporter for confirmation from the employer.",
      "If Madrid publishes the renewal, the end date and any disclosed terms can be assessed directly. Until then, expectations about Güler's future should rest on his demonstrated progress and the report's stated limits. The most persuasive part of his case is already visible on the field: a young midfielder earning more responsibility. Whether a new contract runs to 2031 or 2032 is a consequential detail that deserves a verified answer, not an assumption."
    ],
    "references": [
      {
        "name": "Romano's report",
        "url": "https://t.me/s/fabrizioromanotg?before=67602"
      },
      {
        "name": "Real Madrid news",
        "url": "https://www.realmadrid.com/en-US/news/football/first-team/latest-news"
      },
      {
        "name": "AS: reported salary improvement",
        "url": "https://as.com/futbol/primera/guler-acuerda-su-renovacion-hasta-2031-f202610-n/"
      },
      {
        "name": "Real Madrid: original signing announcement",
        "url": "https://www.realmadrid.com/en-US/news/club/announcements/official-announcement-arda-guler-06-07-2023"
      },
      {
        "name": "Real Madrid: player profile and career",
        "url": "https://www.realmadrid.com/es-ES/futbol/primer-equipo-masculino/plantilla/arda-guler"
      },
      {
        "name": "Real Madrid: July 2023 introduction",
        "url": "https://www.realmadrid.com/es-ES/noticias/futbol/primer-equipo/actualidad/asi-juega-arda-guler"
      },
      {
        "name": "UEFA: 2023/24 season record",
        "url": "https://www.uefa.com/uefachampionsleague/news/028d-1aeb332cb9f3-a3b8aa15dac5-1000--champions-league-final-facts-borussia-dortmund-vs-real-m/"
      },
      {
        "name": "Real Madrid statistics",
        "url": "https://www.realmadrid.com/en-US/football/first-team/players/arda-guler"
      },
      {
        "name": "LaLiga statistics",
        "url": "https://www.laliga.com/jugador/arda-guler"
      },
      {
        "name": "Real Madrid: September award",
        "url": "https://www.realmadrid.com/en-US/news/football/first-team/latest-news/arda-guler-jugador-cinco-estrellas-mahou-de-septiembre-08-10-2026"
      },
      {
        "name": "UEFA: Real Madrid against Leipzig",
        "url": "https://www.uefa.com/uefachampionsleague/match/2049599--real-madrid-vs-leipzig/"
      },
      {
        "name": "Real Madrid: Güler after Leipzig",
        "url": "https://www.realmadrid.com/de-DE/news/fussball/erste-mannshaft/latest-news/arda-guler-post-rm-leipzig-j3-champions-21-10-2026"
      }
    ],
    "relatedSlugs": [
      "mourinho-real-madrid-return-signal"
    ],
    "faq": [],
    "homepageImagePosition": "50% 35%"
  }
];
