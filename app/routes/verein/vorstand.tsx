import type { MetaFunction } from "@remix-run/node";
import ImageCard from "~/components/shared/card/ImageCard";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import vorstand from "~/assets/vorstand.json";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Vorstand",
    }
  ]
};

export default function VorstandPage() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Vorstand" />
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {vorstand.map((person, index) => (
          <li key={index} className="h-full">
            <ImageCard
              orientation="portrait"
              image={{
                height:1350,
                width: 1080,
                src: person.image,
                alt: person.name,
              }}
            >
              <div className="flex flex-col justify-between gap-2 p-4 h-full relative">
                <h1 className="text-xl font-bold">{person.name}</h1>
                <div className="flex flex-col gap-1 font-semibold">
                  <p className="text-sm">{person.position}</p>
                </div>
              </div>
            </ImageCard>
          </li>
        ))}
      </ul>
    </ContentContainer>
  );
}
