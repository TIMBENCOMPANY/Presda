import type { Locale } from "@/lib/i18n/routing";
import premiumSupportingMedia from "@/data/premiumSupportingMedia.json";
const publicDomain = "https://creativecommons.org/publicdomain/mark/1.0/";

type EvidencePhoto = {
  afterBlock: number;
  file: string;
  localizedFiles?: Partial<Record<Locale, string>>;
  width: number;
  height: number;
  source: string;
  credit: string;
  license: string | null;
  licenseLabel?: string;
  licenseLabels?: Record<Locale, string>;
  alts?: Record<Locale, string>;
  captions: Record<Locale, string>;
};

const evidence: Partial<Record<string, EvidencePhoto>> = {
"guatemala-el-mirador-maya-stucco-heads-2026": {
  "afterBlock": 12,
  "file": "nov22five-maya-facts-en.png",
  "localizedFiles": {
    "en": "nov22five-maya-facts-en.png",
    "fr": "nov22five-maya-facts-fr.png",
    "ar": "nov22five-maya-facts-ar.png",
    "es": "nov22five-maya-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://agn.gt/hallazgos-en-el-mirador-revelan-avances-de-la-civilizacion-maya",
  "credit": "PRESDA · agn.gt / mesoweb.com / channelnewsasia.com / dca.gob.gt / lahora.gt / maya.nmai.si.edu",
  "license": null,
  "captions": {
    "en": "The El Mirador heads: dates and evidence",
    "fr": "Les têtes d’El Mirador : dates et indices",
    "ar": "رؤوس إل ميرادور: تواريخ وأدلة",
    "es": "Las cabezas de El Mirador: fechas y evidencias"
  }
},
"beyonce-100-grammy-nominations-morning-dew-2027": {
  "afterBlock": 12,
  "file": "nov22five-beyonce-facts-en.png",
  "localizedFiles": {
    "en": "nov22five-beyonce-facts-en.png",
    "fr": "nov22five-beyonce-facts-fr.png",
    "ar": "nov22five-beyonce-facts-ar.png",
    "es": "nov22five-beyonce-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.grammy.com/news/who-has-the-most-grammy-nominations-at-the-2027-grammys/",
  "credit": "PRESDA · grammy.com / sonymusic.ca / media.grammy.net",
  "license": null,
  "captions": {
    "en": "Beyoncé’s Grammy milestone: the essential dates",
    "fr": "Le cap des Grammys de Beyoncé : les repères",
    "ar": "إنجاز بيونسيه في غرامي: التواريخ الأساسية",
    "es": "El hito de Beyoncé en los Grammy: datos esenciales"
  }
},
"rafael-nadal-real-madrid-board-directors-2026": {
  "afterBlock": 12,
  "file": "nov22five-nadal-facts-en.png",
  "localizedFiles": {
    "en": "nov22five-nadal-facts-en.png",
    "fr": "nov22five-nadal-facts-fr.png",
    "ar": "nov22five-nadal-facts-ar.png",
    "es": "nov22five-nadal-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.realmadrid.com/en-US/news/club/latest-news/rafa-nadal-miembro-de-la-junta-directiva-del-real-madrid-21-11-2026",
  "credit": "PRESDA · realmadrid.com / atptour.com / rafanadalacademy.com / telefonica.com",
  "license": null,
  "captions": {
    "en": "Rafael Nadal and Real Madrid: the confirmed sequence",
    "fr": "Rafael Nadal et le Real Madrid : les étapes confirmées",
    "ar": "رافاييل نادال وريال مدريد: التسلسل المؤكد",
    "es": "Rafael Nadal y el Real Madrid: la secuencia confirmada"
  }
},
"inca-mummies-coca-alcohol-harmine-sacrifice-study-2026": {
  "afterBlock": 12,
  "file": "nov22five-inca-facts-en.png",
  "localizedFiles": {
    "en": "nov22five-inca-facts-en.png",
    "fr": "nov22five-inca-facts-fr.png",
    "ar": "nov22five-inca-facts-ar.png",
    "es": "nov22five-inca-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.cambridge.org/core/journals/antiquity/article/toxicological-studies-on-the-inca-frozen-mummies-from-volcanoes-in-peru-and-argentina/F9B50A69C079F73C7502EEC776A2B386",
  "credit": "PRESDA · cambridge.org / doi.org / whc.unesco.org / saa.org",
  "license": null,
  "captions": {
    "en": "Inca toxicology: findings and their limits",
    "fr": "Toxicologie inca : résultats et limites",
    "ar": "سموم مومياوات الإنكا: نتائج وحدود",
    "es": "Toxicología inca: resultados y límites"
  }
},
"avril-lavigne-first-child-baby-girl-november-2026": {
  "afterBlock": 12,
  "file": "nov22five-avril-facts-en.png",
  "localizedFiles": {
    "en": "nov22five-avril-facts-en.png",
    "fr": "nov22five-avril-facts-fr.png",
    "ar": "nov22five-avril-facts-ar.png",
    "es": "nov22five-avril-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.goodmorningamerica.com/culture/story/avril-lavigne-announces-birth-1st-child-daughter-138113798",
  "credit": "PRESDA · goodmorningamerica.com / ca.rollingstone.com / grammy.com / sonymusic.ca / store.avrillavigne.com / walkoffame.com",
  "license": null,
  "captions": {
    "en": "Avril Lavigne: career context and the family announcement",
    "fr": "Avril Lavigne : la carrière et l’annonce familiale",
    "ar": "أفريل لافين: المسيرة والإعلان العائلي",
    "es": "Avril Lavigne: trayectoria y anuncio familiar"
  }
},
"turkiye-first-three-kizilelma-unmanned-fighter-jets-2026": {
  "afterBlock": 12,
  "file": "world4-kizilelma-facts-en.png",
  "localizedFiles": {
    "en": "world4-kizilelma-facts-en.png",
    "fr": "world4-kizilelma-facts-fr.png",
    "ar": "world4-kizilelma-facts-ar.png",
    "es": "world4-kizilelma-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://baykartech.com/en/press/a-first-in-global-aviation-history-kizilelma-enters-turkiyes-inventory/",
  "credit": "PRESDA · baykartech.com / aa.com.tr / leonardo.com / iletisim.gov.tr",
  "license": null,
  "captions": {
    "en": "KIZILELMA: milestones before the first delivery",
    "fr": "KIZILELMA : les étapes précédant la livraison",
    "ar": "قزل إلما: محطات قبل التسليم الأول",
    "es": "KIZILELMA: hitos antes de la primera entrega"
  }
},
"makkah-clock-tower-guinness-highest-museum-observation-deck": {
  "afterBlock": 12,
  "file": "world4-makkah-facts-en.png",
  "localizedFiles": {
    "en": "world4-makkah-facts-en.png",
    "fr": "world4-makkah-facts-fr.png",
    "ar": "world4-makkah-facts-ar.png",
    "es": "world4-makkah-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.guinnessworldrecords.com/world-records/775972-highest-museum-in-a-building",
  "credit": "PRESDA · guinnessworldrecords.com / arabnews.com / sl-rasch.com / skyscrapercenter.com",
  "license": null,
  "captions": {
    "en": "Makkah Clock Tower: the record figures",
    "fr": "Tour de l’horloge : les chiffres des records",
    "ar": "برج ساعة مكة: أرقام السجلين",
    "es": "Torre del reloj: las cifras de los récords"
  }
},
"bali-ganesha-synthetic-rattan-sculpture-world-record": {
  "afterBlock": 12,
  "file": "world4-ganesha-facts-en.png",
  "localizedFiles": {
    "en": "world4-ganesha-facts-en.png",
    "fr": "world4-ganesha-facts-fr.png",
    "ar": "world4-ganesha-facts-ar.png",
    "es": "world4-ganesha-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://alasharum.com/en/post/alas-harum-bali-introduces-two-mega-projects-ganesha-statue-kailash-fairy-garden",
  "credit": "PRESDA · alasharum.com / thecsrjournal.in / organiser.org / metmuseum.org / whc.unesco.org",
  "license": null,
  "captions": {
    "en": "Bali’s Ganesha sculpture: the source distinctions",
    "fr": "Ganesha à Bali : les éléments rapportés et annoncés",
    "ar": "غانيشا في بالي: معلومات منقولة ومعلنة",
    "es": "Ganesha en Bali: datos publicados y anunciados"
  }
},
"mauritius-telecom-innovation-award-africa-tech-festival-2026": {
  "afterBlock": 12,
  "file": "world4-mauritius-facts-en.png",
  "localizedFiles": {
    "en": "world4-mauritius-facts-en.png",
    "fr": "world4-mauritius-facts-fr.png",
    "ar": "world4-mauritius-facts-ar.png",
    "es": "world4-mauritius-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://africatechfestival.com/awards/",
  "credit": "PRESDA · africatechfestival.com / lexpress.mu / defimedia.info / telecom.mu",
  "license": null,
  "captions": {
    "en": "Mauritius Telecom: the November milestones",
    "fr": "Mauritius Telecom : les étapes de novembre",
    "ar": "موريشيوس تيليكوم: محطات نوفمبر",
    "es": "Mauritius Telecom: los hitos de noviembre"
  }
},
"bts-mama-awards-2026-five-wins-two-grand-prizes": {
  "afterBlock": 12,
  "file": "mama1-bts-facts-en.png",
  "localizedFiles": {
    "en": "mama1-bts-facts-en.png",
    "fr": "mama1-bts-facts-fr.png",
    "ar": "mama1-bts-facts-ar.png",
    "es": "mama1-bts-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://en.yna.co.kr/view/AEN20261121001851315",
  "credit": "PRESDA · en.yna.co.kr / cjenm.com / koreaherald.com / ibighit.com / soompi.com / ich.unesco.org",
  "license": null,
  "captions": {
    "en": "BTS at MAMA 2026: the two-night tally",
    "fr": "BTS aux MAMA 2026 : le bilan des deux jours",
    "ar": "BTS في ماما 2026: حصيلة اليومين",
    "es": "BTS en MAMA 2026: balance de dos días"
  }
},
"levi-mcconaughey-hollywood-films-lost-bus-warrior-kid": {
  "afterBlock": 12,
  "file": "careers5-levi-facts-en.png",
  "localizedFiles": {
    "en": "careers5-levi-facts-en.png",
    "fr": "careers5-levi-facts-fr.png",
    "ar": "careers5-levi-facts-ar.png",
    "es": "careers5-levi-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.apple.com/tv-pr/news/2026/10/apple-original-films-unveils-way-of-the-warrior-kid-trailer/",
  "credit": "PRESDA · apple.com / people.com / apnews.com",
  "license": null,
  "captions": {
    "en": "Levi McConaughey: premieres and releases in order",
    "fr": "Levi McConaughey : premières et sorties dans l’ordre",
    "ar": "ليفي ماكونهي: ترتيب العروض والإصدارات",
    "es": "Levi McConaughey: presentaciones y estrenos en orden"
  }
},
"brahim-diaz-real-madrid-contract-2031-report": {
  "afterBlock": 12,
  "file": "careers5-brahim-facts-en.png",
  "localizedFiles": {
    "en": "careers5-brahim-facts-en.png",
    "fr": "careers5-brahim-facts-fr.png",
    "ar": "careers5-brahim-facts-ar.png",
    "es": "careers5-brahim-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://sport.le360.ma/football/mercato/real-madrid-brahim-diaz-aurait-signe-jusquen-2031-avec-une-clause-a-un-milliard-deuros_CXSFC2CSJ5CI5F6U3JNBX57MJQ/",
  "credit": "PRESDA · sport.le360.ma / realmadrid.com / as.com / reuters.com",
  "license": null,
  "captions": {
    "en": "Brahim Díaz: official milestones and the new report",
    "fr": "Brahim Díaz : étapes officielles et nouvelle information",
    "ar": "إبراهيم دياز: المحطات الرسمية والخبر الجديد",
    "es": "Brahim Díaz: hitos oficiales y nueva información"
  }
},
"keanu-reeves-arch-motorcycle-gard-hollinger-business": {
  "afterBlock": 12,
  "file": "careers5-keanu-facts-en.png",
  "localizedFiles": {
    "en": "careers5-keanu-facts-en.png",
    "fr": "careers5-keanu-facts-fr.png",
    "ar": "careers5-keanu-facts-ar.png",
    "es": "careers5-keanu-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.archmotorcycleracing.com/about",
  "credit": "PRESDA · archmotorcycleracing.com / archmotorcycle.com / prnewswire.com",
  "license": null,
  "captions": {
    "en": "ARCH Motorcycle: the business behind the famous name",
    "fr": "ARCH Motorcycle : l’entreprise derrière le nom célèbre",
    "ar": "ARCH Motorcycle: النشاط وراء الاسم الشهير",
    "es": "ARCH Motorcycle: el negocio detrás del nombre famoso"
  }
},
"gerard-pique-kings-league-entrepreneur-kosmos": {
  "afterBlock": 12,
  "file": "careers5-pique-facts-en.png",
  "localizedFiles": {
    "en": "careers5-pique-facts-en.png",
    "fr": "careers5-pique-facts-fr.png",
    "ar": "careers5-pique-facts-ar.png",
    "es": "careers5-pique-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.fcbarcelona.com/en/football/first-team/news/2889653/gerard-piqu-announces-he-is-leaving-bara",
  "credit": "PRESDA · fcbarcelona.com / kingsleague.pro / prnewswire.com / cincodias.elpais.com",
  "license": null,
  "captions": {
    "en": "Gerard Piqué: from playing career to creator-led competition",
    "fr": "Gerard Piqué : du terrain à la compétition des créateurs",
    "ar": "جيرارد بيكيه: من المسيرة الرياضية إلى منافسة صناع المحتوى",
    "es": "Gerard Piqué: del fútbol profesional a la competición de creadores"
  }
},
"didier-drogba-africa-education-health-foundation-legacy": {
  "afterBlock": 12,
  "file": "careers5-drogba-facts-en.png",
  "localizedFiles": {
    "en": "careers5-drogba-facts-en.png",
    "fr": "careers5-drogba-facts-fr.png",
    "ar": "careers5-drogba-facts-ar.png",
    "es": "careers5-drogba-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.didierdrogbafoundation.org/en/history-foundation",
  "credit": "PRESDA · didierdrogbafoundation.org / who.int / uclga.org / peace-sport.org / uefa.com / undp.org",
  "license": null,
  "captions": {
    "en": "Didier Drogba: football recognition and public commitments",
    "fr": "Didier Drogba : reconnaissance sportive et engagements publics",
    "ar": "ديدييه دروغبا: إنجاز كروي والتزامات عامة",
    "es": "Didier Drogba: reconocimiento deportivo y compromisos públicos"
  }
},
"bruno-mars-father-peter-hernandez-death-tribute": {
  "afterBlock": 12,
  "file": "spotlight5-bruno-facts-en.png",
  "localizedFiles": {
    "en": "spotlight5-bruno-facts-en.png",
    "fr": "spotlight5-bruno-facts-fr.png",
    "ar": "spotlight5-bruno-facts-ar.png",
    "es": "spotlight5-bruno-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://abcnews.com/amp/GMA/Culture/bruno-mars-remembers-late-father-musical-lessons-passed/story?id=138303867",
  "credit": "PRESDA · abcnews.com / midweek.com / usmagazine.com / news.iheart.com",
  "license": null,
  "captions": {
    "en": "Peter Hernandez: documented points in the family story",
    "fr": "Peter Hernandez : repères documentés de l’histoire familiale",
    "ar": "بيتر هيرنانديز: محطات موثقة في قصة الأسرة",
    "es": "Peter Hernandez: puntos documentados de la historia familiar"
  }
},
"chris-brown-temporary-12000-monthly-child-support": {
  "afterBlock": 12,
  "file": "spotlight5-chris-facts-en.png",
  "localizedFiles": {
    "en": "spotlight5-chris-facts-en.png",
    "fr": "spotlight5-chris-facts-fr.png",
    "ar": "spotlight5-chris-facts-ar.png",
    "es": "spotlight5-chris-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.billboard.com/business/legal/chris-brown-to-increase-child-support-to-ex-diamond-1236385727/",
  "credit": "PRESDA · billboard.com / people.com / lawcommentary.com / selfhelp.courts.ca.gov",
  "license": null,
  "captions": {
    "en": "Chris Brown’s reported temporary arrangement: separate obligations",
    "fr": "L’accord provisoire rapporté de Chris Brown : obligations distinctes",
    "ar": "ترتيب كريس براون المؤقت المنشور: التزامات منفصلة",
    "es": "El acuerdo provisional publicado de Chris Brown: obligaciones distintas"
  }
},
"kylie-jenner-timothee-chalamet-lakers-kiss-november-2026": {
  "afterBlock": 12,
  "file": "spotlight5-kylie-facts-en.png",
  "localizedFiles": {
    "en": "spotlight5-kylie-facts-en.png",
    "fr": "spotlight5-kylie-facts-fr.png",
    "ar": "spotlight5-kylie-facts-ar.png",
    "es": "spotlight5-kylie-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://nz.news.yahoo.com/kylie-jenner-timoth-e-chalamet-103748824.html",
  "credit": "PRESDA · nz.news.yahoo.com / vogue.com / nba.com / elle.com",
  "license": null,
  "captions": {
    "en": "The November courtside outing: confirmed dates and setting",
    "fr": "La sortie de novembre : dates et cadre confirmés",
    "ar": "أمسية نوفمبر: التواريخ والمكان المؤكدان",
    "es": "La salida de noviembre: fechas y escenario confirmados"
  }
},
"faouzia-unethical-us-billboard-hot-100-debut-95": {
  "afterBlock": 12,
  "file": "spotlight5-faouzia-facts-en.png",
  "localizedFiles": {
    "en": "spotlight5-faouzia-facts-en.png",
    "fr": "spotlight5-faouzia-facts-fr.png",
    "ar": "spotlight5-faouzia-facts-ar.png",
    "es": "spotlight5-faouzia-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://ca.billboard.com/music/chart-beat/faouzia-unethical-billboard-hot-100",
  "credit": "PRESDA · ca.billboard.com / faouziaofficial.com",
  "license": null,
  "captions": {
    "en": "Faouzia’s chart milestones: keep each market distinct",
    "fr": "Faouzia : distinguer les marchés et les étapes",
    "ar": "محطات فوزية في القوائم: تمييز كل سوق",
    "es": "Faouzia en las listas: cada mercado por separado"
  }
},
"the-rock-survivor-series-2026-appearance-anniversary": {
  "afterBlock": 12,
  "file": "spotlight5-rock-facts-en.png",
  "localizedFiles": {
    "en": "spotlight5-rock-facts-en.png",
    "fr": "spotlight5-rock-facts-fr.png",
    "ar": "spotlight5-rock-facts-ar.png",
    "es": "spotlight5-rock-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.wwe.com/article/survivor-series/the-rock-is-coming-to-survivor-series",
  "credit": "PRESDA · wwe.com / corporate.wwe.com",
  "license": null,
  "captions": {
    "en": "The Rock and Survivor Series: historical record and current plans",
    "fr": "The Rock et Survivor Series : archives et projets actuels",
    "ar": "ذا روك وسيرفايفر سيريز: السجل التاريخي والخطط الحالية",
    "es": "The Rock y Survivor Series: registro histórico y planes actuales"
  }
},
"david-beckham-billion-dollar-fortune-business-empire": {
  "afterBlock": 12,
  "file": "enterprise5-beckham-facts-en.png",
  "localizedFiles": {
    "en": "enterprise5-beckham-facts-en.png",
    "fr": "enterprise5-beckham-facts-fr.png",
    "ar": "enterprise5-beckham-facts-ar.png",
    "es": "enterprise5-beckham-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://tollbit.forbes.com/sites/maneetahuja/2026/05/22/new-billionaire-david-beckham-on-his-family-and-legacy/?streamIndex=0",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "David Beckham’s business: milestones and financial distinctions. Sources: Forbes, Authentic, MLS and Safilo.",
    "fr": "David Beckham : étapes commerciales et distinctions financières. Sources : Forbes, Authentic, MLS et Safilo.",
    "ar": "أعمال ديفيد بيكهام: محطات وتمييزات مالية. المصادر: فوربس وأوثنتيك وMLS وسافيلو.",
    "es": "David Beckham: hitos empresariales y conceptos financieros. Fuentes: Forbes, Authentic, MLS y Safilo."
  }
},
"george-weah-ballon-dor-liberia-president-history": {
  "afterBlock": 12,
  "file": "enterprise5-weah-facts-en.png",
  "localizedFiles": {
    "en": "enterprise5-weah-facts-en.png",
    "fr": "enterprise5-weah-facts-fr.png",
    "ar": "enterprise5-weah-facts-ar.png",
    "es": "enterprise5-weah-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://ballondor.com/all-rankings?year=1995",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "George Weah: football recognition and political chronology. Sources: Ballon d’Or, Executive Mansion and OHCHR.",
    "fr": "George Weah : repères sportifs et politiques. Sources : Ballon d’Or, Executive Mansion et HCDH.",
    "ar": "جورج ويا: التكريم الكروي والتسلسل السياسي. المصادر: الكرة الذهبية والقصر التنفيذي والمفوضية الأممية.",
    "es": "George Weah: reconocimiento deportivo y cronología política. Fuentes: Balón de Oro, Executive Mansion y ACNUDH."
  }
},
"serena-williams-starfire-ventures-200-million-fund-target": {
  "afterBlock": 12,
  "file": "enterprise5-serena-facts-en.png",
  "localizedFiles": {
    "en": "enterprise5-serena-facts-en.png",
    "fr": "enterprise5-serena-facts-fr.png",
    "ar": "enterprise5-serena-facts-ar.png",
    "es": "enterprise5-serena-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.vcaonline.com/news/2026111621/serena-williams-and-beth-ferreira-launch-starfire-ventures-the-next-chapter-in-a-decade-long-investing-partnership/",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "Starfire Ventures: confirmed milestones and fundraising context. Sources: Starfire’s company announcement.",
    "fr": "Starfire Ventures : repères et contexte de collecte. Sources : communiqué de Starfire.",
    "ar": "ستارفاير فنتشرز: المحطات وسياق جمع رأس المال. المصادر: بيان ستارفاير.",
    "es": "Starfire Ventures: hitos y contexto de captación. Fuentes: comunicado de Starfire."
  }
},
"anthropic-record-ipo-employee-paper-wealth-2026": {
  "afterBlock": 12,
  "file": "enterprise5-anthropic-facts-en.png",
  "localizedFiles": {
    "en": "enterprise5-anthropic-facts-en.png",
    "fr": "enterprise5-anthropic-facts-fr.png",
    "ar": "enterprise5-anthropic-facts-ar.png",
    "es": "enterprise5-anthropic-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.sec.gov/Archives/edgar/data/2130357/000162828026074937/anthropicpbc-fwppricing.htm",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "Anthropic’s IPO: figures with different meanings. Sources: SEC final pricing terms.",
    "fr": "Anthropic : des chiffres de nature différente. Sources : conditions finales déposées à la SEC.",
    "ar": "طرح أنثروبيك: أرقام بمعانٍ مختلفة. المصادر: شروط التسعير النهائية لدى الهيئة.",
    "es": "Anthropic: cifras con significados diferentes. Fuentes: condiciones finales registradas en SEC."
  }
},
"db-cooper-hijacking-1971-ransom-unsolved-mystery": {
  "afterBlock": 12,
  "file": "enterprise5-cooper-facts-en.png",
  "localizedFiles": {
    "en": "enterprise5-cooper-facts-en.png",
    "fr": "enterprise5-cooper-facts-fr.png",
    "ar": "enterprise5-cooper-facts-ar.png",
    "es": "enterprise5-cooper-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.fbi.gov/history/cases-and-criminals/db-cooper-hijacking",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "D. B. Cooper: documented events and investigative limits. Sources: FBI case history and dated statements.",
    "fr": "D. B. Cooper : événements documentés et limites. Sources : historique et communiqués datés du FBI.",
    "ar": "دي بي كوبر: أحداث موثقة وحدود التحقيق. المصادر: تاريخ القضية وبيانات المكتب المؤرخة.",
    "es": "D. B. Cooper: hechos documentados y límites. Fuentes: historial y comunicados fechados del FBI."
  }
},
"turkiye-cop31-26-billion-investment-deals-plans": {
  "afterBlock": 12,
  "file": "athletes5-cop-facts-en.png",
  "localizedFiles": {
    "en": "athletes5-cop-facts-en.png",
    "fr": "athletes5-cop-facts-fr.png",
    "ar": "athletes5-cop-facts-ar.png",
    "es": "athletes5-cop-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.dha.com.tr/gundem/cop31de-turkiyenin-26-milyar-dolari-asan-yesil-yatirimlari-one-cikti-2982564",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "COP31 investment figures: different commitments and time horizons. Sources: COP31 presidency/DHA and EBRD.",
    "fr": "COP31 : des montants de nature et d’échéance différentes. Sources : présidence COP31/DHA et BERD.",
    "ar": "أرقام COP31: التزامات وآجال مختلفة. المصادر: رئاسة COP31 وDHA والبنك الأوروبي.",
    "es": "COP31: cifras con compromisos y horizontes diferentes. Fuentes: presidencia COP31/DHA y BERD."
  }
},
"gareth-bale-retirement-golf-business-par59": {
  "afterBlock": 12,
  "file": "athletes5-bale-facts-en.png",
  "localizedFiles": {
    "en": "athletes5-bale-facts-en.png",
    "fr": "athletes5-bale-facts-fr.png",
    "ar": "athletes5-bale-facts-ar.png",
    "es": "athletes5-bale-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://nation.cymru/culture/gareth-bales-par-59-golf-bar-is-sold-to-business-group/",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "Gareth Bale: football, golf and hospitality milestones. Sources: Real Madrid, R&A and Nation.Cymru.",
    "fr": "Gareth Bale : repères sportifs et entrepreneuriaux. Sources : Real Madrid, R&A et Nation.Cymru.",
    "ar": "غاريث بيل: محطات كرة القدم والغولف والضيافة. المصادر: ريال مدريد وR&A وNation.Cymru.",
    "es": "Gareth Bale: hitos del fútbol, el golf y la hostelería. Fuentes: Real Madrid, R&A y Nation.Cymru."
  }
},
"andrea-pirlo-pratum-coller-family-wine-business": {
  "afterBlock": 12,
  "file": "athletes5-pirlo-facts-en.png",
  "localizedFiles": {
    "en": "athletes5-pirlo-facts-en.png",
    "fr": "athletes5-pirlo-facts-fr.png",
    "ar": "athletes5-pirlo-facts-ar.png",
    "es": "athletes5-pirlo-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.mixerplanet.com/vini-da-star-non-solo-calcio-per-andrea-pirlo",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "Andrea Pirlo and Pratum Coller: the documented chronology. Sources: Pirlo interviews and FIFA.",
    "fr": "Andrea Pirlo et Pratum Coller : chronologie documentée. Sources : entretiens de Pirlo et FIFA.",
    "ar": "أندريا بيرلو وبراتوم كولر: التسلسل الزمني الموثق. المصادر: مقابلات بيرلو وفيفا.",
    "es": "Andrea Pirlo y Pratum Coller: cronología documentada. Fuentes: entrevistas de Pirlo y FIFA."
  }
},
"divock-origi-harvard-crossover-business-retirement": {
  "afterBlock": 12,
  "file": "athletes5-origi-facts-en.png",
  "localizedFiles": {
    "en": "athletes5-origi-facts-en.png",
    "fr": "athletes5-origi-facts-fr.png",
    "ar": "athletes5-origi-facts-ar.png",
    "es": "athletes5-origi-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.hbs.edu/crossover",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "Divock Origi: retirement and business-study chronology. Sources: Liverpool FC, HBS and reporting.",
    "fr": "Divock Origi : retraite et formation commerciale. Sources : Liverpool FC, HBS et articles cités.",
    "ar": "ديفوك أوريغي: تسلسل الاعتزال ودراسة الأعمال. المصادر: ليفربول وهارفارد والتقارير المشار إليها.",
    "es": "Divock Origi: retirada y formación empresarial. Fuentes: Liverpool FC, HBS y cobertura citada."
  }
},
"eden-hazard-signature-wine-fabio-cordella-retirement": {
  "afterBlock": 12,
  "file": "athletes5-hazard-facts-en.png",
  "localizedFiles": {
    "en": "athletes5-hazard-facts-en.png",
    "fr": "athletes5-hazard-facts-fr.png",
    "ar": "athletes5-hazard-facts-ar.png",
    "es": "athletes5-hazard-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.fabiocordella.com/champions/eden-hazard",
  "credit": "PRESDA",
  "license": null,
  "captions": {
    "en": "Eden Hazard’s wine collaboration: a dated timeline. Sources: Chelsea, Gazzetta, producer and event.",
    "fr": "La collaboration viticole d’Eden Hazard : repères datés. Sources : Chelsea, Gazzetta, producteur et événement.",
    "ar": "تعاون إيدن هازارد في النبيذ: محطات مؤرخة. المصادر: تشيلسي وغازيتا والمنتج والفعالية.",
    "es": "La colaboración vinícola de Eden Hazard: cronología. Fuentes: Chelsea, Gazzetta, productor y evento."
  }
},
"essex-whale-sank-ship-1820": {
  "afterBlock": 12,
  "file": "nov20-essex-facts-en.png",
  "localizedFiles": {
    "en": "nov20-essex-facts-en.png",
    "fr": "nov20-essex-facts-fr.png",
    "ar": "nov20-essex-facts-ar.png",
    "es": "nov20-essex-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://digitalcommons.unl.edu/etas/98/",
  "credit": "PRESDA · digitalcommons.unl.edu",
  "license": null,
  "captions": {
    "en": "The Essex: four stages. Sources: Chase’s 1821 narrative and the institutional accounts cited below. Dates describe distinct events, not a single rescue.",
    "fr": "L’Essex en quatre étapes. Sources : récit de Chase et travaux institutionnels cités. Les sauvetages sont distincts.",
    "ar": "إسكس في أربع مراحل. المصادر: رواية تشيس والأعمال المؤسسية المرتبطة أدناه. وقائع الإنقاذ منفصلة.",
    "es": "El Essex en cuatro etapas. Fuentes: relato de Chase y estudios institucionales citados. Los rescates fueron distintos."
  }
},
"antikythera-mechanism-ancient-analog-computer": {
  "afterBlock": 12,
  "file": "nov20-antikythera-facts-en.png",
  "localizedFiles": {
    "en": "nov20-antikythera-facts-en.png",
    "fr": "nov20-antikythera-facts-fr.png",
    "ar": "nov20-antikythera-facts-ar.png",
    "es": "nov20-antikythera-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://olympicgames.culture.gov.gr/en/texnologia/1_Mixanismos-Antikithirwn.html",
  "credit": "PRESDA · olympicgames.culture.gov.gr",
  "license": null,
  "captions": {
    "en": "Antikythera: evidence and interpretation. Sources: Greek Ministry of Culture, research-project chronology and UCL. Approximate dating is not a known manufacturing year.",
    "fr": "Anticythère : preuves et interprétations. Sources : ministère grec, chronologie du projet et UCL. La datation demeure approximative.",
    "ar": "أنتيكيثيرا: دليل وتفسير. المصادر: وزارة الثقافة اليونانية وتسلسل المشروع وكلية لندن الجامعية. التأريخ تقريبي.",
    "es": "Anticitera: evidencia e interpretación. Fuentes: Ministerio de Cultura griego, cronología del proyecto y UCL. La datación es aproximada."
  }
},
"uber-eats-zipline-drone-delivery-houston-2026": {
  "afterBlock": 12,
  "file": "nov20-uber-facts-en.png",
  "localizedFiles": {
    "en": "nov20-uber-facts-en.png",
    "fr": "nov20-uber-facts-fr.png",
    "ar": "nov20-uber-facts-ar.png",
    "es": "nov20-uber-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.zipline.com/newsroom/zipline-is-now-delivering-to-uber-eats-customers-in-houston",
  "credit": "PRESDA · www.zipline.com",
  "license": null,
  "captions": {
    "en": "Uber Eats and Zipline: confirmed milestones and limits. Sources: Uber, Zipline and the FAA. Expansion and volume targets are not completed results.",
    "fr": "Uber Eats et Zipline : étapes confirmées et limites. Sources : Uber, Zipline et FAA. Les objectifs ne sont pas des résultats accomplis.",
    "ar": "أوبر إيتس وزيبلاين: محطات مؤكدة وحدودها. المصادر: أوبر وزيبلاين وإدارة الطيران الفيدرالية. الأهداف ليست نتائج مكتملة.",
    "es": "Uber Eats y Zipline: hitos y límites. Fuentes: Uber, Zipline y FAA. Los objetivos de expansión y volumen no son resultados completados."
  }
},
"snapchat-easy-lens-cli-ai-coding-tools-2026": {
  "afterBlock": 12,
  "file": "nov20-snap-facts-en.png",
  "localizedFiles": {
    "en": "nov20-snap-facts-en.png",
    "fr": "nov20-snap-facts-fr.png",
    "ar": "nov20-snap-facts-ar.png",
    "es": "nov20-snap-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://newsroom.snap.com/introducing-easy-lens-cli",
  "credit": "PRESDA · newsroom.snap.com",
  "license": null,
  "captions": {
    "en": "Easy Lens CLI: the workflow and its boundaries. Sources: Snap’s November 18 announcement and developer documentation. Tool access does not guarantee publication or earnings.",
    "fr": "Easy Lens CLI : étapes et limites. Sources : annonce Snap et documentation. L’accès ne garantit ni publication ni revenu.",
    "ar": "Easy Lens CLI: المراحل والحدود. المصادر: إعلان سناب ووثائقها. الوصول لا يضمن النشر أو الدخل.",
    "es": "Easy Lens CLI: etapas y límites. Fuentes: anuncio de Snap y documentación. Acceder no garantiza publicar ni cobrar."
  }
},
"nike-formula-1-apparel-uniform-partner-2027": {
  "afterBlock": 12,
  "file": "nov20-nike-facts-en.png",
  "localizedFiles": {
    "en": "nov20-nike-facts-en.png",
    "fr": "nov20-nike-facts-fr.png",
    "ar": "nov20-nike-facts-ar.png",
    "es": "nov20-nike-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://about.nike.com/en/newsroom/releases/nike-and-formula-1-join-forces-in-long-term-global-partnership",
  "credit": "PRESDA · about.nike.com",
  "license": null,
  "captions": {
    "en": "Nike and Formula 1: what starts when. Sources: Nike and Formula 1’s official announcements. The staff role is distinct from individual team and driver contracts.",
    "fr": "Nike et Formula 1 : dates et périmètre. Sources : annonces officielles. Le personnel de F1 est distinct des contrats des équipes et pilotes.",
    "ar": "نايكي وفورمولا ١: التوقيت والنطاق. المصادر: الإعلانات الرسمية. دور الموظفين مختلف عن عقود الفرق والسائقين.",
    "es": "Nike y Fórmula 1: fechas y alcance. Fuentes: anuncios oficiales. El personal de F1 es distinto de los contratos de equipos y pilotos."
  }
},
"potatoes-simulated-lunar-soil-oregon-state-2026": {
  "afterBlock": 12,
  "file": "culture5-potatoes-facts-en.png",
  "localizedFiles": {
    "en": "culture5-potatoes-facts-en.png",
    "fr": "culture5-potatoes-facts-fr.png",
    "ar": "culture5-potatoes-facts-ar.png",
    "es": "culture5-potatoes-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.nature.com/articles/s41526-026-00668-z",
  "credit": "PRESDA · www.nature.com",
  "license": null,
  "captions": {
    "en": "What the November 19 study establishes. Source: Handy and colleagues, npj Microgravity. These are Earth greenhouse experiments.",
    "fr": "Ce qu’établit l’étude du 19 novembre. Source : Handy et collègues, npj Microgravity. Expériences menées en serre sur Terre.",
    "ar": "ما تثبته دراسة ١٩ نوفمبر. المصدر: هاندي وزملاؤه، npj Microgravity. تجارب دفيئة على الأرض.",
    "es": "Qué establece el estudio del 19 de noviembre. Fuente: Handy y colaboradores, npj Microgravity. Ensayos terrestres en invernadero."
  }
},
"moroccan-zellige-geometry-color-craft": {
  "afterBlock": 12,
  "file": "culture5-zellige-facts-en.png",
  "localizedFiles": {
    "en": "culture5-zellige-facts-en.png",
    "fr": "culture5-zellige-facts-fr.png",
    "ar": "culture5-zellige-facts-ar.png",
    "es": "culture5-zellige-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.neprajz.hu/en/kiallitasok/kamara/zellige-moroccos-historical-legacy-and-living-heritage.html",
  "credit": "PRESDA · www.neprajz.hu",
  "license": null,
  "captions": {
    "en": "Four aspects of traditional zellige. Sources: Museum of Ethnography, The Met and UNESCO. These describe a craft, not a universal specification for every tile product.",
    "fr": "Quatre aspects du zellige traditionnel. Sources : Musée d’ethnographie, Met et UNESCO. Il s’agit d’un métier, non d’une norme universelle pour tout carreau.",
    "ar": "أربعة جوانب من الزليج التقليدي. المصادر: متحف الإثنوغرافيا والمتروبوليتان واليونسكو. وصف لحرفة، لا مواصفة واحدة لكل منتج بلاطات.",
    "es": "Cuatro aspectos del zellige tradicional. Fuentes: Museo de Etnografía, Met y UNESCO. Describen un oficio, no una norma universal para toda baldosa."
  }
},
"griezmann-mls-newcomer-year-2026": {
  "afterBlock": 12,
  "file": "culture5-griezmann-facts-en.png",
  "localizedFiles": {
    "en": "culture5-griezmann-facts-en.png",
    "fr": "culture5-griezmann-facts-fr.png",
    "ar": "culture5-griezmann-facts-ar.png",
    "es": "culture5-griezmann-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.mlssoccer.com/news/orlando-city-sc-forward-antoine-griezmann-named-2026-mls-newcomer-of-the-year",
  "credit": "PRESDA · www.mlssoccer.com",
  "license": null,
  "captions": {
    "en": "Griezmann’s 2026 MLS regular season. Sources: MLS and Orlando’s November 17 award announcements. Goals and assists combine to 22 direct contributions.",
    "fr": "Saison régulière MLS 2026 de Griezmann. Sources : MLS et Orlando, 17 novembre. Buts et passes donnent 22 contributions directes.",
    "ar": "موسم غريزمان المنتظم في MLS لعام ٢٠٢٦. المصدران: الدوري وأورلاندو في ١٧ نوفمبر. الأهداف والتمريرات تساوي ٢٢ مساهمة مباشرة.",
    "es": "Temporada regular MLS 2026 de Griezmann. Fuentes: MLS y Orlando, 17 de noviembre. Goles y asistencias suman 22 contribuciones."
  }
},
"gordon-ramsay-hollywood-walk-fame-star-2026": {
  "afterBlock": 12,
  "file": "culture5-ramsay-facts-en.png",
  "localizedFiles": {
    "en": "culture5-ramsay-facts-en.png",
    "fr": "culture5-ramsay-facts-fr.png",
    "ar": "culture5-ramsay-facts-ar.png",
    "es": "culture5-ramsay-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://walkoffame.com/gordon-ramsay/",
  "credit": "PRESDA · walkoffame.com",
  "license": null,
  "captions": {
    "en": "Ramsay’s Hollywood honour and production context. Sources: Hollywood Walk of Fame and FOX Corporation.",
    "fr": "Honneur hollywoodien et contexte de production. Sources : Hollywood Walk of Fame et FOX Corporation.",
    "ar": "تكريم هوليوود وسياق الإنتاج. المصدران: ممشى المشاهير وفوكس كوربوريشن.",
    "es": "Honor de Hollywood y contexto de producción. Fuentes: Paseo de la Fama y FOX Corporation."
  }
},
"marco-reus-la-galaxy-player-year-2026": {
  "afterBlock": 12,
  "file": "culture5-reus-facts-en.png",
  "localizedFiles": {
    "en": "culture5-reus-facts-en.png",
    "fr": "culture5-reus-facts-fr.png",
    "ar": "culture5-reus-facts-ar.png",
    "es": "culture5-reus-facts-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.lagalaxy.com/news/la-galaxy-announce-2026-team-awards",
  "credit": "PRESDA · www.lagalaxy.com",
  "license": null,
  "captions": {
    "en": "Reus’s 2026 MLS regular season. Source: LA Galaxy’s November 18 team-awards announcement. Key passes are separate from goals plus assists.",
    "fr": "Saison régulière MLS 2026 de Reus. Source : Galaxy, 18 novembre. Les passes clés sont distinctes de l’addition buts-passes décisives.",
    "ar": "موسم رويس المنتظم في MLS لعام ٢٠٢٦. المصدر: إعلان غالاكسي في ١٨ نوفمبر. التمريرات المفتاحية منفصلة عن مجموع الأهداف والتمريرات الحاسمة.",
    "es": "Temporada regular MLS 2026 de Reus. Fuente: Galaxy, 18 de noviembre. Los pases clave son distintos de goles más asistencias."
  }
},
"trump-xi-putin-shenzhen-three-way-summit-2026": {
  "afterBlock": 12,
  "file": "news4-summit-timeline-en.png",
  "localizedFiles": {
    "en": "news4-summit-timeline-en.png",
    "fr": "news4-summit-timeline-fr.png",
    "ar": "news4-summit-timeline-ar.png",
    "es": "news4-summit-timeline-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.fmprc.gov.cn/eng/xw/wsrc/202611/t20261116_12059663.html",
  "credit": "PRESDA · www.fmprc.gov.cn",
  "license": null,
  "captions": {
    "en": "PRESDA timeline distinguishing the summit announcement, APEC’s scheduled gathering and AP’s report of the three leaders’ meeting. It does not depict an agreed treaty or settlement.",
    "fr": "Chronologie PRESDA distinguant l’annonce du sommet, le calendrier de l’APEC et le compte rendu de la rencontre par l’AP. Elle ne représente pas un traité ou un règlement conclu.",
    "ar": "خط زمني من PRESDA يميز إعلان القمة وموعد أبيك وتقرير أسوشيتد برس عن لقاء القادة. ولا يمثل معاهدة أو تسوية متفقاً عليها.",
    "es": "Cronología de PRESDA que distingue el anuncio, el calendario de APEC y la información de AP sobre la reunión. No representa un tratado ni una solución acordada."
  }
},
"gta-vi-launch-november-19-2026-13-years": {
  "afterBlock": 12,
  "file": "news4-gta-timeline-en.png",
  "localizedFiles": {
    "en": "news4-gta-timeline-en.png",
    "fr": "news4-gta-timeline-fr.png",
    "ar": "news4-gta-timeline-ar.png",
    "es": "news4-gta-timeline-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.rockstargames.com/VI",
  "credit": "PRESDA · www.rockstargames.com",
  "license": null,
  "captions": {
    "en": "PRESDA timeline of GTA V’s original date, GTA VI’s dated release announcement, pre-loading and the November 19 launch. The interval is between releases, not a claimed continuous production schedule.",
    "fr": "Chronologie PRESDA de la date initiale de GTA V, de l’annonce de GTA VI, du préchargement et du lancement du 19 novembre. L’intervalle sépare les sorties, sans décrire une production continue.",
    "ar": "خط زمني من PRESDA لموعد GTA V الأصلي وإعلان GTA VI والتحميل المسبق وإطلاق ١٩ نوفمبر. الفاصل بين إصدارين، وليس ادعاءً بمدة إنتاج مستمرة.",
    "es": "Cronología de PRESDA de GTA V, el anuncio de GTA VI, la precarga y el estreno del 19 de noviembre. El intervalo es entre lanzamientos, no un calendario de producción continua."
  }
},
"south-korea-one-trillion-exports-2026": {
  "afterBlock": 12,
  "file": "news4-korea-timeline-en.png",
  "localizedFiles": {
    "en": "news4-korea-timeline-en.png",
    "fr": "news4-korea-timeline-fr.png",
    "ar": "news4-korea-timeline-ar.png",
    "es": "news4-korea-timeline-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.motir.go.kr/kor/article/ATCL3f49a5a8c/172422/view",
  "credit": "PRESDA · www.motir.go.kr",
  "license": null,
  "captions": {
    "en": "Selected first annual export thresholds from MOTIR’s November 19 historical table. Figures are nominal US dollars; the 2026 crossing is provisional and is not a trade-surplus figure.",
    "fr": "Premiers seuils annuels sélectionnés du tableau ministériel du 19 novembre. Dollars américains nominaux ; le seuil 2026 est provisoire et ne mesure pas l’excédent commercial.",
    "ar": "حدود سنوية مختارة من جدول الوزارة التاريخي المنشور في ١٩ نوفمبر. القيم بالدولار الاسمي؛ عبور ٢٠٢٦ أولي وليس رقماً للفائض التجاري.",
    "es": "Primeros umbrales anuales seleccionados de la tabla ministerial del 19 de noviembre. Dólares nominales; el cruce de 2026 es provisional y no representa superávit comercial."
  }
},
"formula-1-lego-22-driver-minifigures-2027": {
  "afterBlock": 12,
  "file": "news4-lego-timeline-en.png",
  "localizedFiles": {
    "en": "news4-lego-timeline-en.png",
    "fr": "news4-lego-timeline-fr.png",
    "ar": "news4-lego-timeline-ar.png",
    "es": "news4-lego-timeline-es.png"
  },
  "width": 760,
  "height": 1130,
  "source": "https://www.lego.com/en-mx/aboutus/news/2026/november/lego-f1-las-vegas-grand-prix-2027-portfolio-reveal",
  "credit": "PRESDA · www.lego.com",
  "license": null,
  "captions": {
    "en": "PRESDA timeline separating the partnership, collection reveal, promotional race and March 1, 2027 retail release. The product range represents the 2026 grid.",
    "fr": "Chronologie PRESDA distinguant partenariat, présentation, course promotionnelle et sortie commerciale du 1er mars 2027. La gamme représente la grille 2026.",
    "ar": "خط زمني من PRESDA يفصل الشراكة والكشف والسباق الترويجي والإصدار التجاري في ١ مارس ٢٠٢٧. تمثل المجموعة شبكة ٢٠٢٦.",
    "es": "Cronología de PRESDA que separa asociación, presentación, carrera promocional y venta desde el 1 de marzo de 2027. La gama representa la parrilla de 2026."
  }
},
"turkey-constitutional-court-prostitution-law-article-128-2026": {
  "afterBlock": 7,
  "file": "turkey-article-128-official-judgment-page1.png",
  "width": 910,
  "height": 1287,
  "source": "https://www.resmigazete.gov.tr/eskiler/2026/11/20261117-3.pdf",
  "credit": "Constitutional Court of Türkiye / Official Gazette, November 17, 2026",
  "license": null,
  "captions": {
    "en": "First page of judgment E.2025/144, K.2026/164, published in Türkiye’s Official Gazette on November 17, 2026. This is a reproduced legal document, separate from the supplied hero illustration.",
    "fr": "Première page de l’arrêt E.2025/144, K.2026/164, publié au Journal officiel turc le 17 novembre 2026. Ce document juridique reproduit est distinct de l’illustration d’ouverture fournie.",
    "ar": "الصفحة الأولى من الحكم E.2025/144، K.2026/164 المنشور في الجريدة الرسمية التركية في ١٧ نوفمبر ٢٠٢٦. هذه نسخة من وثيقة قانونية، منفصلة عن الرسم التحريري في افتتاح المقال.",
    "es": "Primera página de la sentencia E.2025/144, K.2026/164, publicada en el Boletín Oficial turco el 17 de noviembre de 2026. Es una reproducción documental, distinta de la ilustración de cabecera."
  }
},
"achraf-hakimi-foundation-lwalida-mothers-kenitra": {
  "afterBlock": 12,
  "file": "hakimi-morocco-employment-2025-en.png",
  "localizedFiles": {
    "en": "hakimi-morocco-employment-2025-en.png",
    "fr": "hakimi-morocco-employment-2025-fr.png",
    "ar": "hakimi-morocco-employment-2025-ar.png",
    "es": "hakimi-morocco-employment-2025-es.png"
  },
  "width": 1100,
  "height": 650,
  "source": "https://www.hcp.ma/file/249358/",
  "credit": "PRESDA · HCP, Women in Figures 2026",
  "license": null,
  "captions": {
    "en": "Original PRESDA graphic using HCP’s 2025 national employment rates: women 15.1%, men 61.1%, population aged 15 and over. These are employment rates, not labour-force participation or L’WALIDA outcomes.",
    "fr": "Graphique original de PRESDA à partir des taux d’emploi nationaux du HCP pour 2025 : femmes 15,1 %, hommes 61,1 %, population de 15 ans et plus. Il ne s’agit ni du taux d’activité ni de résultats de L’WALIDA.",
    "ar": "رسم أصلي من PRESDA باستخدام معدلات الشغل الوطنية لعام ٢٠٢٥ لدى المندوبية: النساء ١٥٫١٪ والرجال ٦١٫١٪، لمن تبلغ أعمارهم ١٥ عاماً فأكثر. هذه معدلات شغل، وليست معدلات نشاط اقتصادي أو نتائج «الواليدة».",
    "es": "Gráfico original de PRESDA con tasas nacionales de empleo del HCP de 2025: mujeres 15,1 %, hombres 61,1 %, población de 15 años o más. No son tasas de participación laboral ni resultados de L’WALIDA."
  }
},
"morocco-independence-day-71-years-1955-2026": {
  "afterBlock": 13,
  "file": "morocco-mohammed-v-berkeley-1957.jpg",
  "width": 640,
  "height": 833,
  "source": "https://commons.wikimedia.org/wiki/File:Mohammed_V_Morocco_1957.lowres.jpeg",
  "credit": "Lawrence Berkeley National Laboratory / Wikimedia Commons",
  "license": "https://creativecommons.org/publicdomain/mark/1.0/",
  "captions": {
    "en": "Mohammed V during his visit to Lawrence Berkeley Laboratory on December 5, 1957. This documented visit followed independence; it is separate from the supplied signing image.",
    "fr": "Mohammed V lors de sa visite au laboratoire Lawrence Berkeley le 5 décembre 1957. Cette visite documentée est postérieure à l’indépendance et distincte de l’image de signature fournie.",
    "ar": "محمد الخامس خلال زيارته مختبر لورنس بيركلي في ٥ ديسمبر ١٩٥٧. هذه زيارة موثّقة بعد الاستقلال، وهي منفصلة عن صورة التوقيع المقدّمة.",
    "es": "Mohamed V durante su visita al laboratorio Lawrence Berkeley el 5 de diciembre de 1957. La visita documentada fue posterior a la independencia y es distinta de la imagen de la firma."
  }
},
"egypt-saqqara-250-ancient-coffins-discovery": {
  "afterBlock": 12,
  "file": "egypt-tabakenkhonsu-coffin-met.jpg",
  "width": 3779,
  "height": 3219,
  "source": "https://commons.wikimedia.org/wiki/File:Outer_Coffin_of_Tabakenkhonsu_MET_1718.jpg",
  "credit": "The Metropolitan Museum of Art, 96.4.1a, b / Wikimedia Commons",
  "license": "https://creativecommons.org/publicdomain/zero/1.0/",
  "licenseLabel": "CC0",
  "captions": {
    "en": "The outer coffin of Tabakenkhonsu, about 680–670 BCE, in the Metropolitan Museum of Art. This comparative object is not one of the 250 coffins announced at Saqqara in 2022.",
    "fr": "Cercueil extérieur de Tabakenkhonsou, vers 680–670 avant notre ère, au Metropolitan Museum of Art. Cet objet de comparaison ne provient pas des 250 cercueils annoncés à Saqqara en 2022.",
    "ar": "التابوت الخارجي لتاباكنخونسو، نحو ٦٨٠–٦٧٠ قبل الميلاد، في متحف المتروبوليتان. هذا مثال للمقارنة وليس من توابيت سقارة الـ٢٥٠ المعلنة في ٢٠٢٢.",
    "es": "Ataúd exterior de Tabakenkhonsu, hacia 680–670 a. C., en el Metropolitan Museum of Art. Es una comparación y no uno de los 250 ataúdes de Saqqara anunciados en 2022."
  }
},
"battle-vertieres-haiti-napoleon-army-1803": {
  "afterBlock": 8,
  "file": "haiti-crete-pierrot-raffet-1839.jpg",
  "width": 1395,
  "height": 1032,
  "source": "https://commons.wikimedia.org/wiki/File:Combat_et_prise_de_la_Cr%C3%AAte-%C3%A0-Pierrot_-_Auguste_Raffet.jpg",
  "credit": "Auguste Raffet, engraving by Hébert, published 1839 / Wikimedia Commons",
  "license": "https://creativecommons.org/publicdomain/mark/1.0/",
  "captions": {
    "en": "An 1839 engraving after Auguste Raffet depicting the fighting at Crête-à-Pierrot in March 1802. It illustrates the earlier campaign, not the November 1803 Battle of Vertières.",
    "fr": "Gravure publiée en 1839 d’après Auguste Raffet représentant les combats de la Crête-à-Pierrot en mars 1802. Elle évoque la campagne antérieure, et non Vertières en novembre 1803.",
    "ar": "نقش منشور سنة ١٨٣٩ عن رسم لأوغوست رافيه يصوّر قتال كريت آ بييرو في مارس ١٨٠٢. يوضح مرحلة سابقة من الحملة، وليس معركة فيرتيير في نوفمبر ١٨٠٣.",
    "es": "Grabado de 1839 a partir de Auguste Raffet que representa Crête-à-Pierrot en marzo de 1802. Ilustra una campaña anterior, no la batalla de Vertières de noviembre de 1803."
  }
},
"merida-roman-wall-paintings-huerta-otero-2026": {
  "afterBlock": 16,
  "file": "merida-amphitheatre-paintings-nunez-2017.jpg",
  "width": 4000,
  "height": 3000,
  "source": "https://commons.wikimedia.org/wiki/File:Pinturas_del_Podium_del_anfiteatro,_M%C3%A9rida,_Espa%C3%B1a,_2017.jpg",
  "credit": "Benjamín Núñez González / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "licenseLabel": "CC BY-SA 4.0",
  "captions": {
    "en": "Paintings from Mérida’s amphitheatre podium, photographed in 2017. This museum example provides local context and is distinct from the newly exposed Huerta de Otero paintings.",
    "fr": "Peintures du podium de l’amphithéâtre de Mérida, photographiées en 2017. Cet exemple muséal fournit un contexte local et se distingue des nouvelles peintures de Huerta de Otero.",
    "ar": "رسوم منصة مدرّج ميريدا، في صورة من ٢٠١٧. يقدّم هذا المثال المتحفي سياقاً محلياً، وهو مختلف عن جداريات هويرتا دي أوتيرو التي كُشفت حديثاً.",
    "es": "Pinturas del podio del anfiteatro de Mérida, fotografiadas en 2017. Este ejemplo de museo aporta contexto local y es distinto del nuevo hallazgo de Huerta de Otero."
  }
},
"bagan-myanmar-ancient-kingdom-thousands-temples": {
  "afterBlock": 10,
  "file": "bagan-ananda-ye-phyo-paing-2017.jpg",
  "width": 3309,
  "height": 2206,
  "source": "https://commons.wikimedia.org/wiki/File:Ananda_temple_in_bagan.jpg",
  "credit": "Ye Phyo Paing / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "licenseLabel": "CC BY-SA 4.0",
  "captions": {
    "en": "Ananda Temple at Bagan, photographed by Ye Phyo Paing on July 7, 2017. The dated photograph documents an identifiable monument rather than current access or condition.",
    "fr": "Le temple Ananda à Bagan, photographié par Ye Phyo Paing le 7 juillet 2017. Cette vue datée documente un monument identifiable sans établir son accès ou son état actuels.",
    "ar": "معبد أناندا في باغان، صوّره يي فيو باينغ في ٧ يوليو ٢٠١٧. توثّق الصورة معلماً محدّداً في تاريخها، ولا تثبت حالته أو إمكان دخوله حالياً.",
    "es": "Templo Ananda de Bagan, fotografiado por Ye Phyo Paing el 7 de julio de 2017. La imagen fechada documenta un monumento concreto y no su acceso o estado actuales."
  }
},
"kindertransport-trains-saved-10000-children": {
  "afterBlock": 7,
  "file": "kindertransport-harwich-1938-bundesarchiv.jpg",
  "width": 796,
  "height": 566,
  "source": "https://commons.wikimedia.org/wiki/File:Bundesarchiv_Bild_183-1987-0928-501,_England,_J%C3%BCdische_Fl%C3%BCchtlingskinder.jpg",
  "credit": "Bundesarchiv, Bild 183-1987-0928-501 / photographer unknown / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/3.0/de/",
  "licenseLabel": "CC BY-SA 3.0 DE",
  "captions": {
    "en": "Refugee children arriving at Harwich in December 1938, in a documentary photograph preserved by the German Federal Archives.",
    "fr": "Enfants réfugiés arrivant à Harwich en décembre 1938, photographie documentaire conservée par les Archives fédérales allemandes.",
    "ar": "أطفال لاجئون يصلون إلى هارويتش في ديسمبر ١٩٣٨، في صورة وثائقية محفوظة لدى الأرشيف الاتحادي الألماني.",
    "es": "Niños refugiados llegan a Harwich en diciembre de 1938, en una fotografía documental conservada por el Archivo Federal alemán."
  }
},
"night-witches-soviet-women-night-bombers": {
  "afterBlock": 11,
  "file": "night-witches-po2-carlos-delgado.jpg",
  "width": 2816,
  "height": 2112,
  "source": "https://commons.wikimedia.org/wiki/File:Polikarpov_Po-2.jpg",
  "credit": "Carlos Delgado; CC-BY-SA / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/3.0/",
  "licenseLabel": "CC BY-SA 3.0",
  "captions": {
    "en": "A preserved Polikarpov Po-2 photographed by Carlos Delgado in 2010. It illustrates the aircraft type, rather than a wartime sortie by the regiment.",
    "fr": "Un Polikarpov Po-2 conservé, photographié par Carlos Delgado en 2010. L’image montre le type d’appareil, sans représenter une sortie de guerre du régiment.",
    "ar": "طائرة بوليكاربوف بو-٢ محفوظة، صوّرها كارلوس ديلغادو سنة ٢٠١٠. توضّح نوع الطائرة ولا توثّق طلعة حربية للفوج.",
    "es": "Un Polikarpov Po-2 conservado, fotografiado por Carlos Delgado en 2010. Ilustra el tipo de avión y no una salida de guerra del regimiento."
  }
},
"bangladesh-floating-schools-flood-classrooms": {
  "afterBlock": 13,
  "file": "bangladesh-tanguar-haor-marufish.jpg",
  "width": 4288,
  "height": 2848,
  "source": "https://commons.wikimedia.org/wiki/File:Bangladesh_Floating_school_in_Tanguar_Haor,_Bangladesh_(3943677608).jpg",
  "credit": "Marufish / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/2.0/",
  "licenseLabel": "CC BY-SA 2.0",
  "captions": {
    "en": "A floating school at Tanguar Haor, photographed in August 2009. This is a separate regional example; Shidhulai’s fleet figures in this article refer to its Chalan Beel programme.",
    "fr": "École flottante à Tanguar Haor, photographiée en août 2009. Cet exemple régional est distinct du programme de Shidhulai à Chalan Beel auquel se rapportent les chiffres de l’article.",
    "ar": "مدرسة عائمة في تانغوار هاور، في صورة من أغسطس ٢٠٠٩. هذا مثال إقليمي مستقل؛ أرقام أسطول شيدولاي الواردة في المقال تخص برنامجها في تشالان بيل.",
    "es": "Escuela flotante en Tanguar Haor, fotografiada en agosto de 2009. Es un ejemplo regional distinto; las cifras de Shidhulai corresponden a su programa de Chalan Beel."
  }
},
"shibam-yemen-mud-brick-skyscrapers": {
  "afterBlock": 33,
  "file": "shibam-hadhramaut-jialiang-gao.jpg",
  "width": 2000,
  "height": 1320,
  "source": "https://commons.wikimedia.org/wiki/File:Shibam_Wadi_Hadhramaut_Yemen.jpg",
  "credit": "Jialiang Gao / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/3.0/",
  "licenseLabel": "CC BY-SA 3.0",
  "captions": {
    "en": "Shibam’s tower houses in Wadi Hadramaut, photographed by Jialiang Gao in September 1999. This dated view records the city at that time.",
    "fr": "Les maisons-tours de Shibam dans le Wadi Hadramaut, photographiées par Jialiang Gao en septembre 1999. Cette vue documente la ville à cette date.",
    "ar": "بيوت شبام البرجية في وادي حضرموت، صوّرها جياليانغ غاو في سبتمبر ١٩٩٩. توثّق الصورة المدينة في ذلك التاريخ.",
    "es": "Casas torre de Shibam en Wadi Hadramaut, fotografiadas por Jialiang Gao en septiembre de 1999. La imagen documenta la ciudad en esa fecha."
  }
},
"rjukan-norway-sun-mirrors-winter-sunlight": {
  "afterBlock": 5,
  "file": "rjukan-gausta-winter-bengt-inge-larsson.jpg",
  "width": 3264,
  "height": 1836,
  "source": "https://commons.wikimedia.org/wiki/File:Rjukan_from_Gausta_20190316.jpg",
  "credit": "Bengt-Inge Larsson / Wikimedia Commons",
  "license": "https://creativecommons.org/licenses/by-sa/4.0/",
  "licenseLabel": "CC BY-SA 4.0",
  "captions": {
    "en": "Rjukan’s valley seen from Gausta on 16 March 2019. The winter landscape explains the mountain shade; this wide view does not show the mirrors themselves.",
    "fr": "La vallée de Rjukan vue depuis Gausta le 16 mars 2019. Le paysage hivernal explique l’ombre des montagnes ; les miroirs eux-mêmes ne sont pas visibles sur cette vue.",
    "ar": "وادي ريوكان كما يُرى من غاوستا في ١٦ مارس ٢٠١٩. يوضّح المشهد الشتوي ظل الجبال، ولا تُظهر هذه اللقطة الواسعة المرايا نفسها.",
    "es": "El valle de Rjukan visto desde Gausta el 16 de marzo de 2019. El paisaje invernal explica la sombra de las montañas; esta vista no muestra los espejos."
  }
},
  "derinkuyu-hidden-underground-city-turkey": {
    afterBlock: 15, file: "derinkuyu-stone-door-tobyj.jpg", width: 2448, height: 3264,
    source: "https://commons.wikimedia.org/wiki/File:Derinkuyu_door.jpg",
    credit: "TobyJ / Wikimedia Commons", license: "https://creativecommons.org/licenses/by-sa/4.0/", licenseLabel: "CC BY-SA 4.0",
    captions: {
      en: "A circular stone door at Derinkuyu, photographed by TobyJ in August 2012.",
      fr: "Une porte de pierre circulaire à Derinkuyu, photographiée par TobyJ en août 2012.",
      es: "Una puerta circular de piedra en Derinkuyu, fotografiada por TobyJ en agosto de 2012.",
      ar: "باب حجري دائري في ديرينكويو، صوّره توبي جاي في أغسطس ٢٠١٢."
    }
  },
  "ouarzazate-morocco-africas-hollywood": {
    afterBlock: 9, file: "ouarzazate-atlas-studios-allaway.jpg", width: 1024, height: 683,
    source: "https://commons.wikimedia.org/wiki/File:Atlas_Studios_Film_Studios,_Ouarzazate,_Morocco_(5545932927).jpg",
    credit: "Richard Allaway / Wikimedia Commons", license: "https://creativecommons.org/licenses/by/2.0/", licenseLabel: "CC BY 2.0",
    captions: {
      en: "Atlas Studios in Ouarzazate, photographed by Richard Allaway in February 2011.",
      fr: "Les studios Atlas à Ouarzazate, photographiés par Richard Allaway en février 2011.",
      es: "Los estudios Atlas en Uarzazat, fotografiados por Richard Allaway en febrero de 2011.",
      ar: "استوديوهات أطلس في ورزازات، في صورة لريتشارد ألاواي من فبراير ٢٠١١."
    }
  },
  "ota-benga-african-man-exhibited-bronx-zoo": {
    afterBlock: 5, file: "ota-benga-1904-gerhard-sisters.jpg", width: 900, height: 1200,
    source: "https://commons.wikimedia.org/wiki/File:Ota_Benga_at_1904_World%27s_Fair.jpg",
    credit: "Gerhard Sisters, 1904 / Wikimedia Commons", license: publicDomain,
    captions: {
      en: "Ota Benga at the 1904 St Louis World’s Fair, in a portrait extracted from a group photograph by the Gerhard Sisters. This photograph predates the Bronx Zoo exhibition.",
      fr: "Ota Benga à l’Exposition universelle de Saint-Louis en 1904, portrait extrait d’une photographie de groupe des sœurs Gerhard. Le document précède l’exhibition au zoo du Bronx.",
      es: "Ota Benga en la Exposición Universal de San Luis de 1904, retrato extraído de una fotografía de grupo de las hermanas Gerhard. Es anterior a la exhibición en el zoo.",
      ar: "أوتا بينغا في معرض سانت لويس العالمي سنة ١٩٠٤، في صورة مقتطعة من لقطة جماعية للأختين غيرهارد. تسبق هذه الوثيقة عرضه في حديقة برونكس."
    }
  },
  "zanzibar-slave-market-history-abolition": {
    afterBlock: 5, file: "zanzibar-market-1909-mission-history.jpg", width: 4013, height: 2546,
    source: "https://commons.wikimedia.org/wiki/File:Anderson-Morshead_1909_The_Old_Slave_Market,_Zanzibar_historyofuniver00ande_0492.jpg",
    credit: "Illustration reproduced in A. E. M. Anderson-Morshead’s 1909 mission history / Wikimedia Commons", license: publicDomain,
    captions: {
      en: "An illustration of the old slave market reproduced in the 1909 history of the Universities’ Mission to Central Africa. This later publication is an archival illustration, not a photograph of an identified sale.",
      fr: "Illustration de l’ancien marché reproduite dans l’histoire de la mission universitaire en Afrique centrale publiée en 1909. Ce document est une illustration d’archive.",
      es: "Ilustración del antiguo mercado reproducida en la historia de la misión universitaria en África central publicada en 1909. Es una ilustración de archivo.",
      ar: "رسم للسوق القديم أُعيد نشره في تاريخ بعثة الجامعات إلى وسط إفريقيا سنة ١٩٠٩. هذه وثيقة تصويرية أرشيفية وليست صورة فوتوغرافية لعملية بيع محددة."
    }
  },

  "robert-pattinson-new-james-bond-007": {
    afterBlock: 11, file: "pattinson-berlinale-2025.jpg", width: 1789, height: 2371,
    source: "https://commons.wikimedia.org/wiki/File:Robert_Pattinson_at_Berlinale_2025_(cropped).jpg",
    credit: "Elena Ternovaja / Wikimedia Commons", license: "https://creativecommons.org/licenses/by-sa/3.0/",
    captions: {
      en: "Robert Pattinson at the Berlin International Film Festival in February 2025.",
      fr: "Robert Pattinson au Festival international du film de Berlin en février 2025.",
      es: "Robert Pattinson en el Festival Internacional de Cine de Berlín en febrero de 2025.",
      ar: "روبرت باتينسون في مهرجان برلين السينمائي الدولي في فبراير ٢٠٢٥."
    }
  },
  "romania-merry-cemetery-sapanta": {
    afterBlock: 5, file: "sapanta-merry-cemetery-documentary.jpg", width: 1536, height: 2048,
    source: "https://commons.wikimedia.org/wiki/File:Cmitrul_Vesel.jpg",
    credit: "KarelZOauh / Wikimedia Commons", license: "https://creativecommons.org/licenses/by-sa/4.0/",
    captions: {
      en: "The Merry Cemetery in Săpânța, Romania, photographed in July 2026.",
      fr: "Le Cimetière joyeux de Săpânța, en Roumanie, photographié en juillet 2026.",
      es: "El Cementerio Alegre de Săpânța, en Rumanía, fotografiado en julio de 2026.",
      ar: "المقبرة المرحة في سابانتسا برومانيا، في صورة التُقطت في يوليو ٢٠٢٦."
    }
  },
  "up-helly-aa-lerwick-shetland-viking-fire-festival": {
    afterBlock: 11, file: "lerwick-galley-burning-2019.jpg", width: 6000, height: 4000,
    source: "https://commons.wikimedia.org/wiki/File:Lerwick_Up_Helly_Aa_2019_Galley_Burning.jpg",
    credit: "Roy Mullay / Wikimedia Commons", license: "https://creativecommons.org/licenses/by/4.0/",
    captions: {
      en: "The replica galley burns during Lerwick’s Up Helly Aa in January 2019, seen from King Harald Street.",
      fr: "La réplique de la galère brûle pendant Up Helly Aa à Lerwick, en janvier 2019. Vue depuis King Harald Street.",
      es: "La réplica de la galera arde durante Up Helly Aa en Lerwick, en enero de 2019, vista desde King Harald Street.",
      ar: "إحراق السفينة المقلّدة في مهرجان أب هيلي آ بمدينة ليرويك في يناير ٢٠١٩، كما بدا من شارع كينغ هارالد."
    }
  },
  "great-smog-london-1952-clean-air-act": {
    afterBlock: 9, file: "great-smog-1953-beaver-report-mortality.png", width: 2304, height: 1404,
    source: "https://commons.wikimedia.org/wiki/File:1952_Great_London_Smog_mortality-2.png",
    credit: "UK Committee on Air Pollution, 1953 interim report / Wikimedia Commons", license: publicDomain,
    captions: {
      en: "Chart from the 1953 UK air pollution inquiry showing the rise in deaths around the December 1952 smog.",
      fr: "Graphique de l’enquête britannique sur la pollution de l’air de 1953, montrant la hausse de la mortalité autour du smog de décembre 1952.",
      es: "Gráfico de la investigación británica de 1953 sobre la contaminación del aire, con el aumento de la mortalidad en torno al esmog de diciembre de 1952.",
      ar: "رسم بياني من تحقيق بريطاني في تلوث الهواء نُشر عام ١٩٥٣، ويبيّن ارتفاع الوفيات في فترة ضباب ديسمبر ١٩٥٢."
    }
  },
  "lalibela-ethiopia-rock-hewn-churches": {
    afterBlock: 11, file: "lalibela-bete-giyorgis-overhead.jpg", width: 735, height: 579,
    source: "https://commons.wikimedia.org/wiki/File:Bet_Gyorgis_Lalibela.jpg",
    credit: "Erik (uploader) / Wikimedia Commons", license: "https://creativecommons.org/publicdomain/zero/1.0/",
    captions: {
      en: "The cross-shaped roof of Biete Ghiorgis viewed from above its excavated enclosure in Lalibela.",
      fr: "Le toit en croix de Biete Ghiorgis, vu depuis le bord de l’enceinte creusée dans la roche à Lalibela.",
      es: "El tejado en cruz de Biete Ghiorgis, visto desde el borde del recinto excavado en Lalibela.",
      ar: "سقف كنيسة بيتي غيورغيس على هيئة صليب، كما يبدو من أعلى الحفرة الصخرية المحيطة به في لاليبيلا."
    }
  },

  "rapa-nui-moai-statues-mystery": {
    afterBlock: 8,
    file: "rano-raraku-unfinished-moai-lbm1948.jpg",
    width: 2144,
    height: 1424,
    source: "https://commons.wikimedia.org/wiki/File:Rano_Raraku_04.jpg",
    credit: "LBM1948 / Wikimedia Commons",
    license: "https://creativecommons.org/licenses/by-sa/4.0/",
    licenseLabel: "CC BY-SA 4.0",
    captions: {
      en: "An unfinished moai in the volcanic rock of the Rano Raraku quarry, Rapa Nui.",
      fr: "Un moaï inachevé dans la roche volcanique de la carrière de Rano Raraku, à Rapa Nui.",
      ar: "تمثال مواي غير مكتمل في الصخر البركاني بمحجر رانو راراكو في رابا نوي.",
      es: "Un moái inacabado en la roca volcánica de la cantera de Rano Raraku, Rapa Nui."
    }
  },
  "kukur-tihar-nepal-festival-honoring-dogs": {
    afterBlock: 7,
    file: "kukur-tihar-ritesh-man-tamrakar-2013.jpg",
    width: 2400,
    height: 3000,
    source: "https://commons.wikimedia.org/wiki/File:Kukur_Tihar.jpg",
    credit: "Ritesh Man Tamrakar / Wikimedia Commons",
    license: "https://creativecommons.org/licenses/by-sa/2.0/",
    licenseLabel: "CC BY-SA 2.0",
    captions: {
      en: "A black-and-white dog with a red tika and an orange flower garland during Kukur Tihar, photographed on November 2, 2013.",
      fr: "Un chien noir et blanc portant un tika rouge et une guirlande orange pour Kukur Tihar, photographié le 2 novembre 2013.",
      ar: "كلب أسود وأبيض يضع علامة تيكا حمراء وإكليلاً برتقالياً خلال كوكور تيهار، في صورة من 2 نوفمبر 2013.",
      es: "Un perro blanco y negro con una tika roja y una guirnalda naranja durante Kukur Tihar, el 2 de noviembre de 2013."
    }
  },
  "chandrayaan-3-india-historic-moon-landing": {
    afterBlock: 9,
    file: "chandrayaan-3-vikram-lroc-2023.png",
    width: 1100,
    height: 1100,
    source: "https://lroc.im-ldi.com/posts/1314",
    credit: "NASA/GSFC/Arizona State University",
    license: publicDomain,
    captions: {
      en: "Vikram’s landing site imaged by the Lunar Reconnaissance Orbiter Camera on August 27, 2023. The lander is near the centre.",
      fr: "Le site de Vikram photographié par la caméra de Lunar Reconnaissance Orbiter le 27 août 2023. L’atterrisseur est près du centre.",
      ar: "موقع هبوط فيكرام كما صورته كاميرا مركبة الاستطلاع القمرية في 27 أغسطس 2023. وتظهر المركبة قرب منتصف الصورة.",
      es: "Lugar de aterrizaje de Vikram fotografiado por la cámara de Lunar Reconnaissance Orbiter el 27 de agosto de 2023. El módulo está cerca del centro."
    }
  },
  "uae-hope-probe-first-arab-mars-mission": {
    afterBlock: 20,
    file: "deimos-hirise-nasa-2009.jpg",
    width: 1505,
    height: 772,
    source: "https://science.nasa.gov/photojournal/martian-moon-deimos-in-high-resolution/",
    credit: "NASA/JPL-Caltech/University of Arizona",
    license: null,
    captions: {
      en: "Colour-enhanced views of Deimos from NASA’s Mars Reconnaissance Orbiter, photographed by HiRISE on February 21, 2009.",
      fr: "Vues de Déimos en couleurs renforcées, prises par HiRISE à bord de la sonde Mars Reconnaissance Orbiter le 21 février 2009.",
      ar: "صورتان بألوان محسّنة لديموس التقطتهما كاميرا هايرايز على متن مركبة الاستطلاع المريخية التابعة لناسا في 21 فبراير 2009.",
      es: "Vistas de Deimos con el color realzado, tomadas por HiRISE desde la Mars Reconnaissance Orbiter de la NASA el 21 de febrero de 2009."
    }
  },
  "72-days-andes-flight-571-survival": {
    afterBlock: 6,
    file: "andes-flight-571-crash-memorial-2006.jpg",
    width: 2048,
    height: 1536,
    source: "https://commons.wikimedia.org/wiki/File:Crash_site.JPG",
    credit: "BoomerKC / Wikimedia Commons",
    license: publicDomain,
    captions: {
      en: "The memorial at the Flight 571 crash site, photographed in 2006 with the Andes in the background.",
      fr: "Le mémorial du vol 571, photographié en 2006 sur le lieu de l’accident, avec les Andes en arrière-plan.",
      ar: "النصب التذكاري للرحلة 571 في موقع التحطم، في صورة من عام 2006 تظهر جبال الأنديز في الخلفية.",
      es: "El monumento en el lugar del accidente del vuelo 571, fotografiado en 2006 con los Andes al fondo."
    }
  },
  "1904-olympic-marathon-st-louis": {
    afterBlock: 14,
    file: "thomas-hicks-1904-olympic-report.jpg",
    width: 319,
    height: 358,
    source: "https://commons.wikimedia.org/wiki/File:1904_Thomas_J_Hicks.jpg",
    credit: "1904 Olympic report / Wikimedia Commons",
    license: publicDomain,
    captions: {
      en: "Thomas J. Hicks at the 1904 Olympic Games, reproduced from the contemporary Olympic report.",
      fr: "Thomas J. Hicks aux Jeux olympiques de 1904, d’après le rapport olympique de l’époque.",
      ar: "توماس ج. هيكس في أولمبياد 1904، في صورة منشورة في التقرير الأولمبي المعاصر.",
      es: "Thomas J. Hicks en los Juegos Olímpicos de 1904, en una imagen del informe olímpico de la época."
    }
  }
};

export function getFeatureEvidence(slug: string, index: number) {
  const premium = (premiumSupportingMedia as Record<string, EvidencePhoto[]>)[slug];
  if (premium) return premium.find(photo => photo.afterBlock === index);
  const item = evidence[slug];
  return item?.afterBlock === index ? item : undefined;
}

export function getFeatureEvidenceImage(slug: string, locale: Locale) {
  const premium = (premiumSupportingMedia as Record<string, EvidencePhoto[]>)[slug]?.[0];
  if (premium) return `/articles/${premium.file}`;
  const photo = evidence[slug];
  return photo ? `/articles/${photo.localizedFiles?.[locale] ?? photo.file}` : undefined;
}

export function getFeatureEvidenceImages(slug: string, locale: Locale) {
  const premium = (premiumSupportingMedia as Record<string, EvidencePhoto[]>)[slug];
  if (premium) return premium.map(photo => `/articles/${photo.file}`);
  const image = getFeatureEvidenceImage(slug, locale);
  return image ? [image] : [];
}
