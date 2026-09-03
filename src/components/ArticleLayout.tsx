import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/data/articles";
import { ArticleReadingProgress } from "@/components/ArticleReadingProgress";
import { HeadlineText } from "@/components/HeadlineText";
import { NewsletterBox } from "@/components/NewsletterBox";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";
import { SourceBox } from "@/components/SourceBox";
import { TagList } from "@/components/TagList";
import {
  articleSectionId,
  getArticleContentWithoutInlineFaq,
  getArticleFaqs,
  getArticleLastUpdated,
  getArticleSections
} from "@/lib/articleSeo";
import { toAuthorSlug } from "@/lib/authors";
import { categoryLabels, formatDate, toCategorySlug } from "@/lib/categories";

type ArticleLayoutProps = {
  article: Article;
  relatedArticles: Article[];
};

type ArticleTableConfig = {
  caption: string;
  headers: string[];
  rows: string[][];
  minWidthClass: string;
  boldColumnIndex: number;
  rowKeyIndex: number;
};

const articleTables: Record<string, ArticleTableConfig> = {
  "[[MARKET_CAP_2026_TABLE]]": {
    caption: "Snapshot: approximate public-company market caps, September 1, 2026. Figures move with share prices.",
    headers: ["Rank", "Company", "Ticker", "Country", "Market Cap", "Why It Ranks Here"],
    minWidthClass: "min-w-[760px]",
    boldColumnIndex: 1,
    rowKeyIndex: 1,
    rows: [
      ["1", "NVIDIA", "NVDA", "United States", "$5.33T", "AI chips, accelerated computing, data centers"],
      ["2", "Apple", "AAPL", "United States", "$4.62T", "iPhone, services, devices, consumer ecosystem"],
      ["3", "Alphabet", "GOOG", "United States", "$4.10T", "Search, YouTube, cloud, advertising, AI"],
      ["4", "Microsoft", "MSFT", "United States", "$3.77T", "Cloud, software, enterprise platforms, AI"],
      ["5", "Amazon", "AMZN", "United States", "$2.80T", "AWS, e-commerce, logistics, advertising"],
      ["6", "TSMC", "TSM", "Taiwan", "$2.15T", "Semiconductor manufacturing"],
      ["7", "Broadcom", "AVGO", "United States", "$1.76T", "Semiconductors, networking, infrastructure software"],
      ["8", "Saudi Aramco", "2222.SR", "Saudi Arabia", "$1.68T", "Energy and oil production"],
      ["9", "Meta Platforms", "META", "United States", "$1.46T", "Social platforms, advertising, AI systems"],
      ["10", "Tesla", "TSLA", "United States", "$1.45T", "Electric vehicles, energy, autonomy"]
    ]
  },
  "[[MESSI_RONALDO_ERA_TABLE]]": {
    caption: "Messi vs Ronaldo era snapshot. Career goal totals are rounded because official and statistical databases update and classify competitions differently.",
    headers: ["Category", "Lionel Messi", "Cristiano Ronaldo"],
    minWidthClass: "min-w-[760px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Career senior goals", "850+ confirmed senior goals; exact live totals vary by database", "900+ confirmed senior goals; exact live totals vary by database"],
      ["Ballon d'Or", "8 wins, the men's record", "5 wins"],
      ["Champions League", "4 titles with Barcelona; 129 goals in the competition", "5 titles; all-time Champions League top scorer with 140 goals"],
      ["World Cup", "Champion in 2022; Golden Ball in 2014 and 2022", "Five tournaments scored in; no World Cup title"],
      ["Major senior international trophies", "World Cup 2022, Copa America 2021 and 2024, Finalissima 2022", "EURO 2016, UEFA Nations League 2019 and 2025"],
      ["Era-defining record", "Most Ballon d'Or wins and a complete club/international trophy arc", "All-time men's international goals record and Champions League scoring record"]
    ]
  },
  "[[FOOTBALL_GENERATION_PLAYERS_TABLE]]": {
    caption: "Major figures of the mid-2000s to mid-2020s football generation.",
    headers: ["Player", "Country", "Position", "Major Trophies", "Ballon d'Or", "Key Historical Achievement"],
    minWidthClass: "min-w-[980px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Lionel Messi", "Argentina", "Forward", "World Cup, Copa America, Champions League, La Liga, Ligue 1", "8", "Completed the modern trophy arc and set the men's Ballon d'Or record"],
      ["Cristiano Ronaldo", "Portugal", "Forward", "EURO, Nations League, Champions League, Premier League, La Liga, Serie A", "5", "Set the men's international goals record and Champions League scoring record"],
      ["Neymar", "Brazil", "Forward", "Champions League, Libertadores, Olympic gold, domestic league titles", "0", "Linked Brazilian flair to the social-media superstar era"],
      ["Luka Modric", "Croatia", "Midfielder", "Champions League, La Liga, World Cup runner-up and third place", "1", "Broke the Messi-Ronaldo Ballon d'Or sequence in 2018"],
      ["Karim Benzema", "France", "Forward", "Champions League, La Liga, Nations League", "1", "Became Real Madrid's post-Ronaldo attacking leader"],
      ["Luis Suarez", "Uruguay", "Forward", "Champions League, Copa America, La Liga, Eredivisie", "0", "One of the era's most complete centre-forwards"],
      ["Robert Lewandowski", "Poland", "Forward", "Champions League, Bundesliga, La Liga", "0", "Defined elite penalty-box scoring across Germany and Spain"],
      ["Toni Kroos", "Germany", "Midfielder", "World Cup, Champions League, La Liga, Bundesliga", "0", "Set the passing rhythm for Germany, Bayern and Real Madrid"],
      ["Manuel Neuer", "Germany", "Goalkeeper", "World Cup, Champions League, Bundesliga", "0", "Redefined the modern sweeper-keeper role"],
      ["Sergio Ramos", "Spain", "Defender", "World Cup, EURO, Champions League, La Liga", "0", "A central defender whose goals and leadership shaped a dynasty"]
    ]
  },
  "[[GATES_FOUNDATION_KEY_STATS_TABLE]]": {
    caption: "Gates Foundation key statistics. Official figures are rounded as reported by the foundation.",
    headers: ["Metric", "Latest Figure", "How To Read It"],
    minWidthClass: "min-w-[820px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Founded", "2000", "Created by Bill Gates and Melinda French Gates through the merger of earlier Gates family foundations"],
      ["Total charitable distributions", "$110.9B through Q4 2025", "Includes grants, contracts, program-related investments, asset acquisitions and operating spending on a cash basis net of returns"],
      ["Total grant payments", "$90.0B through Q4 2025", "Grant payments made by the foundation and previous Gates family foundations from 1994 onward"],
      ["2025 charitable support", "$8.47B", "Rounded annual support from the 2025 Annual Report"],
      ["Endowment", "$89B at Dec. 31, 2025", "Foundation Trust endowment; June 30, 2026 unaudited figure was $92B"],
      ["Employees", "2,215 at Dec. 31, 2025", "Current foundation employees reported by the official fact sheet"],
      ["2025 grants", "2,506", "Number of grants approved in 2025, reported by the official foundation fact sheet"],
      ["Geographic reach", "143 countries in 2025", "International grant funding supported work in 143 countries, plus 45 U.S. states and D.C."],
      ["2026 payout commitment", "$9B", "Board-endorsed annual payout announced in January 2026"],
      ["Planned closure", "December 31, 2045", "Foundation plans to spend down and close by the end of 2045"]
    ]
  },
  "[[GATES_FOUNDATION_2025_SPENDING_TABLE]]": {
    caption: "2025 charitable support by major program area, from the Gates Foundation Annual Report 2025.",
    headers: ["Program Area", "2025 Support", "Major Work Included"],
    minWidthClass: "min-w-[820px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Global Development", "$2.175B", "Polio, immunization, Global Fund contributions, Africa and India offices, primary health care"],
      ["Global Health", "$1.897B", "Malaria, HIV, tuberculosis, vaccine development, discovery sciences, pneumonia and pandemic preparedness"],
      ["Gender Equality", "$952M", "Maternal, newborn and child nutrition and health, women's health innovations, family planning"],
      ["Global Growth & Opportunity", "$925M", "Agricultural development, inclusive financial systems, water and sanitation, nutrition, digital public infrastructure"],
      ["United States Program", "$847M", "K-12 education, postsecondary success, economic mobility, pathways, scholarships and Washington State work"],
      ["Global Policy & Advocacy", "$364M", "Advocacy, partnerships, development finance and regional policy work"],
      ["Other Charitable Programs", "$144M", "Other charitable initiatives reported outside the major program divisions"],
      ["Operational Expenditure", "$1.166B", "People, systems and operations needed to run the foundation"]
    ]
  },
  "[[GATES_FOUNDATION_MILESTONES_TABLE]]": {
    caption: "Major Gates Foundation milestones from 2000 to 2026.",
    headers: ["Year", "Milestone", "Why It Mattered"],
    minWidthClass: "min-w-[820px]",
    boldColumnIndex: 1,
    rowKeyIndex: 1,
    rows: [
      ["2000", "Foundation created", "Bill Gates and Melinda French Gates launched the modern foundation through the merger of earlier Gates family foundations"],
      ["2000", "Gavi support begins", "The foundation pledged $750M to help launch Gavi, the Vaccine Alliance"],
      ["2002", "Global Fund partnership", "The foundation became a private-sector partner of the Global Fund to Fight AIDS, Tuberculosis and Malaria"],
      ["2006", "Warren Buffett commitment", "Buffett began giving Berkshire Hathaway shares to the foundation, later becoming one of its defining donors"],
      ["2010", "Giving Pledge launched", "Bill Gates, Melinda French Gates and Warren Buffett helped launch the Giving Pledge"],
      ["2024", "Melinda French Gates departs", "Melinda French Gates stepped down as co-chair; the foundation later simplified its public name"],
      ["2025", "25-year strategy reset", "Bill Gates announced a plan to spend more than $200B through 2045 and close the foundation"],
      ["2026", "$9B annual payout", "The board endorsed a $9B annual payout and a stronger operating-cost cap"]
    ]
  },
  "[[GTA6_KEY_FACTS_TABLE]]": {
    caption: "GTA VI key facts verified from Rockstar, Take-Two and official platform/storefront information.",
    headers: ["Fact", "Confirmed Detail", "Source Context"],
    minWidthClass: "min-w-[820px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Release date", "November 19, 2026", "Confirmed by Rockstar Games and Take-Two"],
      ["Platforms", "PlayStation 5, Xbox Series X|S", "No official PC release date announced as of September 2, 2026"],
      ["Standard Edition price", "$79.99 in the U.S.", "Confirmed through official preorder coverage and storefront reporting"],
      ["Setting", "Vice City and Leonida", "Rockstar's fictional Florida-inspired state"],
      ["Main protagonists", "Jason Duval and Lucia Caminos", "Rockstar's official Trailer 2 description centers the pair"],
      ["Publisher / developer", "Rockstar Games / Rockstar Games", "Published under Take-Two Interactive"],
      ["Latest Take-Two fiscal guide", "$8.0B to $8.2B FY2027 net bookings", "Company guidance, not a GTA VI sales forecast"]
    ]
  },
  "[[GTA_SALES_MILESTONES_TABLE]]": {
    caption: "GTA V and franchise milestones. Sold-in figures describe units sold into retail/digital channels as reported by Take-Two.",
    headers: ["Year", "Milestone", "Why It Matters"],
    minWidthClass: "min-w-[860px]",
    boldColumnIndex: 1,
    rowKeyIndex: 1,
    rows: [
      ["1997", "Grand Theft Auto begins", "The original top-down crime sandbox established the brand's open-city identity"],
      ["2001", "GTA III", "Helped define the 3D open-world template for console gaming"],
      ["2002", "Vice City", "Turned the series into a pop-cultural period piece with a major soundtrack identity"],
      ["2004", "San Andreas", "Expanded the scale of GTA's cities, characters, systems and music culture"],
      ["2008", "GTA IV", "Moved the series into the HD era with a denser Liberty City"],
      ["2013", "GTA V", "Became one of the most durable entertainment releases in modern gaming"],
      ["2026", "GTA V sold-in", "Take-Two reported more than 230M GTA V units sold-in worldwide"],
      ["2026", "GTA franchise", "Take-Two materials and investor updates place the franchise in the high hundreds of millions of units sold-in"]
    ]
  },
  "[[GTA6_TRAILER_RECORDS_TABLE]]": {
    caption: "GTA VI trailer records and reach. YouTube-only records and cross-platform views use different measurement methods.",
    headers: ["Release", "Date", "Verified Figure", "How To Read It"],
    minWidthClass: "min-w-[900px]",
    boldColumnIndex: 0,
    rowKeyIndex: 2,
    rows: [
      ["Trailer 1", "December 2023", "90,421,491 YouTube views in 24 hours", "Guinness World Records recognized it as the most viewed videogame trailer on YouTube in 24 hours"],
      ["Trailer 1", "December 2023", "Most viewed non-music YouTube video in 24 hours at the time", "Guinness recorded GTA VI's first-look trailer across multiple YouTube categories"],
      ["Trailer 2", "May 2025", "More than 475M views across platforms in 24 hours", "Rockstar reported the cross-platform figure; this is not the same methodology as the YouTube-only Guinness record"],
      ["Trailer 2", "May 2025", "Jason and Lucia story focus", "Rockstar's official copy framed the trailer around the pair after an easy score goes wrong"]
    ]
  },
  "[[PERRY_TRUDEAU_TIMELINE_TABLE]]": {
    caption: "Katy Perry and Justin Trudeau timeline. Items are labeled by evidence level so public fact, reliable reporting and unsupported claims stay separate.",
    headers: ["Date", "Event", "Status", "Source"],
    minWidthClass: "min-w-[920px]",
    boldColumnIndex: 0,
    rowKeyIndex: 1,
    rows: [
      ["March 14, 2025", "Justin Trudeau left office as prime minister when Mark Carney was sworn in", "Confirmed public fact", "AP / Government of Canada coverage"],
      ["July 3, 2025", "AP reported that Katy Perry and Orlando Bloom had split after a long relationship and engagement", "Confirmed public reporting", "AP"],
      ["July 29, 2025", "AP reported Perry and Trudeau had dinner together in Montreal, sparking early speculation", "Reliably reported", "AP"],
      ["January 2026", "Perry and Trudeau were seen together at Davos during the World Economic Forum period", "Reliably reported public appearance", "Global News / Canadian Press photo reference"],
      ["April 2026", "They appeared together at Coachella, where coverage described Trudeau as Perry's boyfriend", "Reliably reported public appearance", "Guardian / Washington Post"],
      ["June 8, 2026", "They made a public red-carpet appearance at Perry's concert-film premiere", "Reliably reported public appearance", "People"],
      ["June 14, 2026", "AP described Trudeau as Perry's boyfriend in coverage of his World Cup appearance", "Confirmed mainstream public framing", "AP"],
      ["September 2, 2026", "People published Perry's comments presenting the relationship as current and meaningful", "Direct interview reporting", "People"]
    ]
  },
  "[[PERRY_TRUDEAU_CLAIMS_TABLE]]": {
    caption: "What is confirmed, what is reported and what PRESDA is not treating as fact.",
    headers: ["Claim Type", "What Can Be Said", "Editorial Treatment"],
    minWidthClass: "min-w-[900px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Confirmed public fact", "Trudeau is a former prime minister, not Canada's current prime minister; he left office in March 2025", "State plainly with political context only where relevant"],
      ["Confirmed public fact", "Perry is a global pop artist whose long relationship with Orlando Bloom ended publicly in 2025", "Use only necessary career and relationship context"],
      ["Reliably reported", "Perry and Trudeau were first publicly linked after a Montreal dinner in July 2025", "Describe as the beginning of public attention, not proof of private details"],
      ["Reliably reported", "By 2026, established outlets described them as a couple and covered public appearances together", "Treat the relationship as publicly established while avoiding private claims"],
      ["Direct public/interview framing", "Perry has publicly spoken positively about the relationship in promotional interviews", "Use careful summary; do not invent private conversations"],
      ["Unsubstantiated claims", "Marriage, engagement, pregnancy, private family reactions, breakups and private motivations", "Do not include unless supported by direct reliable on-record evidence"]
    ]
  },
  "[[XABI_ALONSO_CAREER_TIMELINE_TABLE]]": {
    caption: "Xabi Alonso career timeline, from elite midfielder to Chelsea manager.",
    headers: ["Year", "Club/Team", "Role", "Key Achievement"],
    minWidthClass: "min-w-[900px]",
    boldColumnIndex: 1,
    rowKeyIndex: 1,
    rows: [
      ["1999-2004", "Real Sociedad", "Player", "Became a first-team midfielder and captain after coming through the Basque football pathway"],
      ["2004-2009", "Liverpool", "Player", "Won the 2004/05 UEFA Champions League and became a Premier League-era midfield reference"],
      ["2009-2014", "Real Madrid", "Player", "Won LaLiga, Copa del Rey titles and the 2013/14 Champions League"],
      ["2014-2017", "Bayern Munich", "Player", "Won three Bundesliga titles and ended his playing career in Germany"],
      ["2003-2014", "Spain", "Player", "Won EURO 2008, the 2010 World Cup and EURO 2012; FIFA and Real Madrid list him with 114 Spain caps"],
      ["2018-2019", "Real Madrid youth", "Coach", "Started coaching inside Real Madrid's academy structure"],
      ["2019-2022", "Real Sociedad B", "Head coach", "Developed his first senior-level coaching identity with his home-club pathway"],
      ["2022-2025", "Bayer Leverkusen", "Head coach", "Led Leverkusen to the club's first Bundesliga title and an unbeaten domestic double"],
      ["2025-2026", "Real Madrid", "Head coach", "Appointed on a deal to 2028, then left by mutual consent in January 2026"],
      ["2026-", "Chelsea", "Head coach", "Appointed on a four-year contract beginning July 1, 2026"]
    ]
  },
  "[[XABI_ALONSO_MANAGERIAL_RECORD_TABLE]]": {
    caption: "Xabi Alonso managerial record summary. The table focuses on verified milestones and context rather than unsupported win-rate claims.",
    headers: ["Team", "Period", "Major Achievements", "Context"],
    minWidthClass: "min-w-[940px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Real Sociedad B", "2019-2022", "Promotion-level development work in Spain's lower divisions", "First sustained head-coach role after academy work"],
      ["Bayer Leverkusen", "2022-2025", "Bundesliga 2023/24, DFB-Pokal 2023/24, unbeaten Bundesliga season, 51-game unbeaten run in all competitions before the Europa League final defeat", "Turned a talented side into one of Europe's clearest tactical projects"],
      ["Real Madrid", "June 2025-January 2026", "Appointed for three seasons; left by mutual consent after seven months", "High-pressure spell ended after the Spanish Super Cup final defeat and reported tactical/dressing-room friction"],
      ["Chelsea", "July 2026-", "Four-year appointment; opened 2026/27 with two Premier League wins and a League Cup win", "Early evidence is promising, but too small a sample to prove long-term success"]
    ]
  },
  "[[XABI_TACTICAL_EVOLUTION_TABLE]]": {
    caption: "How Xabi Alonso's tactical ideas have evolved across Leverkusen, Real Madrid and early Chelsea.",
    headers: ["Area", "Leverkusen", "Real Madrid", "Chelsea"],
    minWidthClass: "min-w-[980px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Base structure", "Often built around a back three with wing-back width and midfield control", "Tried to modernize a star-heavy side without locking into one stable shape", "Early signs point to flexible back-three/back-four ideas depending on personnel and game state"],
      ["Build-up", "Patient circulation, central security and switches toward advanced wing-backs", "More difficult because Madrid's forwards and midfield profiles demanded different spacing", "Uses technical midfielders and wide rotations, but cohesion is still forming"],
      ["Attacking width", "Frimpong and Grimaldo stretched opponents and created diagonal passing lanes", "Width depended more on elite individual attackers and full-back availability", "Chelsea's width comes from full-backs, wide forwards and rotations around Palmer/Rogers"],
      ["Pressing", "Compact pressing and counter-pressing after controlled possession losses", "Reportedly struggled to impose full-team intensity consistently", "Energetic but still open; early league games showed goals for and against"],
      ["Transitions", "Strong rest defence let Leverkusen attack without becoming chaotic", "Transition control was a recurring pressure point", "Chelsea look dangerous in attack but defensive spacing remains a concern"],
      ["Main risk", "Could be exposed if wing-back lanes were pinned or counters beat the first wave", "Pressure, egos and fit made tactical authority fragile", "Small sample, squad churn and defensive fragility mean optimism needs patience"]
    ]
  },
  "[[MOURINHO_MADRID_SEASON_RECORD_TABLE]]": {
    caption: "Jose Mourinho's first Real Madrid league seasons. The 2011/12 campaign is the historic reference point: 100 points and 121 league goals.",
    headers: ["Season", "LaLiga Finish", "Points", "League Goals", "Champions League", "Domestic Cups"],
    minWidthClass: "min-w-[920px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["2010/11", "2nd", "92", "102", "Semi-finals", "Won Copa del Rey; Supercopa runner-up"],
      ["2011/12", "1st", "100", "121", "Semi-finals", "Copa del Rey quarter-finals; Supercopa runner-up"],
      ["2012/13", "2nd", "85", "103", "Semi-finals", "Won Supercopa de Espana; Copa del Rey runner-up"]
    ]
  },
  "[[MOURINHO_MADRID_TROPHIES_RECORDS_TABLE]]": {
    caption: "Major trophies and records from Mourinho's first Real Madrid era.",
    headers: ["Item", "Season", "Verified Detail", "Why It Mattered"],
    minWidthClass: "min-w-[940px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Copa del Rey", "2010/11", "Real Madrid beat Barcelona in the final", "Ended the club's Copa del Rey wait and showed Madrid could beat Guardiola's Barcelona in a final"],
      ["LaLiga title", "2011/12", "100 points and 121 goals", "Real Madrid's official history describes it as a historic record-breaking league season"],
      ["Total league wins", "2011/12", "32 wins", "Real Madrid says the team surpassed the previous mark for total wins"],
      ["Away league wins", "2011/12", "16 away wins", "A symbol of Mourinho's counter-attacking road strength"],
      ["Spanish Super Cup", "2012", "Won against Barcelona", "His final trophy of the first Madrid era"],
      ["Champions League pattern", "2010/11-2012/13", "Three consecutive semi-finals", "UEFA noted Mourinho restored Madrid to the latter stages after years of round-of-16 exits"]
    ]
  },
  "[[MOURINHO_2010_VS_2026_TABLE]]": {
    caption: "Mourinho at Real Madrid then and now. This is tactical analysis, not a claim that one fixed formation explains every match.",
    headers: ["Area", "2010-2013 Madrid", "2026 Madrid"],
    minWidthClass: "min-w-[920px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Core challenge", "Break Barcelona's domestic dominance and restore Champions League relevance", "Rebuild standards after recent trophy disappointment and compete with Barcelona's current cycle"],
      ["Attacking reference", "Cristiano Ronaldo, Benzema, Higuain, Ozil and Di Maria powered fast vertical attacks", "Mbappe, Bellingham, Vinicius, Endrick, Rodrygo and new attacking profiles give him elite speed and variety"],
      ["Typical structure", "Often associated with a 4-2-3-1 built for transitions and compact protection", "More flexible, with conservative defensive principles layered onto a squad built for front-foot football"],
      ["Pressing rhythm", "Selective pressure, quick exits and aggressive transition moments", "Early signs point to greater defensive commitment and intensity, but bigger tests arrive in September"],
      ["Public pressure", "Defined by Mourinho vs Guardiola and the Barcelona rivalry", "Defined by whether an older Mourinho can still organize a superclub in a faster, more scrutinized game"],
      ["Main risk", "Conflict, emotional overload and Champions League semi-final frustration", "If control becomes too cautious, Madrid's attacking talent and supporter expectation may pull against the project"]
    ]
  },
  "[[SPACEX_MARS_CONFIRMED_PROPOSED_TABLE]]": {
    caption: "SpaceX Mars plan status as of September 2, 2026. Confirmed capabilities, active development and Musk proposals should not be read as the same thing.",
    headers: ["Area", "Status", "Evidence-Based Reading"],
    minWidthClass: "min-w-[900px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Falcon reusability", "Achieved operationally", "Falcon 9 booster reuse is SpaceX's proven foundation for lowering launch costs"],
      ["Starship/Super Heavy flight tests", "In development", "Starship has flown repeated integrated tests but is not yet an operational Mars transport system"],
      ["Full Starship reusability", "Proposed design goal", "Catching, refurbishing and rapidly reusing both stages at scale remains unproven"],
      ["Orbital refueling", "Required and under development", "SpaceX describes on-orbit refilling as central to Starship; large-scale operational transfer is still a key milestone"],
      ["Mars cargo missions", "Aspirational schedule", "SpaceX's Mars page says cargo flights to the Martian surface start no earlier than 2028"],
      ["Crewed Mars landing", "Speculative", "No current authoritative commitment confirms a specific human landing year"],
      ["Mars propellant production", "Concept supported by experiments", "NASA's MOXIE proved oxygen production from Mars CO2 at small scale; full methane/oxygen plant remains unproven"],
      ["Self-sustaining city", "Long-term vision", "Requires power, water, food, habitats, industry, medicine, governance and economic viability"]
    ]
  },
  "[[SPACEX_STARSHIP_MILESTONES_TABLE]]": {
    caption: "Major SpaceX and Starship milestones relevant to Mars. Test progress does not equal a completed Mars architecture.",
    headers: ["Period", "Milestone", "Why It Matters"],
    minWidthClass: "min-w-[860px]",
    boldColumnIndex: 1,
    rowKeyIndex: 1,
    rows: [
      ["2002", "SpaceX founded", "Elon Musk created SpaceX around the long-term goal of reducing space transport cost and enabling Mars settlement"],
      ["2010s", "Falcon 9 reusability matures", "Reusable Falcon boosters turned rapid launch cadence from an idea into an operating business advantage"],
      ["2020", "Crew Dragon carries NASA astronauts", "SpaceX became a regular human-spaceflight provider for low Earth orbit"],
      ["2021", "NASA selects Starship HLS", "NASA chose a lunar version of Starship for the Artemis Human Landing System program"],
      ["2021-2023", "MOXIE demonstrates oxygen production on Mars", "NASA showed small-scale oxygen generation from the Martian atmosphere, relevant to future ISRU concepts"],
      ["2023-2026", "Integrated Starship tests", "Flight tests produced both failures and increasingly useful data on ascent, staging, reentry, splashdown and recovery"],
      ["July-August 2026", "Starship recovered from the Indian Ocean", "AP reported SpaceX recovered the 13th test article intact after an hourlong suborbital flight"],
      ["Next milestones", "Orbital operations and refueling", "Mars and lunar architectures still depend on reliable orbital flight, tanker operations, reuse and life-support integration"]
    ]
  },
  "[[MARS_SETTLEMENT_CHALLENGES_TABLE]]": {
    caption: "Biggest technical challenges facing any Mars settlement plan, including SpaceX's Starship-based vision.",
    headers: ["Challenge", "Why It Is Hard", "Status"],
    minWidthClass: "min-w-[920px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Transport mass", "Mars missions require heavy cargo, fuel, shielding, equipment and redundancy", "Starship is designed for high payload, but Mars logistics remain unproven"],
      ["Orbital refueling", "A Mars-bound Starship would need propellant transfer in orbit", "Central design requirement, not yet operational at Mars scale"],
      ["Entry, descent and landing", "Landing large payloads on Mars is much harder than landing small robotic spacecraft", "No Starship Mars landing has occurred"],
      ["Propellant on Mars", "Return missions need oxygen and methane made or delivered on Mars", "Oxygen ISRU has been demonstrated only at small experimental scale"],
      ["Radiation", "Deep-space travel and Mars surface stays expose crews to galactic cosmic rays and solar particle events", "Mitigation needs shielding, operations planning and medical research"],
      ["Life support", "A settlement needs air, water recycling, food, waste handling, spare parts and medical systems", "ISS experience helps, but Mars autonomy is a different problem"],
      ["Communication delay", "Earth-Mars signals can take minutes each way, limiting real-time control", "Requires autonomy, procedures and local decision-making"],
      ["Law and ethics", "Activities must account for planetary protection, national responsibility and peaceful use under space law", "Governance frameworks exist, but settlement-level questions remain unresolved"]
    ]
  }
};

