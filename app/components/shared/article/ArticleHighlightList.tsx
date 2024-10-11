import { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleHighlightList({
  articles,
  path,
}: {
  articles: unknown[];
  path?: string;
}) {
  const [more, setMore] = useState(false);
  return (
    <section className="flex flex-col gap-8">
      <ol className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {(more ? articles.slice(0, 6) : articles.slice(0, 3)).map(
          (article, index) => (
            <li className={index > 2 ? "animate-show" : undefined} key={index}>
              <ArticleCard container={true} article={article} path={path} />
            </li>
          )
        )}
      </ol>
      <div className="flex animate-bounce justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
          className={`h-14 w-14  transform transition-transform duration-200 hover:cursor-pointer ${
            more ? "-rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          xmlSpace="preserve"
          onClick={() => setMore(!more)}
        >
          <path d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z" />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
      </div>
    </section>
  );
}
