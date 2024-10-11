import { Link } from "@remix-run/react";
import ImageCard from "../card/ImageCard";
import { Article } from "~/.server/articles";

export default function ArticleCard({
  article,
}: {
  article: Article;
  container?: boolean;
}) {
  return (
    <article className="h-full">
      <Link to={`/news/${article.slug}`} rel="bookmark">
        <ImageCard
          image={{
            height: 1080,
            width: 1920,
            src: "/strapi" + article.thumbnail?.url,
            alt: article.thumbnail?.alternativeText || undefined,
          }}
        >
          <div className="flex flex-1 flex-col justify-between gap-2 p-4">
            <h1 className="w-full text-xl font-semibold text-gray-900">
              {article.title}
            </h1>
            <span className="text-base text-gray-500">
              <time dateTime={new Date(article.publishedAt).toISOString()}>
                {new Date(article.publishedAt).toLocaleDateString("de-DE", {
                  timeZone: "Europe/Berlin",
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </time>
            </span>
          </div>
        </ImageCard>
      </Link>
    </article>
  );
}
