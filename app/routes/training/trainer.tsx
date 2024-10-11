import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ImageCard from "~/components/shared/card/ImageCard";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import { getTrainers } from "~/.server/trainers";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Trainer",
    }
  ]
};

export async function loader() {
  const trainers = await getTrainers({ reha: false });
  return json({
    trainers,
  });
}

export default function EventListPage() {
  const { trainers } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name="Trainer" />
      <ul className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {trainers.map((trainer, index) => (
          <li key={index}>
            <ImageCard
              orientation="portrait"
              image={{
                height: 1350,
                width: 1080,
                src: trainer.image.url,
                alt: trainer.name,
              }}
            >
              <div className="relative flex h-full flex-col justify-between gap-2 p-4">
                <h1 className="text-xl font-bold">{trainer.name}</h1>
                <div className="flex flex-col gap-1 font-semibold">
                  <ul>
                    {trainer.trainings.map((training, index) => (
                      <li key={index} className="text-sm font-semibold">
                        {training.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ImageCard>
          </li>
        ))}
      </ul>
    </ContentContainer>
  );
}
