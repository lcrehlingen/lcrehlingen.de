import { z } from "zod";
import { marked } from "marked";

const EventSchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    date: z.string(),
    content: z.string().transform((content) => marked(content)).nullable(),
    results: z.boolean()
    });

export type Event = z.infer<typeof EventSchema>;


export async function getLatestEventsAndResults() {
  const [events, results] = await Promise.all([
    getEvents({ results: false, limit: 5 }).then((res) => {
        return res.filter((event) => {
          return new Date(event.date) >=
            new Date();
        });
      }),
    getEvents({ results: true, limit: 5 }),
  ]);
  return {
    events,
    results
  }
}

export function getEvents({
  results,
  limit,
}: {
  limit?: number;
  results: boolean;
}) {
  return fetch(
    `${process.env.STRAPI_URL}/api/veranstaltungs?sort[0]=date:desc&populate=*&filters[results][$eq]=${results}&pagination[limit]=${limit}`
  ).then((res) => res.json()).then((res) => {
    const events = res.data.map((data: unknown) => {
        const event = EventSchema.safeParse(data)
        if(event.success) {
          return event.data;
        }
        return null;
      }).filter((event: Event | null) => event !== null) as Event[];
      return events;
  });
}

export function getEvent({ slug }: { slug: string }) {
    return fetch(`
      ${process.env.STRAPI_URL}/api/veranstaltungs?sort[0]=date:desc&populate=*&filters[slug][$eq]=${slug}`
    ).then((res) => res.json()).then((res) => {
        const event = z.array(EventSchema).min(1).max(1).safeParse(res.data);
        if(event.success) {
          return event.data[0];
        }
        throw new Response("Veranstaltung existiert nicht", {
          status: 404,
        });
    });
}
