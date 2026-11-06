import {
  type LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
} from "react-router";
import { getEvent } from "~/.server/events";
import ContentContainer from "~/components/ContentContainer";

export const meta: MetaFunction<typeof loader> = ({ loaderData }) => {
  if (!loaderData) {
    return [];
  }
  const { event } = loaderData;
  const tags = [
    { title: event.name },
    { property: "og:title", content: event.name },
    { property: "og:type", content: "website" },
  ];
  if (event.image) {
    tags.push({
      property: "og:image",
      content: `https://lcrehlingen.de/_ipx/w_1200,f_webp${event.image.url}`,
    });
  }
  return tags;
};

export async function loader({ params }: LoaderFunctionArgs) {
  const event = await getEvent({ slug: params.slug ? params.slug : "" });
  return {
    event,
  };
}

export default function EventDetailPage() {
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
