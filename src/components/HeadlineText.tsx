import { headlineParts, type HeadlineHighlights } from "@/lib/headline";

export type { HeadlineHighlights } from "@/lib/headline";

type HeadlineTextProps = {
  title: string;
  highlights?: HeadlineHighlights;
  legacyRed?: string;
  whiteText?: string;
};

export function HeadlineText({ title, highlights, legacyRed, whiteText }: HeadlineTextProps) {
  return <>
    {headlineParts(title, highlights, legacyRed).map((part, index) => (
      <span key={index} className={part.tone ? `headline-accent-${part.tone}` : "headline-base"}>
        {whiteText ? part.text.split(whiteText).map((text, segment) => <span key={segment}>{segment > 0 && <span style={{ color: "#FFFFFF" }}>{whiteText}</span>}{text}</span>) : part.text}
      </span>
    ))}
  </>;
}
