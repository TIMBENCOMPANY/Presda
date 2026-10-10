// ISAPS Global Survey 2025, released September 29, 2026, pp. 9–10, 83, 105–107.
// These extrapolated procedure counts are not unique patient counts.
export const plasticSurgeryData = {
  source: "https://www.isaps.org/media/ua4leneo/isaps-global-survey_2025.pdf",
  totals: [17883610, 17320420, 35204030],
  comparableChange: [-0.4, -15.7, -8.7],
  surgical: [2457677, 1849828, 1622639, 1143862, 1039808, 1015685],
  nonSurgical: [7333647, 4737957, 1528552, 1150365, 659942],
  women: [85.6, 84.8],
  men: [14.4, 15.2],
  ages: [[49.5, 40.1], [57, 30.3], [39.1, 44.1], [20.9, 47]],
  // Retain published totals, including small rounding differences.
  countries: [
    [2229368, 3232108, 5461476], [2361010, 855655, 3216665],
    [1409000, 1435500, 2844500], [427248, 1620653, 2047901],
    [844085, 1122358, 1966442], [641683, 883780, 1525462],
    [574350, 903206, 1477556], [862535, 607259, 1469794],
    [794390, 524590, 1318980], [574840, 486640, 1061480]
  ]
} as const;
