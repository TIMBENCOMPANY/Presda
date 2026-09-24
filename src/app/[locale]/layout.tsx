import type { ReactNode } from "react";
import { PublicationDocument } from "@/components/PublicationDocument";
import { isTranslationLocale } from "@/lib/i18n/routing";
export { metadata } from "@/components/PublicationDocument";
export default async function LocalizedLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PublicationDocument locale={isTranslationLocale(locale) ? locale : "en"}>{children}</PublicationDocument>;
}
