import { json, LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getArticles } from "~/.server/articles";
import InfiniteLoading from "~/components/shared/article/InfiniteLoading";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Aktuelles",
    },
    {
      name: "description",
      content: "Aktuelles vom LC Rehlingen",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const amount = 9;
  const getPage = (searchParams: URLSearchParams) =>
    Math.max(0, Number(searchParams.get("page") || 0));
  const page = getPage(new URL(request.url).searchParams);

  const articles = await getArticles({ start: page * amount, limit: amount });
  return json({
    articles,
  });
}

export default function Index() {
  const initialArticles = useLoaderData<typeof loader>();

  return <InfiniteLoading initialArticles={initialArticles.articles} />;
}
