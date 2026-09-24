import type { Translation } from "@/lib/i18n/content";
import ar from "./localizations/ar.json";
import fr from "./localizations/fr.json";
import es from "./localizations/es.json";

// Reviewed four-article pilot. Each language owns its content and SEO metadata.
// Drafts never produce routes, sitemap entries, hreflang links or selector targets.
export const translations: Translation[] = [...ar, ...fr, ...es] as Translation[];
