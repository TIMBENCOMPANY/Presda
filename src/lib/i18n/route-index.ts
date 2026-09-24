import routes from "@/data/translation-routes.json";
import type { TranslationRoute } from "./routing";

// Generated before each build. Middleware must not bundle the article bodies.
export const middlewareTranslationRoutes = routes as TranslationRoute[];
