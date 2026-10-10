import type { Locale } from "@/lib/i18n/routing";

const sources = {
  origins: "https://www.lemonde.fr/en/france/article/2026/10/05/why-french-high-schoolers-are-protesting-and-why-their-movement-is-already-historic_6758257_7.html",
  crisis: "https://apnews.com/article/0d1dc395f7e69ebcd115eca632c6165d",
  roadmap: "https://www.education.gouv.fr/lyceennes-lyceens-vous-avez-la-parole-506143",
  afp: "https://www.afp.com/en/gen-z-has-risen-tens-thousands-mass-tense-france-school-protests",
  cgt: "https://www.cgt.fr/comm-de-presse/apres-la-maree-humaine-du-6-octobre-le-gouvernement-doit-repondre-sans-delai-aux-revendications-des",
  grenade: "https://www.lemonde.fr/en/france/article/2026/10/07/what-is-the-ef-son-stun-grenade-france-has-suspended-after-it-mutilated-a-high-schooler_6758348_7.html",
  teachers: "https://www.boursorama.com/impots/actualites/en-direct-france-trois-mille-enseignants-en-renfort-dit-geffray-apres-l-acte-iv-du-mouvement-lyceen-9937fcf2b1708b0017059923534412d4",
  strike: "https://www.snes.edu/agissons/campagnes/en-greve-le-13-octobre/",
};

const copy = {
  en: { timeline: "From school grievances to a national response", turnout: "October 6: two estimates, one demonstration day", note: "Reported events in 2026. Equal spacing is not elapsed time. The final entry is an announced action, not an event that has happened.", planned: "ANNOUNCED", dates: ["September 21", "October 1", "October 4", "October 6", "October 7", "October 8", "October 13"], events: ["Staffing protest begins in Créteil.", "Lecornu convenes a crisis meeting.", "Government issues five-part education roadmap.", "Nationwide marches bring students, teachers and unions together.", "Nuñez publicly confirms provisional EF-SON suspension for school protests.", "Geffray announces assignments for roughly 3,000 existing teachers.", "SNES-FSU calls a strike. Participation remains unknown."], scope: "Nationwide participants on October 6, 2026. Separate estimates, not an interval or a sum. Values are displayed as reported, with no averaged total.", authority: "Interior Ministry, reported by AFP", organizers: "CGT organizer claim", value: "Reported participants", source: "Source / attribution", more: "More than", foot: "Different counting methods can produce different estimates. Neither number is a verified individual census.", sources: "Sources" },
  fr: { timeline: "Des difficultés scolaires à la réponse nationale", turnout: "6 octobre : deux estimations, une même journée", note: "Événements rapportés en 2026. Les espacements ne représentent pas des durées. La dernière entrée est un appel, pas un événement déjà survenu.", planned: "ANNONCÉ", dates: ["21 septembre", "1er octobre", "4 octobre", "6 octobre", "7 octobre", "8 octobre", "13 octobre"], events: ["Début de la mobilisation sur les personnels à Créteil.", "Lecornu réunit une cellule de crise.", "Le gouvernement présente cinq chantiers pour les lycées.", "Des marches nationales réunissent élèves, enseignants et syndicats.", "Nuñez confirme publiquement la suspension provisoire de l’EF-SON pour les mobilisations lycéennes.", "Geffray annonce l’affectation d’environ 3 000 enseignants existants.", "Le SNES-FSU appelle à la grève. Participation inconnue."], scope: "Participants en France le 6 octobre 2026. Estimations distinctes, pas un intervalle ou une somme. Valeurs publiées, sans moyenne calculée.", authority: "Ministère de l’intérieur, rapporté par AFP", organizers: "Estimation de la CGT", value: "Participants annoncés", source: "Source / attribution", more: "Plus de", foot: "Des méthodes de comptage différentes peuvent produire des estimations différentes. Aucun chiffre n’est un recensement individuel vérifié.", sources: "Sources" },
  ar: { timeline: "من الشكاوى المدرسية إلى الاستجابة الوطنية", turnout: "6 أكتوبر: تقديران ليوم مظاهرات واحد", note: "أحداث منقولة في 2026. لا تمثل المسافات مدد الزمن. المحطة الأخيرة دعوة معلنة، لا حدثاً وقع بالفعل.", planned: "معلن", dates: ["21 سبتمبر", "1 أكتوبر", "4 أكتوبر", "6 أكتوبر", "7 أكتوبر", "8 أكتوبر", "13 أكتوبر"], events: ["بدء احتجاج بشأن المعلمين في كريتاي.", "لوكورنو يعقد اجتماع أزمة.", "الحكومة تعرض خمسة مسارات للعمل التعليمي.", "مسيرات وطنية تجمع الطلاب والمعلمين والنقابات.", "نونيز يؤكد علناً التعليق المؤقت لـEF-SON في الاحتجاجات المدرسية.", "جيفري يعلن توزيع نحو 3,000 معلم من العاملين الحاليين.", "SNES-FSU تدعو لإضراب. المشاركة غير معلومة."], scope: "المشاركون في فرنسا يوم 6 أكتوبر 2026. تقديرات منفصلة، لا نطاق أو مجموع. تعرض القيم كما نقلت دون حساب متوسط.", authority: "وزارة الداخلية، نقلاً عن فرانس برس", organizers: "تقدير المنظمين في CGT", value: "المشاركة المعلنة", source: "المصدر والنسبة", more: "أكثر من", foot: "قد تؤدي طرق العد المختلفة إلى تقديرات مختلفة. لا يمثل أي رقم إحصاءً فردياً موثقاً.", sources: "المصادر" },
  es: { timeline: "De las quejas escolares a la respuesta nacional", turnout: "6 de octubre: dos estimaciones, una jornada", note: "Hechos reportados en 2026. Las separaciones no representan tiempo transcurrido. La última entrada es una convocatoria, no un hecho ocurrido.", planned: "ANUNCIADO", dates: ["21 de septiembre", "1 de octubre", "4 de octubre", "6 de octubre", "7 de octubre", "8 de octubre", "13 de octubre"], events: ["Comienza la protesta por falta de docentes en Créteil.", "Lecornu convoca una reunión de crisis.", "El Gobierno presenta cinco líneas de trabajo educativo.", "Marchas nacionales reúnen a estudiantes, docentes y sindicatos.", "Nuñez confirma públicamente la suspensión provisional de EF-SON en las protestas escolares.", "Geffray anuncia destinos para unos 3.000 docentes existentes.", "SNES-FSU convoca huelga. Asistencia desconocida."], scope: "Participantes nacionales el 6 de octubre de 2026. Estimaciones separadas, no un intervalo ni una suma. Valores publicados, sin calcular un promedio.", authority: "Ministerio del Interior, según AFP", organizers: "Estimación de la CGT", value: "Participantes reportados", source: "Fuente / atribución", more: "Más de", foot: "Métodos diferentes pueden producir estimaciones distintas. Ninguna cifra es un censo individual verificado.", sources: "Fuentes" },
};

