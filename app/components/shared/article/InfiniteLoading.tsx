import { useFetcher } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import ContentContainer from "../../ContentContainer";
import Title from "../../Title";
import ArticleCard from "./ArticleCard";
import { Article } from "~/.server/articles";
import type { loader } from "~/routes/news/index";

export default function InfinteLoading({
  initalArticles,
}: {
  initalArticles: Article[];
}) {
  const [articles, setArticles] = useState<Article[]>(initalArticles);
  const fetcher = useFetcher<typeof loader>();

  const [shouldFetch, setShouldFetch] = useState(true);
  const [page, setPage] = useState(1);
  const [prevData, setPrevData] = useState(fetcher.data);
  const containerRef = useRef<HTMLDivElement | null>(null);

  if (fetcher.data !== prevData) {
    setPrevData(fetcher.data);
    const fetchedArticles = fetcher.data?.articles;
    if (fetchedArticles) {
      if (fetchedArticles.length === 0) {
        setShouldFetch(false);
      } else {
        setArticles((prevPhotos: Article[]) => [
          ...prevPhotos,
          ...fetchedArticles,
        ]);
        setPage((currentPage: number) => currentPage + 1);
        setShouldFetch(true);
      }
    }
  }

  useEffect(() => {
    const scrollListener = () => {
      if (!shouldFetch || fetcher.state === "loading" || !containerRef.current) {
        return;
      }
      const { height } = containerRef.current.getBoundingClientRect();
      if (window.innerHeight + window.scrollY + 150 >= height) {
        setShouldFetch(false);
        fetcher.load(`/news?index&page=${page}`);
      }
    };

    window.addEventListener("scroll", scrollListener, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [shouldFetch, fetcher, page]);

  return (
    <ContentContainer className="gap-6 pb-16">
      <div className="flex flex-col gap-4 w-full">
        <Title name="Aktuelles" />
      </div>

      <div ref={containerRef} className="w-full mt-6">
        <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index: number) => (
            <li key={index} className="h-full">
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>

      {/* Modern Loader & End-of-content Indicators */}
      <div className="flex justify-center w-full mt-8 py-4">
        {fetcher.state === "loading" && (
          <div className="flex items-center gap-2.5 text-gray-500 font-semibold text-sm">
            <svg className="animate-spin h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Weitere Artikel werden geladen...</span>
          </div>
        )}
      </div>
    </ContentContainer>
  );
}
