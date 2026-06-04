import { Link } from "@remix-run/react";
import { Article } from "~/.server/articles";
import ImageCard from "../ImageCard";

export default function ArticleCard({
  article,
}: {
  article: Article;
  container?: boolean;
}) {
  return (
    <article className="h-full">
      <Link to={`/news/${article.slug}`} rel="bookmark" className="block h-full group">
        <ImageCard
          image={{
            height: 1080,
            width: 1920,
            src: article.thumbnail.url,
            alt: article.thumbnail.alternativeText || undefined,
          }}
        >
          <div className="flex flex-1 flex-col justify-between gap-4 p-5">
            <h1 className="w-full text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 leading-snug">
              {article.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium mt-auto pt-1">
              <svg className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 000-2-2H5a2 2 000-2 2v12a2 2 000 2 2z" />
              </svg>
              <time dateTime={new Date(article.publishedAt).toISOString()}>
                {new Date(article.publishedAt).toLocaleDateString("de-DE", {
                  timeZone: "Europe/Berlin",
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </time>
            </div>
          </div>
        </ImageCard>
      </Link>
    </article>
  );
}
