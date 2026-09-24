import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/articles";
import { toCategorySlug } from "@/lib/categories";

import { localizedCategories, messages } from "@/lib/i18n/messages";
import { languageDestination, type Locale } from "@/lib/i18n/routing";
import { translationRoutes } from "@/lib/i18n/registry";

export function Footer({ locale = "en" }: { locale?: Locale }) {
  const t = messages[locale];
  const categoryLabels = localizedCategories[locale];
  const destination = (href: string) => languageDestination(href, locale, translationRoutes);
  const editorialLinks = [
    { href: "/about/", label: locale === "en" ? "About" : t.about },
    { href: "/authors/", label: t.authors },
    { href: "/editorial-policy/", label: t.editorialPolicy },
    { href: "/corrections-policy/", label: t.corrections },
    { href: "/contact/", label: locale === "en" ? "Contact" : t.contact }
  ];
  const legalLinks = [
    { href: "/privacy-policy/", label: t.privacy },
    { href: "/cookie-policy/", label: t.cookies },
    { href: "/terms/", label: t.terms }
  ];

  return (
    <footer className="mt-20 border-t border-[color:var(--border)]">
      <div className="mx-auto grid w-[min(1500px,calc(100%-32px))] gap-10 py-12 lg:grid-cols-[1.25fr_0.9fr_0.9fr_0.9fr]">
        <div>
          <Link prefetch={false} href={destination("/")} aria-label="PRESDA home" className="inline-grid h-16 w-20 place-items-center">
            <Image src="/presda-p-transparent.png" alt="PRESDA P logo" width={156} height={104} className="h-12 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,26,26,0.36)]" />
          </Link>
          <p className="mt-5 max-w-md leading-7 text-[color:var(--muted)]">
            {t.footer}
          </p>
        </div>
        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em]">{t.categories}</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {categories.map((category) => (
              <Link prefetch={false} key={category} href={destination(`/category/${toCategorySlug(category)}/`)} className="inline-flex min-h-11 items-center text-sm text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
                {categoryLabels[category]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em]">{t.editorial}</h3>
          <div className="mt-5 grid gap-3">
            {editorialLinks.map((link) => (
              <Link prefetch={false} key={link.href} href={destination(link.href)} className="inline-flex min-h-11 items-center text-sm text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
                {link.label}
              </Link>
            ))}
          </div>
          <h3 className="mt-8 font-display text-sm font-extrabold uppercase tracking-[0.18em]">{t.legal}</h3>
          <div className="mt-5 grid gap-3">
            {legalLinks.map((link) => (
              <Link prefetch={false} key={link.href} href={destination(link.href)} className="inline-flex min-h-11 items-center text-sm text-[color:var(--muted)] transition hover:text-[#FF1A1A]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.18em]">{t.social}</h3>
          <div className="mt-5 flex gap-3">
            <a href="https://www.instagram.com/presdaofficial" target="_blank" rel="noopener noreferrer" aria-label="PRESDA on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="https://x.com/PresdaOfficial" target="_blank" rel="noopener noreferrer" aria-label="PRESDA on X" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] font-display text-xs font-extrabold transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              X
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589635535583" target="_blank" rel="noopener noreferrer" aria-label="PRESDA on Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="mailto:contact@presda.com" aria-label="Email PRESDA" className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]">
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
          <p className="mt-5 text-sm text-[color:var(--muted)]">contact@presda.com</p>
        </div>
      </div>
    </footer>
  );
}
