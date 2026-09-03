import type { Metadata } from "next";
import { Barlow_Condensed, Inter, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const articleDisplay = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-article-display",
  weight: ["600", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://presda.com"),
  title: {
    default: "PRESDA - Your Daily Press",
    template: "%s | PRESDA"
  },
  description:
    "PRESDA is a futuristic premium news platform covering AI, gaming, sport, business, world, paparazzi, and lifestyle stories.",
  openGraph: {
    title: "PRESDA - Your Daily Press",
    description:
      "A clean futuristic news magazine with real article text, premium visuals, and dark-first editorial design.",
    url: "https://presda.com",
    siteName: "PRESDA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PRESDA - Your Daily Press",
    description: "Futuristic premium news for global digital culture."
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-light.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} ${articleDisplay.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
