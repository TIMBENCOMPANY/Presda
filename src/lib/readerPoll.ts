export const READER_POLL_ID = "world-cup-final-2030";
export const READER_POLL_ARTICLE = "casablanca-madrid-2030-world-cup-final";
export const pollChoices = ["casablanca", "madrid"] as const;
export type PollChoice = typeof pollChoices[number];
export type PollResult = { casablanca: number; madrid: number; total: number; choice: PollChoice | null; accepted?: boolean; limited?: boolean };

export function pollVoteCount(count: number, locale: "en" | "fr" | "ar" | "es") {
  const value = new Intl.NumberFormat(locale).format(count);
  if (locale === "ar") {
    if (count === 1) return "صوت واحد";
    if (count === 2) return "صوتان";
    return `${value} ${count % 100 >= 3 && count % 100 <= 10 ? "أصوات" : "صوتًا"}`;
  }
  const word = locale === "es" ? "voto" : "vote";
  return `${value} ${word}${count === 1 ? "" : "s"}`;
}

export function pollPercentages(result: Pick<PollResult, "casablanca" | "madrid">) {
  const total = result.casablanca + result.madrid;
  const casablanca = total ? Math.round(result.casablanca / total * 1000) / 10 : 0;
  return { casablanca, madrid: total ? Math.round((100 - casablanca) * 10) / 10 : 0 };
}

export const pollCopy = {
  en: { label: "PRESDA Reader Poll — Unofficial", question: "Where should the 2030 World Cup Final be played?", casablanca: "Casablanca — Grand Stade Hassan II", madrid: "Madrid — Santiago Bernabéu", vote: "VOTE", choose: "Choose your stadium. Have your say.", sending: "Submitting…", thanks: "Your vote is counted. Thank you!", previous: "Your vote has already been counted.", votes: "votes", total: "Total votes", live: "Results refresh every 15 seconds while visible.", note: "Source: votes submitted by PRESDA readers. Self-selected, not a representative survey or an official FIFA vote. No login required. One vote per browser; abuse limits apply.", error: "Voting is temporarily unavailable. Please try again.", limited: "Too many attempts from this connection. Please try again later.", retry: "Try again", loading: "Connecting to the poll…", nojs: "Enable JavaScript to vote and see live results.", stale: "Results could not refresh. Showing the last confirmed counts." },
  fr: { label: "Sondage des lecteurs PRESDA · Non officiel", question: "Où devrait se jouer la finale de la Coupe du monde 2030 ?", casablanca: "Casablanca · Grand Stade Hassan II", madrid: "Madrid · Santiago Bernabéu", vote: "VOTER", choose: "Choisissez votre stade. Donnez votre avis.", sending: "Envoi…", thanks: "Votre vote a été comptabilisé. Merci !", previous: "Votre vote a déjà été comptabilisé.", votes: "votes", total: "Total des votes", live: "Les résultats sont actualisés toutes les 15 secondes lorsqu’ils sont visibles.", note: "Source : votes des lecteurs de PRESDA. Participation volontaire, sans représentativité statistique ni lien avec un vote officiel de la FIFA. Sans connexion. Un vote par navigateur ; des limites anti-abus s’appliquent.", error: "Le vote est temporairement indisponible. Réessayez.", limited: "Trop de tentatives depuis cette connexion. Réessayez plus tard.", retry: "Réessayer", loading: "Connexion au sondage…", nojs: "Activez JavaScript pour voter et consulter les résultats.", stale: "Actualisation impossible. Les derniers résultats confirmés sont affichés." },
  ar: { label: "استطلاع قراء PRESDA · غير رسمي", question: "أين ينبغي إقامة نهائي كأس العالم 2030؟", casablanca: "الدار البيضاء · ملعب الحسن الثاني الكبير", madrid: "مدريد · سانتياغو برنابيو", vote: "صوّت", choose: "اختر الملعب وشاركنا رأيك.", sending: "جارٍ إرسال التصويت…", thanks: "تم احتساب صوتك. شكراً لك!", previous: "تم احتساب صوتك مسبقاً.", votes: "أصوات", total: "إجمالي الأصوات", live: "تُحدّث النتائج كل 15 ثانية ما دامت ظاهرة على الشاشة.", note: "المصدر: أصوات قراء PRESDA المشاركين طوعاً. لا يمثل الاستطلاع الرأي العام ولا يُعد تصويتاً رسمياً للفيفا. لا يلزم تسجيل الدخول. صوت واحد لكل متصفح، مع قيود لمنع إساءة الاستخدام.", error: "التصويت غير متاح مؤقتاً. حاول مجدداً.", limited: "محاولات كثيرة من هذا الاتصال. حاول لاحقاً.", retry: "حاول مجدداً", loading: "جارٍ الاتصال بالاستطلاع…", nojs: "فعّل JavaScript للتصويت وعرض النتائج المباشرة.", stale: "تعذر تحديث النتائج. تُعرض آخر أعداد مؤكدة." },
  es: { label: "Encuesta de lectores de PRESDA · No oficial", question: "¿Dónde debería jugarse la final del Mundial 2030?", casablanca: "Casablanca · Grand Stade Hassan II", madrid: "Madrid · Santiago Bernabéu", vote: "VOTAR", choose: "Elige tu estadio. Comparte tu opinión.", sending: "Enviando…", thanks: "Tu voto se ha contabilizado. ¡Gracias!", previous: "Tu voto ya se ha contabilizado.", votes: "votos", total: "Votos totales", live: "Los resultados se actualizan cada 15 segundos mientras están visibles.", note: "Fuente: votos de lectores de PRESDA. Participación voluntaria, sin representatividad estadística ni relación con una votación oficial de la FIFA. Sin iniciar sesión. Un voto por navegador; se aplican límites contra el abuso.", error: "La votación no está disponible temporalmente. Inténtalo de nuevo.", limited: "Demasiados intentos desde esta conexión. Inténtalo más tarde.", retry: "Reintentar", loading: "Conectando con la encuesta…", nojs: "Activa JavaScript para votar y ver los resultados.", stale: "No se pudieron actualizar los resultados. Se muestran los últimos recuentos confirmados." }
} as const;
