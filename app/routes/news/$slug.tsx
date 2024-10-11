import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getArticle } from "~/.server/articles";
import Article from "~/components/shared/article/Article";

/*export const meta: MetaFunction = ({ data }: { data: LoaderData }) => {
  if (!data) {
    return {};
  }
  const { article } = data;
  return {
    title: article.title,
    "og:title": article.title,
    "og:type": "article",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image": `https://lcrehlingen.de/api/og?slug=${article.slug}`,
  };
};*/

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [];
  }
  const { article } = data;
  return [{ title: article.title }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw Error("No slug provided"); // For typing purposes
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
