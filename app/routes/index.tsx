import PromoSection from "~/components/pages/home/PromoSection";
import Sponsor from "~/components/pages/home/Sponsor";
import Pfingstsportfest from "~/components/pages/home/Pfingstsportfest";
import FSJ from "~/components/pages/home/FSJ";
import Reha from "~/components/pages/home/Reha";
import Events from "~/components/pages/home/Events";
import BackgroundHeader from "~/components/BackgroundHeader";
import ArticleHighlightList from "~/components/shared/article/ArticleHighlightList";
import { getArticles } from "~/.server/articles";
import { json, useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";
import { getLatestEventsAndResults } from "~/.server/events";

export const meta: MetaFunction = () => {
  return [
    {
      title: "LC Rehlingen",
    },
    {
      name: "description",
      content: "Leichtathletik Club Rehlingen"
    }
  ]
};

export const loader = async () => {
  const [articles, latest] = await Promise.all([
    getArticles({ start: 0, limit: 6 }),
    getLatestEventsAndResults(),
  ]);
  const { events } = latest;
  return json({
    articles,
    events,
  });
};

export default function Index() {
  const { articles, events } = useLoaderData<typeof loader>();
  return (
    <>
      <BackgroundHeader title="Herzlich Willkommen beim Leichtathletik Club Rehlingen" />
      <div className="container mx-auto mb-32 flex flex-col gap-16 md:gap-24">
        <div className="-mt-24 flex flex-col gap-16 px-4 md:px-10">
          <ArticleHighlightList articles={articles} />
        </div>

        <div className="mx-auto flex flex-col items-center justify-center gap-16 md:gap-24 px-4 md:px-10 lg:max-w-6xl w-full">
          <Sponsor />
          <PromoSection />
          <Events events={events} />
          <Reha />
          <Pfingstsportfest />
          <FSJ />
        </div>
      </div>
    </>
  );
}
