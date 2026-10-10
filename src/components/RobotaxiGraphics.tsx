import type { Locale } from "@/lib/i18n/routing";

const s = {
  tesla: "https://www.tesla.com/support/robotaxi",
  launch: "https://www.youtube.com/watch?v=grdt05okn3Q",
  waymo: "https://waymo.com/updates/",
  volume: "https://waymo.com/sustainability/",
  driver: "https://waymo.com/waymo-driver/",
  zoox: "https://zoox.com/know-your-ride",
  paid: "https://www.fox5vegas.com/2026/08/11/zoox-begins-charging-robotaxi-rides-las-vegas-more-autonomous-vehicle-companies-look-move-traditional-driver-moves-out/",
  exemption: "https://www.nhtsa.gov/press-releases/cutting-red-tape-safely-fast-track-automated-vehicle",
  baidu: "https://ir.baidu.com/news-releases/news-release-details/baidu-announces-first-quarter-2026-results/",
  baidu2: "https://ir.baidu.com/news-releases/news-release-details/baidu-announces-second-quarter-2026-results",
  china: "https://baidu.gcs-web.com/baidu-general-business",
  rt6: "https://www.prnewswire.com/news-releases/baidu-unveils-next-gen-autonomous-vehicle-ready-to-provide-driverless-robotaxi-half-of-taxi-fares-301590644.html",
  levels: "https://www.nhtsa.gov/vehicle-safety/automated-vehicle-safety",
  probe: "https://www.nhtsa.gov/press-releases/investigation-tesla-cybercab-self-certification",
  vegas: "https://blog.waymo.com/blog/2026/09/ride-in-las-vegas/",
  debt: "https://www.waymo.com/blog/2026/10/waymo-closes-5-billion-debt-financing/",
};
type Copy = {
  titles: string[]; date: string; headers: string[]; note: string; citiesNote: string; timelineNote: string; levelLabel: string;
  rows: string[][]; levels: string[]; cities: string[]; events: string[];
};
const copy: Record<Locale, Copy> = {
  en: {
    titles: ["Tesla vs Waymo vs Zoox vs Baidu", "Driving automation: who is responsible?", "Verified service areas, not whole-city coverage", "2026: commercial and regulatory milestones"],
    date: "Verified October 10, 2026. Disclosures have different reporting periods.",
    headers: ["Operator / vehicle", "Sensing approach", "Service status", "Disclosed scale", "Important limit"],
    note: "Company-reported measures. Trips, operational rides, production and permits are not comparable units. No global safety or profitability ranking is implied. Scroll the table horizontally on smaller screens.",
    citiesNote: "Company directories and dated reporting. Listed markets cover designated zones and may require invitations. Testing and announcements are excluded from operating lists. Free access is separated from paid service.",
    timelineNote: "Chronological event list. Spacing does not represent elapsed time; financing and permission do not measure fleet deployment.", levelLabel: "Level",
    rows: [
      ["Tesla / Model Y, Cybercab", "Camera-based driving perception", "Robotaxi service; Cybercab launched in Austin September 3", "Production started, Q2; no comparable weekly ride count in reviewed disclosures", "Consumer FSD is supervised. Cybercab certification audit is unresolved in reviewed records."],
      ["Waymo / Jaguar I-Pace, Ojai", "Cameras + lidar + radar", "Fully autonomous passenger service in 15 listed U.S. markets", "More than 500,000 weekly trips, company sustainability disclosure", "Admission and coverage vary; one million weekly rides is a year-end target."],
      ["Zoox / purpose-built robotaxi", "Cameras + lidar + radar + infrared", "Paid Las Vegas service since August; SF free preview is separate", "Up to 2,500 vehicles annually permitted for two years", "Permit ceiling is not delivered vehicles. No comparable weekly ride count established."],
      ["Baidu / Apollo Go, RT6", "Multisensor; original RT6 specifies cameras + lidar", "Driverless mainland operations and commercial Dubai service", "3.2 million driverless operational rides, Q1 2026", "28-city footprint includes testing. Operational rides are not necessarily all paid."],
    ],
    levels: ["Human drives; warnings or momentary interventions only.", "System assists either steering or speed; human drives.", "System assists steering and speed; human continuously supervises.", "System drives in its domain; human must respond to a takeover request.", "System drives and handles fallback within its defined domain; no human driver required there.", "System can drive in all conditions a human driver can handle; no restricted operating domain."],
    cities: ["Tesla: Austin, Dallas, Houston, Miami, Orlando, Tampa. Limited areas. Cybercab availability specifically verified in Austin.", "Waymo: Atlanta, Austin, Dallas, Denver, Houston, Las Vegas, Los Angeles, Miami, Nashville, Orlando, Phoenix, San Antonio, San Diego, San Francisco Bay Area, Tampa. Access varies; Austin and Atlanta use Uber.", "Zoox: paid Las Vegas service verified. San Francisco’s free preview is a separate status, not an additional confirmed paid city.", "Baidu: mainland operating cities include Beijing, Shanghai, Shenzhen, Wuhan, Chengdu, Chongqing, Haikou and Sanya; Dubai commercial service confirmed. London, Switzerland and Hong Kong Airport Island are testing, not equivalent commercial markets."],
    events: ["February: Waymo announces Dallas, Houston, San Antonio and Orlando rider service.", "July 30: NHTSA announces Zoox commercial exemption, with limits and oversight.", "August 10: Zoox starts paid Las Vegas service, confirmed by local reporting.", "September 3–4: Cybercab Austin launch followed by NHTSA certification audit.", "September 14: Waymo welcomes first public riders in Las Vegas.", "October 8: Waymo announces $5 billion term loan; financing, not revenue."],
  },
  fr: {
    titles: ["Tesla, Waymo, Zoox et Baidu", "Automatisation : qui est responsable ?", "Zones de service vérifiées, pas des villes entières", "2026 : étapes commerciales et réglementaires"], date: "Vérifié le 10 octobre 2026. Les périodes publiées diffèrent.", headers: ["Opérateur / véhicule", "Capteurs", "Statut du service", "Échelle publiée", "Limite importante"], note: "Mesures déclarées par les entreprises. Trajets, production et autorisations ne sont pas des unités comparables. Aucun classement mondial de sécurité ou de rentabilité. Faire défiler le tableau sur petit écran.", citiesNote: "Annuaires des entreprises et reportages datés. Zones désignées, parfois sur invitation. Essais et annonces exclus des listes d’exploitation. Accès gratuit et service payant sont distingués.", timelineNote: "Liste chronologique. L’espacement ne représente pas la durée ; financement et autorisation ne mesurent pas la flotte déployée.", levelLabel: "Niveau",
    rows: [
      ["Tesla / Model Y, Cybercab", "Perception par caméras", "Robotaxi ; Cybercab lancé à Austin le 3 septembre", "Production commencée au T2 ; aucun volume hebdomadaire comparable établi", "FSD particulier reste supervisé. Audit de certification non résolu dans les documents examinés."],
      ["Waymo / Jaguar I-Pace, Ojai", "Caméras + lidar + radar", "Service entièrement autonome dans 15 marchés américains listés", "Plus de 500 000 trajets hebdomadaires, publication de durabilité", "Accès et couverture variables ; un million par semaine est un objectif de fin d’année."],
      ["Zoox / robotaxi spécifique", "Caméras + lidar + radar + infrarouge", "Las Vegas payant depuis août ; accès gratuit à SF distinct", "Jusqu’à 2 500 véhicules par an autorisés pendant deux ans", "Plafond autorisé, pas des livraisons. Aucun volume hebdomadaire comparable établi."],
      ["Baidu / Apollo Go, RT6", "Multicapteurs ; RT6 initial : caméras + lidar", "Sans conducteur en Chine continentale ; commercial à Dubaï", "3,2 millions de trajets opérationnels sans conducteur, T1 2026", "Présence dans 28 villes incluant les essais. Les trajets ne sont pas nécessairement tous payants."],
    ],
    levels: ["L’humain conduit ; alertes ou interventions momentanées seulement.", "Assistance à la direction ou à la vitesse ; l’humain conduit.", "Assistance à la direction et à la vitesse ; surveillance humaine continue.", "Le système conduit dans son domaine ; l’humain doit répondre à une demande de reprise.", "Le système conduit et gère le repli dans son domaine ; aucun conducteur humain requis dans celui-ci.", "Conduite dans toutes les conditions qu’un humain peut gérer ; aucun domaine restreint."],
    cities: ["Tesla : Austin, Dallas, Houston, Miami, Orlando, Tampa. Zones limitées. Cybercab vérifié spécifiquement à Austin.", "Waymo : Atlanta, Austin, Dallas, Denver, Houston, Las Vegas, Los Angeles, Miami, Nashville, Orlando, Phoenix, San Antonio, San Diego, baie de San Francisco, Tampa. Accès variable ; Uber à Austin et Atlanta.", "Zoox : service payant vérifié à Las Vegas. L’accès gratuit de San Francisco est distinct, pas une autre ville payante confirmée.", "Baidu : villes continentales comprenant Pékin, Shanghai, Shenzhen, Wuhan, Chengdu, Chongqing, Haikou et Sanya ; commercial à Dubaï. Londres, Suisse et Airport Island à Hong Kong restent des essais."],
    events: ["Février : Waymo annonce des passagers à Dallas, Houston, San Antonio et Orlando.", "30 juillet : la NHTSA annonce l’exemption commerciale limitée et surveillée de Zoox.", "10 août : Zoox commence les trajets payants à Las Vegas, confirmés par la presse locale.", "3–4 septembre : lancement de Cybercab à Austin, puis audit de certification NHTSA.", "14 septembre : Waymo accueille ses premiers passagers publics à Las Vegas.", "8 octobre : Waymo annonce un prêt de 5 milliards de dollars ; financement, pas revenu."],
  },
  ar: {
    titles: ["Tesla وWaymo وZoox وBaidu", "مستويات الأتمتة: من يتحمل المسؤولية؟", "مناطق خدمة موثقة، لا تغطية مدن كاملة", "2026: مراحل تجارية وتنظيمية"], date: "تم التحقق في 10 أكتوبر 2026. تختلف فترات الإفصاح.", headers: ["المشغل والمركبة", "الاستشعار", "حالة الخدمة", "الحجم المعلن", "قيد مهم"], note: "مقاييس تعلنها الشركات. الرحلات والإنتاج والتصاريح ليست وحدات متكافئة. لا يعني الجدول ترتيباً عالمياً للسلامة أو الربحية. مرر الجدول أفقياً على الشاشة الصغيرة.", citiesNote: "أدلة الشركات وتغطية مؤرخة. مناطق محددة وقد تتطلب دعوات. تستبعد قوائم التشغيل الاختبارات والإعلانات، وتفصل الإتاحة المجانية عن الخدمة المدفوعة.", timelineNote: "قائمة زمنية. لا يمثل التباعد مدة منقضية، ولا يقيس التمويل أو التصريح حجم الأسطول المنشور.", levelLabel: "المستوى",
    rows: [
      ["Tesla / Model Y, Cybercab", "استشعار القيادة بالكاميرات", "خدمة Robotaxi؛ أطلقت Cybercab بأوستن في 3 سبتمبر", "بدء الإنتاج في الربع الثاني؛ لا عدد أسبوعي متكافئ مثبت", "FSD للمستهلكين خاضع للإشراف. لم يحسم تدقيق التصديق في السجلات المراجعة."],
      ["Waymo / Jaguar I-Pace, Ojai", "كاميرات + ليدار + رادار", "خدمة مستقلة بالكامل في 15 سوقاً أمريكية مدرجة", "أكثر من 500,000 رحلة أسبوعياً وفق إفصاح الاستدامة", "تختلف الإتاحة والتغطية؛ مليون رحلة أسبوعية هدف لنهاية العام."],
      ["Zoox / مركبة مخصصة", "كاميرات + ليدار + رادار + أشعة تحت حمراء", "لاس فيغاس مدفوعة منذ أغسطس؛ تجربة سان فرانسيسكو المجانية منفصلة", "السماح حتى 2,500 مركبة سنوياً لعامين", "سقف تصريح لا تسليمات. لا عدد رحلات أسبوعي متكافئ مثبت."],
      ["Baidu / Apollo Go, RT6", "حساسات متعددة؛ RT6 الأصلي يحدد الكاميرات والليدار", "البر الرئيسي دون سائق وخدمة دبي التجارية", "3.2 مليون رحلة تشغيلية دون سائق في الربع الأول 2026", "الحضور في 28 مدينة يشمل الاختبارات. ليست كل الرحلات بالضرورة مدفوعة."],
    ],
    levels: ["الإنسان يقود؛ تحذيرات أو تدخلات لحظية فقط.", "مساعدة في التوجيه أو السرعة؛ الإنسان يقود.", "مساعدة في التوجيه والسرعة؛ إشراف بشري مستمر.", "النظام يقود ضمن نطاقه؛ الإنسان مطالب بالاستجابة لطلب استعادة القيادة.", "النظام يقود ويتعامل مع الحالات الاحتياطية ضمن نطاقه؛ لا يلزم سائق بشري فيه.", "قيادة في جميع الظروف التي يستطيع الإنسان معالجتها؛ لا نطاق تشغيل مقيد."],
    cities: ["Tesla: أوستن، دالاس، هيوستن، ميامي، أورلاندو، تامبا. مناطق محدودة. إتاحة Cybercab موثقة تحديداً في أوستن.", "Waymo: أتلانتا، أوستن، دالاس، دنفر، هيوستن، لاس فيغاس، لوس أنجلوس، ميامي، ناشفيل، أورلاندو، فينيكس، سان أنطونيو، سان دييغو، خليج سان فرانسيسكو، تامبا. الإتاحة متغيرة؛ Uber في أوستن وأتلانتا.", "Zoox: الخدمة المدفوعة موثقة في لاس فيغاس. تجربة سان فرانسيسكو المجانية حالة منفصلة، لا مدينة مدفوعة إضافية مؤكدة.", "Baidu: تشمل مدن البر الرئيسي بكين وشنغهاي وشنتشن ووهان وتشنغدو وتشونغتشينغ وهايكو وسانيا، مع خدمة دبي التجارية. لندن وسويسرا وAirport Island في هونغ كونغ اختبارات."],
    events: ["فبراير: Waymo تعلن خدمات ركاب في دالاس وهيوستن وسان أنطونيو وأورلاندو.", "30 يوليو: NHTSA تعلن إعفاء Zoox التجاري بقيود ورقابة.", "10 أغسطس: بدء خدمة Zoox المدفوعة في لاس فيغاس وفق تغطية محلية.", "3–4 سبتمبر: إطلاق Cybercab في أوستن ثم تدقيق NHTSA للتصديق.", "14 سبتمبر: Waymo تستقبل أول الركاب من الجمهور في لاس فيغاس.", "8 أكتوبر: Waymo تعلن قرضاً لأجل بقيمة 5 مليارات دولار، لا إيراداً."],
  },
  es: {
    titles: ["Tesla, Waymo, Zoox y Baidu", "Automatización: ¿quién es responsable?", "Zonas verificadas, no ciudades completas", "2026: hitos comerciales y regulatorios"], date: "Verificado el 10 de octubre de 2026. Los periodos publicados difieren.", headers: ["Operador / vehículo", "Sensores", "Estado del servicio", "Escala publicada", "Límite importante"], note: "Medidas declaradas por empresas. Viajes, producción y permisos no son unidades comparables. No implica clasificación global de seguridad o rentabilidad. Desplace la tabla horizontalmente en pantallas pequeñas.", citiesNote: "Directorios empresariales y noticias fechadas. Zonas concretas, con posibles invitaciones. Pruebas y anuncios quedan fuera de listas operativas. Acceso gratuito y servicio pagado se separan.", timelineNote: "Lista cronológica. El espacio no representa tiempo transcurrido; financiación y permisos no miden flotas desplegadas.", levelLabel: "Nivel",
    rows: [
      ["Tesla / Model Y, Cybercab", "Percepción basada en cámaras", "Robotaxi; Cybercab lanzado en Austin el 3 de septiembre", "Producción iniciada en T2; sin volumen semanal comparable establecido", "FSD de consumo sigue supervisado. Auditoría sin resolver en registros revisados."],
      ["Waymo / Jaguar I-Pace, Ojai", "Cámaras + lidar + radar", "Servicio totalmente autónomo en 15 mercados estadounidenses listados", "Más de 500.000 viajes semanales, publicación de sostenibilidad", "Acceso y cobertura varían; un millón semanal es una meta de fin de año."],
      ["Zoox / robotaxi específico", "Cámaras + lidar + radar + infrarrojo", "Las Vegas de pago desde agosto; experiencia gratuita en SF distinta", "Hasta 2.500 vehículos anuales autorizados durante dos años", "Límite autorizado, no entregas. Sin volumen semanal comparable establecido."],
      ["Baidu / Apollo Go, RT6", "Multisensor; RT6 original: cámaras + lidar", "Operación continental sin conductor y Dubái comercial", "3,2 millones de viajes operativos sin conductor, T1 2026", "Presencia en 28 ciudades incluye pruebas. Los viajes no son necesariamente todos pagados."],
    ],
    levels: ["Conduce el humano; solo avisos o intervenciones momentáneas.", "Ayuda a dirección o velocidad; conduce el humano.", "Ayuda a dirección y velocidad; supervisión humana continua.", "Conduce el sistema en su dominio; el humano responde a solicitudes de retomar el control.", "El sistema conduce y gestiona contingencias en su dominio; no requiere conductor humano allí.", "Conduce en todas las condiciones manejables por un humano; sin dominio restringido."],
    cities: ["Tesla: Austin, Dallas, Houston, Miami, Orlando y Tampa. Zonas limitadas. Cybercab verificado específicamente en Austin.", "Waymo: Atlanta, Austin, Dallas, Denver, Houston, Las Vegas, Los Ángeles, Miami, Nashville, Orlando, Phoenix, San Antonio, San Diego, bahía de San Francisco y Tampa. Acceso variable; Uber en Austin y Atlanta.", "Zoox: servicio de pago verificado en Las Vegas. La experiencia gratuita de San Francisco es distinta, no otra ciudad de pago confirmada.", "Baidu: ciudades continentales como Pekín, Shanghái, Shenzhen, Wuhan, Chengdu, Chongqing, Haikou y Sanya; Dubái comercial. Londres, Suiza y Airport Island en Hong Kong son pruebas."],
    events: ["Febrero: Waymo anuncia servicio de pasajeros en Dallas, Houston, San Antonio y Orlando.", "30 de julio: NHTSA anuncia la exención comercial de Zoox con límites y supervisión.", "10 de agosto: Zoox inicia servicio de pago en Las Vegas, confirmado por prensa local.", "3–4 de septiembre: lanzamiento de Cybercab en Austin, seguido de auditoría NHTSA.", "14 de septiembre: Waymo recibe a sus primeros pasajeros públicos en Las Vegas.", "8 de octubre: Waymo anuncia préstamo de 5.000 millones de dólares; financiación, no ingreso."],
  },
};
const rowSources = [[s.launch, s.tesla, "https://ir.tesla.com/_flysystem/s3/sec/000162828026049213/tsla-20260722-gen.pdf"], [s.driver, s.waymo, s.volume], [s.zoox, s.paid, s.exemption], [s.rt6, s.baidu2, s.baidu]];
const citySources = [s.tesla, s.waymo, s.paid, s.china];
const timelineSources = ["https://www.waymo.com/blog/2026/02/dallas-houston-san-antonio-orlando/", s.exemption, s.paid, s.probe, s.vegas, s.debt];
export const robotaxiTimelineDates = ["2026-02-24", "2026-07-30", "2026-08-10", "2026-09-03", "2026-09-14", "2026-10-08"];

