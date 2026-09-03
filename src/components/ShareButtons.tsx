"use client";

import { Copy, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  url: string;
};

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]" href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer" aria-label="Share on X">
        <Twitter className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]" href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn">
        <Linkedin className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]" href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook">
        <Facebook className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <a className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--border)] transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]" href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Share on Instagram">
        <Instagram className="h-4 w-4" strokeWidth={1.5} />
      </a>
      <button className="inline-flex h-11 items-center gap-2 rounded-full border border-[color:var(--border)] px-4 text-xs font-bold uppercase transition hover:border-[#FF1A1A] hover:text-[#FF1A1A]" onClick={copyLink} type="button">
        <Copy className="h-4 w-4" strokeWidth={1.5} />
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
