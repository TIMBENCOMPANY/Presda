import type { Locale } from "./routing";

const en = {
  shareOn: "Share on", copy: "Copy", copied: "Copied", email: "Email address",
  dispatch: "PRESDA Dispatch", headline: "Stay Informed. Stay Aware.",
  description: "A sharp briefing across AI, gaming, sport, business, world affairs, paparazzi, and lifestyle.",
  submitting: "Submitting", subscribe: "Subscribe", retry: "Please try again.",
  confirm: "Please check your email to confirm your subscription.",
  error: "We could not process that subscription right now."
};
export const articleControls: Record<Locale, Record<keyof typeof en, string>> = {
  en,
  ar: {
    shareOn: "مشاركة عبر", copy: "نسخ", copied: "تم النسخ", email: "البريد الإلكتروني",
    dispatch: "نشرة PRESDA", headline: "تابع الأخبار. افهم ما يجري.",
    description: "موجز لأخبار الذكاء الاصطناعي والألعاب والرياضة والأعمال والعالم والمشاهير وأسلوب الحياة.",
    submitting: "جارٍ الإرسال", subscribe: "اشترك", retry: "يرجى المحاولة مجدداً.",
    confirm: "يرجى مراجعة بريدك الإلكتروني لتأكيد الاشتراك.", error: "تعذّر إتمام الاشتراك الآن."
  },
  fr: {
    shareOn: "Partager sur", copy: "Copier", copied: "Copié", email: "Adresse e-mail",
    dispatch: "La newsletter PRESDA", headline: "Suivez l’actualité. Gardez une longueur d’avance.",
    description: "L’essentiel de l’IA, du jeu vidéo, du sport, de l’économie, de l’actualité internationale, des célébrités et de l’art de vivre.",
    submitting: "Envoi en cours", subscribe: "S’abonner", retry: "Veuillez réessayer.",
    confirm: "Consultez votre boîte mail pour confirmer votre abonnement.", error: "Nous ne pouvons pas traiter votre inscription pour le moment."
  },
  es: {
    shareOn: "Compartir en", copy: "Copiar", copied: "Copiado", email: "Correo electrónico",
    dispatch: "El boletín de PRESDA", headline: "Sigue la actualidad. Entiende lo que pasa.",
    description: "Las claves de la IA, los videojuegos, el deporte, la economía, la actualidad internacional, los famosos y el estilo de vida.",
    submitting: "Enviando", subscribe: "Suscribirse", retry: "Vuelve a intentarlo.",
    confirm: "Revisa tu correo para confirmar la suscripción.", error: "No hemos podido tramitar la suscripción en este momento."
  }
};
