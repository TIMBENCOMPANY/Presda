import type { Locale } from "@/lib/i18n/routing";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import type { CategoryStory } from "@/lib/categoryCuration";

export function CategoryFeatured(props: { locale?: Locale; slides: CategoryStory[]; sideStories: CategoryStory[] }) {
  return <FeaturedCarousel {...props} />;
}
