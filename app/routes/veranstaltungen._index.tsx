import { Link, type MetaFunction, useLoaderData } from "react-router";
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
    upcomingOnly: true,
  });
  return {
    events,
  };
}

export default function EventListPage() {
  const { events } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name="Veranstaltungen" />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/veranstaltungen/${event.slug}`} rel="bookmark">
              <ImageCard
                image={
                  event.image
                    ? {
                        height: event.image.height,
                        width: event.image.width,
                        src: event.image.url,
                        alt: event.image.alternativeText || undefined,
                      }
                    : {
                        height: 1080,
                        width: 1920,
                        src: "/background.jpg",
                        alt: event.name,
                      }
                }
              >
                <div className="flex flex-1 flex-col justify-between gap-2 p-4">
                  <h2 className="w-full text-xl font-semibold text-gray-900">
                    {event.name}
                  </h2>
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
