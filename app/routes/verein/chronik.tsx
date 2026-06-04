import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import timeline from "~/assets/chronik.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Vereinschronik - LC Rehlingen",
    }
  ]
};

export default function HistoryPage() {
  // Safe reverse copying to avoid mutating the imported JSON module array in-place (React re-render safety)
  const sortedTimeline = [...timeline].reverse();

  return (
    <ContentContainer className="gap-6 pb-16">
      <div className="flex flex-col gap-4 w-full">
        <Title name="Chronik" />
      </div>

      <div className="w-full max-w-3xl mx-auto mt-6">
        <div className="relative border-l-2 border-gray-100 ml-6 md:ml-12 pl-6 md:pl-10 flex flex-col gap-8">
          {sortedTimeline.map((item, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator Dot (Mathematically centered on the 2px border-l line) */}
              <div className="absolute -left-3.25 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-red-500 shadow-sm ring-8 ring-red-50/30 transition-all duration-300 group-hover:bg-red-600 group-hover:scale-110"></div>
              
              {/* Chronicle Event Card */}
              <div className="flex flex-col gap-2 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100/80 transition-all duration-300">
                <time className="text-xl font-extrabold text-red-600 tracking-tight flex items-center gap-2">
                  {item.title}
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </time>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContentContainer>
  );
}
