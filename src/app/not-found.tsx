import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-[70vh] w-[min(900px,calc(100%-32px))] place-items-center py-24 text-center">
      <div>
        <p className="font-display text-xs font-black uppercase tracking-[0.18em] text-[#FF1A1A]">404 Signal Lost</p>
        <h1 className="mt-4 font-display text-5xl font-black uppercase leading-none sm:text-7xl">Story Not Found</h1>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-[color:var(--muted)]">
          This PRESDA page is no longer available or the link has changed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-[#FF1A1A] px-6 py-4 font-display text-xs font-black uppercase tracking-wide text-white transition hover:bg-red-500"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
