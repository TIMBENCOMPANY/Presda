import { listingDate } from "@/lib/i18n/listing-messages";

type Props = {
  date: string;
  readingTime?: string;
  timeClassName?: string;
  readingClassName?: string;
  separatorClassName?: string;
};

/** Keep Arabic date, punctuation and reading time in one isolated RTL run. */
export function ArabicCardMetadata({ date, readingTime, timeClassName, readingClassName, separatorClassName }: Props) {
  return <span dir="rtl" className="[unicode-bidi:isolate]">
    <time dateTime={date} className={timeClassName}>{listingDate(date, "ar")}</time>
    {readingTime && <span className={readingClassName}><span className={separatorClassName}>{"، "}</span><bdi>{readingTime}</bdi></span>}
  </span>;
}
