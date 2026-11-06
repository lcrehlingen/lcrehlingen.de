import { z } from "zod";
import { ImageSchema } from "./image";
import { fetchStrapiData } from "./strapi";

const GallerySchema = z
  .object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    date: z.string().transform((date) => new Date(date).toISOString()),
    thumbnail: ImageSchema.nullable(),
    media: z
      .array(ImageSchema)
      .nullable()
      .transform((media) => media ?? []),
  })
  .transform((gallery) => ({
    ...gallery,
    thumbnail: gallery.thumbnail ?? gallery.media[0] ?? null,
  }));

export type Gallery = z.infer<typeof GallerySchema>;

export async function getGallery({ slug }: { slug: string }) {
  const data = await fetchStrapiData(
    `/api/galleries?sort[0]=publishedAt:desc&populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`
  );
  const gallery = z.array(GallerySchema).min(1).max(1).safeParse(data);
  if (gallery.success) {
    return gallery.data[0];
  }
  throw new Response("Gallerie existiert nicht", {
    status: 404,
  });
}

export async function getGalleries() {
  const data = await fetchStrapiData(
    `/api/galleries?sort[0]=publishedAt:desc&populate=*`
  );
  return data
    .map((item: unknown) => {
      const gallery = GallerySchema.safeParse(item);
      return gallery.success ? gallery.data : null;
    })
    .filter((gallery): gallery is Gallery => gallery !== null);
}
