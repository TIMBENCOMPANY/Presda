export type ArticleTableConfig = {
  caption: string;
  headers: string[];
  rows: string[][];
  minWidthClass: string;
  boldColumnIndex: number;
  rowKeyIndex: number;
};

export const articleTables: Record<string, ArticleTableConfig> = {
  "[[LUXURY25_589]]": {
    "caption": "Selected pet-kitten prices, ascending toward #1; asking prices and estimates, not sale records",
    "headers": [
      "Rank",
      "Breed or generation",
      "USD published example",
      "Evidence type"
    ],
    "rows": [
      [
        "15",
        "Devon Rex",
        "$1,600–$2,200",
        "Published pet-kitten offer"
      ],
      [
        "14",
        "Birman",
        "$2,500",
        "Published pet-kitten offer"
      ],
      [
        "13",
        "Persian",
        "$2,500",
        "Published pet-kitten offer"
      ],
      [
        "12",
        "Donskoy",
        "$3,000",
        "Published pet-kitten offer"
      ],
      [
        "11",
        "Lykoi",
        "$3,000",
        "Published pet-kitten offer"
      ],
      [
        "10",
        "Sphynx",
        "$3,000",
        "Published pet-kitten offer"
      ],
      [
        "9",
        "Bengal",
        "$3,000–$3,500",
        "Published pet-kitten offer"
      ],
      [
        "8",
        "Cornish Rex",
        "$2,500–$3,500",
        "Published pet-kitten offer"
      ],
      [
        "7",
        "Toyger",
        "$2,500–$3,500",
        "Published guide estimate, not a sale"
      ],
      [
        "6",
        "Ragdoll",
        "$3,600",
        "Published pet-kitten offer"
      ],
      [
        "5",
        "Siberian",
        "$3,600",
        "Published pet-kitten offer"
      ],
      [
        "4",
        "British Shorthair",
        "~$2,000–$4,000+",
        "Breeder’s market estimate; $4,000 anchor"
      ],
      [
        "3",
        "Russian Blue",
        "$5,200",
        "Published pet-kitten offer"
      ],
      [
        "2",
        "Maine Coon",
        "$5,500–$7,500",
        "Published pet-kitten offer"
      ],
      [
        "1",
        "Savannah, HP F1",
        "$25,000",
        "Published pet-kitten offer"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[LUXURY25_590]]": {
    "caption": "Selected book sales ranked by nominal USD price; approximate conversions retain original currencies",
    "headers": [
      "Rank",
      "Book or manuscript",
      "USD price",
      "Transaction basis"
    ],
    "rows": [
      [
        "15",
        "Luzzatto High Holiday Mahzor",
        "$8,307,000",
        "2021 auction result"
      ],
      [
        "14",
        "Qur’an on Chinese paper, fifteenth century",
        "~$8,760,000",
        "2020; £7,016,250 auction result"
      ],
      [
        "13",
        "Yongle Dadian, two manuscript volumes",
        "~$9,190,000",
        "2020; €8,128,000 auction result"
      ],
      [
        "12",
        "Bomberg Babylonian Talmud",
        "$9,322,000",
        "2015 auction result"
      ],
      [
        "11",
        "George Washington’s Acts of Congress",
        "$9,826,500",
        "2012 auction result"
      ],
      [
        "10",
        "Shakespeare’s First Folio, Mills College copy",
        "$9,978,000",
        "2020 auction result"
      ],
      [
        "9",
        "The Birds of America, Hesketh copy",
        "~$11,365,000",
        "2010; £7,321,250 auction result"
      ],
      [
        "8",
        "Gospels of Henry the Lion",
        "~$11,700,000",
        "1983; £8,140,000 auction result"
      ],
      [
        "7",
        "Rothschild Prayerbook",
        "$13,605,000",
        "2014 auction result"
      ],
      [
        "6",
        "Bay Psalm Book, Old South Church copy",
        "$14,165,000",
        "2013 auction result"
      ],
      [
        "5",
        "St Cuthbert Gospel",
        "~$14,300,000",
        "2012 institutional purchase; £9,000,000"
      ],
      [
        "4",
        "Annotated New Book of Tang, Southern Song edition",
        "~$17,250,000",
        "2018; CNY 110,400,000 auction result"
      ],
      [
        "3",
        "Leonardo da Vinci’s Codex Leicester",
        "$30,802,500",
        "1994 auction result"
      ],
      [
        "2",
        "Book of Mormon printer’s manuscript",
        "$35,000,000",
        "2017 disclosed private purchase"
      ],
      [
        "1",
        "Codex Sassoon 1053",
        "$38,100,000",
        "2023 auction result"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[LUXURY25_591]]": {
    "caption": "Selected documented auction totals, ascending toward #1; USD, nominal sale-date values",
    "headers": [
      "Rank",
      "Individual car",
      "USD total",
      "Sale basis"
    ],
    "rows": [
      [
        "15",
        "Ferrari 275 GTB/C Speciale, 1964",
        "$26,400,000",
        "2014 auction result"
      ],
      [
        "14",
        "Ferrari 275 GTB/4*S NART Spider, 1967",
        "$27,500,000",
        "2013 auction result"
      ],
      [
        "13",
        "Ferrari 290 MM, 1956",
        "$28,050,000",
        "2015 auction result"
      ],
      [
        "12",
        "Mercedes-Benz W196 R, 1954, open-wheel",
        "~$29,650,095",
        "2013; £19,601,500 auction result"
      ],
      [
        "11",
        "McLaren F1 GTR 10R, 1996",
        "$34,655,000",
        "2026 auction result"
      ],
      [
        "10",
        "Ferrari 335 S, 1957",
        "~$35,711,359",
        "2016; €32,075,200 auction result"
      ],
      [
        "9",
        "Ferrari 250 LM 5893, 1964",
        "~$36,300,000",
        "2025; €34,880,000 auction result"
      ],
      [
        "8",
        "Ferrari 250 GTO 3851GT, 1962",
        "$38,115,000",
        "2014 auction result"
      ],
      [
        "7",
        "Ferrari 250 GTO 3729GT, Bianco Speciale, 1962",
        "$38,500,000",
        "2026 auction result"
      ],
      [
        "6",
        "Ferrari Luce Tailor Made, chassis 0, 2026",
        "$40,000,000",
        "2026, charity auction result"
      ],
      [
        "5",
        "Shelby Cobra Daytona Coupe CSX2300, 1964",
        "$42,905,000",
        "2026 auction result"
      ],
      [
        "4",
        "Ferrari 250 GTO 3413GT, 1962",
        "$48,405,000",
        "2018 auction result"
      ],
      [
        "3",
        "Ferrari 330 LM / 250 GTO 3765, 1962",
        "$51,705,000",
        "2023 auction result"
      ],
      [
        "2",
        "Mercedes-Benz W196 R Stromlinienwagen, 1954",
        "~$53,900,000",
        "2025; €51,155,000 auction result"
      ],
      [
        "1",
        "Mercedes-Benz 300 SLR Uhlenhaut Coupé, 1955",
        "~$142,300,000",
        "2022; €135,000,000 auction result"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[LUXURY25_592]]": {
    "caption": "Selected Thoroughbred auction bids ranked toward #1, nominal USD; partnership caveat retained",
    "headers": [
      "Rank",
      "Horse",
      "USD recorded price",
      "Basis"
    ],
    "rows": [
      [
        "15",
        "Imperial Falcon",
        "$8,250,000",
        "1984 auction result"
      ],
      [
        "14",
        "Marsha",
        "~$8,480,000",
        "2017; 6,000,000 guineas = £6,300,000 auction result"
      ],
      [
        "13",
        "Royal Delta",
        "$8,500,000",
        "2011 auction result"
      ],
      [
        "12",
        "Ashado",
        "$9,000,000",
        "2005 auction result"
      ],
      [
        "11",
        "Plavius",
        "$9,200,000",
        "2006 auction result"
      ],
      [
        "10",
        "Songbird",
        "$9,500,000",
        "2017 auction result"
      ],
      [
        "9",
        "Jalil",
        "$9,700,000",
        "2005 auction result"
      ],
      [
        "8",
        "Havre de Grace",
        "$10,000,000",
        "2012 auction result"
      ],
      [
        "7",
        "Snaafi Dancer",
        "$10,200,000",
        "1983 auction result"
      ],
      [
        "6",
        "Playful Act",
        "$10,500,000",
        "2007 auction result"
      ],
      [
        "5",
        "Zedan, Flightline–Lucrezia colt",
        "$10,500,000",
        "2026 auction result"
      ],
      [
        "4",
        "Meydan City",
        "$11,700,000",
        "2006 auction result"
      ],
      [
        "3",
        "Seattle Dancer",
        "$13,100,000",
        "1985 auction result"
      ],
      [
        "2",
        "Better Than Honour",
        "$14,000,000",
        "2008 recorded auction bid; partnership buyout"
      ],
      [
        "1",
        "The Green Monkey",
        "$16,000,000",
        "2006 auction result"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[LUXURY25_593]]": {
    "caption": "Selected fruit lots and offers toward #1, nominal USD; see basis for quantity, date and evidence type",
    "headers": [
      "Rank",
      "Fruit identity",
      "USD lot or offer total",
      "Unit and evidence"
    ],
    "rows": [
      [
        "15",
        "White Jewel strawberry",
        "~$10",
        "Retail asking price, 1 fruit, 2017 report"
      ],
      [
        "14",
        "Pinkglow pineapple",
        "$29.00",
        "Retail asking price, 1 pineapple, checked 2026"
      ],
      [
        "13",
        "Pink guava",
        "$37",
        "Retail asking price, 1 fruit, checked 2026"
      ],
      [
        "12",
        "Finger lime",
        "$77",
        "Retail asking price, 100 g, checked 2026"
      ],
      [
        "11",
        "Mangosteen",
        "$77",
        "Retail asking price, 1 fruit, pre-order checked 2026"
      ],
      [
        "10",
        "Rubyglow pineapple",
        "$395.99",
        "Retail asking price, listed 1.5 lb pack, pre-order checked 2026"
      ],
      [
        "9",
        "Juno Heart, Aomori Heartbeat grade",
        "~$4,440",
        "2022 auction: 15 cherries, ¥600,000"
      ],
      [
        "8",
        "Taiyo no Tamago mangoes",
        "~$4,500",
        "2019 auction: 2 mangoes, ¥500,000"
      ],
      [
        "7",
        "Densuke watermelon",
        "~$6,100",
        "2008 auction: 1 watermelon, ¥650,000"
      ],
      [
        "6",
        "Tenka Fubu persimmons",
        "~$7,205",
        "2025 auction: 2 fruits, ¥1,110,000 before tax"
      ],
      [
        "5",
        "Hinomaru satsuma mandarins",
        "~$9,600",
        "2020 auction: 100 fruits, 20 kg, ¥1,000,000"
      ],
      [
        "4",
        "Sato Nishiki cherries",
        "~$11,500",
        "2026 auction: 1 box, ¥1,800,000"
      ],
      [
        "3",
        "Ruby Roman grapes",
        "~$12,700",
        "2021 auction: 1 bunch, ¥1,400,000"
      ],
      [
        "2",
        "Yubari King melons",
        "~$45,500",
        "2019 auction: 2 melons, ¥5,000,000"
      ],
      [
        "1",
        "Kanyao durian",
        "~$47,784",
        "2019 auction: 1 durian, THB 1,500,000"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ANNIV24_584]]": {
    "caption": "Lucy: discovery and research milestones",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "24 November 1974",
        "Lucy discovered at Hadar, Ethiopia"
      ],
      [
        "1978",
        "Australopithecus afarensis formally named"
      ],
      [
        "2016",
        "A study proposes a fatal fall, not a settled cause"
      ],
      [
        "24 November 2026",
        "52 years since the discovery"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ANNIV24_585]]": {
    "caption": "From the republic to the protected surname",
    "headers": [
      "Date",
      "Event"
    ],
    "rows": [
      [
        "29 October 1923",
        "Republic proclaimed; Mustafa Kemal elected president"
      ],
      [
        "21 June 1934",
        "General Surname Law adopted"
      ],
      [
        "24 November 1934",
        "Law No. 2587 grants the surname Atatürk"
      ],
      [
        "17 December 1934",
        "Law No. 2622 reserves the name’s use"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ANNIV24_586]]": {
    "caption": "Collodi and Pinocchio: four distinct milestones",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "24 November 1826",
        "Carlo Lorenzini born in Florence"
      ],
      [
        "7 July 1881",
        "Pinocchio begins as a newspaper serial"
      ],
      [
        "1883",
        "The completed story appears in book form"
      ],
      [
        "24 November 2026",
        "The author’s bicentenary"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ANNIV24_587]]": {
    "caption": "MediaMarkt’s opening and later corporate milestones",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "24 November 1979",
        "First MediaMarkt opens in Munich"
      ],
      [
        "1996",
        "MediaMarkt and Saturn’s parent interests enter the Metro Group"
      ],
      [
        "2017",
        "The electronics business becomes independently listed as Ceconomy"
      ],
      [
        "12 November 2026",
        "JD.com completes its public takeover offer"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ANNIV24_588]]": {
    "caption": "The route to Zara and the later diversion",
    "headers": [
      "Date",
      "Event"
    ],
    "rows": [
      [
        "1201",
        "Crusading leaders arrange transport with Venice"
      ],
      [
        "10–11 November 1202",
        "Fleet arrives and the siege begins"
      ],
      [
        "November 1202",
        "18 November surrender in some studies; 24 November capture or occupation in others"
      ],
      [
        "1204",
        "The expedition sacks Constantinople"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[CAS26_583]]": {
    "caption": "AFCON 2025 final dispute: the verified chronology",
    "headers": [
      "Date",
      "Development"
    ],
    "rows": [
      [
        "January 18, 2026",
        "Senegal win the final 1–0 after extra time in Rabat"
      ],
      [
        "March 17, 2026",
        "CAF Appeal Board records a 3–0 forfeit win for Morocco"
      ],
      [
        "March 25, 2026",
        "CAS registers Senegal’s appeal against CAF and the FRMF"
      ],
      [
        "October 8, 2026",
        "CAS hears the parties in Lausanne"
      ],
      [
        "November 24, 2026",
        "CAS overturns the appeal ruling and confirms Senegal’s 1–0 win"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[FIVE25_578]]": {
    "caption": "The confirmed announcement",
    "headers": [
      "Detail",
      "Verified position"
    ],
    "rows": [
      [
        "Recipient",
        "Cardi B"
      ],
      [
        "Award",
        "First Billboard Canada Global Woman of the Year"
      ],
      [
        "Ceremony",
        "Scheduled November 24, 2026, Rebel, Toronto"
      ],
      [
        "Status",
        "Selection confirmed; advance announcement is not an acceptance report"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[FIVE25_579]]": {
    "caption": "The incident and the evidence",
    "headers": [
      "Issue",
      "Reported position"
    ],
    "rows": [
      [
        "Concert",
        "November 21, 2026, La Florida, Santiago"
      ],
      [
        "Complaint",
        "Initial entry difficulties over Palestino clothing"
      ],
      [
        "Club response",
        "Official statement demanding clarification on November 22"
      ],
      [
        "Outcome",
        "BioBioChile attributes eventual admission to DG Medios"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[FIVE25_580]]": {
    "caption": "The appearance and its context",
    "headers": [
      "Detail",
      "What is established"
    ],
    "rows": [
      [
        "Report date",
        "November 23, 2026, Vogue"
      ],
      [
        "Location",
        "Beverly Hills"
      ],
      [
        "Image credit in the report",
        "ShotbyNYP/BACKGRID USA"
      ],
      [
        "Supplied hero",
        "Separate portrait, not authenticated as this outing"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[FIVE25_581]]": {
    "caption": "The deluxe album at a glance",
    "headers": [
      "Detail",
      "Confirmed information"
    ],
    "rows": [
      [
        "Release",
        "November 23, 2026"
      ],
      [
        "Expansion",
        "23 additional tracks; 57 tracks overall"
      ],
      [
        "Travis Scott",
        "Burn This Shit Down; already on the original album with RHYNO"
      ],
      [
        "21 Savage",
        "Cookin, listed as a separate track"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[FIVE25_582]]": {
    "caption": "Shanghai opening: confirmed details",
    "headers": [
      "Detail",
      "Published information"
    ],
    "rows": [
      [
        "Unveiling",
        "November 21, 2026"
      ],
      [
        "Statue",
        "Seven metres; SIU celebration"
      ],
      [
        "Location",
        "First Department Store, Nanjing Road Pedestrian Street"
      ],
      [
        "Attendance",
        "Brother Hugo attended; Ronaldo’s presence not established"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD24_574]]": {
    "caption": "France’s aviation research announcement: the essential distinctions",
    "headers": [
      "Question",
      "Verified position"
    ],
    "rows": [
      [
        "Amount",
        "€350 million, as stated in the announcement and GIFAS statement body"
      ],
      [
        "Purpose",
        "Civil aviation research through CORAC, not an aircraft purchase order"
      ],
      [
        "Period",
        "GIFAS identifies a 2026 envelope; later annual allocations are not established here"
      ],
      [
        "Participants",
        "Manufacturers, suppliers, smaller businesses and research laboratories across the program network"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD24_575]]": {
    "caption": "NVIDIA’s leadership change: dates and responsibilities",
    "headers": [
      "Item",
      "Confirmed position"
    ],
    "rows": [
      [
        "Board action",
        "November 22, 2026, according to the SEC filing"
      ],
      [
        "Public announcement",
        "November 23, 2026"
      ],
      [
        "Leadership",
        "Huang returns as president, CEO and director; Jones remains chair; Kress continues as CFO"
      ],
      [
        "Investigation",
        "Independent committee’s work continues, according to NVIDIA"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD24_576]]": {
    "caption": "Ibrahimović and MobLand: the current evidence",
    "headers": [
      "Question",
      "Status at publication"
    ],
    "rows": [
      [
        "Casting claim",
        "Reported by The Sun, citing an unnamed source; not officially confirmed in the reviewed material"
      ],
      [
        "Season-three production",
        "Confirmed by Paramount on November 20, 2026 as already under way that week"
      ],
      [
        "Returning leads",
        "Tom Hardy, Pierce Brosnan and Helen Mirren confirmed"
      ],
      [
        "Character and premiere",
        "No official Ibrahimović character details or confirmed season-three premiere date established here"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD24_577]]": {
    "caption": "Day 1s: production, participants and release status",
    "headers": [
      "Question",
      "Current verified or attributed position"
    ],
    "rows": [
      [
        "Project",
        "First television series from Ronaldo and Matthew Vaughn’s UR-Marv Studios"
      ],
      [
        "Order",
        "Ten-part Paramount+ comedy, reported by Deadline on November 12, 2026"
      ],
      [
        "Ronaldo and Henry",
        "Named executive producers; Ronaldo’s limited appearances as himself confirmed to ECO by UR-Marv’s creative chief"
      ],
      [
        "Availability",
        "Production announced; no premiere date established in the sources reviewed"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD23_570]]": {
    "caption": "The 2026 ATP Finals title at a glance",
    "headers": [
      "Detail",
      "Confirmed result"
    ],
    "rows": [
      [
        "Champion",
        "Carlos Alcaraz, first ATP Finals singles title"
      ],
      [
        "Final",
        "Defeated Alexander Zverev 6–2, 7–6(7), November 22, 2026"
      ],
      [
        "Tournament record",
        "Five wins, no losses"
      ],
      [
        "Champion’s total payout",
        "$5,171,000, according to the official tournament report"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD23_571]]": {
    "caption": "AFCON 2027: the confirmed host-city distribution",
    "headers": [
      "Country or milestone",
      "Confirmed position"
    ],
    "rows": [
      [
        "Kenya",
        "Nairobi"
      ],
      [
        "Tanzania",
        "Dar es Salaam, Arusha and Zanzibar"
      ],
      [
        "Uganda",
        "Kampala and Hoima"
      ],
      [
        "Tournament dates",
        "June 19 to July 17, 2027; specific stadium match allocations remain for CAF to confirm"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD23_572]]": {
    "caption": "Boca’s continental breakthrough",
    "headers": [
      "Detail",
      "Confirmed result"
    ],
    "rows": [
      [
        "Final",
        "Boca Juniors 2–0 Atlético Mineiro, November 21, 2026"
      ],
      [
        "Venue",
        "Estadio Metropolitano Roberto Meléndez, Barranquilla, Colombia"
      ],
      [
        "Scorers",
        "Santiago Ascacíbar and Miguel Merentiel"
      ],
      [
        "Historical meaning",
        "Third Sudamericana title; first continental trophy since the 2008 Recopa"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[QUAD23_573]]": {
    "caption": "The vampire camel: evidence and interpretation",
    "headers": [
      "Question",
      "What the sources establish"
    ],
    "rows": [
      [
        "Identity",
        "Vampyrocamelus welshi, an extinct North American camel relative"
      ],
      [
        "Approximate age",
        "Roughly 12–13 million years, as described by Donald Prothero in his CBC interview"
      ],
      [
        "Diet",
        "Interpreted as a herbivore; no evidence of blood-drinking"
      ],
      [
        "Discovery",
        "Recognition of distinctive fossils already held in museum collections, described in a 2026 monograph"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM5B_565]]": {
    "caption": "The reported wedding: key facts",
    "headers": [
      "Question",
      "Verified reporting"
    ],
    "rows": [
      [
        "Couple",
        "Miley Cyrus and Maxx Morando"
      ],
      [
        "Ceremony date",
        "November 21, 2026, according to People"
      ],
      [
        "Location",
        "Palm Springs, California, according to People"
      ],
      [
        "Earlier milestone",
        "Engagement confirmed by People in December 2025"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM5B_566]]": {
    "caption": "Woven City: dates and scale",
    "headers": [
      "Question",
      "Officially reported position"
    ],
    "rows": [
      [
        "Official launch",
        "September 25, 2025"
      ],
      [
        "First-year update",
        "September 25, 2026"
      ],
      [
        "Trial activity",
        "Approximately 30 proof-of-concept projects in September 2026"
      ],
      [
        "Community",
        "31 Inventor companies; about 160 residents in roughly 80 households"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM5B_567]]": {
    "caption": "The North Sea orca study",
    "headers": [
      "Question",
      "Published finding"
    ],
    "rows": [
      [
        "Publication",
        "PeerJ, November 10, 2026; DOI 10.7717/peerj.21890"
      ],
      [
        "Material",
        "Five remains: two crania, one mandible fragment and two atlas–axis complexes"
      ],
      [
        "Dated evidence",
        "One cranial specimen supported as approximately 2.6–2.1 million years old"
      ],
      [
        "Identification",
        "Orcinus sp.; species unresolved, with large individuals estimated at 7.2–7.7 meters"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM5B_568]]": {
    "caption": "Rhythm 0: the documented framework",
    "headers": [
      "Question",
      "Museum documentation"
    ],
    "rows": [
      [
        "Artist",
        "Marina Abramović"
      ],
      [
        "Place and date",
        "Studio Morra, Naples, 1974"
      ],
      [
        "Duration",
        "Six hours"
      ],
      [
        "Structure",
        "A passive performer and 72 objects available for audience interaction"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM5B_569]]": {
    "caption": "The Shenzhen dance: claims and attribution",
    "headers": [
      "Question",
      "Reported position"
    ],
    "rows": [
      [
        "Event date",
        "November 17, 2026"
      ],
      [
        "Location",
        "Longgang district, Shenzhen, China"
      ],
      [
        "Count",
        "151 successful participants, according to event reporting"
      ],
      [
        "Record status",
        "Reported Guinness achievement; exact public database entry not independently matched at publication"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM3_562]]": {
    "caption": "Budapest pilot: the essential facts",
    "headers": [
      "Question",
      "Verified answer"
    ],
    "rows": [
      [
        "Winner",
        "Alireza Firouzja"
      ],
      [
        "Final date",
        "November 20, 2026"
      ],
      [
        "Deciding game",
        "Armageddon draw with Black against Anish Giri"
      ],
      [
        "Podium",
        "Firouzja, Giri, Caruana"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM3_563]]": {
    "caption": "Bao: the discovery in context",
    "headers": [
      "Question",
      "Verified answer"
    ],
    "rows": [
      [
        "Object",
        "AT 2025abao, nicknamed Bao, in Andromeda"
      ],
      [
        "Modeled masses",
        "Approximately 7 and 0.7 solar masses"
      ],
      [
        "Webb observation",
        "December 24, 2025"
      ],
      [
        "Research publication",
        "November 18, 2026, in Nature"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[PREMIUM3_564]]": {
    "caption": "The Paris flight: four essential facts",
    "headers": [
      "Question",
      "Verified answer"
    ],
    "rows": [
      [
        "Date",
        "November 21, 1783"
      ],
      [
        "Aeronauts",
        "Jean-François Pilâtre de Rozier and the Marquis d’Arlandes"
      ],
      [
        "Aircraft",
        "A Montgolfier hot-air balloon, untethered"
      ],
      [
        "Journey",
        "About 25 minutes and nine kilometers above Paris"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV22FIVE_557]]": {
    "caption": "The El Mirador heads: dates and evidence",
    "headers": [
      "Date or period",
      "What it establishes"
    ],
    "rows": [
      [
        "About 650–850 CE",
        "Late Classic context in the excavation report"
      ],
      [
        "2013 onward",
        "Continuing recovery of heads and fragments"
      ],
      [
        "November 18, 2026",
        "Public research presentation in Guatemala"
      ],
      [
        "November 19, 2026",
        "Reuters documented restoration work"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV22FIVE_558]]": {
    "caption": "Beyoncé’s Grammy milestone: the essential dates",
    "headers": [
      "Date or total",
      "Confirmed context"
    ],
    "rows": [
      [
        "100 nominations",
        "Career total after the 2027 nominations"
      ],
      [
        "35 wins",
        "Completed career Grammy victories"
      ],
      [
        "November 16, 2026",
        "Milestone nomination announced"
      ],
      [
        "February 7, 2027",
        "Scheduled 69th Grammy Awards ceremony"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV22FIVE_559]]": {
    "caption": "Rafael Nadal and Real Madrid: the confirmed sequence",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "2011",
        "Nadal became an honorary Real Madrid member"
      ],
      [
        "November 19, 2024",
        "Final professional tennis match"
      ],
      [
        "November 4, 2026",
        "Board submitted his appointment for ratification"
      ],
      [
        "November 21, 2026",
        "Assembly approved his board appointment"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV22FIVE_560]]": {
    "caption": "Inca toxicology: findings and their limits",
    "headers": [
      "Evidence",
      "Careful interpretation"
    ],
    "rows": [
      [
        "Cocaine and benzoylecgonine",
        "Coca use in the analyzed hair samples"
      ],
      [
        "Cocaethylene",
        "Combined exposure at Chuscha and Llullaillaco"
      ],
      [
        "Harmine in an Ampato nail sample",
        "Small signal; contamination caveat"
      ],
      [
        "No detected N,N-DMT",
        "Does not establish a complete drink recipe"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV22FIVE_561]]": {
    "caption": "Avril Lavigne: career context and the family announcement",
    "headers": [
      "Date",
      "Confirmed milestone"
    ],
    "rows": [
      [
        "2002",
        "Let Go introduced her breakthrough songs"
      ],
      [
        "2022",
        "Love Sux and Hollywood Walk of Fame recognition"
      ],
      [
        "June 21, 2024",
        "First Greatest Hits collection released"
      ],
      [
        "November 13, 2026",
        "First daughter’s arrival publicly announced"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[WORLD4_553]]": {
    "caption": "KIZILELMA: milestones before the first delivery",
    "headers": [
      "Date",
      "Documented development"
    ],
    "rows": [
      [
        "14 December 2022",
        "Original prototype’s first flight"
      ],
      [
        "October 2025",
        "Initial strike tests announced"
      ],
      [
        "May 2026",
        "Joint flights with M-346 aircraft"
      ],
      [
        "19 November 2026",
        "First three aircraft delivered"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[WORLD4_554]]": {
    "caption": "Makkah Clock Tower: the record figures",
    "headers": [
      "Measure or date",
      "Verified meaning"
    ],
    "rows": [
      [
        "426.875 metres",
        "Highest museum in a building"
      ],
      [
        "560.875 metres",
        "Highest outdoor observation deck"
      ],
      [
        "5 January 2026",
        "Guinness achievement date for both"
      ],
      [
        "17 November 2026",
        "Recognition reported publicly"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[WORLD4_555]]": {
    "caption": "Bali’s Ganesha sculpture: the source distinctions",
    "headers": [
      "Detail",
      "What the sources establish"
    ],
    "rows": [
      [
        "Location",
        "Tegallalang, Gianyar, Bali"
      ],
      [
        "Reported record height",
        "15.315 metres, about 50 feet"
      ],
      [
        "Reported category",
        "Supported synthetic-rattan sculpture"
      ],
      [
        "Artisans credited",
        "126 in the developer’s account"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[WORLD4_556]]": {
    "caption": "Mauritius Telecom: the November milestones",
    "headers": [
      "Date",
      "Documented development"
    ],
    "rows": [
      [
        "6 November 2026",
        "Learning Hub launches with 16 courses"
      ],
      [
        "17 November 2026",
        "Cassava memorandum signed, company says"
      ],
      [
        "18 November 2026",
        "Telecom Innovation Award ceremony"
      ],
      [
        "19 November 2026",
        "Local coverage announces the win"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[MAMA1_552]]": {
    "caption": "BTS at MAMA 2026: the two-night tally",
    "headers": [
      "Date",
      "Group award or awards"
    ],
    "rows": [
      [
        "November 20",
        "Artist of the Year, a grand prize"
      ],
      [
        "November 20",
        "Best Male Group and Fans’ Choice Male Top 10"
      ],
      [
        "November 21",
        "Album of the Year for ARIRANG, a grand prize"
      ],
      [
        "November 21",
        "Best Song Top 10 for SWIM"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[CAREERS5_547]]": {
    "caption": "Levi McConaughey: premieres and releases in order",
    "headers": [
      "Milestone",
      "Verified context"
    ],
    "rows": [
      [
        "September 2025, Toronto",
        "The Lost Bus festival premiere"
      ],
      [
        "October 3, 2025",
        "The Lost Bus streaming launch"
      ],
      [
        "November 19, 2026",
        "New film’s Los Angeles premiere"
      ],
      [
        "November 25, 2026",
        "Scheduled Apple TV release"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[CAREERS5_548]]": {
    "caption": "Brahim Díaz: official milestones and the new report",
    "headers": [
      "Date or record",
      "Evidence status"
    ],
    "rows": [
      [
        "January 2019",
        "Joins Real Madrid, club record"
      ],
      [
        "2020–2023",
        "AC Milan loan period"
      ],
      [
        "June 2023 statement",
        "Published end date: June 2027"
      ],
      [
        "November 20, 2026 reports",
        "June 2031 reported, confirmation pending"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[CAREERS5_549]]": {
    "caption": "ARCH Motorcycle: the business behind the famous name",
    "headers": [
      "Element",
      "Documented point"
    ],
    "rows": [
      [
        "2011",
        "Reeves and Hollinger co-found ARCH"
      ],
      [
        "Manufacturing base",
        "Hawthorne, California"
      ],
      [
        "Bespoke process",
        "Design, build and ergonomic fitting"
      ],
      [
        "2025 announcement",
        "Super Hooligan racing project"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[CAREERS5_550]]": {
    "caption": "Gerard Piqué: from playing career to creator-led competition",
    "headers": [
      "Milestone",
      "Documented development"
    ],
    "rows": [
      [
        "2017",
        "Kosmos founded while still playing"
      ],
      [
        "November 2022",
        "Barcelona farewell at Camp Nou"
      ],
      [
        "January 2023",
        "Kings League matches begin"
      ],
      [
        "February 3, 2026",
        "$63 million funding round announced"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[CAREERS5_551]]": {
    "caption": "Didier Drogba: football recognition and public commitments",
    "headers": [
      "Date",
      "Documented milestone"
    ],
    "rows": [
      [
        "2007",
        "Didier Drogba Foundation created"
      ],
      [
        "19 May 2012",
        "Chelsea’s first Champions League title"
      ],
      [
        "20 June 2021",
        "Foundation and 01Talent partnership"
      ],
      [
        "18 October 2021",
        "WHO Sport and Health appointment"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[SPOTLIGHT5_542]]": {
    "caption": "Peter Hernandez: documented points in the family story",
    "headers": [
      "Record",
      "What it establishes"
    ],
    "rows": [
      [
        "April 2014",
        "MidWeek interview with Hernandez"
      ],
      [
        "Hawaii performances",
        "Love Notes and Little Elvis"
      ],
      [
        "November 19, 2026",
        "Mars publishes his tribute"
      ],
      [
        "Reported age",
        "Hernandez was 74"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[SPOTLIGHT5_543]]": {
    "caption": "Chris Brown’s reported temporary arrangement: separate obligations",
    "headers": [
      "Item",
      "Reported provision"
    ],
    "rows": [
      [
        "Monthly cash support",
        "$12,000"
      ],
      [
        "Retroactive support",
        "$25,000, dating back to July"
      ],
      [
        "Legal-fee advance",
        "$55,000"
      ],
      [
        "Next reported step",
        "December settlement conference"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[SPOTLIGHT5_544]]": {
    "caption": "The November courtside outing: confirmed dates and setting",
    "headers": [
      "Detail",
      "Verified record"
    ],
    "rows": [
      [
        "November 15, 2026",
        "Governors Awards appearance"
      ],
      [
        "November 18, 2026",
        "Lakers host Jazz in Los Angeles"
      ],
      [
        "Game result",
        "Utah 109, Los Angeles 97"
      ],
      [
        "November 19, 2026",
        "Entertainment reports published"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[SPOTLIGHT5_545]]": {
    "caption": "Faouzia’s chart milestones: keep each market distinct",
    "headers": [
      "Chart or event",
      "Confirmed point"
    ],
    "rows": [
      [
        "Canadian debut, September 19",
        "No. 97 with UNETHICAL"
      ],
      [
        "U.S. Hot 100, November 21",
        "Debut at No. 95"
      ],
      [
        "Canada / Global, November 21",
        "No. 57 / No. 115"
      ],
      [
        "November 24, Toronto",
        "Breakthrough Award scheduled"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[SPOTLIGHT5_546]]": {
    "caption": "The Rock and Survivor Series: historical record and current plans",
    "headers": [
      "Date or detail",
      "Verified point"
    ],
    "rows": [
      [
        "November 17, 1996",
        "Rocky Maivia debuts at MSG"
      ],
      [
        "November 18, 2026",
        "WWE confirms planned appearance"
      ],
      [
        "November 28, 2026",
        "Daikin Park, Houston event"
      ],
      [
        "Match status at publication",
        "No Rock match announced here"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ENTERPRISE5_537]]": {
    "caption": "David Beckham’s business: milestones and financial distinctions",
    "headers": [
      "Date",
      "What the record establishes"
    ],
    "rows": [
      [
        "January 29, 2018",
        "MLS awards Miami an expansion club with Beckham as co-owner"
      ],
      [
        "February 24, 2022",
        "Authentic partnership and Beckham shareholding announced"
      ],
      [
        "May 2, 2024",
        "Safilo announces a perpetual eyewear licence"
      ],
      [
        "May 22, 2026",
        "Forbes estimates personal fortune at $1 billion"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ENTERPRISE5_538]]": {
    "caption": "George Weah: football recognition and political chronology",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "1995",
        "Wins the Ballon d’Or as a Liberian international"
      ],
      [
        "2005",
        "Loses the presidential runoff to Ellen Johnson Sirleaf"
      ],
      [
        "January 22, 2018",
        "Sworn in as Liberia’s president"
      ],
      [
        "January 22, 2024",
        "Boakai’s inauguration completes the transfer of power"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ENTERPRISE5_539]]": {
    "caption": "Starfire Ventures: confirmed milestones and fundraising context",
    "headers": [
      "Date or figure",
      "What it represents"
    ],
    "rows": [
      [
        "2015",
        "Williams and Ferreira’s collaboration begins, according to the firm"
      ],
      [
        "$111 million in 2022",
        "Earlier Serena Ventures fund, not Starfire’s new close"
      ],
      [
        "November 16, 2026",
        "Starfire launch announcement"
      ],
      [
        "$200 million",
        "Fundraising target, not a disclosed completed raise"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ENTERPRISE5_540]]": {
    "caption": "Anthropic’s IPO: figures with different meanings",
    "headers": [
      "Figure or date",
      "What it measures"
    ],
    "rows": [
      [
        "November 19, 2026",
        "Nasdaq listing, ticker ANT"
      ],
      [
        "$83 per share",
        "IPO offer price, not a permanent market price"
      ],
      [
        "$81.34 billion",
        "Base public offering including company and shareholder sales"
      ],
      [
        "$26 billion",
        "Separate concurrent private placement"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ENTERPRISE5_541]]": {
    "caption": "D. B. Cooper: documented events and investigative limits",
    "headers": [
      "Date",
      "What is established"
    ],
    "rows": [
      [
        "November 24, 1971",
        "Hijacking and $200,000 ransom; ticket used the name Dan Cooper"
      ],
      [
        "1980",
        "$5,800 in bills matched to ransom serial numbers"
      ],
      [
        "December 2007",
        "FBI discusses tie evidence and investigative assessments"
      ],
      [
        "July 12, 2016",
        "FBI announces resource redirection effective July 8"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ATHLETES5_532]]": {
    "caption": "COP31 investment figures: different commitments and time horizons",
    "headers": [
      "Announcement",
      "What the figure represents"
    ],
    "rows": [
      [
        "About $15 billion",
        "Preliminary China cooperation framework"
      ],
      [
        "$6 billion over five years",
        "EBRD investment intention under REACT"
      ],
      [
        "$5.1 billion",
        "Reported development-bank financing agreements"
      ],
      [
        "$300 billion by 2040",
        "REACT mobilisation ambition, separate from COP31 total"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ATHLETES5_533]]": {
    "caption": "Gareth Bale: football, golf and hospitality milestones",
    "headers": [
      "Milestone",
      "Verified context"
    ],
    "rows": [
      [
        "2013–2022",
        "Real Madrid: 258 appearances and 106 goals"
      ],
      [
        "March 2022",
        "Par 59 launches in Cardiff with business partners"
      ],
      [
        "January 9, 2023",
        "Retirement from professional football"
      ],
      [
        "April 21, 2026",
        "Sale of two Par 59 sites reported"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ATHLETES5_534]]": {
    "caption": "Andrea Pirlo and Pratum Coller: the documented chronology",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "2006",
        "World Cup victory with Italy"
      ],
      [
        "2007",
        "Family wine venture begins during playing career"
      ],
      [
        "November 6, 2017",
        "Playing retirement announced after New York City FC"
      ],
      [
        "June 2020",
        "VINUM interview describes family support and specialist input"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ATHLETES5_535]]": {
    "caption": "Divock Origi: retirement and business-study chronology",
    "headers": [
      "Date",
      "Milestone and its meaning"
    ],
    "rows": [
      [
        "2019",
        "Decisive goals in Liverpool’s Champions League triumph"
      ],
      [
        "June 2026",
        "Playing retirement announced at 31"
      ],
      [
        "September 27–28, 2026",
        "Scheduled fall Crossover campus kickoff"
      ],
      [
        "November 2026",
        "Reports discuss Origi’s participation and business studies"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[ATHLETES5_536]]": {
    "caption": "Eden Hazard’s wine collaboration: a dated timeline",
    "headers": [
      "Date or source",
      "What it establishes"
    ],
    "rows": [
      [
        "October 10, 2023",
        "Retirement from professional football at 32"
      ],
      [
        "February 3, 2026",
        "Salento visit and red, rosé and white wines reported"
      ],
      [
        "June 12, 2026",
        "Wine-related public event in Southampton"
      ],
      [
        "Official producer website",
        "Hazard listed within the champions collection"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV20_BATCH_527]]": {
    "caption": "The Essex: four stages. Sources: Chase’s 1821 narrative and the institutional accounts cited below. Dates describe distinct events, not a single rescue.",
    "headers": [
      "Stage",
      "What happened"
    ],
    "rows": [
      [
        "August 1819",
        "The Essex sailed from Nantucket under George Pollard Jr."
      ],
      [
        "November 20, 1820",
        "A sperm whale struck the ship; twenty men escaped in three boats."
      ],
      [
        "1821",
        "Separate rescues ultimately saved eight of the twenty men."
      ],
      [
        "1851",
        "Moby-Dick appeared, transforming one influence into fiction."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV20_BATCH_528]]": {
    "caption": "Antikythera: evidence and interpretation. Sources: Greek Ministry of Culture, research-project chronology and UCL. Approximate dating is not a known manufacturing year.",
    "headers": [
      "Evidence",
      "What it establishes"
    ],
    "rows": [
      [
        "Probably 150–100 BCE",
        "The Ministry’s catalogue date for the instrument."
      ],
      [
        "82 fragments; 30 surviving gears",
        "The preserved remains, not a complete original parts list."
      ],
      [
        "1900–1902",
        "Wreck discovery, salvage and recognition were separate stages."
      ],
      [
        "2021 cosmos model",
        "A proposed reconstruction of missing front-display mechanics."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV20_BATCH_529]]": {
    "caption": "Uber Eats and Zipline: confirmed milestones and limits. Sources: Uber, Zipline and the FAA. Expansion and volume targets are not completed results.",
    "headers": [
      "Milestone",
      "Verified meaning"
    ],
    "rows": [
      [
        "March 15, 2023",
        "Zipline presented the Platform 2 home-delivery design."
      ],
      [
        "August 17, 2026",
        "Uber announced the partnership and strategic investment plan."
      ],
      [
        "November 17, 2026",
        "Zipline announced Uber Eats drone service in Houston."
      ],
      [
        "End of 2029 target",
        "One million daily drone deliveries; a stated ambition, not launch volume."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV20_BATCH_530]]": {
    "caption": "Easy Lens CLI: the workflow and its boundaries. Sources: Snap’s November 18 announcement and developer documentation. Tool access does not guarantee publication or earnings.",
    "headers": [
      "Stage",
      "What Snap describes"
    ],
    "rows": [
      [
        "Create",
        "Use an existing AI coding assistant with Snap’s AR resources."
      ],
      [
        "Test",
        "Render previews and send versions to a phone."
      ],
      [
        "Publish",
        "Use the normal content checks and Lens review process."
      ],
      [
        "Earn",
        "Eligible approved creators may participate in Lens+ Payouts; payment is not guaranteed."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV20_BATCH_531]]": {
    "caption": "Nike and Formula 1: what starts when. Sources: Nike and Formula 1’s official announcements. The staff role is distinct from individual team and driver contracts.",
    "headers": [
      "Date or scope",
      "Confirmed detail"
    ],
    "rows": [
      [
        "November 19–20, 2026",
        "The companies published their partnership announcements."
      ],
      [
        "November 20, 2026",
        "Las Vegas capsule scheduled at the named Nike and F1 Hub stores."
      ],
      [
        "2027 season",
        "Nike becomes F1’s official apparel and uniform supplier for event staff."
      ],
      [
        "F1 Academy",
        "Official partnership and sporting apparel role are included."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_CULTURE5_522]]": {
    "caption": "What the November 19 study establishes. Source: Handy and colleagues, npj Microgravity. These are Earth greenhouse experiments.",
    "headers": [
      "Research element",
      "Verified meaning"
    ],
    "rows": [
      [
        "First mixture experiment",
        "LMS-1E with 0%, 15% or 30% vermicompost by volume, plus fertilizer."
      ],
      [
        "Five-simulant comparison",
        "5% vermicompost; tubers formed but yields remained below the Earth control."
      ],
      [
        "Food composition",
        "Broadly comparable profiles, with some metal elevations requiring monitoring."
      ],
      [
        "Lunar application",
        "A research prospect, not a demonstrated farm on the Moon."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_CULTURE5_523]]": {
    "caption": "Four aspects of traditional zellige. Sources: Museum of Ethnography, The Met and UNESCO. These describe a craft, not a universal specification for every tile product.",
    "headers": [
      "Aspect",
      "What to look for"
    ],
    "rows": [
      [
        "Material",
        "Glazed terracotta pieces assembled as mosaic."
      ],
      [
        "Technique",
        "Preparation, firing, hand-cutting and fitted assembly."
      ],
      [
        "Geometry",
        "Repeated and interlacing shapes within an architectural surface."
      ],
      [
        "Transmission",
        "Skills taught through makers, workshops and new generations."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_CULTURE5_524]]": {
    "caption": "Griezmann’s 2026 MLS regular season. Sources: MLS and Orlando’s November 17 award announcements. Goals and assists combine to 22 direct contributions.",
    "headers": [
      "Measure",
      "Official figure"
    ],
    "rows": [
      [
        "Appearances",
        "18."
      ],
      [
        "Goals",
        "14."
      ],
      [
        "Assists",
        "8."
      ],
      [
        "Award announcement",
        "November 17, 2026; MLS Newcomer of the Year."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_CULTURE5_525]]": {
    "caption": "Ramsay’s Hollywood honour and production context. Sources: Hollywood Walk of Fame and FOX Corporation.",
    "headers": [
      "Milestone",
      "Confirmed detail"
    ],
    "rows": [
      [
        "2016",
        "Studio Ramsay launched in the UK."
      ],
      [
        "2021",
        "Studio Ramsay Global announced with FOX Entertainment."
      ],
      [
        "November 18, 2026",
        "Completed dedication of the 2,864th Walk of Fame star."
      ],
      [
        "Category and location",
        "Television; 6201 Hollywood Boulevard."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_CULTURE5_526]]": {
    "caption": "Reus’s 2026 MLS regular season. Source: LA Galaxy’s November 18 team-awards announcement. Key passes are separate from goals plus assists.",
    "headers": [
      "Measure",
      "Official figure"
    ],
    "rows": [
      [
        "Appearances and starts",
        "31 appearances, 24 starts."
      ],
      [
        "Goals",
        "8."
      ],
      [
        "Assists",
        "15; goals plus assists total 23."
      ],
      [
        "Key passes",
        "74; eighth in MLS in the club’s account."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_NEWS4_518]]": {
    "caption": "The sequence of events. Sources: China’s foreign ministry, APEC and AP. Announcements and outcomes are distinct.",
    "headers": [
      "Date",
      "Verified development"
    ],
    "rows": [
      [
        "November 13, 2026",
        "China announced Xi’s APEC participation and related meetings."
      ],
      [
        "November 16, 2026",
        "China announced the November 19 three-way summit."
      ],
      [
        "November 18–19, 2026",
        "APEC leaders’ meeting scheduled in Shenzhen."
      ],
      [
        "November 19, 2026",
        "AP reported Trump, Xi and Putin had met."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_NEWS4_519]]": {
    "caption": "From GTA V to GTA VI. Sources: Rockstar’s dated announcements and contemporary launch reporting.",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "September 17, 2013",
        "Original release date announced for GTA V."
      ],
      [
        "November 6, 2025",
        "Rockstar announced GTA VI’s November 19, 2026 date."
      ],
      [
        "November 10, 2026",
        "Rockstar confirmed pre-loading was available."
      ],
      [
        "November 19, 2026",
        "GTA VI launch; contemporary reporting confirms player access."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_NEWS4_520]]": {
    "caption": "Selected first annual export thresholds. Source: Ministry of Trade, Industry and Resources, November 19, 2026. Nominal US dollars.",
    "headers": [
      "Year",
      "First threshold reached"
    ],
    "rows": [
      [
        "1995",
        "US$100 billion."
      ],
      [
        "2011",
        "US$500 billion."
      ],
      [
        "2025",
        "US$700 billion; final annual total US$709.3 billion."
      ],
      [
        "2026",
        "US$1 trillion provisionally crossed on November 19."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_NEWS4_521]]": {
    "caption": "Reveal, pre-orders and release. Sources: official LEGO and Formula 1 announcements. The 2026 grid is represented in products releasing in 2027.",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "2024",
        "LEGO dates the start of its Formula 1 partnership."
      ],
      [
        "November 18–19, 2026",
        "Official reveal and regional pre-order rollout."
      ],
      [
        "November 21, 2026",
        "Announced Las Vegas LEGO Race, separate from retail sets."
      ],
      [
        "March 1, 2027",
        "Scheduled release of the new Speed Champions products."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_NEWS2_516]]": {
    "caption": "Key dates and legal effect. Sources: Constitutional Court, Official Gazette and Constitution, Article 153.",
    "headers": [
      "Date",
      "What happened"
    ],
    "rows": [
      [
        "April 24, 1930",
        "Public Health Law 1593 dates from this day."
      ],
      [
        "July 16, 2026",
        "The Constitutional Court decided E.2025/144, K.2026/164."
      ],
      [
        "November 17, 2026",
        "Publication in Official Gazette 33433; no deferred commencement."
      ],
      [
        "November 19, 2026",
        "PRESDA verified the decision and its constitutional context."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV19_NEWS2_517]]": {
    "caption": "National context, not programme outcomes. Source: HCP, Women in Figures 2026, reporting 2025 data for people aged 15 and over.",
    "headers": [
      "Indicator",
      "Verified context"
    ],
    "rows": [
      [
        "Women’s labour-force participation",
        "19.0% nationally in 2025."
      ],
      [
        "Women’s employment rate",
        "15.1% nationally in 2025."
      ],
      [
        "Men’s employment rate",
        "61.1% nationally in 2025."
      ],
      [
        "L’WALIDA results",
        "The launch statement does not publish an impact evaluation."
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_HERITAGE_511]]": {
    "caption": "Milestones in Morocco’s independence process. Sources: Moroccan government, French diplomatic archives and Spanish official gazette.",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "January 11, 1944",
        "Presentation of the Independence Manifesto"
      ],
      [
        "August 20, 1953",
        "Removal and exile of Mohammed V"
      ],
      [
        "November 18, 1955",
        "Speech commemorated on Independence Day"
      ],
      [
        "March 2 and April 7, 1956",
        "French and Spanish recognition respectively"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_HERITAGE_512]]": {
    "caption": "Reading the verified announcement. Sources: Egyptian Ministry of Tourism and Antiquities and State Information Service.",
    "headers": [
      "Evidence",
      "What the record establishes"
    ],
    "rows": [
      [
        "Announcement",
        "May 30, 2022, at Saqqara"
      ],
      [
        "Coffins",
        "250 closed painted wooden coffins"
      ],
      [
        "Other principal group",
        "150 bronze statues"
      ],
      [
        "Chronology",
        "Late Period, approximately 2,500 years ago"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_HERITAGE_513]]": {
    "caption": "From revolution to independence. Sources: BnF, US Office of the Historian and Château de Joux.",
    "headers": [
      "Date",
      "Event"
    ],
    "rows": [
      [
        "1791",
        "Major uprising begins in Saint-Domingue"
      ],
      [
        "1802",
        "Leclerc’s expedition arrives; Louverture is deported"
      ],
      [
        "November 18–19, 1803",
        "Victory at Vertières and French capitulation"
      ],
      [
        "January 1, 1804",
        "Haitian independence declared"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_HERITAGE_514]]": {
    "caption": "Huerta de Otero in context. Sources: UNESCO, Mérida City Council and the Consorcio excavation record.",
    "headers": [
      "Date",
      "Milestone"
    ],
    "rows": [
      [
        "25 BCE",
        "Foundation of Augusta Emerita"
      ],
      [
        "1976",
        "Initial excavation at Huerta de Otero"
      ],
      [
        "2019",
        "Work resumes through the Barraeca programme"
      ],
      [
        "November 17, 2026",
        "City council confirms newly exposed peristyle paintings"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_HERITAGE_515]]": {
    "caption": "Bagan’s historical and conservation timeline. Sources: Getty, UNESCO and the World Bank.",
    "headers": [
      "Period",
      "Milestone"
    ],
    "rows": [
      [
        "Eleventh–thirteenth centuries",
        "Peak of Bagan’s royal and monumental development"
      ],
      [
        "1975 and 2016",
        "Major damaging earthquakes"
      ],
      [
        "2019",
        "World Heritage inscription"
      ],
      [
        "2026",
        "Committee calls for continued post-2025 earthquake monitoring"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_RESILIENCE_506]]": {
    "caption": "A chronology of rescue and separation",
    "headers": [
      "Date",
      "Milestone",
      "Historical significance"
    ],
    "rows": [
      [
        "9–10 November 1938",
        "Anti-Jewish pogroms in Germany and annexed Austria",
        "Pressure for a practical rescue route intensified"
      ],
      [
        "2 December 1938",
        "First organised arrivals at Harwich",
        "Rail and sea journeys brought children to Britain"
      ],
      [
        "September 1939",
        "War interrupted the main programme",
        "Parents and children faced further separation"
      ],
      [
        "May 1940",
        "Exceptional evacuation of 74 children from the Netherlands",
        "Explains the later endpoint used in some accounts"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_RESILIENCE_507]]": {
    "caption": "From formation to the 46th Guards",
    "headers": [
      "Date or period",
      "Milestone",
      "What it establishes"
    ],
    "rows": [
      [
        "October 1941",
        "Three women’s aviation regiments authorised",
        "Their fighter, bomber and night-bomber roles differed"
      ],
      [
        "Mid-1942",
        "588th operating against German forces",
        "Beginning of its combat period in PACAF’s chronology"
      ],
      [
        "1943",
        "588th becomes the 46th Guards",
        "A new designation for the same regiment"
      ],
      [
        "1945",
        "Operations continue to the war’s end",
        "Campaign totals count repeated operational flights"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_RESILIENCE_508]]": {
    "caption": "Development and the meaning of the fleet figures",
    "headers": [
      "Date or measure",
      "Recorded detail",
      "How to interpret it"
    ],
    "rows": [
      [
        "2002",
        "First Shidhulai school boat began operating",
        "Programme milestone reported by the operator"
      ],
      [
        "2015 UNICEF account",
        "54 mixed-use vessels",
        "A historical fleet snapshot"
      ],
      [
        "July 2026 UNESCO update",
        "56 vessels, including 26 classrooms",
        "Total fleet and school boats are different counts"
      ],
      [
        "Operator’s class description",
        "30 places and three classes per day",
        "Capacity and sessions do not establish annual enrolment"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_RESILIENCE_509]]": {
    "caption": "Shibam’s layers of history and conservation",
    "headers": [
      "Date or period",
      "Milestone",
      "How to interpret it"
    ],
    "rows": [
      [
        "Pre-Islamic period",
        "Origins of the settlement",
        "Earlier than the surviving tower-house ensemble"
      ],
      [
        "1532–1533 and the 16th century",
        "Major flood and later urban development",
        "The city’s long history includes rebuilding"
      ],
      [
        "1982 / 2007",
        "World Heritage inscription / Aga Khan rehabilitation award",
        "Two distinct forms of recognition"
      ],
      [
        "2015 onwards",
        "World Heritage in Danger listing",
        "Continuing conservation needs, not a count of destroyed houses"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV18_RESILIENCE_510]]": {
    "caption": "A century from proposal to reflected sunshine",
    "headers": [
      "Date",
      "Milestone",
      "Meaning"
    ],
    "rows": [
      [
        "1913",
        "Early mirror proposal associated with Kittilsen and Eyde",
        "The local problem predates the modern technology"
      ],
      [
        "1928",
        "Krossobanen cable car opens",
        "Residents could travel up towards winter sun"
      ],
      [
        "2005",
        "Martin Andersen revives the mirror idea",
        "Start of the modern project’s development"
      ],
      [
        "30 October 2013",
        "Three-mirror system unveiled",
        "Natural sunlight redirected towards the square"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HISTORY_502]]": {
    "caption": "A concise chronology, with uncertainty retained",
    "headers": [
      "Period",
      "Documented milestone",
      "How to read it"
    ],
    "rows": [
      [
        "9th–10th centuries",
        "Ministry estimate for the defensive settlement",
        "Dates of individual excavations may differ"
      ],
      [
        "1963",
        "Modern rediscovery in official accounts",
        "A rediscovery date does not date construction"
      ],
      [
        "1965 / 1967",
        "Different official visitor-opening dates",
        "Museum and district accounts disagree"
      ],
      [
        "Today",
        "A limited managed visitor route",
        "The published 85 m figure describes depth, not an open hall"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HISTORY_503]]": {
    "caption": "Milestones in the growth of a production centre",
    "headers": [
      "Date or period",
      "Milestone",
      "Why it matters"
    ],
    "rows": [
      [
        "1962",
        "Lawrence of Arabia among regional productions",
        "International filming preceded the permanent studios"
      ],
      [
        "1983",
        "Atlas Studios established",
        "A base for recurring production work"
      ],
      [
        "1987",
        "Aït Ben Haddou inscribed on the World Heritage List",
        "The settlement’s heritage has its own significance"
      ],
      [
        "From 28 March 2022",
        "30% rebate on eligible expenses under CCM rules",
        "Conditions and accepted costs determine support"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HISTORY_504]]": {
    "caption": "A chronology of Ota Benga’s documented story",
    "headers": [
      "Date",
      "Event",
      "Evidence and qualification"
    ],
    "rows": [
      [
        "1904",
        "Taken to the St Louis World’s Fair",
        "The accounts of his earlier life remain uneven and contested"
      ],
      [
        "September 1906",
        "Exhibited at the Bronx Zoo; Black ministers protest",
        "WCS identifies the week of 8 September"
      ],
      [
        "1910–1916",
        "Lives in Lynchburg; dies on 20 March 1916",
        "Local records and historical research document this period"
      ],
      [
        "June 2020",
        "WCS issues an apology",
        "A later institutional acknowledgement of the abuse"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HISTORY_505]]": {
    "caption": "From market closure to legal abolition",
    "headers": [
      "Date or period",
      "Milestone",
      "Meaning"
    ],
    "rows": [
      [
        "Mid-19th century",
        "Expansion of clove plantations and forced labour",
        "Zanzibar was both a destination and a transit point"
      ],
      [
        "1873",
        "Market closure and prohibition of transport by sea",
        "A restriction on trade, with slavery continuing"
      ],
      [
        "1897",
        "Abolition of slavery’s legal status",
        "A separate milestone from the market’s closure"
      ],
      [
        "From 2013",
        "Conservation and interpretation project at Christ Church",
        "Preservation of a site of conscience and its public history"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HERITAGE_497]]": {
    "caption": "What is confirmed about the next Bond film",
    "headers": [
      "Detail",
      "Confirmed information"
    ],
    "rows": [
      [
        "James Bond",
        "Robert Pattinson"
      ],
      [
        "Direction and script",
        "Denis Villeneuve and Steven Knight"
      ],
      [
        "Production",
        "Amy Pascal and David Heyman, with Tanya Lapointe as executive producer"
      ],
      [
        "Release date and title",
        "Unspecified in Amazon MGM’s November 16 announcement"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HERITAGE_498]]": {
    "caption": "How a Săpânța grave marker communicates",
    "headers": [
      "Element",
      "What it contributes"
    ],
    "rows": [
      [
        "Painted wooden cross",
        "Shared form and a background for individual designs"
      ],
      [
        "Carved or painted scene",
        "A reference to work, family or an episode of life"
      ],
      [
        "Verse epitaph",
        "A voice often composed in the first person"
      ],
      [
        "Village and workshop",
        "Context for the commission and the craft"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HERITAGE_499]]": {
    "caption": "Lerwick Up Helly Aa through the day",
    "headers": [
      "Part of the event",
      "What to look for"
    ],
    "rows": [
      [
        "Daytime visits",
        "The Jarl Squad appears around town, with the Bill at the Market Cross"
      ],
      [
        "Junior procession",
        "Young participants have their own procession and smaller galley"
      ],
      [
        "Evening spectacle",
        "Torches and the burning of the replica galley"
      ],
      [
        "Halls",
        "Squad performances and hospitality continue after the fire"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HERITAGE_500]]": {
    "caption": "The key dates and estimates",
    "headers": [
      "Event or period",
      "Recorded finding"
    ],
    "rows": [
      [
        "5–9 December 1952",
        "Dense smoke-laden fog covers London"
      ],
      [
        "December 1952",
        "About 4,000 excess deaths in the estimate cited by London City Hall"
      ],
      [
        "December 1952 to February 1953",
        "About 12,000 excess deaths in a later research estimate"
      ],
      [
        "1956",
        "Clean Air Act introduces powers for smoke control areas"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_HERITAGE_501]]": {
    "caption": "Four ways to read Lalibela",
    "headers": [
      "Feature",
      "What it tells us"
    ],
    "rows": [
      [
        "Eleven listed churches",
        "The scope of the UNESCO property"
      ],
      [
        "Biete Ghiorgis",
        "A cross-shaped church standing in an excavated enclosure"
      ],
      [
        "Rock cuts and crossings",
        "Clues to the sequence of construction and change"
      ],
      [
        "Drainage and worship",
        "The site remains both a conservation project and a sacred place"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_WORLD_492]]": {
    "caption": "What the evidence at Rapa Nui can show",
    "headers": [
      "Evidence",
      "What researchers ask"
    ],
    "rows": [
      [
        "Unfinished carving at Rano Raraku",
        "How was the figure cut from the rock?"
      ],
      [
        "Statues beside transport routes",
        "Do the shape and position fit a transport hypothesis?"
      ],
      [
        "Stone platforms and restored figures",
        "How did the statues relate to ceremonial spaces?"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_WORLD_493]]": {
    "caption": "Kukur Tihar at a glance",
    "headers": [
      "Element",
      "What it means in context"
    ],
    "rows": [
      [
        "Timing",
        "Customarily the second day of Tihar"
      ],
      [
        "Garland and tika",
        "Visible gestures used to honour dogs"
      ],
      [
        "Food offering",
        "Part of the act of recognition"
      ],
      [
        "Police ceremonies",
        "Public recognition of working dogs, separate from household observances"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_WORLD_494]]": {
    "caption": "How the Ethiopian year is divided",
    "headers": [
      "Part of the year",
      "Number of days"
    ],
    "rows": [
      [
        "Months 1 through 12",
        "30 days each, for a total of 360"
      ],
      [
        "Pagume in an ordinary year",
        "5 days"
      ],
      [
        "Pagume in a leap year",
        "6 days"
      ],
      [
        "Full year",
        "365 or 366 days"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_WORLD_495]]": {
    "caption": "How heat reaches users",
    "headers": [
      "System stage",
      "What it does"
    ],
    "rows": [
      [
        "Resource",
        "A well accesses hot geothermal fluid"
      ],
      [
        "Direct use or heat exchange",
        "The system uses suitable hot water or transfers its heat to fresh water"
      ],
      [
        "District network",
        "Insulated pipes deliver heat to connected buildings"
      ],
      [
        "Local equipment",
        "Radiators or other equipment transfer heat indoors"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_WORLD_496]]": {
    "caption": "Chandrayaan-3 at a glance",
    "headers": [
      "Milestone",
      "What happened"
    ],
    "rows": [
      [
        "July 14, 2023",
        "The mission launches aboard LVM3"
      ],
      [
        "August 23, 2023",
        "Vikram soft-lands near latitude 69.37° south"
      ],
      [
        "Surface operations",
        "Pragyan analyses local soil while Vikram carries separate experiments"
      ],
      [
        "Public archive",
        "ISRO publishes data products and instrument documentation"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_CULTURE_487]]": {
    "caption": "From workshop to collection",
    "headers": [
      "Documented example",
      "What it helps establish"
    ],
    "rows": [
      [
        "Teshie workshop histories",
        "Kane Kwei and Ajetey appear in an early account"
      ],
      [
        "1989 Paris exhibition",
        "Work by Kane Kwei and Paa Joe reaches an international museum audience"
      ],
      [
        "2018 collection donation",
        "The Museum for Sepulchral Culture receives 28 coffins"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_CULTURE_488]]": {
    "caption": "Three ways Hope observes Mars",
    "headers": [
      "Instrument",
      "What it observes"
    ],
    "rows": [
      [
        "EXI",
        "Visible and ultraviolet images, including atmospheric features"
      ],
      [
        "EMIRS",
        "Thermal infrared signatures of temperature, dust, clouds and water vapour"
      ],
      [
        "EMUS",
        "Ultraviolet emissions from the upper atmosphere"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_CULTURE_489]]": {
    "caption": "The Flight 571 chronology",
    "headers": [
      "Date",
      "Event"
    ],
    "rows": [
      [
        "October 13, 1972",
        "Flight 571 crashes in the Andes with 45 aboard"
      ],
      [
        "October 29, 1972",
        "An avalanche hits the fuselage, killing eight more people"
      ],
      [
        "December 22–23, 1972",
        "Chilean crews rescue survivors in stages"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_CULTURE_490]]": {
    "caption": "Three common heating arrangements",
    "headers": [
      "Sauna type",
      "What distinguishes it"
    ],
    "rows": [
      [
        "Smoke sauna",
        "Stones store heat and the room is aired before use"
      ],
      [
        "Wood-fired sauna with flue",
        "A stove burns wood and vents smoke through a flue"
      ],
      [
        "Electric sauna",
        "Electric elements heat the stones"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_CULTURE_491]]": {
    "caption": "The official first four finishers",
    "headers": [
      "Place",
      "Runner",
      "Recorded time"
    ],
    "rows": [
      [
        "1",
        "Thomas Hicks",
        "3:28:53"
      ],
      [
        "2",
        "Albert Corey",
        "3:34:52"
      ],
      [
        "3",
        "Arthur Newton",
        "3:47:33"
      ],
      [
        "4",
        "Félix Carvajal",
        "Time unrecorded in Olympedia"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_FEATURE_482]]": {
    "caption": "Japan’s ageing in three measures",
    "headers": [
      "Measure",
      "Value",
      "Reference period"
    ],
    "rows": [
      [
        "Population aged 65 and over",
        "36.24 million (29.6%)",
        "September 2026"
      ],
      [
        "Workers aged 65 and over",
        "9.43 million",
        "2025"
      ],
      [
        "Share aged 65 and over, medium projection",
        "38.7%",
        "2070"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_FEATURE_483]]": {
    "caption": "Uruguay’s electricity generation in 2025",
    "headers": [
      "Source",
      "Share"
    ],
    "rows": [
      [
        "Hydropower",
        "46%"
      ],
      [
        "Wind",
        "34%"
      ],
      [
        "Biomass",
        "14%"
      ],
      [
        "Solar",
        "4%"
      ],
      [
        "Fossil sources",
        "2%"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_FEATURE_484]]": {
    "caption": "Svalbard’s backup system in practice",
    "headers": [
      "Milestone",
      "What it shows"
    ],
    "rows": [
      [
        "February 2008",
        "Vault opens in Svalbard"
      ],
      [
        "2017",
        "ICARDA redeposits more than 20,000 accessions"
      ],
      [
        "October 2026",
        "21 institutions deposit 16,676 seed samples"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_FEATURE_485]]": {
    "caption": "Three kinds of evidence about Himba life",
    "headers": [
      "Evidence",
      "What it helps explain"
    ],
    "rows": [
      [
        "Pastoral fieldwork",
        "How households organise grazing, school and work"
      ],
      [
        "Observations of otjize preparation",
        "How ochre and clarified milk fat are used"
      ],
      [
        "Controlled tests",
        "How particular ochre samples filter ultraviolet radiation"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV17_FEATURE_486]]": {
    "caption": "Milestones in Japan’s modern Ainu policy",
    "headers": [
      "Year",
      "Measure"
    ],
    "rows": [
      [
        "1899",
        "Hokkaido assimilation-era law"
      ],
      [
        "1997",
        "Ainu Cultural Promotion Act"
      ],
      [
        "2008",
        "Parliament calls for Indigenous recognition"
      ],
      [
        "2019",
        "Ainu Policy Promotion Act recognises the Ainu as Indigenous"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV16_NEWS_478]]": {
    "caption": "Alibaba’s published launch specifications",
    "headers": [
      "Metric",
      "Reported value"
    ],
    "rows": [
      [
        "Total parameters",
        "2.4 trillion"
      ],
      [
        "Active parameters per token",
        "71 billion"
      ],
      [
        "Context window",
        "1 million tokens"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV16_NEWS_479]]": {
    "caption": "National ambition and local examples",
    "headers": [
      "Scope",
      "What it measures"
    ],
    "rows": [
      [
        "Nearly 200 million",
        "Primary and secondary enrolment cited by Reuters"
      ],
      [
        "2030",
        "National integration target"
      ],
      [
        "30 hours a year",
        "Shanghai requirement per grade, as reported by Reuters"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV16_NEWS_480]]": {
    "caption": "Study means across 26 usable sleep recordings",
    "headers": [
      "Measure",
      "Sham night",
      "Active ultrasound night"
    ],
    "rows": [
      [
        "Time to first REM",
        "177 min",
        "134.7 min"
      ],
      [
        "Share of sleep in REM",
        "16.3%",
        "20.9%"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV16_NEWS_481]]": {
    "caption": "From forest burrows to the sea and back",
    "headers": [
      "Stage",
      "Typical trigger or location"
    ],
    "rows": [
      [
        "Adult migration",
        "First sustained wet-season rains"
      ],
      [
        "Egg release",
        "Receding high tide near the last-quarter moon"
      ],
      [
        "Young crabs return",
        "After a larval phase in the sea"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV15_NEWS_475]]": {
    "caption": "Three figures behind Samsung’s expansion",
    "headers": [
      "Commitment",
      "Scope"
    ],
    "rows": [
      [
        "₩427.3 billion",
        "Gumi construction project"
      ],
      [
        "About ₩60 trillion",
        "Broader investment in southeastern Korea"
      ],
      [
        "US$1 billion",
        "Combined investment by six affiliates in Helix"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV15_NEWS_476]]": {
    "caption": "Reported features and open questions",
    "headers": [
      "Item",
      "Status"
    ],
    "rows": [
      [
        "2027 timing",
        "Reported target, subject to development"
      ],
      [
        "Lens display",
        "First model reportedly has none"
      ],
      [
        "Siri app actions",
        "Uses a documented Apple framework, but hardware support is unannounced"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[NOV15_NEWS_477]]": {
    "caption": "Paramount’s opening-weekend estimates",
    "headers": [
      "Market",
      "Gross"
    ],
    "rows": [
      [
        "North America",
        "US$19 million"
      ],
      [
        "International",
        "US$23 million"
      ],
      [
        "Worldwide",
        "US$42 million"
      ]
    ],
    "minWidthClass": "min-w-[400px]",
    "boldColumnIndex": 0,
    "rowKeyIndex": 0
  },
  "[[UPGRADE_473]]": {
  "caption": "Read the historical names against the geography of the estuary.",
  "headers": [
    "Modern location",
    "Geographic reference"
  ],
  "rows": [
    [
      "Salé",
      "North bank of the Bou Regreg"
    ],
    [
      "Kasbah of the Udayas",
      "Rabat side, at the estuary"
    ],
    [
      "Historic centre of Rabat",
      "South side of the river"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[UPGRADE_464]]": {
  "caption": "What three kinds of evidence can tell us.",
  "headers": [
    "Study design",
    "What it measures"
  ],
  "rows": [
    [
      "Animal lifespan study",
      "Survival in the study species on specific diets"
    ],
    [
      "Short human diet trial",
      "Responses measured over the intervention period"
    ],
    [
      "Long human follow-up",
      "Whether health or functional outcomes differ over time"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[UPGRADE_459]]": {
  "caption": "What the study’s different evidence can establish.",
  "headers": [
    "Evidence",
    "Use"
  ],
  "rows": [
    [
      "Genomes",
      "Identify and compare evolutionary lineages"
    ],
    [
      "Museum localities",
      "Connect sampled animals to known places"
    ],
    [
      "Forest and population surveys",
      "Supply data for separate conservation assessments"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[UPGRADE_457]]": {
  "caption": "How to read the Shenzhen announcements as of November 15.",
  "headers": [
    "Item",
    "Status"
  ],
  "rows": [
    [
      "APEC Leaders’ Week",
      "Separately scheduled economic forum"
    ],
    [
      "Three-way talks",
      "Reported proposal"
    ],
    [
      "Nuclear agreement",
      "No text announced in the cited reports"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[UPGRADE_458]]": {
  "caption": "Milestones in Türkiye–Qatar cooperation.",
  "headers": [
    "Year",
    "Documented development"
  ],
  "rows": [
    [
      "2014",
      "High Strategic Committee established"
    ],
    [
      "2018",
      "Trade and Economic Partnership Agreement signed"
    ],
    [
      "2025",
      "Economic agreement entered into force"
    ],
    [
      "2026",
      "Joint defence agreement signed in Istanbul"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[UPGRADE_454]]": {
  "caption": "How to read Bounou’s international milestones.",
  "headers": [
    "Event",
    "Measure"
  ],
  "rows": [
    [
      "Morocco–Niger",
      "100th appearance and an in-game penalty save"
    ],
    [
      "Qatar 2022",
      "Four clean sheets credited by FIFA"
    ],
    [
      "Spain at Qatar 2022",
      "Two saves in the shootout"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[UPGRADE_470]]": {
  "caption": "UNESCO inscription years for the nine featured places.",
  "headers": [
    "Place",
    "First inscription"
  ],
  "rows": [
    [
      "Giza pyramid fields",
      "1979"
    ],
    [
      "Great Zimbabwe",
      "1986"
    ],
    [
      "Petra",
      "1985"
    ],
    [
      "Göbekli Tepe",
      "2018"
    ],
    [
      "Historic centre of Rome",
      "1980"
    ],
    [
      "Great Wall",
      "1987"
    ],
    [
      "Angkor",
      "1992"
    ],
    [
      "Machu Picchu",
      "1983"
    ],
    [
      "Rapa Nui National Park",
      "1995"
    ]
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[CARS_4_YOUTH_TIMELINE]]": {
  "caption": "Milestones documented by ABC News and the National Australia Day Council.",
  "rows": [
    [
      "2008",
      "Hynam’s son Preston dies."
    ],
    [
      "2017",
      "Hynam repairs his first cars for two people who recently moved to the Wimmera."
    ],
    [
      "2025",
      "ABC reports 19 handovers by August."
    ],
    [
      "2026",
      "Victoria announces Hynam as its Local Hero for the 2027 awards."
    ]
  ],
  "headers": [
    "Year",
    "Milestone"
  ],
  "minWidthClass": "min-w-[390px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[DNA_COMPARISON_DENOMINATORS]]": {
  "caption": "Three reported values with different denominators and meanings.",
  "rows": [
    [
      "Human and chimpanzee",
      "About 98.8%",
      "Matching letters at aligned positions"
    ],
    [
      "Human and mouse",
      "About 80%",
      "Human genes with a one-to-one mouse counterpart in the study"
    ],
    [
      "Human genes tested in yeast",
      "47%",
      "Tested yeast genes functionally replaced by a human counterpart"
    ]
  ],
  "headers": [
    "Comparison",
    "Reported value",
    "What was counted"
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[CYBERCAB_OFFER_SNAPSHOT]]": {
  "caption": "Initial US offer, before taxes. The total assumes twelve paid months at the advertised rate.",
  "rows": [
    [
      "Advertised purchase price",
      "29,990"
    ],
    [
      "Monthly autonomy subscription",
      "299"
    ],
    [
      "Twelve paid months",
      "3,588"
    ],
    [
      "Purchase plus twelve paid months",
      "33,578"
    ]
  ],
  "headers": [
    "Item",
    "USD"
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[META_GALLERY_ORDER]]": {
  "caption": "Remediation timetable in the Italian authority’s published order.",
  "rows": [
    [
      "30 days",
      "Notify the Garante of steps begun"
    ],
    [
      "60 days",
      "Ask for separate consent and leave the feature off by default"
    ],
    [
      "90 days",
      "Report the measures taken"
    ]
  ],
  "headers": [
    "Deadline",
    "What Meta must do"
  ],
  "minWidthClass": "min-w-[420px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[DIQUIS_PROTECTED_SITES]]": {
  "caption": "Inscribed component areas from the UNESCO maps. Buffer zones are excluded.",
  "rows": [
    [
      "Finca 6",
      "9.55 ha",
      "Alignment of spheres in place"
    ],
    [
      "Batambal",
      "0.80 ha",
      "Settlement visible from afar"
    ],
    [
      "El Silencio",
      "6.16 ha",
      "Largest recorded sphere"
    ],
    [
      "Grijalba-2",
      "8.22 ha",
      "Limestone architecture"
    ]
  ],
  "headers": [
    "Site",
    "Protected area",
    "Distinctive evidence"
  ],
  "minWidthClass": "min-w-[510px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[MESOPOTAMIA_MILESTONES]]": {
  "caption": "Milestones in Mesopotamian history. Dates describe specific developments rather than the boundaries of each society.",
  "headers": [
    "Society or power",
    "Date or period",
    "What the landmark shows"
  ],
  "rows": [
    [
      "Sumer",
      "Around 3200 BCE",
      "Uruk emerges as a major city."
    ],
    [
      "Akkad",
      "Late third millennium BCE",
      "Sargon’s dynasty brings several cities under imperial rule."
    ],
    [
      "Babylon",
      "1792–1750 BCE",
      "Hammurabi rules Babylon and commissions the famous collection of judgments."
    ],
    [
      "Assyria",
      "612 BCE",
      "Nineveh falls, marking a decisive collapse of Assyrian power."
    ]
  ],
  "minWidthClass": "min-w-[500px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[PILL_CULTURE_COMPARISON]]": {
  "caption": "Pill-color meanings vary by context. These are community labels, not scientific categories.",
  "headers": [
    "Color",
    "Recurring meaning",
    "Associated spaces and limits"
  ],
  "rows": [
    [
      "Red",
      "Claimed awakening to hidden rules.",
      "Manosphere and wider political debate; agreement about gender is not universal."
    ],
    [
      "Blue",
      "Acceptance of conventional explanations.",
      "Often a label applied by opponents, not a coherent movement."
    ],
    [
      "Black",
      "Fatalism about appearance and romantic prospects.",
      "Some incel communities; biological destiny is a belief, not an established prognosis."
    ],
    [
      "White",
      "Hope or optimism despite adversity.",
      "Varied online groups, including extremist uses; optimism alone does not define the ideology."
    ],
    [
      "Purple",
      "A claimed middle ground or mixture of red and blue.",
      "Relationship-debate spaces; calling a view moderate does not verify it."
    ],
    [
      "Pink",
      "Female-centered interpretations of gender, beauty or exclusion.",
      "Some femcel, beauty and feminist spaces; meanings conflict and do not represent feminism as a whole."
    ]
  ],
  "minWidthClass": "min-w-[620px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[ROBOT_RACE_COMPARE]]": {
  "caption": "Manufacturer disclosures reviewed October 9, 2026. Listed USD prices exclude tax and shipping; EDU/options and local availability differ. No common independent test.",
  "headers": [
    "Measure",
    "Tesla Optimus",
    "Unitree commercial platforms"
  ],
  "rows": [
    [
      "Verified status",
      "Gen 3 production roadmap; Q2 facilities under construction",
      "G1, H1/H1-2, H2 and R1 listed; configuration-specific orders"
    ],
    [
      "Current retail price",
      "Not verified",
      "G1 $13,500; H2 $29,900; R1 AIR $4,900; R1 $5,900"
    ],
    [
      "Height / mass",
      "Comparable current retail specifications not verified",
      "G1 1.32 m / about 35 kg; H2 1.82 m / about 70 kg"
    ],
    [
      "Mobility",
      "Demonstrations do not establish common benchmark",
      "H1 supplier moving-speed claim 3.3 m/s; H1-2 under 2 m/s"
    ],
    [
      "Mechanical flexibility",
      "Gen 3 hand upgrade named; no common dexterity score",
      "G1 23 joints, EDU 23–43; H2 31 joints"
    ],
    [
      "Battery",
      "Comparable current runtime not verified",
      "G1 about 2 h; H2 about 3 h; R1 about 1 h, supplier claims"
    ],
    [
      "Battery energy",
      "Comparable current retail value not verified",
      "H1/H1-2 864 Wh; H2 972 Wh"
    ],
    [
      "Developer access",
      "No verified retail developer offering",
      "G1/H2 EDU and R1 EDU differ from base models"
    ],
    [
      "2025 delivery evidence",
      "No verified comparable customer-sales total",
      "Company reports more than 5,500 pure humanoids delivered"
    ],
    [
      "H1 2026 shipment evidence",
      "No verified comparable customer-sales total",
      "Counterpoint estimates more than 7,000"
    ],
    [
      "Autonomous productivity",
      "No public common independent test",
      "Hardware sale does not establish autonomous task readiness"
    ],
    [
      "Production vs availability",
      "Initial builds for internal training; capacity plans are targets",
      "Commercial catalogue; stock, options and delivery terms vary"
    ]
  ],
  "minWidthClass": "min-w-[760px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[SAUDI_2034_BID_STADIUMS]]": {
  "caption": "Original bid capacities, 2024. Proposed configurations, not current ticket inventory. Source: Saudi 2034 bid book, pp. 48–49; see linked citation above.",
  "headers": [
    "Venue in the 2024 bid",
    "Host city",
    "Proposed gross seats"
  ],
  "rows": [
    [
      "King Salman International Stadium",
      "Riyadh",
      "92,760"
    ],
    [
      "King Fahad Sports City Stadium",
      "Riyadh",
      "70,200"
    ],
    [
      "Prince Mohammed bin Salman Stadium",
      "Riyadh",
      "46,979"
    ],
    [
      "New Murabba Stadium",
      "Riyadh",
      "46,010"
    ],
    [
      "ROSHN Stadium",
      "Riyadh",
      "46,000"
    ],
    [
      "Prince Faisal bin Fahad Sports City Stadium",
      "Riyadh",
      "46,865"
    ],
    [
      "South Riyadh Stadium",
      "Riyadh",
      "47,060"
    ],
    [
      "King Saud University Stadium",
      "Riyadh",
      "46,319"
    ],
    [
      "King Abdullah Sports City Stadium",
      "Jeddah",
      "58,432"
    ],
    [
      "Qiddiya Coast Stadium",
      "Jeddah",
      "46,096"
    ],
    [
      "Jeddah Central Development Stadium",
      "Jeddah",
      "45,794"
    ],
    [
      "King Abdullah Economic City Stadium",
      "Jeddah",
      "45,700"
    ],
    [
      "Aramco Stadium",
      "Al Khobar",
      "46,096"
    ],
    [
      "King Khalid University Stadium",
      "Abha",
      "45,428"
    ],
    [
      "NEOM Stadium",
      "NEOM",
      "46,010"
    ]
  ],
  "minWidthClass": "min-w-[580px]",
  "boldColumnIndex": 0,
  "rowKeyIndex": 0
},
  "[[COFFEE_DAY_2026_PRODUCERS_TABLE]]": {
    caption: "Leading producers: USDA July 2026 forecasts for 2026/27. Million 60-kilogram bags.",
    headers: ["Country", "Forecast production"],
    minWidthClass: "min-w-[300px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Brazil", "71.90"],
      ["Vietnam", "32.50"],
      ["Colombia", "13.40"],
      ["Ethiopia", "12.10"],
      ["Indonesia", "11.38"],
      ["Uganda", "7.16"]
    ]
  },
  "[[RESISTANCE_COMPARISON_TABLE]]": {
    caption: "Three connected struggles with different goals and methods. Strategies changed over time and were debated within each movement.",
    headers: ["Leader and setting", "Central political goal", "Methods", "Essential distinction"],
    minWidthClass: "min-w-[760px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Gandhi; colonial India", "Self-rule and an end to British domination", "Noncooperation, boycotts, civil disobedience and constructive social work", "Nonviolence was tied to personal ethics as well as mass politics"],
      ["King; United States", "Equal citizenship, enforceable civil rights and economic justice", "Boycotts, marches, direct action and pressure for legal reform", "Worked within a wider movement that combined protest, litigation and legislation"],
      ["Mandela; South Africa", "End apartheid and establish a nonracial democracy", "Civil disobedience, support for sabotage, mass politics and negotiation", "Did not maintain an absolute commitment to nonviolent methods"]
    ]
  },
  "[[BRAIN_DRAIN_HEALTH_WORKFORCE_TABLE]]": {
    caption: "Foreign-trained professionals as a share of each destination workforce. OECD International Migration Outlook 2025, latest observations within 2021-2023; Tables 5.3 and 5.4.",
    headers: ["Destination", "Doctors trained abroad", "Nurses trained abroad"],
    minWidthClass: "min-w-[580px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Ireland", "43.4%", "51.8%"],
      ["New Zealand", "42.4%", "33.1%"],
      ["Switzerland", "40.3%", "26.6%"],
      ["Australia", "31.4%", "17.9%"]
    ]
  },
  "[[BAJAU_DIVING_EVIDENCE_TABLE]]": {
    caption: "Measured working dives in the Philippines. The 2014 report includes the earlier 2011 sample; these are not independent cohorts. Depths describe observed work, not human limits.",
    headers: ["Report and sample", "Dive duration", "Observed depth", "Context"],
    minWidthClass: "min-w-[680px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["2011; five male Bajau spearfishers", "28 seconds mean", "Individual maxima: 5 to 7 metres", "60% of observed work time submerged, across repeated dives"],
      ["2014; additional group of five male divers", "42 seconds mean; recorded range 14 to 97 seconds", "10 metres mean; range 3 to 25 metres", "Time-depth loggers during fishing; 50% of working time submerged"]
    ]
  },
  "[[BRAIN_TO_VOICE_EVIDENCE_TABLE]]": {
    caption: "Speech BCI evidence. Each row describes one participant; tasks and accuracy measures differ. Sources and measurement definitions follow the table.",
    headers: ["Study and sample", "Output and vocabulary", "Measured performance", "Interpretation"],
    minWidthClass: "min-w-[760px]",
    boldColumnIndex: 0,
    rowKeyIndex: 0,
    rows: [
      ["Card et al., 2024, NEJM; n = 1, ALS", "Text decoding; 125,000-word vocabulary", "About 32 words/min in conversation; 97.5% word accuracy after further training", "Text accuracy, not direct synthesized-voice intelligibility"],
      ["Littlejohn et al., 2025, Nature Neuroscience; n = 1, stroke", "Streaming voice; 1,024-word general set", "47.5 synthesized words/min; 80-ms processing increments", "Processing interval is not time to the first audible word; listener transcription assessed intelligibility"],
      ["Wairagkar et al., 2025, Nature; n = 1, ALS", "Direct voice; unfamiliar words also demonstrated", "About 25-ms audio delay; almost 60% of words understood by listeners", "No single comparable WPM benchmark quoted here; unfamiliar-word demonstrations do not establish unlimited accuracy"],
      ["Card et al., 2026, Nature Medicine; n = 1, ALS", "Text and cursor control; 125,000-word vocabulary", "56 words/min average; above 99% word accuracy in prompted testing", "92% of everyday sentences rated at least mostly correct by the user; distinct from word accuracy"]
    ]
  },
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


export const astrologyComparisonTable = {
  caption: "Astrology and science",
  headers: ["Astrology", "Science"],
  rows: [["Symbolic interpretations", "Testable evidence"], ["Personality language", "Controlled measurement"], ["Horoscopes and charts", "Astronomy and psychology"], ["Cultural meaning", "Replicable results"]]
};
