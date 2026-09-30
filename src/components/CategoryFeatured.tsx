import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import type { CategoryStory } from "@/lib/categoryCuration";

export function CategoryFeatured(props: { slides: CategoryStory[]; sideStories: CategoryStory[] }) {
  return <FeaturedCarousel {...props} />;
}
