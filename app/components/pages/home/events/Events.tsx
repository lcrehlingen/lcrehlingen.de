import { Link } from "@remix-run/react";
import List from "~/components/shared/list/List";
import ListItem from "~/components/shared/list/ListItem";
import TableContainer from "~/components/TableContainer";

interface EventsProps {
  events: {
    name: string;
    date: string;
    slug: string;
  }[];
  results: { name: string; date: string; slug: string }[];
}
export default function Events({ results, events }: EventsProps) {
  return (
    <TableContainer
      left={
        <>
          <div className="flex w-full flex-col justify-center gap-8">
            <h2 className="text-3xl font-bold leading-none">Veranstaltungen</h2>
            <List>
              {events.map((event, index: number) => (
                <ListItem key={index}>
                  <Link
                    className="flex-1 p-4"
                    to={`/veranstaltungen/${event.slug}`}
                  >
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm">
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
            </List>
          </div>
        </>
      }
      right={
        <>
          <div className="flex w-full flex-col justify-center gap-8">
            <h2 className="text-3xl font-bold leading-none">Ergebnisse</h2>
            <List>
              {results.map((event, index) => (
                <ListItem key={index}>
                  <Link
                    className="flex-1 p-4"
                    to={`/veranstaltungen/${event.slug}`}
                  >
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm">
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
            </List>
          </div>
        </>
      }
    />
  );
}
