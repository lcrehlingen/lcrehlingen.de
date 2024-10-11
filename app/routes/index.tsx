import PromoSection from "~/components/pages/home/promo/PromoSection";
import Sponsor from "~/components/pages/home/sponsor/Sponsor";
import Pfingstsportfest from "~/components/pages/home/pfinstsportfest/Pfingstsportfest";
import FSJ from "~/components/pages/home/fsj/FSJ";
import Reha from "~/components/pages/home/reha/Reha";
import Events from "~/components/pages/home/events/Events";
import BackgroundHeader from "~/components/BackgroundHeader";
import ArticleHighlightList from "~/components/shared/article/ArticleHighlightList";

export default function Index() {
  return (
    <>
      <BackgroundHeader title="Herzlich Willkommen beim Leichtathletik Club Rehlingen" />
      <div className="container mx-auto mb-32 flex flex-col gap-8">
        <div className="-mt-24 flex flex-col gap-8 px-4 md:px-10">
          <ArticleHighlightList articles={[]} />
        </div>

        <div className="mx-auto flex flex-col items-center justify-center gap-8 px-4 md:px-10 lg:max-w-6xl">
          <Sponsor />
          <PromoSection />
          <Events events={[]} results={[]} />
          <Reha />
          <Pfingstsportfest />
          <FSJ />
        </div>
      </div>
    </>
  );
}
