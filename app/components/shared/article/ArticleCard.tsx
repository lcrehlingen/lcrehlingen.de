import { Link } from "@remix-run/react";
import Balancer from "react-wrap-balancer";
import ImageCard from "../card/ImageCard";

export default function ArticleCard({
  article,
  path = "/news/",
}: {
  article: any;
  container?: boolean;
  path?: string;
}) {
  return (
    <article className="h-full">
      <Link to={path + article.slug} rel="bookmark">
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
              <Balancer>{article.title}</Balancer>
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
