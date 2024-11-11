import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getEvents } from "~/.server/events";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import ImageCard from "~/components/shared/ImageCard";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Veranstaltungen",
    },
    {
      name: "description",
      content: "Kommende Veranstaltungen vom LC Rehlingen",
    },
  ];
};

export async function loader() {
  const events = await getEvents({
    results: false,
  }).then((res) => {
    return res
      .filter((event) => {
        return new Date(event.date) >= new Date();
      })
      .sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
  });
  return json({
    events,
  });
}

export default function EventListPage() {
  const { events } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name="Veranstaltungen" />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {events.map((event, index: number) => (
          <li key={index}>
            <Link to={`/veranstaltungen/${event.slug}`} rel="bookmark">
              <ImageCard
                image={{
                  height: 808,
                  width: 1789,
                  src: "logo.png",
                }}
              >
                <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                  <h1 className="w-full text-xl font-semibold text-gray-900">
                    {event.name}
                  </h1>
                  <span className="text-base text-gray-500">
                    <time dateTime={new Date(event.date).toISOString()}>
                      {new Date(event.date).toLocaleDateString("de-DE", {
                        timeZone: "Europe/Berlin",
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </time>
                  </span>
                </div>
              </ImageCard>
            </Link>
          </li>
        ))}
        {events.length === 0 && (
          <li>
            <div className="font-medium flex-1 p-4">
              Keine bevorstehenden Veranstaltungen
            </div>
          </li>
        )}
      </ul>
    </ContentContainer>
  );
}
