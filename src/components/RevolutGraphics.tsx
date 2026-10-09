import type { Locale } from "@/lib/i18n/routing";

export const revolutFinancialRows = [
  { key: "revenue", values: [3090.043, 4515.770] },
  { key: "pretax", values: [1088.730, 1713.273] },
  { key: "net", values: [790.426, 1304.628] }
] as const;
export const revolutValuations = [
  { year: 2021, value: 33 }, { year: 2024, value: 45 },
  { year: 2025, value: 75 }, { year: 2026, value: 115 }
] as const;
const copy = {
  en: {
    finance: "Revolut Group: 2024 versus 2025", valuation: "Selected private valuation milestones",
    revenue: "Revenue", pretax: "Profit before tax", net: "Net profit", unit: "GBP millions", valuationUnit: "USD billions",
    note: "Full years ended December 31. Audited consolidated results, not individual-bank earnings. All bars share a zero baseline and a GBP 5,000 million maximum. Profit measures are not additive.",
    valueNote: "Values implied by selected private transactions, not public market capitalization or amounts raised. The 2026 value is reported by Reuters. Bars share a zero baseline and USD 120 billion maximum; gaps do not represent elapsed time.",
    table: "Exact reported values converted from GBP thousands to GBP millions", metric: "Measure", source: "Sources",
    customers: "Retail customers at year-end", balances: "Total customer balances", margin: "Pretax margin", extra: "Customers are not monthly active users. Balances include partner savings and Flexible Cash Funds; they are not all direct bank deposits.",
    reported: "Reported secondary valuation", series: "Series E valuation", secondary: "Secondary share sale", bn: "billion", m: "million", official: "2025 Annual Report, pp. 12, 96, 199"
  },
  fr: {
    finance: "Groupe Revolut : 2024 comparé à 2025", valuation: "Jalons de valorisation privée",
    revenue: "Revenus", pretax: "Bénéfice avant impôt", net: "Bénéfice net", unit: "Millions de GBP", valuationUnit: "Milliards de dollars US",
    note: "Exercices clos le 31 décembre. Résultats consolidés audités, pas ceux de chaque banque. Les barres partent de zéro avec un maximum commun de 5 000 millions GBP. Les bénéfices ne s’additionnent pas.",
    valueNote: "Valeurs implicites d’opérations privées, pas capitalisation boursière ou montants levés. La valeur 2026 est rapportée par Reuters. Échelle commune de zéro à 120 milliards USD ; les espaces ne représentent pas le temps écoulé.",
    table: "Valeurs publiées exactes, converties des milliers aux millions de GBP", metric: "Mesure", source: "Sources",
    customers: "Clients particuliers en fin d’année", balances: "Total des soldes clients", margin: "Marge avant impôt", extra: "Les clients ne sont pas des utilisateurs actifs mensuels. Les soldes incluent épargne chez des partenaires et Flexible Cash Funds, pas seulement des dépôts bancaires directs.",
    reported: "Valorisation secondaire rapportée", series: "Valorisation de série E", secondary: "Vente secondaire", bn: "milliards", m: "millions", official: "Rapport annuel 2025, pp. 12, 96, 199"
  },
  ar: {
    finance: "مجموعة Revolut: مقارنة 2024 و2025", valuation: "محطات التقييم الخاص",
    revenue: "الإيرادات", pretax: "الربح قبل الضريبة", net: "صافي الربح", unit: "ملايين الجنيهات الإسترلينية", valuationUnit: "مليارات الدولارات الأمريكية",
    note: "سنوات كاملة تنتهي في 31 ديسمبر. نتائج موحدة مدققة، لا نتائج كل بنك. تبدأ الأعمدة من الصفر وبحد مشترك 5,000 مليون جنيه. لا تجمع مقاييس الأرباح معاً.",
    valueNote: "قيم ضمنية لصفقات خاصة، وليست رسملة مدرجة أو مبالغ تمويل. تنقل رويترز قيمة 2026. المقياس المشترك من صفر إلى 120 مليار دولار، ولا تمثل المسافات زمناً متناسباً.",
    table: "قيم منشورة دقيقة، محولة من آلاف إلى ملايين الجنيهات", metric: "المقياس", source: "المصادر",
    customers: "عملاء التجزئة في نهاية العام", balances: "إجمالي أرصدة العملاء", margin: "هامش الربح قبل الضريبة", extra: "العملاء ليسوا مستخدمين نشطين شهرياً. تشمل الأرصدة مدخرات الشركاء وFlexible Cash Funds، وليست كلها ودائع مصرفية مباشرة.",
    reported: "تقييم ثانوي منقول", series: "تقييم جولة Series E", secondary: "بيع أسهم ثانوي", bn: "مليار", m: "مليون", official: "التقرير السنوي 2025، الصفحات 12 و96 و199"
  },
  es: {
    finance: "Grupo Revolut: 2024 frente a 2025", valuation: "Hitos de valoración privada",
    revenue: "Ingresos", pretax: "Beneficio antes de impuestos", net: "Beneficio neto", unit: "Millones de GBP", valuationUnit: "Miles de millones de USD",
    note: "Ejercicios completos cerrados el 31 de diciembre. Resultados consolidados auditados, no de cada banco. Todas las barras parten de cero con máximo de 5.000 millones GBP. Las medidas de beneficio no son sumables.",
    valueNote: "Valores implícitos de operaciones privadas, no capitalización bursátil ni dinero captado. Reuters reporta el valor de 2026. Escala de cero a 120.000 millones USD; las separaciones no representan tiempo proporcional.",
    table: "Valores publicados exactos, convertidos de miles a millones de GBP", metric: "Medida", source: "Fuentes",
    customers: "Clientes particulares al cierre", balances: "Saldos totales de clientes", margin: "Margen antes de impuestos", extra: "Los clientes no son usuarios activos mensuales. Los saldos incluyen ahorro con socios y Flexible Cash Funds, no solo depósitos bancarios directos.",
    reported: "Valoración secundaria reportada", series: "Valoración de serie E", secondary: "Venta secundaria", bn: "miles de millones", m: "millones", official: "Informe anual 2025, pp. 12, 96, 199"
  }
};
const annual = "https://assets.revolut.com/pdf/annualreport2025.pdf";
const valuationSources = [
  ["2021", "https://www.revolut.com/news/revolut_raises_800m_series_e_funding_from_softbank_vision_fund_2_and_tiger_global/"],
  ["2024", "https://assets.revolut.com/pdf/annualreport2024.pdf"],
  ["2025", "https://www.revolut.com/news/revolut_completes_fundraising_process_establishing_75_billion_valuation/"],
  ["Reuters, 2026", "https://live.euronext.com/en/financial-news/revolut-starts-share-sale-115-billion-valuation-source-says"]
];

