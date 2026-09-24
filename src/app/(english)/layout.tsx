import type { ReactNode } from "react";
import { PublicationDocument } from "@/components/PublicationDocument";
export { metadata } from "@/components/PublicationDocument";
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <PublicationDocument locale="en">{children}</PublicationDocument>;
}
