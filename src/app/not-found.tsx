import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[70vh] w-[min(900px,calc(100%-24px))] place-items-center py-20 text-center sm:w-[min(900px,calc(100%-32px))] sm:py-24">
      <div>
        <p className="font-display text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#FF1A1A] sm:text-xs">404 Signal Lost</p>
        <h1 className="mt-4 text-balance font-display text-[clamp(2rem,10.5vw,2.85rem)] font-extrabold uppercase leading-[1] [hyphens:none] [overflow-wrap:normal] [word-break:normal] sm:text-7xl sm:leading-none">Story Not Found</h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[color:var(--muted)] sm:text-base">
          This PRESDA page is no longer available or the link has changed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-[#FF1A1A] px-6 py-4 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-500"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
