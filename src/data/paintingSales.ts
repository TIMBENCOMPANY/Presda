export type PaintingSale = { key: string; title: string; artist: string; artistAr: string; created: string; price: number; date: string; type: "auction" | "reported" | "court" | "filing" | "private"; house?: string; native?: string; movement: string[]; priceSource: string; artwork: string; artworkCredit?: string; image?: { slug: string; title: string; license: string; changes: string; verifiedAt: string; src: string; width: number; height: number; source: string; licenseURL: string; credit: string; alt: string[] } };

export const paintingSales: PaintingSale[] = [
  {
    "key": "salvator-mundi",
    "title": "Salvator Mundi",
    "artist": "Leonardo da Vinci (attributed)",
    "artistAr": "ليوناردو دا فينشي (منسوبة إليه)",
    "created": "c. 1500",
    "price": 450312500,
    "date": "2017-11-15",
    "type": "auction",
    "house": "Christie's New York",
    "movement": [
      "Italian Renaissance",
      "Renaissance italienne",
      "Renacimiento italiano",
      "النهضة الإيطالية"
    ],
    "priceSource": "https://www.christies.com/en/stories/leonardo-and-post-war-results-new-york-ad70dd5889e64989a76c94e4358c760d",
    "artwork": "https://www.christies.com/lot/lot-6110563",
    "image": {
      "slug": "salvator-mundi",
      "title": "File:Leonardo da Vinci, Salvator Mundi, c.1500, oil on walnut, 45.4 × 65.6 cm.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Leonardo_da_Vinci,_Salvator_Mundi,_c.1500,_oil_on_walnut,_45.4_%C3%97_65.6_cm.jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 2354,
      "src": "/articles/paintings/salvator-mundi.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Salvator Mundi attributed to Leonardo, Christ holding an orb and raising a hand",
        "Salvator Mundi attribué à Léonard, le Christ tenant une sphère et levant une main",
        "Salvator Mundi atribuido a Leonardo, Cristo con una esfera y la mano levantada",
        "سالفاتور موندي المنسوبة إلى ليوناردو، المسيح يحمل كرة ويرفع يده"
      ],
      "credit": "Leonardo da Vinci (attributed) / Wikimedia Commons"
    }
  },
  {
    "key": "interchange",
    "title": "Interchange",
    "artist": "Willem de Kooning",
    "artistAr": "ويليم دي كونينغ",
    "created": "1955",
    "price": 300000000,
    "date": "2015-09",
    "type": "reported",
    "movement": [
      "Abstract Expressionism",
      "Expressionnisme abstrait",
      "Expresionismo abstracto",
      "التعبيرية التجريدية"
    ],
    "priceSource": "https://www.inkl.com/news/billionaire-griffin-said-to-pay-500-million-for-two-paintings",
    "artwork": "https://en.wikipedia.org/wiki/Interchange_(de_Kooning)",
    "artworkCredit": "Wikipedia artwork record"
  },
  {
    "key": "card-players",
    "title": "Les Joueurs de cartes",
    "artist": "Paul Cézanne",
    "artistAr": "بول سيزان",
    "created": "1892–96",
    "price": 250000000,
    "date": "2011",
    "type": "reported",
    "movement": [
      "Post-Impressionism",
      "Postimpressionnisme",
      "Posimpresionismo",
      "ما بعد الانطباعية"
    ],
    "priceSource": "https://observer.com/2012/02/report-qatari-royals-paid-250-m-for-storied-cezanne-card-players/",
    "artwork": "https://www.cezannecatalogue.com/catalogue/entry.php?id=688",
    "image": {
      "slug": "card-players",
      "title": "File:Les Joueurs de cartes, par Paul Cézanne, collection Al-Thani, Yorck.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Les_Joueurs_de_cartes,_par_Paul_C%C3%A9zanne,_collection_Al-Thani,_Yorck.jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 1132,
      "src": "/articles/paintings/card-players.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Cézanne’s privately held Card Players, two men at an orange table",
        "Les Joueurs de cartes de Cézanne, version privée avec deux hommes et une table orange",
        "Los jugadores de cartas de Cézanne, versión privada con dos hombres y mesa naranja",
        "نسخة لاعبي الورق الخاصة لسيزان، رجلان عند طاولة برتقالية"
      ],
      "credit": "Paul Cézanne / The Yorck Project / Wikimedia Commons"
    }
  },
  {
    "key": "elisabeth-lederer",
    "title": "Bildnis Elisabeth Lederer",
    "artist": "Gustav Klimt",
    "artistAr": "غوستاف كليمت",
    "created": "1914–16",
    "price": 236360000,
    "date": "2025-11-18",
    "type": "auction",
    "house": "Sotheby's New York",
    "movement": [
      "Vienna Secession",
      "Sécession viennoise",
      "Secesión vienesa",
      "انفصال فيينا"
    ],
    "priceSource": "https://www.sothebys.com/en/articles/new-york-sales-november-2025-evening",
    "artwork": "https://www.sothebys.com/en/buy/auction/2025/leonard-a-lauder-collector-evening-auction/bildnis-elisabeth-lederer-portrait-of-elisabeth",
    "image": {
      "slug": "elisabeth-lederer",
      "title": "File:Gustav Klimt - Bildnis der Elisabeth Lederer (1914-1916).jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Gustav_Klimt_-_Bildnis_der_Elisabeth_Lederer_(1914-1916).jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 2213,
      "src": "/articles/paintings/elisabeth-lederer.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Klimt’s full-length Elisabeth Lederer in a patterned dress and decorative setting",
        "Elisabeth Lederer en pied, robe et décor à motifs, par Klimt",
        "Elisabeth Lederer de cuerpo entero, vestido y entorno decorativos, por Klimt",
        "إليزابيث ليديرر لكليمت بكامل قامتها وثوب وخلفية مزخرفين"
      ],
      "credit": "Gustav Klimt / Wikimedia Commons"
    }
  },
  {
    "key": "nafea",
    "title": "Nafea faa ipoipo",
    "artist": "Paul Gauguin",
    "artistAr": "بول غوغان",
    "created": "1892",
    "price": 210000000,
    "date": "2014-09-10",
    "type": "court",
    "movement": [
      "Post-Impressionism",
      "Postimpressionnisme",
      "Posimpresionismo",
      "ما بعد الانطباعية"
    ],
    "priceSource": "https://caselaw.nationalarchives.gov.uk/ewhc/ch/2018/44",
    "artwork": "https://caselaw.nationalarchives.gov.uk/ewca/civ/2019/817",
    "image": {
      "slug": "nafea",
      "title": "File:Paul Gauguin, Nafea Faa Ipoipo? 1892, oil on canvas, 101 x 77 cm.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Paul_Gauguin,_Nafea_Faa_Ipoipo%3F_1892,_oil_on_canvas,_101_x_77_cm.jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 2123,
      "src": "/articles/paintings/nafea.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Gauguin’s Nafea faa ipoipo, two women in a colourful Tahitian landscape",
        "Nafea faa ipoipo de Gauguin, deux femmes dans un paysage tahitien coloré",
        "Nafea faa ipoipo de Gauguin, dos mujeres en un paisaje tahitiano de colores",
        "نافيا فا إيبويبو لغوغان، امرأتان في مشهد تاهيتي ملون"
      ],
      "credit": "Paul Gauguin / Kunstmuseum Basel, Martin P. Bühler"
    }
  },
  {
    "key": "number-17a",
    "title": "Number 17A",
    "artist": "Jackson Pollock",
    "artistAr": "جاكسون بولوك",
    "created": "1948",
    "price": 200000000,
    "date": "2015-09",
    "type": "reported",
    "movement": [
      "Abstract Expressionism",
      "Expressionnisme abstrait",
      "Expresionismo abstracto",
      "التعبيرية التجريدية"
    ],
    "priceSource": "https://www.inkl.com/news/billionaire-griffin-said-to-pay-500-million-for-two-paintings",
    "artwork": "https://en.wikipedia.org/wiki/Number_17A",
    "artworkCredit": "Wikipedia artwork record"
  },
  {
    "key": "marilyn",
    "title": "Shot Sage Blue Marilyn",
    "artist": "Andy Warhol",
    "artistAr": "آندي وارهول",
    "created": "1964",
    "price": 195040000,
    "date": "2022-05-09",
    "type": "auction",
    "house": "Christie's New York",
    "movement": [
      "Pop Art",
      "Pop Art",
      "Arte pop",
      "فن البوب"
    ],
    "priceSource": "https://www.christies.com.cn/zh-cn/stories/style-guide-andy-warhol-and-pop-art-b8bd00023e3a442f849732b438ece688",
    "artwork": "https://www.christies.com/lot/lot-6369449",
    "artworkCredit": "Christie's catalogue"
  },
  {
    "key": "rothko-no6",
    "title": "No. 6 (Violet, Green and Red)",
    "artist": "Mark Rothko",
    "artistAr": "مارك روثكو",
    "created": "1951",
    "price": 186000000,
    "date": "2014-08",
    "type": "reported",
    "native": "€140 million",
    "movement": [
      "Colour Field / Abstract Expressionism",
      "Color Field / expressionnisme abstrait",
      "Campos de color / expresionismo abstracto",
      "حقول اللون / التعبيرية التجريدية"
    ],
    "priceSource": "https://www.bloomberg.com/news/articles/2015-04-27/a-186-million-rothko-pits-russian-tycoon-against-art-merchant",
    "artwork": "https://en.wikipedia.org/wiki/No._6_(Violet,_Green_and_Red)",
    "artworkCredit": "Wikipedia artwork record"
  },
  {
    "key": "water-serpents",
    "title": "Wasserschlangen II",
    "artist": "Gustav Klimt",
    "artistAr": "غوستاف كليمت",
    "created": "1904/1906–07",
    "price": 183800000,
    "date": "2012-09",
    "type": "filing",
    "movement": [
      "Symbolism / Vienna Secession",
      "Symbolisme / Sécession viennoise",
      "Simbolismo / Secesión vienesa",
      "الرمزية / انفصال فيينا"
    ],
    "priceSource": "https://www.courthousenews.com/wp-content/uploads/2018/10/Sothebys.pdf",
    "artwork": "https://www.belvedere.at/sites/default/files/2023-02/Presskit_KlimtInspiredBy_EN.pdf",
    "image": {
      "slug": "water-serpents",
      "title": "File:Gustav Klimt - Water Serpents II.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Gustav_Klimt_-_Water_Serpents_II.jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 928,
      "src": "/articles/paintings/water-serpents.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Klimt’s Water Serpents II, intertwined reclining figures and floral ornament",
        "Wasserschlangen II de Klimt, figures allongées et ornements floraux",
        "Wasserschlangen II de Klimt, figuras recostadas y ornamentos florales",
        "ثعابين الماء الثانية لكليمت، أجساد مستلقية وزخارف زهرية"
      ],
      "credit": "Gustav Klimt / Wikimedia Commons"
    }
  },
  {
    "key": "number-7a",
    "title": "Number 7A, 1948",
    "artist": "Jackson Pollock",
    "artistAr": "جاكسون بولوك",
    "created": "1948",
    "price": 181185000,
    "date": "2026-05-18",
    "type": "auction",
    "house": "Christie's New York",
    "movement": [
      "Abstract Expressionism",
      "Expressionnisme abstrait",
      "Expresionismo abstracto",
      "التعبيرية التجريدية"
    ],
    "priceSource": "https://press.christies.com/wp-content/uploads/2026/05/00e4ec1accf7b9fb0e29599b95b3296b.pdf",
    "artwork": "https://www.christies.com/lot/lot-6585089",
    "artworkCredit": "Christie's catalogue"
  },
  {
    "key": "femmes-alger",
    "title": "Les femmes d’Alger (Version ‘O’)",
    "artist": "Pablo Picasso",
    "artistAr": "بابلو بيكاسو",
    "created": "1955",
    "price": 179365000,
    "date": "2015-05-11",
    "type": "auction",
    "house": "Christie's New York",
    "movement": [
      "Cubism",
      "Cubisme",
      "Cubismo",
      "التكعيبية"
    ],
    "priceSource": "https://press.christies.com/post-sale-looking-forward-to-the-past-christies-curated-evening-sale-of-impressionist-modern-and-contemporary-art-achieves-us705858000/",
    "artwork": "https://press.christies.com/post-sale-looking-forward-to-the-past-christies-curated-evening-sale-of-impressionist-modern-and-contemporary-art-achieves-us705858000/",
    "artworkCredit": "Christie's sale announcement"
  },
  {
    "key": "nu-couche",
    "title": "Nu couché",
    "artist": "Amedeo Modigliani",
    "artistAr": "أميديو موديلياني",
    "created": "1917–18",
    "price": 170405000,
    "date": "2015-11-09",
    "type": "auction",
    "house": "Christie's New York",
    "movement": [
      "Modernism / École de Paris",
      "Modernisme / École de Paris",
      "Modernismo / Escuela de París",
      "الحداثة / مدرسة باريس"
    ],
    "priceSource": "https://www.christies.com/en/stories/modigliani-nu-couche-reclining-nude-leads-a-night-of-records-in-new-york-8e69a9e7b7a946c6b02fe926ebad92a0",
    "artwork": "https://www.christies.com/lot/lot-5946114",
    "image": {
      "slug": "nu-couche",
      "title": "File:Modigliani - Nu couché.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Modigliani_-_Nu_couch%C3%A9.jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 1008,
      "src": "/articles/paintings/nu-couche.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Modigliani’s 2015 auction Nu couché, reclining figure on a red background",
        "Nu couché vendu en 2015, figure allongée sur fond rouge, Modigliani",
        "Nu couché subastado en 2015, figura recostada sobre fondo rojo, Modigliani",
        "نو كوشيه لموديلياني المباعة في 2015، جسد مستلق على خلفية حمراء"
      ],
      "credit": "Amedeo Modigliani / Wikimedia Commons"
    }
  },
  {
    "key": "masterpiece",
    "title": "Masterpiece",
    "artist": "Roy Lichtenstein",
    "artistAr": "روي ليختنشتاين",
    "created": "1962",
    "price": 165000000,
    "date": "2017",
    "type": "private",
    "movement": [
      "Pop Art",
      "Pop Art",
      "Arte pop",
      "فن البوب"
    ],
    "priceSource": "https://press.christies.com/wp-content/uploads/2026/02/5c83866d2577685f188cee75325afd8e.pdf",
    "artwork": "https://www.lichtensteincatalogue.org/catalogue/entry.php?id=418",
    "artworkCredit": "Roy Lichtenstein Foundation catalogue raisonné"
  },
  {
    "key": "nu-couche-left",
    "title": "Nu couché (sur le côté gauche)",
    "artist": "Amedeo Modigliani",
    "artistAr": "أميديو موديلياني",
    "created": "1917",
    "price": 157159000,
    "date": "2018-05-14",
    "type": "auction",
    "house": "Sotheby's New York",
    "movement": [
      "Modernism / École de Paris",
      "Modernisme / École de Paris",
      "Modernismo / Escuela de París",
      "الحداثة / مدرسة باريس"
    ],
    "priceSource": "https://www.sothebys.com/en/slideshows/the-157-million-modigliani-and-more-top-impressionist-modern-prices-in-2018",
    "artwork": "https://www.sothebys.com/en/articles/at-157-2-million-modiglianis-greatest-nude-is-also-the-most-expensive-painting-ever-sold-at-sothebys",
    "image": {
      "slug": "nu-couche-left",
      "title": "File:Amedeo Modigliani 014.jpg",
      "source": "https://commons.wikimedia.org/wiki/File:Amedeo_Modigliani_014.jpg",
      "license": "Public domain faithful two-dimensional reproduction",
      "licenseURL": "https://commons.wikimedia.org/wiki/Template:PD-Art",
      "width": 1600,
      "height": 977,
      "src": "/articles/paintings/nu-couche-left.webp",
      "changes": "Resized and converted to WebP; no crop",
      "verifiedAt": "2026-10-11",
      "alt": [
        "Modigliani’s Nu couché sur le côté gauche, full reclining figure seen from behind",
        "Nu couché sur le côté gauche de Modigliani, figure entière vue de dos",
        "Nu couché sur le côté gauche de Modigliani, figura completa vista desde atrás",
        "نو كوشيه على الجانب الأيسر لموديلياني، جسد كامل مستلق من الخلف"
      ],
      "credit": "Amedeo Modigliani / The Yorck Project / Wikimedia Commons"
    }
  },
  {
    "key": "le-reve",
    "title": "Le Rêve",
    "artist": "Pablo Picasso",
    "artistAr": "بابلو بيكاسو",
    "created": "1932",
    "price": 155000000,
    "date": "2013-03",
    "type": "reported",
    "movement": [
      "Cubism / dreamlike modernism",
      "Cubisme / modernisme onirique",
      "Cubismo / modernismo onírico",
      "التكعيبية / الحداثة الحلمية"
    ],
    "priceSource": "https://www.forbes.com/sites/afontevecchia/2013/03/26/hedge-fund-billionaire-steve-cohens-155m-picasso-isnt-his-first-multi-million-piece-of-art/",
    "artwork": "https://www.artsy.net/artwork/pablo-picasso-le-reve-the-dream",
    "artworkCredit": "Artsy / Art Resource"
  }
];
