import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getEvent } from "~/.server/events";
import ContentContainer from "~/components/ContentContainer";

export async function loader({ params }: LoaderFunctionArgs) {
  const event = await getEvent({ slug: params.slug ? params.slug : "" });
  return json({
    event,
  });
}

export default function AthleteProfilePage() {
  const { event } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <h1 className="text-left text-3xl font-bold">{event.name}</h1>
      <time className="text-left font-semibold">
        {new Date(event.date).toLocaleDateString("de-DE", {
          timeZone: "Europe/Berlin",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </time>
      {event.content ? (
        <div
          className="prose prose-lg max-w-none text-left"
          dangerouslySetInnerHTML={{ __html: event.content }}
        />
      ) : (
        <p className="font-medium">
          Noch keine weiteren Informationen vorhanden
        </p>
      )}
    </ContentContainer>
  );
}
