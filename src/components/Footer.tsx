import { Facebook, Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PrivacyChoices } from "@/components/PrivacyChoices";
import { categories } from "@/data/articles";
import { toCategorySlug } from "@/lib/categories";

import { brandLabels, localizedCategories, messages } from "@/lib/i18n/messages";
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

  const headingClass = "font-display text-xs font-extrabold uppercase tracking-[0.08em] sm:text-sm";
  const linkClass = "flex min-h-8 items-center py-1 text-xs leading-4 text-[color:var(--muted)] transition hover:text-[#FF1A1A] sm:text-sm sm:leading-5";
  const socialClass = "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]";

  return (
    <footer className="mt-8 border-t border-[color:var(--border)]">
      <div className="mx-auto grid w-[min(1500px,calc(100%-32px))] gap-6 py-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-12">
        <div className="min-w-0">
          <Link prefetch={false} href={destination("/")} aria-label={brandLabels[locale].home} className="inline-grid h-12 w-16 place-items-center">
            <Image src="/presda-p-transparent.png" alt={brandLabels[locale].logo} width={156} height={104} className="h-10 w-auto object-contain drop-shadow-[0_0_18px_rgba(255,26,26,0.36)]" />
          </Link>
          <p className="mt-2 max-w-md text-sm leading-5 text-[color:var(--muted)]">{t.footer}</p>
          <h3 className={`mt-4 ${headingClass}`}>{t.social}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <a href="https://www.instagram.com/presdaofficial" target="_blank" rel="noopener noreferrer" aria-label={`${brandLabels[locale].on} Instagram`} className={socialClass}>
              <Instagram className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61589635535583" target="_blank" rel="noopener noreferrer" aria-label={`${brandLabels[locale].on} Facebook`} className={socialClass}>
              <Facebook className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="https://pin.it/1WYOX7V6c" target="_blank" rel="noopener noreferrer" aria-label={`${brandLabels[locale].on} Pinterest`} className={socialClass}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" /></svg>
            </a>
            <a href="https://flipboard.com/@PresdaOfficial?from=share&utm_source=flipboard&utm_medium=share" target="_blank" rel="noopener noreferrer" aria-label={`${brandLabels[locale].on} Flipboard`} className={socialClass}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4v4.8z" /></svg>
            </a>
            <a href="mailto:contact@presda.com" aria-label={brandLabels[locale].email} className={socialClass}>
              <Mail className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
          <p className="mt-2 text-xs text-[color:var(--muted)]">contact@presda.com</p>
        </div>
        <div className="grid min-w-0 grid-cols-3 gap-3 sm:gap-6">
          <div className="min-w-0">
            <h3 className={headingClass}>{t.categories}</h3>
            <div className="mt-2 flex flex-col">
              {categories.map((category) => (
                <Link prefetch={false} key={category} href={destination(`/category/${toCategorySlug(category)}/`)} className={linkClass}>
                  {categoryLabels[category]}
                </Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h3 className={headingClass}>{t.editorial}</h3>
            <div className="mt-2 flex flex-col">
              {editorialLinks.map((link) => (
                <Link prefetch={false} key={link.href} href={destination(link.href)} className={linkClass}>{link.label}</Link>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h3 className={headingClass}>{t.legal}</h3>
            <div className="mt-2 flex flex-col">
              {legalLinks.map((link) => (
                <Link prefetch={false} key={link.href} href={destination(link.href)} className={linkClass}>{link.label}</Link>
              ))}
              <PrivacyChoices locale={locale} className={linkClass} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
