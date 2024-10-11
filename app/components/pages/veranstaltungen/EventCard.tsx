import { Link } from "@remix-run/react";
import Balancer from "react-wrap-balancer";
import ImageCard from "~/components/shared/card/ImageCard";

interface EventCardProps {
  event: {
    slug: string;
    name: string;
    date: string;
  };
  image: {
    height: number;
    width: number;
    src: string;
    alt?: string;
  };
}

export default function EventCard({ event, image }: EventCardProps) {
  return (
    <article className="h-full">
      <Link to={`/veranstaltungen/${event.slug}`} rel="bookmark">
        <ImageCard image={image}>
          <div className="flex flex-1 flex-col justify-between gap-2 p-4">
            <h1 className="w-full text-xl font-semibold text-gray-900">
              <Balancer>{event.name}</Balancer>
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
    </article>
  );
}
