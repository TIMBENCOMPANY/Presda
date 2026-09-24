import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, BadgeCheck, Facebook, Handshake, Instagram, Lightbulb, Mail, Newspaper, Send } from "lucide-react";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact PRESDA",
  description: "Contact PRESDA for editorial inquiries, story tips, corrections, partnerships, advertising, and reader questions.",
  path: "/contact/"
});

type ContactMethod = {
  label: string;
  value: string;
  href: string;
  action: string;
  icon?: LucideIcon;
  mark?: string;
};

type ContactType = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const contactMethods: ContactMethod[] = [
  {
    label: "Email",
    value: "contact@presda.com",
    href: "mailto:contact@presda.com",
    action: "Send Email",
    icon: Mail
  },
  {
    label: "Instagram",
    value: "@presdaofficial",
    href: "https://www.instagram.com/presdaofficial",
    action: "Open Instagram",
    icon: Instagram
  },
  {
    label: "X",
    value: "@PresdaOfficial",
    href: "https://x.com/PresdaOfficial",
    action: "Open X",
    mark: "X"
  },
  {
    label: "Facebook",
    value: "PRESDA",
    href: "https://www.facebook.com/profile.php?id=61589635535583",
    action: "Open Facebook",
    icon: Facebook
  }
];

const contactTypes: ContactType[] = [
  {
    title: "Editorial Inquiries",
    description: "Interviews, coverage questions, newsroom requests.",
    icon: Newspaper
  },
  {
    title: "Story Tips",
    description: "Leads, context, documents, public-interest signals.",
    icon: Lightbulb
  },
  {
    title: "Corrections",
    description: "Report factual errors, attribution issues, or missing context.",
    icon: BadgeCheck
  },
  {
    title: "Partnerships & Advertising",
    description: "Brand partnerships, sponsorships, and commercial opportunities.",
    icon: Handshake
  }
];

