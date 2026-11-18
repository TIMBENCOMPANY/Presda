import { LicensedEditorialImage } from "@/components/LicensedEditorialImage";
import type { Locale } from "@/lib/i18n/routing";

const publicDomain = "https://creativecommons.org/publicdomain/mark/1.0/";

type EvidencePhoto = {
  afterBlock: number;
  file: string;
  width: number;
  height: number;
  source: string;
  credit: string;
  license: string | null;
  licenseLabel?: string;
  captions: Record<Locale, string>;
};

const evidence: Partial<Record<string, EvidencePhoto>> = {
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

const publicDomainLabel = { en: "Public domain", fr: "Domaine public", ar: "الملكية العامة", es: "Dominio público" };

export function getFeatureEvidence(slug: string, index: number) {
  const item = evidence[slug];
  return item?.afterBlock === index ? item : undefined;
}

export function FeatureEvidencePhoto({ photo, locale }: { photo: NonNullable<ReturnType<typeof getFeatureEvidence>>; locale: Locale }) {
  const caption = photo.captions[locale];
  return (
    <figure data-feature-evidence={photo.file} className="my-8 overflow-hidden rounded-xl border border-white/15 bg-[#10131A] text-white">
      <div className="mx-auto" style={{ maxWidth: photo.width }}>
        <LicensedEditorialImage src={`/articles/${photo.file}`} alt={caption} width={photo.width} height={photo.height} />
      </div>
      <figcaption className="p-5 text-sm leading-6">
        <p>{caption}</p>
        <p>
          <a className="underline" href={photo.source}>{photo.credit}</a>
          {photo.license && <> · <a className="underline" href={photo.license} rel="license">{photo.licenseLabel ?? publicDomainLabel[locale]}</a></>}
        </p>
      </figcaption>
    </figure>
  );
}