export const franceProtestTimelineDates = ["2026-09-21", "2026-10-01", "2026-10-04", "2026-10-06", "2026-10-07", "2026-10-08", "2026-10-13"];
const eventSources = [sources.origins, sources.crisis, sources.roadmap, sources.afp, sources.grenade, sources.teachers, sources.strike];

export function FranceProtestsGraphics({ locale, kind }: { locale: Locale; kind: "timeline" | "turnout" }) {
  const t = copy[locale];
  const id = `france-protests-${kind}`;
  return (
    <figure id={id} aria-labelledby={`${id}-caption`} dir={locale === "ar" ? "rtl" : "ltr"} className="my-8 scroll-mt-28 rounded-xl border border-white/20 bg-[#101010] p-4 text-white sm:p-6">
      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#FF1A1A]">PRESDA Data Graphics</p>
      <figcaption id={`${id}-caption`} className="text-xl font-bold text-[#e9bd65]">{kind === "timeline" ? t.timeline : t.turnout}</figcaption>
      <p className="mt-3 text-sm leading-relaxed text-white/80">{kind === "timeline" ? t.note : t.scope}</p>
      {kind === "timeline" ? (
        <ol className="mt-5 space-y-3">
          {franceProtestTimelineDates.map((date, i) => (
            <li key={date} className={`grid gap-2 rounded-lg border p-3 sm:grid-cols-[10rem_1fr] ${i === 6 ? "border-dashed border-[#e9bd65]/60" : "border-white/15"}`}>
              <div><time dateTime={date} className="font-semibold text-[#e9bd65]">{t.dates[i]}</time>{i === 6 ? <span className="mt-1 block text-xs text-white/80">{t.planned}</span> : null}</div>
              <p className="text-sm leading-relaxed"><a href={eventSources[i]} className="underline decoration-white/40 underline-offset-4 hover:text-[#e9bd65] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e9bd65]">{t.events[i]}</a></p>
            </li>
          ))}
        </ol>
      ) : (
        <>
          <table className="mt-5 w-full table-fixed border-collapse text-start text-sm">
            <caption className="sr-only">{t.turnout}. {t.scope}</caption>
            <thead><tr><th scope="col" className="w-3/5 border-b border-white/25 p-2 text-start">{t.source}</th><th scope="col" className="border-b border-white/25 p-2 text-start">{t.value}</th></tr></thead>
            <tbody>
              <tr><th scope="row" className="border-b border-white/15 p-3 text-start font-normal"><a href={sources.afp} className="underline underline-offset-4 hover:text-[#e9bd65]">{t.authority}</a></th><td className="border-b border-white/15 p-3 font-bold text-[#e9bd65]"><bdi>256,000</bdi></td></tr>
              <tr><th scope="row" className="p-3 text-start font-normal"><a href={sources.cgt} className="underline underline-offset-4 hover:text-[#e9bd65]">{t.organizers}</a></th><td className="p-3 font-bold text-[#e9bd65]"><span className="block text-xs font-normal text-white/80">{t.more}</span><bdi>450,000</bdi></td></tr>
            </tbody>
          </table>
          <p className="mt-4 text-xs leading-relaxed text-white/70">{t.foot}</p>
        </>
      )}
      <p className="mt-4 text-xs text-white/65">{t.sources}: {kind === "timeline" ? "AP, Le Monde, AFP, Reuters, Ministère de l’Éducation nationale, SNES-FSU" : "AFP / Ministère de l’Intérieur; CGT"}. 2026.</p>
    </figure>
  );
}
