import { z } from "zod";
import { ImageSchema } from "./image";
import { fetchStrapiData, getTodayBerlinDate, renderMarkdown } from "./strapi";

const EventSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  date: z.string(),
  content: z
    .string()
    .transform((content) => renderMarkdown(content))
    .nullable(),
  results: z.boolean(),
  image: ImageSchema.nullable(),
});

export type Event = z.infer<typeof EventSchema>;

export async function getLatestEventsAndResults() {
  const [events, results] = await Promise.all([
    getEvents({ results: false, limit: 5, upcomingOnly: true }),
    getEvents({ results: true, limit: 5 }),
  ]);
  return {
    events,
    results,
  };
}

export async function getEvents({
  results,
  limit,
  upcomingOnly = !results,
}: {
  limit?: number;
  results: boolean;
  upcomingOnly?: boolean;
}) {
  const today = getTodayBerlinDate();
  const sortDirection = upcomingOnly ? "asc" : "desc";
  const dateFilter = upcomingOnly
    ? `&filters[date][$gte]=${encodeURIComponent(today)}`
    : `&filters[date][$lte]=${encodeURIComponent(today)}`;
  const limitParam = limit !== undefined ? `&pagination[limit]=${limit}` : "";

  const data = await fetchStrapiData(
    `/api/veranstaltungs?sort[0]=date:${sortDirection}&populate=*&filters[results][$eq]=${results}${dateFilter}${limitParam}`
  );

  return data
    .map((item: unknown) => {
      const event = EventSchema.safeParse(item);
      return event.success ? event.data : null;
    })
    .filter((event): event is Event => event !== null);
}

export async function getEvent({ slug }: { slug: string }) {
  const data = await fetchStrapiData(
    `/api/veranstaltungs?sort[0]=date:desc&populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`
  );
  const event = z.array(EventSchema).min(1).max(1).safeParse(data);
  if (event.success) {
    return event.data[0];
  }
  throw new Response("Veranstaltung existiert nicht", {
    status: 404,
  });
}
