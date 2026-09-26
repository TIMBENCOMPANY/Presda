import { translations } from "@/data/translations";
import { validateTranslations } from "./validation";
export { validateTranslations } from "./validation";
import { languageAlternates, normalizePath } from "./routing";

validateTranslations(translations);
export const publishedTranslations = translations.filter((record) => record.status === "published");
export const translationRoutes = publishedTranslations.map(({ locale, englishPath, path }) => ({ locale, englishPath, path }));
export const getLanguageAlternates = (path: string) => languageAlternates(path, translationRoutes);
export const getTranslation = (path: string) => publishedTranslations.find((record) => record.path === normalizePath(path));
