import { z } from "zod";
import { marked } from "marked";

const ImageSchema = z.object({
  url: z.string(),
  alternativeText: z.string().nullable(),
  width: z.number(),
  height: z.number(),
});

const ArticleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  content: z.string().transform((content) => marked(content)),
  publishedAt: z.string(),
  createdAt: z.string(),
  thumbnail: ImageSchema,
  gallery: z.array(
    ImageSchema
  ).nullable(),
});

export type Article = z.infer<typeof ArticleSchema>;

export function getArticle({ slug }: { slug: string }) {
  return fetch(`
    ${process.env.STRAPI_URL}/api/articles?sort[0]=createdAt:desc&populate=*&filters[slug][$eq]=${slug}`
  ).then((res) => res.json()).then((res) => {
    const article = z.array(ArticleSchema).min(1).max(1).safeParse(res.data);
    if(article.success) {
      return article.data[0];
    }
    throw new Response("Artikel existiert nicht", {
      status: 404,
    });
  });
}

export function getArticles({
  start,
  limit,
}: {
  start: number;
  limit: number;
}) {
  return fetch(
    `${process.env.STRAPI_URL}/api/articles?sort[0]=createdAt:desc&populate=*&pagination[start]=${start}&pagination[limit]=${limit}`
  ).then((res) => res.json()).then((res) => {
    const articles = res.data.map((data: unknown) => {
      const article = ArticleSchema.safeParse(data)
      if(article.success) {
        return article.data;
      }
      return null;
    }).filter((article: Article | null) => article !== null) as Article[];
    return articles;
  });
}