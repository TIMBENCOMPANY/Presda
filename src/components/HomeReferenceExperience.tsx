import type { ArticleCardRecord } from "@/lib/articleCards";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

type HomeReferenceExperienceProps = {
  slides: ArticleCardRecord[];
  editorialPicks: ArticleCardRecord[];
};

export function HomeReferenceExperience({ slides, editorialPicks }: HomeReferenceExperienceProps) {
  return (
    <main className="home-page overflow-x-hidden">
      <section className="home-hero-section relative isolate overflow-hidden border-b">
        <div className="home-hero-bg absolute inset-0 -z-10" />
        <div className="mx-auto w-full max-w-[1510px] px-3 py-2 sm:px-6 sm:py-5 lg:py-3 2xl:px-0">
          <FeaturedCarousel variant="home" slides={slides} sideStories={editorialPicks} />
        </div>
      </section>
    </main>
  );
}
