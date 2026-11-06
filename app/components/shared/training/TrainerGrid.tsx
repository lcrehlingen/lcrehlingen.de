import type { Trainer } from "~/.server/training";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import ImageCard from "~/components/shared/ImageCard";

export default function TrainerGrid({
  title,
  trainers,
}: {
  title: string;
  trainers: Trainer[];
}) {
  return (
    <ContentContainer className="gap-4">
      <Title name={title} />
      <ul className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {trainers.map((trainer) => (
          <li key={trainer.id} className="h-full">
            <ImageCard
              orientation="portrait"
              image={{
                height: 1350,
                width: 1080,
                src: trainer.image?.url ?? "/vorstand/placeholder.png",
                alt: trainer.name,
              }}
            >
              <div className="relative flex flex-1 flex-col justify-between gap-2 p-4">
                <h2 className="text-xl font-bold">{trainer.name}</h2>
                <div className="flex flex-col gap-1 font-semibold">
                  <ul>
                    {trainer.trainings.map((training) => (
                      <li key={training.name} className="text-sm font-semibold">
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
