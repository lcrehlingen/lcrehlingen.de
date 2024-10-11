/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetcher } from "@remix-run/react";
import { useCallback, useEffect, useState } from "react";
import ContentContainer from "../../ContentContainer";
import Title from "../../Title";
import ArticleCard from "./ArticleCard";

export default function InfinteLoading({
  initalArticles,
  path = "/news/",
}: {
  initalArticles: any[];
  path?: string;
}) {
  const [articles, setArticles] = useState<any[]>(initalArticles);
  const fetcher = useFetcher();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const [height, setHeight] = useState(null);

  const [shouldFetch, setShouldFetch] = useState(true);
  const [page, setPage] = useState(1);

  // Set the height of the parent container whenever photos are loaded
  const divHeight = useCallback(
    (node) => {
      if (node !== null) {
        setHeight(node.getBoundingClientRect().height);
      }
    },
    [articles.length]
  );

  useEffect(() => {
    const scrollListener = () => {
      setClientHeight(window.innerHeight);
      setScrollPosition(window.scrollY);
    };

    // Avoid running during SSR
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener, { passive: true });
    }

    // Clean up
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", scrollListener);
      }
    };
  }, []);

  useEffect(() => {
    if (!shouldFetch || !height) return;
    if (clientHeight + scrollPosition + 100 < height) return;
    if(fetcher.state === "loading") return;
    fetcher.load(`${path}?index&page=${page}`);
    setShouldFetch(false);
  }, [clientHeight, scrollPosition, fetcher]);

  useEffect(() => {
    // Discontinue API calls if the last page has been reached
    if (fetcher.data && fetcher.data.length === 0) {
      setShouldFetch(false);
      return;
    }
    // Photos contain data, merge them and allow the possiblity of another fetch
    if (fetcher.data && fetcher.data.articles.length > 0) {
      setArticles((prevPhotos: any[]) => [
        ...prevPhotos,
        ...fetcher.data.articles,
      ]);
      setPage((page: number) => page + 1);
      setShouldFetch(true);
    }
  }, [fetcher.data]);
  return (
    <ContentContainer className="gap-4">
      <Title name="Aktuelles" />
      <div ref={divHeight}>
        <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
          {articles.map((article: any, index: number) => (
            <li key={index}>
              <ArticleCard article={article} path={path} />
            </li>
          ))}
        </ul>
      </div>
    </ContentContainer>
  );
}
