import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getEvents } from "~/.server/events";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";
import EventCard from "~/components/pages/veranstaltungen/EventCard";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Veranstaltungen",
    },
    {
      name: "description",
      content: "Kommende Veranstaltungen vom LC Rehlingen"
    }
  ]
};

export async function loader() {
  const events = await getEvents({
    results: false,
  }).then((res) => {  
    return res.filter((event) => {
      return new Date(event.date) >= new Date();
    }).sort((a, b) => {
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
            <EventCard
              event={{
                date: event.date,
                name: event.name,
                slug: event.slug,
              }}
              image={{
                height: 808,
                width: 1789,
                src: "logo.png",
              }}
            />
          </li>
        ))}
        {
          events.length === 0 && (
            <li>
              <div className="font-medium flex-1 p-4">
                Keine bevorstehenden Veranstaltungen
              </div>
            </li>
          )
        }
      </ul>
    </ContentContainer>
  );
}
