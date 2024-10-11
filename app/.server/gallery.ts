
import { z } from "zod";
import { ImageSchema } from "./image";

const GallerySchema = z.object({
    id: z.number(),
    name: z.string(),
    slug: z.string(),
    date: z.string().transform((date) => new Date(date).toISOString()),
    thumbnail: ImageSchema,
    media: z.array(
        ImageSchema
    ),
});

export type Gallery = z.infer<typeof GallerySchema>;

export function getGallery({ slug }: { slug: string }) {
  return fetch(`
    ${process.env.STRAPI_URL}/api/galleries?sort[0]=publishedAt:desc&populate=*&filters[slug][$eq]=${slug}`
  ).then((res) => res.json()).then((res) => {
    const article = z.array(GallerySchema).min(1).max(1).safeParse(res.data);
    if(article.success) {
      return article.data[0];
    }
    throw new Response("Gallerie existiert nicht", {
      status: 404,
    });
  });
}

export function getGalleries() {
  return fetch(
    `${process.env.STRAPI_URL}/api/galleries?sort[0]=publishedAt:desc&populate=*`
  ).then((res) => res.json()).then((res) => {
    const galleries = res.data.map((data: unknown) => {
      const gallery = GallerySchema.safeParse(data)
      if(gallery.success) {
        return gallery.data;
      }
      return null;
    }).filter((gallery:  | null) => gallery !== null) as Gallery[];
    return galleries;
  });
}
