import { Link } from "@remix-run/react";
import { Event } from "~/.server/events";
import List from "~/components/shared/list/List";
import ListItem from "~/components/shared/list/ListItem";

export default function Events({ events }: {
  events: Event[];
}) {
  return (
    <section className="w-full max-w-2xl mx-auto">
      <div className="flex w-full flex-col justify-center gap-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 leading-none text-center">Veranstaltungen</h2>
        <List>
          {events.map((event, index: number) => (
            <ListItem key={index}>
              <Link
                className="group flex flex-col flex-1 p-4"
                to={`/veranstaltungen/${event.slug}`}
              >
                <div className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-200">{event.name}</div>
                <div className="text-xs text-gray-400 mt-1">
                  {new Date(event.date).toLocaleDateString("de-DE", {
                    timeZone: "Europe/Berlin",
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>
              </Link>
            </ListItem>
          ))}
          {events.length === 0 && (
            <ListItem>
              <div className="font-medium flex-1 p-4 text-gray-500 text-center">
                Keine bevorstehenden Veranstaltungen
              </div>
            </ListItem>
          )}
        </List>
      </div>
    </section>
  );
}
