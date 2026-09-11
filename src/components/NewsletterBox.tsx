"use client";

import { FormEvent, useState } from "react";

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

export function NewsletterBox({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState({ status: "loading", message: "" });

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: compact ? "article_newsletter_box" : "newsletter_page",
          website: (event.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? ""
        })
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !data.ok) {
        setFormState({ status: "error", message: data.message ?? "Please try again." });
        return;
      }

      setEmail("");
      setFormState({
        status: "success",
        message: data.message ?? "Please check your email to confirm your subscription."
      });
    } catch {
      setFormState({ status: "error", message: "We could not process that subscription right now." });
    }
  }

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
      <form className={`mt-6 grid gap-3 ${compact ? "" : "sm:grid-cols-[1fr_auto]"}`} onSubmit={handleSubmit}>
        <input className="hidden" type="text" name="website" tabIndex={-1} autoComplete="off" />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@domain.com"
          required
          disabled={formState.status === "loading"}
          className="min-h-[52px] rounded-lg border border-[color:var(--border)] bg-[color:var(--bg)] px-4 text-sm text-[color:var(--text)] outline-none transition focus:border-[#FF1A1A]"
        />
        <button type="submit" disabled={formState.status === "loading"} className="rounded-lg bg-[#FF1A1A] px-5 py-4 font-display text-xs font-extrabold uppercase tracking-wide text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-70">
          {formState.status === "loading" ? "Submitting" : "Subscribe"}
        </button>
      </form>
      {formState.message ? (
        <p
          className={`mt-3 text-sm ${formState.status === "error" ? "text-[#FF1A1A]" : "text-[color:var(--muted)]"}`}
          role={formState.status === "error" ? "alert" : "status"}
        >
          {formState.message}
        </p>
      ) : null}
    </section>
  );
}
