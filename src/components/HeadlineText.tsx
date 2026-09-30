import { headlineParts, type HeadlineHighlights } from "@/lib/headline";

export type { HeadlineHighlights } from "@/lib/headline";

type HeadlineTextProps = {
  title: string;
  highlights?: HeadlineHighlights;
  legacyRed?: string;
};

export function HeadlineText({ title, highlights, legacyRed }: HeadlineTextProps) {
  return <>
    {headlineParts(title, highlights, legacyRed).map((part, index) => (
      <span key={index} className={part.tone ? `headline-accent-${part.tone}` : "headline-base"}>
        {part.text}
      </span>
    ))}
  </>;
}
