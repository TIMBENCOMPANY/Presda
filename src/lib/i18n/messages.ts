import type { ArticleCategory } from "@/data/articles";
import type { Locale } from "./routing";

const en = {
  contents: "Table of contents",
  language: "Language", closeNotice: "Close language notice", fallback: "This page is available in English. Translations will appear here when published.",
  home: "Home", articles: "Articles", categories: "Categories", menu: "Menu", openMenu: "Open site menu", closeMenu: "Close site menu",
  search: "Search articles", searchPlaceholder: "Search articles...", openSearch: "Open article search", closeSearch: "Close article search",
  searching: "Searching...", noResults: "No articles found", searchError: "Search unavailable. Press Enter to search the article library.",
  subscribe: "Subscribe", about: "About Us", contact: "Contact Us", join: "Join Us", newsletter: "Newsletter",
  authors: "Authors", editorialPolicy: "Editorial Policy", corrections: "Corrections", privacy: "Privacy Policy", cookies: "Cookie Policy", terms: "Terms",
  editorial: "Editorial", legal: "Legal", social: "Social", sources: "Sources", faq: "Frequently asked questions", english: "Read in English",
  footer: "PRESDA is a futuristic premium news platform built for clean reporting, visual context, and fast-moving digital culture."
};
type Messages = Record<keyof typeof en, string>;
export const messages: Record<Locale, Messages> = {
  en,
  ar: {
    contents: "فهرس المقال",
    language: "اللغة", closeNotice: "إغلاق تنبيه اللغة", fallback: "هذه الصفحة متاحة بالإنجليزية. ستظهر الترجمات هنا عند نشرها.",
    home: "الرئيسية", articles: "المقالات", categories: "الأقسام", menu: "القائمة", openMenu: "فتح قائمة الموقع", closeMenu: "إغلاق قائمة الموقع",
    search: "البحث في المقالات", searchPlaceholder: "ابحث في المقالات...", openSearch: "فتح البحث", closeSearch: "إغلاق البحث",
    searching: "جارٍ البحث...", noResults: "لم نعثر على مقالات", searchError: "البحث غير متاح الآن. اضغط إدخال للبحث في مكتبة المقالات.",
    subscribe: "اشترك", about: "من نحن", contact: "اتصل بنا", join: "انضم إلينا", newsletter: "النشرة البريدية",
    authors: "الكتّاب", editorialPolicy: "السياسة التحريرية", corrections: "التصحيحات", privacy: "سياسة الخصوصية", cookies: "سياسة ملفات الارتباط", terms: "شروط الاستخدام",
    editorial: "التحرير", legal: "معلومات قانونية", social: "تابعنا", sources: "المصادر", faq: "أسئلة شائعة", english: "اقرأ بالإنجليزية",
    footer: "PRESDA منصة صحفية مستقلة تقدم تغطية واضحة وسياقاً بصرياً لفهم عالم سريع التغيّر."
  },
  fr: {
    contents: "Sommaire",
    language: "Langue", closeNotice: "Fermer le message de langue", fallback: "Cette page est disponible en anglais. Les traductions apparaîtront ici dès leur publication.",
    home: "Accueil", articles: "Articles", categories: "Rubriques", menu: "Menu", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu",
    search: "Rechercher des articles", searchPlaceholder: "Rechercher un article...", openSearch: "Ouvrir la recherche", closeSearch: "Fermer la recherche",
    searching: "Recherche en cours...", noResults: "Aucun article trouvé", searchError: "Recherche indisponible. Appuyez sur Entrée pour accéder aux archives.",
    subscribe: "S’abonner", about: "Qui sommes-nous ?", contact: "Nous contacter", join: "Nous rejoindre", newsletter: "Newsletter",
    authors: "Auteurs", editorialPolicy: "Charte éditoriale", corrections: "Rectificatifs", privacy: "Confidentialité", cookies: "Politique relative aux cookies", terms: "Conditions d’utilisation",
    editorial: "La rédaction", legal: "Informations légales", social: "Nous suivre", sources: "Sources", faq: "Questions fréquentes", english: "Lire en anglais",
    footer: "PRESDA est un média indépendant qui décrypte l’actualité et la culture numérique grâce à une information claire et une approche visuelle."
  },
  es: {
    contents: "Índice del artículo",
    language: "Idioma", closeNotice: "Cerrar el aviso de idioma", fallback: "Esta página está disponible en inglés. Las traducciones aparecerán aquí cuando se publiquen.",
    home: "Inicio", articles: "Artículos", categories: "Secciones", menu: "Menú", openMenu: "Abrir el menú", closeMenu: "Cerrar el menú",
    search: "Buscar artículos", searchPlaceholder: "Buscar artículos...", openSearch: "Abrir la búsqueda", closeSearch: "Cerrar la búsqueda",
    searching: "Buscando...", noResults: "No se encontraron artículos", searchError: "Búsqueda no disponible. Pulsa Intro para consultar el archivo.",
    subscribe: "Suscribirse", about: "Quiénes somos", contact: "Contacto", join: "Únete a nosotros", newsletter: "Boletín",
    authors: "Autores", editorialPolicy: "Política editorial", corrections: "Correcciones", privacy: "Política de privacidad", cookies: "Política de cookies", terms: "Condiciones de uso",
    editorial: "Redacción", legal: "Información legal", social: "Síguenos", sources: "Fuentes", faq: "Preguntas frecuentes", english: "Leer en inglés",
    footer: "PRESDA es un medio independiente que ofrece información clara y contexto visual para entender la actualidad y la cultura digital."
  }
};

export const localizedCategories: Record<Locale, Record<ArticleCategory, string>> = {
  en: { World: "World", Sport: "Sport", Business: "Business", AI: "AI", Science: "Science", History: "History", Travel: "Travel", Lifestyle: "Lifestyle", Paparazzi: "Paparazzi", "World Cup 2026": "World Cup 2026" },
  ar: { World: "العالم", Sport: "الرياضة", Business: "الأعمال", AI: "الذكاء الاصطناعي", Science: "العلوم", History: "التاريخ", Travel: "السفر", Lifestyle: "أسلوب الحياة", Paparazzi: "المشاهير", "World Cup 2026": "كأس العالم 2026" },
  fr: { World: "Monde", Sport: "Sport", Business: "Économie", AI: "Intelligence artificielle", Science: "Sciences", History: "Histoire", Travel: "Voyages", Lifestyle: "Art de vivre", Paparazzi: "Célébrités", "World Cup 2026": "Coupe du monde 2026" },
  es: { World: "Mundo", Sport: "Deportes", Business: "Economía", AI: "Inteligencia artificial", Science: "Ciencia", History: "Historia", Travel: "Viajes", Lifestyle: "Estilo de vida", Paparazzi: "Famosos", "World Cup 2026": "Mundial 2026" }
};
