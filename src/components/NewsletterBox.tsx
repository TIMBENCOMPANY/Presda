export function NewsletterBox({ compact = false }: { compact?: boolean }) {
  return (
    <section
      id={compact ? undefined : "newsletter"}
      className={`rounded-lg border border-[#FF1A1A]/45 bg-[color:var(--card)] shadow-[var(--shadow)] ${compact ? "p-5" : "mx-auto w-[min(1500px,calc(100%-32px))] p-7 sm:p-10"}`}
    >
      <p className="font-display text-xs font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A]">PRESDA Dispatch</p>
      <h2 className={`${compact ? "text-2xl" : "text-4xl sm:text-5xl"} mt-3 font-display font-extrabold uppercase leading-none`}>
        Stay Informed. Stay Aware.
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-[color:var(--muted)]">
        A sharp briefing across AI, gaming, sport, business, world affairs, paparazzi, and lifestyle.
      </p>
      <form className={`mt-6 grid gap-3 ${compact ? "" : "sm:grid-cols-[1fr_auto]"}`}>
        <input
          type="email"
          placeholder="you@domain.com"
          className="min-h-[52px] rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 text-sm text-[color:var(--text)] outline-none transition focus:border-[#FF1A1A]"
        />
        <button type="button" className="rounded-lg bg-[#FF1A1A] px-5 py-4 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-500">
          Subscribe
        </button>
      </form>
    </section>
  );
}
