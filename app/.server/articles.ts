import { z } from "zod";
import { ImageSchema } from "./image";
import { fetchStrapiData, renderMarkdown } from "./strapi";

const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  content: z.string().transform((content) => renderMarkdown(content)),
  publishedAt: z.string(),
  createdAt: z.string(),
  thumbnail: ImageSchema,
  gallery: z.array(ImageSchema).nullable(),
});

export type Article = z.infer<typeof ArticleSchema>;

export async function getArticle({ slug }: { slug: string }) {
  const data = await fetchStrapiData(
    `/api/articles?sort[0]=createdAt:desc&populate=*&filters[slug][$eq]=${encodeURIComponent(slug)}`
  );
  const article = z.array(ArticleSchema).min(1).max(1).safeParse(data);
  if (article.success) {
    return article.data[0];
  }
  throw new Response("Artikel existiert nicht", {
    status: 404,
  });
}

export async function getArticles({
  start,
  limit,
}: {
  start: number;
  limit: number;
}) {
  const data = await fetchStrapiData(
    `/api/articles?sort[0]=createdAt:desc&populate=*&pagination[start]=${start}&pagination[limit]=${limit}`
  );
  return data
    .map((item: unknown) => {
      const article = ArticleSchema.safeParse(item);
      return article.success ? article.data : null;
    })
    .filter((article): article is Article => article !== null);
}
