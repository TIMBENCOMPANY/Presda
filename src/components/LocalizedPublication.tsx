import Image from "next/image";
import Link from "next/link";
import type { Translation } from "@/lib/i18n/content";
import { localizedCategories, messages } from "@/lib/i18n/messages";
import { languageDestination } from "@/lib/i18n/routing";
import { publishedTranslations, translationRoutes } from "@/lib/i18n/registry";
import { translationJsonLd, translationFaqJsonLd } from "@/lib/i18n/metadata";
import { LocalizedInlineText } from "@/components/LocalizedInlineText";
import { toCategorySlug } from "@/lib/categories";

export function LocalizedPublication({ record }: { record: Translation }) {
  const t = messages[record.locale];
  const faqSchema = translationFaqJsonLd(record);
  const sections = record.content.flatMap((block, index) => block.type === "heading" || block.type === "subheading" ? [{ title: block.text, level: block.type, index }] : []);
  const stories = record.kind === "article" ? [] : publishedTranslations.filter((item) => item.kind === "article" && item.locale === record.locale && (record.kind !== "category" || item.category === record.category));
  return (
    <main className="localized-publication mx-auto w-[min(1120px,calc(100%-32px))] py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(translationJsonLd(record)).replace(/</g, "\\u003c") }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />}
      <nav aria-label={t.menu} className="mb-8 flex flex-wrap gap-4 text-sm text-[color:var(--muted)]">
        <Link prefetch={false} href={languageDestination("/", record.locale, translationRoutes)}>{t.home}</Link>
        {record.category && <Link prefetch={false} href={languageDestination(`/category/${toCategorySlug(record.category)}/`, record.locale, translationRoutes)}>{localizedCategories[record.locale][record.category]}</Link>}
        <a href={record.englishPath} hrefLang="en">{t.english}</a>
      </nav>
      <article id="article">
        <h1 className="max-w-5xl font-display text-4xl font-extrabold leading-tight sm:text-6xl">{record.title}</h1>
        {record.excerpt && <p className="mt-6 max-w-4xl text-xl leading-9 text-[color:var(--muted)]">{record.excerpt}</p>}
        {record.author && <p className="my-5 text-[color:var(--muted)]"><bdi>{record.author}</bdi> · <time dateTime={record.publishedAt}>{new Intl.DateTimeFormat(record.locale, { dateStyle: "long", timeZone: "UTC" }).format(new Date(record.publishedAt))}</time></p>}
        {record.image && <Image src={record.image.src} alt={record.image.alt} width={record.image.width ?? 1280} height={record.image.height ?? 720} priority sizes="(max-width: 1120px) 100vw, 1120px" className="my-8 h-auto w-full rounded-xl" />}
        {sections.length > 0 && <details className="my-8 max-w-4xl rounded-xl border border-[color:var(--border)] p-5">
          <summary className="cursor-pointer font-bold">{t.contents}</summary>
          <nav aria-label={t.contents} className="mt-4"><ol className="space-y-2 text-sm leading-6">{sections.map(section => <li key={section.index} className={section.level === "subheading" ? "ps-4" : undefined}><a href={`#section-${section.index}`} className="underline decoration-[#ff1a1a]/40 underline-offset-4">{section.title}</a></li>)}</ol></nav>
        </details>}
        <div className="localized-copy mt-8 max-w-4xl space-y-6 text-lg leading-8">
          {record.content.map((block, index) => {
            if (block.type === "heading") return <h2 key={index} id={`section-${index}`} className="scroll-mt-28 pt-6 font-display text-2xl font-bold leading-relaxed text-[color:var(--home-gold)]">{block.text}</h2>;
            if (block.type === "subheading") return <h3 key={index} id={`section-${index}`} className="scroll-mt-28 pt-3 text-xl font-bold leading-relaxed">{block.text}</h3>;
            if (block.type === "quote") return <blockquote key={index} className="border-s-2 border-[#ff1a1a] ps-6">{block.text}</blockquote>;
            if (block.type === "list") return <ul key={index} className="list-disc space-y-2 ps-6">{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
            if (block.type === "table") return <div key={index} className="overflow-x-auto"><table className="w-full border-collapse text-start"><caption className="mb-3 text-start">{block.caption}</caption><thead><tr>{block.headings.map((heading, i) => <th key={i} scope="col" className="border border-[color:var(--border)] p-3 text-start">{heading}</th>)}</tr></thead><tbody>{block.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="border border-[color:var(--border)] p-3">{cell}</td>)}</tr>)}</tbody></table></div>;
            return <p key={index}><LocalizedInlineText text={block.text} locale={record.locale} /></p>;
          })}
        </div>
        {record.quote && <blockquote className="my-8 max-w-4xl border-s-2 border-[#ff1a1a] ps-6 text-xl leading-9">{record.quote}</blockquote>}
        {record.sources?.length ? <section className="mt-12"><h2 className="text-2xl font-bold">{t.sources}</h2><ul className="mt-4 space-y-3">{record.sources.map((source) => <li key={source.url}><a href={source.url} className="underline decoration-[#ff1a1a] underline-offset-4">{source.label}</a></li>)}</ul></section> : null}
        {record.faq?.length ? <section id="faq" className="mt-12"><h2 className="text-2xl font-bold">{t.faq}</h2>{record.faq.map((faq) => <div key={faq.question} className="mt-6"><h3 className="text-xl font-bold">{faq.question}</h3><p className="mt-2 leading-8">{faq.answer}</p></div>)}</section> : null}
      </article>
      {stories.length > 0 && <section className="mt-12"><h2 className="text-2xl font-bold">{t.articles}</h2><div className="mt-6 grid gap-6 md:grid-cols-2">{stories.map((story) => <Link prefetch={false} key={story.path} href={story.path} className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-6"><h3 className="text-xl font-bold">{story.title}</h3><p className="mt-3 text-[color:var(--muted)]">{story.description}</p></Link>)}</div></section>}
    </main>
  );
}
