import type { Locale } from "./routing";
import { formatDate } from "@/lib/categories";

const en = {
  homeTitle: "PRESDA - Your Daily Press", homeDescription: "PRESDA is an independent digital publication covering world affairs, sport, business, artificial intelligence, science, travel, lifestyle, and culture.",
  latest: "Latest Articles", library: "Article Library", intro: "Browse PRESDA stories by category, search for topics, and sort the newsroom feed by date.",
  more: "More Articles", viewAll: "View All Articles", readMore: "Read More", allCategories: "All Categories", filter: "Filter by category", sort: "Sort articles", newest: "Latest First", oldest: "Oldest First", empty: "No articles found for this search.",
  featured: "Featured articles", previous: "Previous featured article", next: "Next featured article", previousLatest: "Previous latest articles", nextLatest: "Next latest articles", play: "Play featured rotation", pause: "Pause featured rotation", of: "of", carousel: "carousel", slide: "slide", brandAlt: "PRESDA red P brand mark"
};
export const listingMessages: Record<Locale, Record<keyof typeof en, string>> = {
  en,
  fr: {
    homeTitle: "PRESDA - Votre presse au quotidien", homeDescription: "PRESDA est une publication numérique indépendante consacrée à l’actualité mondiale, au sport, à l’économie, à l’intelligence artificielle, aux sciences, aux voyages, à l’art de vivre et à la culture.",
    latest: "Derniers articles", library: "Tous les articles", intro: "Parcourez les articles de PRESDA par catégorie, recherchez un sujet et triez les publications par date.",
    more: "Autres articles", viewAll: "Voir tous les articles", readMore: "Lire la suite", allCategories: "Toutes les catégories", filter: "Filtrer par catégorie", sort: "Trier les articles", newest: "Les plus récents", oldest: "Les plus anciens", empty: "Aucun article ne correspond à cette recherche.",
    featured: "Articles à la une", previous: "Article à la une précédent", next: "Article à la une suivant", previousLatest: "Articles précédents", nextLatest: "Articles suivants", play: "Lancer le défilement", pause: "Suspendre le défilement", of: "sur", carousel: "carrousel", slide: "diapositive", brandAlt: "Logo PRESDA, lettre P rouge"
  },
  ar: {
    homeTitle: "PRESDA - صحافتك اليومية", homeDescription: "PRESDA منصة صحفية رقمية مستقلة تغطي الشؤون العالمية والرياضة والأعمال والذكاء الاصطناعي والعلوم والسفر وأسلوب الحياة والثقافة.",
    latest: "أحدث المقالات", library: "مكتبة المقالات", intro: "تصفح مقالات PRESDA حسب التصنيف، وابحث عن الموضوعات، ورتب المقالات حسب تاريخ النشر.",
    more: "المزيد من المقالات", viewAll: "عرض جميع المقالات", readMore: "اقرأ المزيد", allCategories: "جميع التصنيفات", filter: "تصفية حسب التصنيف", sort: "ترتيب المقالات", newest: "الأحدث أولاً", oldest: "الأقدم أولاً", empty: "لم يتم العثور على مقالات تطابق هذا البحث.",
    featured: "مقالات مختارة", previous: "المقال المختار السابق", next: "المقال المختار التالي", previousLatest: "المقالات السابقة", nextLatest: "المقالات التالية", play: "تشغيل العرض التلقائي", pause: "إيقاف العرض التلقائي مؤقتاً", of: "من", carousel: "عرض شرائح", slide: "شريحة", brandAlt: "شعار PRESDA بحرف P الأحمر"
  },
  es: {
    homeTitle: "PRESDA - Tu prensa diaria", homeDescription: "PRESDA es una publicación digital independiente que cubre actualidad internacional, deportes, economía, inteligencia artificial, ciencia, viajes, estilo de vida y cultura.",
    latest: "Últimos artículos", library: "Biblioteca de artículos", intro: "Explora los artículos de PRESDA por categoría, busca temas y ordena las publicaciones por fecha.",
    more: "Más artículos", viewAll: "Ver todos los artículos", readMore: "Leer más", allCategories: "Todas las categorías", filter: "Filtrar por categoría", sort: "Ordenar artículos", newest: "Más recientes primero", oldest: "Más antiguos primero", empty: "No se encontraron artículos para esta búsqueda.",
    featured: "Artículos destacados", previous: "Artículo destacado anterior", next: "Artículo destacado siguiente", previousLatest: "Artículos anteriores", nextLatest: "Artículos siguientes", play: "Iniciar la reproducción automática", pause: "Pausar la reproducción automática", of: "de", carousel: "carrusel", slide: "diapositiva", brandAlt: "Logotipo de PRESDA con la letra P roja"
  }
};
export const listingDate = (date: string, locale: Locale) => formatDate(date, locale);