export function RobotaxiGraphics({ locale, kind }: { locale: Locale; kind: "comparison" | "levels" | "cities" | "timeline" }) {
  const t = copy[locale], n = ["comparison", "levels", "cities", "timeline"].indexOf(kind), id = `robotaxi-${kind}`;
  const linkClass = "underline decoration-white/40 underline-offset-4 hover:text-[#e9bd65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65]";
  return (
    <figure id={id} aria-labelledby={`${id}-caption`} dir={locale === "ar" ? "rtl" : "ltr"} style={{ display: "flow-root" }} className="my-8 min-w-0 scroll-mt-28 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#FF1A1A]">PRESDA Data Graphics</p>
      <figcaption id={`${id}-caption`} className="text-xl font-bold text-[#e9bd65]">{t.titles[n]}</figcaption>
      <p className="mt-3 text-xs text-white/70">{t.date}</p>
      {kind === "comparison" ? <>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{t.note}</p>
        <div role="region" aria-label={t.titles[0]} tabIndex={0} className="mt-5 overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65]">
          <table className="w-full min-w-[760px] border-collapse text-start text-sm">
            <caption className="sr-only">{t.titles[0]}. {t.note}</caption>
            <thead><tr>{t.headers.map(h => <th key={h} scope="col" className="border-b border-white/25 p-3 text-start">{h}</th>)}</tr></thead>
            <tbody>{t.rows.map((r,i) => <tr key={i}>{r.map((cell,j) => j === 0 ? <th key={j} scope="row" className="border-b border-white/15 p-3 text-start font-semibold text-[#e9bd65]"><bdi>{cell}</bdi></th> : <td key={j} className="border-b border-white/15 p-3 align-top leading-relaxed">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <ul className="mt-4 grid gap-3 text-xs sm:grid-cols-2">{["Tesla", "Waymo", "Zoox", "Baidu"].map((name,i) => <li key={name}><bdi>{name}</bdi>: {rowSources[i].map((url,j) => <a key={url} href={url} className={`${linkClass} me-3`}>{t.headers[j+1]}</a>)}</li>)}</ul>
      </> : kind === "levels" ? <>
        <ol start={0} className="mt-5 grid gap-3 sm:grid-cols-2">{t.levels.map((text,i) => <li key={i} className={`rounded-lg border p-3 ${i === 2 || i === 4 ? "border-[#e9bd65]/60" : "border-white/15"}`}><p className="font-bold text-[#e9bd65]">{t.levelLabel} <bdi>{i}</bdi></p><p className="mt-2 text-sm leading-relaxed">{text}</p></li>)}</ol>
        <a href={s.levels} className={`mt-4 inline-block text-xs ${linkClass}`}>NHTSA</a>
      </> : kind === "cities" ? <>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{t.citiesNote}</p>
        <ul className="mt-5 space-y-3">{t.cities.map((text,i) => <li key={i} className="rounded-lg border border-white/15 p-3 text-sm leading-relaxed"><a href={citySources[i]} className={linkClass}>{text}</a>{i === 3 ? <a href={s.baidu2} className={`ms-2 ${linkClass}`}>Baidu Q2 2026</a> : null}</li>)}</ul>
      </> : <>
        <p className="mt-3 text-sm leading-relaxed text-white/80">{t.timelineNote}</p>
        <ol className="mt-5 space-y-3">{t.events.map((text,i) => <li key={i} className="rounded-lg border border-white/15 p-3"><time dateTime={robotaxiTimelineDates[i]} className="text-xs font-bold text-[#e9bd65]"><bdi>{robotaxiTimelineDates[i]}</bdi></time><p className="mt-2 text-sm leading-relaxed"><a href={timelineSources[i]} className={linkClass}>{text}</a></p></li>)}</ol>
      </>}
    </figure>
  );
}