export default function ContactPage() {
  return (
    <main className="home-page overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact/" }
            ])
          )
        }}
      />
      <div className="relative mx-auto w-[min(1320px,calc(100%-24px))] py-8 sm:w-[min(1320px,calc(100%-32px))] sm:py-12 lg:py-16">
        <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#FF1A1A]/20 blur-[90px]" />
        <div className="pointer-events-none absolute -left-24 top-52 h-64 w-64 rounded-full bg-[#E8C97A]/10 blur-[100px]" />

        <header className="relative overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] sm:p-8 lg:rounded-3xl lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_24%,rgba(255,26,26,0.22),transparent_22rem)]" />
          <div className="absolute right-6 top-6 hidden h-28 w-28 rounded-full border border-[#FF1A1A]/20 bg-[repeating-radial-gradient(circle,rgba(255,26,26,0.16)_0_1px,transparent_1px_12px)] opacity-80 sm:block" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.55fr)] lg:items-end">
            <div>
              <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#FF1A1A] sm:text-xs sm:tracking-[0.22em]">Contact</p>
              <h1 className="mt-4 max-w-3xl text-balance font-display text-[clamp(2.25rem,12vw,3.1rem)] font-extrabold uppercase leading-[0.96] text-[color:var(--home-text)] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-[clamp(3rem,8vw,7rem)] sm:leading-[0.9]">
                Contact PRESDA
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-6 text-[color:var(--home-muted)] sm:mt-6 sm:text-lg sm:leading-7">
                Reach the editorial team, send a correction, share a story tip, or start a commercial conversation.
              </p>
            </div>

            <div className="grid gap-3 rounded-2xl border border-[#FF1A1A]/24 bg-[color:var(--home-panel-strong)] p-3 backdrop-blur-xl sm:p-4">
              <div className="flex items-center justify-between border-b border-[color:var(--home-border)] pb-3">
                <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#E8C97A]">Editorial Signal</span>
                <span className="h-2 w-2 rounded-full bg-[#FF1A1A] shadow-[0_0_18px_rgba(255,26,26,0.8)]" />
              </div>
              <div className="grid gap-2 text-center font-display text-[10px] font-extrabold uppercase tracking-wide text-[color:var(--home-muted)] min-[380px]:grid-cols-3">
                <span className="rounded-xl border border-[color:var(--home-border)] px-2 py-3">Tips</span>
                <span className="rounded-xl border border-[color:var(--home-border)] px-2 py-3">Newsroom</span>
                <span className="rounded-xl border border-[color:var(--home-border)] px-2 py-3">Corrections</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8" aria-labelledby="contact-methods-title">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Direct Lines</p>
              <h2 id="contact-methods-title" className="mt-2 text-balance font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
                Contact Methods
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] transition duration-200 hover:-translate-y-1 hover:border-[#FF1A1A]/60 hover:shadow-[0_24px_70px_rgba(196,0,25,0.18)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_0%,rgba(255,26,26,0.17),transparent_12rem)] opacity-0 transition group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-[#FF1A1A]/25 bg-[#FF1A1A]/10 text-[#FF1A1A] shadow-[0_0_28px_rgba(196,0,25,0.12)]">
                      {Icon ? <Icon className="h-7 w-7" strokeWidth={1.5} /> : <span className="font-display text-3xl font-extrabold leading-none">{method.mark}</span>}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[color:var(--home-muted)] transition group-hover:text-[#FF1A1A]" strokeWidth={1.5} />
                  </div>
                  <div className="relative mt-7">
                    <h3 className="font-display text-xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-2xl">{method.label}</h3>
                    <p className="mt-2 break-words text-sm font-semibold text-[color:var(--home-muted)]">{method.value}</p>
                    <p className="mt-5 font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#E8C97A]">{method.action}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Editorial contact types">
          {contactTypes.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-2xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] transition hover:border-[#FF1A1A]/45">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[color:var(--home-border)] text-[#FF1A1A]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h2 className="mt-5 font-display text-lg font-extrabold uppercase leading-tight text-[color:var(--home-text)]">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[color:var(--home-muted)]">{item.description}</p>
              </article>
            );
          })}
        </section>

        <section className="mt-8 rounded-3xl border border-[color:var(--home-border)] bg-[color:var(--home-panel)] p-5 shadow-[var(--home-card-shadow)] backdrop-blur-xl sm:p-7 lg:p-9" aria-labelledby="contact-form-title">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-start">
            <div>
              <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">Message Desk</p>
              <h2 id="contact-form-title" className="mt-3 text-balance font-display text-2xl font-extrabold uppercase leading-tight text-[color:var(--home-text)] sm:text-4xl">
                Send A Message
              </h2>
              <p className="mt-4 max-w-sm leading-7 text-[color:var(--home-muted)]">
                Use the form for detailed notes. For urgent editorial matters, email contact@presda.com directly.
              </p>
            </div>

            <form action="mailto:contact@presda.com" method="post" encType="text/plain" className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-[color:var(--home-muted)]">
                  Name
                  <input name="name" required className="rounded-xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] px-4 py-3 text-[color:var(--home-text)] outline-none transition focus:border-[#FF1A1A] focus:shadow-[0_0_0_3px_rgba(255,26,26,0.12)]" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-[color:var(--home-muted)]">
                  Email
                  <input name="email" type="email" required className="rounded-xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] px-4 py-3 text-[color:var(--home-text)] outline-none transition focus:border-[#FF1A1A] focus:shadow-[0_0_0_3px_rgba(255,26,26,0.12)]" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold text-[color:var(--home-muted)]">
                Subject
                <input name="subject" required className="rounded-xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] px-4 py-3 text-[color:var(--home-text)] outline-none transition focus:border-[#FF1A1A] focus:shadow-[0_0_0_3px_rgba(255,26,26,0.12)]" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-[color:var(--home-muted)]">
                Message
                <textarea name="message" required rows={7} className="resize-y rounded-xl border border-[color:var(--home-border)] bg-[color:var(--home-panel-strong)] px-4 py-3 text-[color:var(--home-text)] outline-none transition focus:border-[#FF1A1A] focus:shadow-[0_0_0_3px_rgba(255,26,26,0.12)]" />
              </label>
              <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#FF1A1A] px-5 py-3 font-display text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_18px_42px_rgba(196,0,25,0.24)] transition hover:brightness-110">
                <Send className="h-4 w-4" strokeWidth={1.5} />
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
