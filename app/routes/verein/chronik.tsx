import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import timeline from "~/assets/chronik.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Vereinschronik",
    }
  ]
};

export default function HistoryPage() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Chronik" />
      <div className="flex md:justify-center">
        <div className="relative lg:w-1/2">
          <div className="absolute top-0 left-4 h-full border-r-2 border-gray-500"></div>
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {timeline.reverse().map((item, index) => (
              <li key={index}>
                <div className="flex flex-row gap-4">
                  <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                  <div className="flex flex-1 flex-col">
                    <time className="py-1 font-bold">{item.title}</time>
                    <p>{item.content}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentContainer>
  );
}
