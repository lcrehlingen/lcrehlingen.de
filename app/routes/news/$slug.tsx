import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getArticle } from "~/.server/articles";
import Article from "~/components/shared/article/Article";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [];
  }
  const { article } = data;
  return [
    { title: article.title },
    { property: "og:title", content: article.title },
    { property: "og:type", content: "article" },
    {
      property: "og:image",
      content: `https://lcrehlingen.de/_ipx/w_1200,f_webp${article.thumbnail.url}`,
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Artikel existiert nicht", { status: 404 });
  }
  const article = await getArticle({ slug });
  return json({
    article,
  });
}

export default function NewsPage() {
  const { article } = useLoaderData<typeof loader>();
  return <Article article={article} />;
}