function StandardArticleTable({ table }: { table: ArticleTableConfig }) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] shadow-[var(--home-card-shadow)]">
      <div className="overflow-x-auto">
        <table className={`w-full ${table.minWidthClass} border-collapse text-left`}>
          <caption className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-[color:var(--home-muted)]">
            {table.caption}
          </caption>
          <thead className="bg-[#ff1a1a]/10 font-display text-[11px] font-extrabold uppercase tracking-wide text-[#FF1A1A]">
            <tr>
              {table.headers.map((heading) => (
                <th key={heading} scope="col" className="border-t border-[color:var(--home-border)] px-4 py-3">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[table.rowKeyIndex]} className="border-t border-[color:var(--home-border)]">
                {row.map((cell, cellIndex) => (
                  <td key={`${row[table.rowKeyIndex]}-${cellIndex}`} className={`px-4 py-4 text-sm leading-6 ${cellIndex === table.boldColumnIndex ? "font-bold text-[color:var(--text)]" : "text-[color:var(--muted)]"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ArticleContentBlock({ block, index }: { block: string; index: number }) {
  const table = articleTables[block];

  if (table) {
    return <StandardArticleTable table={table} />;
  }

  if (block === "[[ASTROLOGY_SCIENCE_TABLE]]") {
    return (
      <div className="my-8 overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] shadow-[var(--home-card-shadow)]">
        <div className="grid grid-cols-2 border-b border-[color:var(--home-border)] bg-[#ff1a1a]/10 font-display text-xs font-extrabold uppercase tracking-wide text-[#FF1A1A]">
          <div className="p-4">Astrology</div>
          <div className="border-l border-[color:var(--home-border)] p-4">Science</div>
        </div>
        {[
          ["Symbolic interpretations", "Testable evidence"],
          ["Personality language", "Controlled measurement"],
          ["Horoscopes and charts", "Astronomy and psychology"],
          ["Cultural meaning", "Replicable results"]
        ].map(([left, right]) => (
          <div key={left} className="grid grid-cols-2 border-b border-[color:var(--home-border)] last:border-b-0">
            <div className="p-4 text-sm leading-6 text-[color:var(--muted)]">{left}</div>
            <div className="border-l border-[color:var(--home-border)] p-4 text-sm leading-6 text-[color:var(--text)]">{right}</div>
          </div>
        ))}
      </div>
    );
  }

  if (block.startsWith("### ")) {
    return (
      <h3 className="scroll-mt-28 pt-3 text-balance font-display text-xl font-extrabold uppercase leading-[1.14] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-2xl" id={articleSectionId(index)}>
        {block.replace(/^###\s+/, "")}
      </h3>
    );
  }

  if (block.startsWith("## ")) {
    return (
      <h2 className="scroll-mt-28 pt-8 text-balance font-display text-2xl font-extrabold uppercase leading-[1.1] text-[color:var(--text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-4xl sm:leading-[1.06]" id={articleSectionId(index)}>
        {block.replace(/^##\s+/, "")}
      </h2>
    );
  }

  if (block.startsWith("> ")) {
    return (
      <blockquote className="my-8 rounded-2xl border border-[#FF1A1A]/35 bg-[#FF1A1A]/10 p-6 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--text)] shadow-[var(--home-card-shadow)]">
        {block.replace(/^>\s+/, "").replace(/^"|"$/g, "")}
      </blockquote>
    );
  }

  return (
    <p className="text-base leading-[2.05] text-[color:var(--text)] sm:text-[1.0625rem]">
      <InlineArticleText text={block} />
    </p>
  );
}

function InlineArticleText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);

        if (!match) {
          return part;
        }

        const [, label, href] = match;
        const external = href.startsWith("http");

        return (
          <Link
            key={`${label}-${index}`}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="font-bold text-[#FF1A1A] underline decoration-[#FF1A1A]/35 underline-offset-4 transition hover:decoration-[#FF1A1A]"
          >
            {label}
          </Link>
        );
      })}
    </>
  );
}

function formatHeroDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}

export function ArticleLayout({ article, relatedArticles }: ArticleLayoutProps) {
  const canonicalUrl = `https://presda.com/articles/${article.slug}/`;
  const sections = getArticleSections(article);
  const faqs = getArticleFaqs(article);
  const articleContent = getArticleContentWithoutInlineFaq(article);
  const lastUpdated = getArticleLastUpdated(article);

  return (
    <main className="home-page">
      <ArticleReadingProgress />
      <article className="mx-auto w-[min(1500px,calc(100%-24px))] py-5 sm:w-[min(1500px,calc(100%-32px))] sm:py-8 lg:py-10" data-article-progress-root>
        <nav className="mb-4 flex flex-wrap items-center gap-2 px-1 font-display text-[11px] font-extrabold uppercase tracking-wide text-[color:var(--home-muted)] sm:mb-5" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-[#FF1A1A]">Home</Link>
          <span className="text-[#FF1A1A]/70">/</span>
          <Link href="/articles/" className="transition hover:text-[#FF1A1A]">Articles</Link>
          <span className="text-[#FF1A1A]/70">/</span>
          <Link href={`/category/${toCategorySlug(article.category)}/`} className="transition hover:text-[#FF1A1A]">
            {categoryLabels[article.category]}
          </Link>
        </nav>

        <header className="relative isolate min-h-[590px] overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[#050505] shadow-[var(--home-card-shadow)] sm:min-h-[650px] lg:min-h-[720px]">
          <Image
            src={article.coverImage}
            alt={article.coverAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.58)_33%,rgba(0,0,0,0.20)_62%,rgba(0,0,0,0.03)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.30)_100%)]" />

          <div className="relative z-10 flex min-h-[590px] flex-col justify-between p-5 sm:min-h-[650px] sm:p-8 lg:min-h-[720px] lg:p-12 xl:p-14">
            <div className="flex items-start justify-between gap-4 font-display text-[11px] font-extrabold uppercase tracking-wide text-white/84 sm:text-sm lg:text-base">
              <Link href={`/category/${toCategorySlug(article.category)}/`} className="flex items-center gap-3 transition hover:text-[#FF1A1A]">
                <span className="h-8 w-1.5 rounded-full bg-[#FF1A1A]" aria-hidden="true" />
                {categoryLabels[article.category]}
              </Link>
              <time className="text-right text-white/86" dateTime={article.date}>{formatHeroDate(article.date)}</time>
            </div>

            <div className="max-w-[800px] pb-5 pt-14 sm:pt-20 lg:pb-8">
              <h1 className="article-hero-title text-white">
                <HeadlineText title={article.title} highlights={article.headlineHighlights} legacyRed={article.headlineAccent} />
              </h1>
              <div className="mt-5 max-w-[29rem] border-l-[5px] border-[#FF1A1A] pl-4 sm:mt-6 sm:pl-5">
                <p className="editorial-deck article-hero-deck">
                  {article.excerpt}
                </p>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-display text-[10px] font-extrabold uppercase tracking-wide text-white/64 sm:mt-6 sm:text-[11px]">
                <span>
                  By{" "}
                  <Link href={`/authors/${toAuthorSlug(article.author)}/`} className="text-white transition hover:text-[#FF1A1A]">
                    {article.author}
                  </Link>
                </span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#FF1A1A]" />
                <span>{article.readingTime ?? "4 min read"}</span>
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#FF1A1A]" />
                <span>Updated <time dateTime={lastUpdated}>{formatDate(lastUpdated)}</time></span>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,760px)_minmax(280px,1fr)] lg:items-start">
          <div className="min-w-0 space-y-7 rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:p-10">
            {articleContent.map(({ block, originalIndex }) => (
              <ArticleContentBlock key={`${article.slug}-${originalIndex}`} block={block} index={originalIndex} />
            ))}

            {article.quote ? (
              <blockquote className="my-8 rounded-2xl border border-[#FF1A1A]/35 bg-[#FF1A1A]/10 p-6 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] shadow-[var(--home-card-shadow)] sm:text-3xl">
                {article.quote}
              </blockquote>
            ) : null}

            <section className="mt-10 border-t border-[color:var(--home-border)] pt-8" aria-labelledby="article-faq">
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">FAQ</p>
              <h2 id="article-faq" className="mt-2 font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-5 space-y-3">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] p-4">
                    <summary className="cursor-pointer list-none font-display text-base font-extrabold uppercase leading-snug text-[color:var(--home-text)] marker:hidden">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--home-muted)] sm:text-base">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <aside className="grid gap-5 lg:sticky lg:top-28">
            {sections.length ? (
              <>
                <details className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] lg:hidden">
                  <summary className="cursor-pointer list-none font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] marker:hidden">
                    Table Of Contents
                  </summary>
                  <ol className="mt-4 max-h-[18rem] space-y-3 overflow-y-auto pr-2">
                    {sections.map((section) => (
                      <li key={section.id} className={section.level === 3 ? "pl-4" : undefined}>
                        <a href={`#${section.id}`} className="block text-sm font-semibold leading-5 text-[color:var(--home-muted)] transition hover:text-[#FF1A1A]">
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ol>
                </details>
                <div className="hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] lg:block">
                  <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Table Of Contents</p>
                  <ol className="max-h-[min(62vh,34rem)] space-y-3 overflow-y-auto pr-2">
                  {sections.map((section) => (
                    <li key={section.id} className={section.level === 3 ? "pl-4" : undefined}>
                      <a href={`#${section.id}`} className="block text-sm font-semibold leading-5 text-[color:var(--home-muted)] transition hover:text-[#FF1A1A]">
                        {section.title}
                      </a>
                    </li>
                  ))}
                  </ol>
                </div>
              </>
            ) : null}
            <SourceBox article={article} />
            <div className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)]">
              <p className="mb-4 font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Share</p>
              <ShareButtons title={article.title} url={canonicalUrl} />
            </div>
            <div className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)]">
              <TagList tags={article.tags} />
            </div>
            <NewsletterBox compact />
          </aside>
        </div>

        <div className="mt-14">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </article>
    </main>
  );
}