export function RevolutGraphics({ locale, kind }: { locale: Locale; kind: "finance" | "valuation" }) {
  const c = copy[locale], id = `revolut-${kind}`;
  const format = (value: number, digits = 1) => new Intl.NumberFormat({ en: "en-GB", fr: "fr-FR", ar: "ar", es: "es-ES" }[locale], { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
  return <figure id={id} dir={locale === "ar" ? "rtl" : "ltr"} aria-labelledby={`${id}-title`} className="my-10 scroll-mt-28 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
    <figcaption id={`${id}-title`} className="font-display text-xl font-bold sm:text-2xl">{c[kind]}</figcaption>
    <p className="mt-3 text-sm leading-relaxed text-white/75">{kind === "finance" ? c.note : c.valueNote}</p>
    <p className="mt-5 text-sm font-semibold text-[#e9bd65]">{kind === "finance" ? c.unit : c.valuationUnit}</p>
    {kind === "finance" ? <>
      <div className="mt-2 flex gap-5 text-sm"><span className="text-[#e9bd65]">2024</span><span className="text-[#FF1A1A]">2025</span></div>
      <div className="mt-5 space-y-6">
        {revolutFinancialRows.map(row => <div key={row.key}>
          <h3 className="mb-3 text-base font-semibold">{c[row.key]}</h3>
          {row.values.map((value, i) => <div key={i} className="mb-3">
            <p className="mb-1 flex flex-wrap justify-between gap-2 text-sm"><span>{2024 + i}</span><span>{format(value)}</span></p>
            <div dir="ltr" aria-hidden="true" className="h-3 rounded bg-white/10"><div className={i === 0 ? "h-full rounded bg-[#e9bd65]" : "h-full rounded bg-[#FF1A1A]"} style={{ width: `${value / 5000 * 100}%` }} /></div>
          </div>)}
        </div>)}
      </div>
      <div dir="ltr" aria-hidden="true" className="mt-2 flex justify-between text-xs text-white/65">{[0, 1000, 2000, 3000, 4000, 5000].map(n => <span key={n}>{format(n, 0)}</span>)}</div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-start text-sm">
          <caption className="mb-3 text-start text-sm text-white/75">{c.table}</caption>
          <thead><tr><th scope="col" className="p-2 text-start">{c.metric}</th><th scope="col" className="p-2 text-start">2024</th><th scope="col" className="p-2 text-start">2025</th></tr></thead>
          <tbody>{revolutFinancialRows.map(row => <tr key={row.key} className="border-t border-white/15"><th scope="row" className="p-2 text-start font-normal">{c[row.key]}</th>{row.values.map((value, i) => <td key={i} className="p-2">{format(value, 3)}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-3">
        {[[c.customers, `${format(52.5)} → ${format(68.3)} ${c.m}`], [c.balances, `${format(30.2)} → ${format(50.2)} GBP ${c.bn}`], [c.margin, `${format(35.2)}% → ${format(37.9)}%`]].map(([label, value]) => <div key={label} className="rounded-lg border border-white/15 p-3"><dt className="text-sm text-white/75">{label}</dt><dd dir="ltr" className="mt-2 break-words text-base font-bold text-[#e9bd65]">{value}</dd></div>)}
      </dl>
      <p className="mt-4 text-sm leading-relaxed text-white/75">{c.extra}</p>
      <p className="mt-5 text-xs leading-relaxed">{c.source}: <a href={annual} className="text-[#e9bd65] underline">{c.official}</a>.</p>
    </> : <>
      <ol className="mt-5 space-y-5">
        {revolutValuations.map(row => <li key={row.year}>
          <div className="mb-2 flex flex-wrap justify-between gap-2 text-sm"><span><strong>{row.year}</strong>: {row.year === 2021 ? c.series : row.year === 2026 ? c.reported : c.secondary}</span><strong>{format(row.value, 0)}</strong></div>
          <div dir="ltr" aria-hidden="true" className="h-3 rounded bg-white/10"><div className={row.year === 2026 ? "h-full rounded bg-[#FF1A1A]" : "h-full rounded bg-[#e9bd65]"} style={{ width: `${row.value / 120 * 100}%` }} /></div>
        </li>)}
      </ol>
      <div dir="ltr" aria-hidden="true" className="mt-4 flex justify-between text-xs text-white/65">{[0, 30, 60, 90, 120].map(n => <span key={n}>{format(n, 0)}</span>)}</div>
      <p className="mt-5 text-xs leading-relaxed">{c.source}: {valuationSources.map(([label, url], i) => <span key={url}>{i > 0 && "; "}<a href={url} className="text-[#e9bd65] underline">{label}</a></span>)}.</p>
    </>}
    <p className="mt-4 text-xs text-white/60">PRESDA Data Graphics</p>
  </figure>;
}
