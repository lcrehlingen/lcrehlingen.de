import { useEffect, useState } from "react";
import ContentContainer from "~/components/ContentContainer";
import type { Article } from "~/.server/articles";
import Gallery from "../image/gallery/Gallery";
import { Image } from "@unpic/react";

async function handleShare(title: string, url: string) {
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default function Article({ article }: { article: Article }) {
  const [webShare, setWebShare] = useState(true);
  useEffect(() => {
    const tables = [...document.getElementsByTagName("table")];
    tables.forEach((table) => {
      if (!table.parentElement) {
        return;
      }
      const wrapper = document.createElement("div");
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.style.overflowX = "auto";
      // parent.appendChild(wrapper)
      wrapper.appendChild(table);
    });
  }, []);
  useEffect(() => {
    if (!navigator.share) {
      setWebShare(false);
    }
  }, []);

  return (
    <>
      <ContentContainer withHeader={true}>
        <article className="flex flex-col gap-2 text-center">
          {article.thumbnail && (
            <div className="mb-8 flex w-full justify-center">
              <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <Image
                  height={article.thumbnail.height}
                  width={article.thumbnail.width}
                  alt={article.thumbnail.alternativeText || undefined}
                  src={article.thumbnail.url}
                  className="w-full object-cover"
                  cdn="ipx"
                />
              </div>
            </div>
          )}
          <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
            {article.title}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <time className="font-semibold">
              {new Date(article.publishedAt).toLocaleDateString("de-DE", {
                timeZone: "Europe/Berlin",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </time>
          </div>
          <div
            className="prose prose-lg max-w-none text-left"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {webShare && (
            <button
              className="flex w-full gap-4 rounded bg-gray-200 p-4 md:hidden"
              onClick={() =>
                handleShare(
                  article.title,
                  `https://lcrehlingen.de/news/${article.slug}`
                )
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-share"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8m-4-6-4-4-4 4m4-4v13" />
              </svg>
              <p className="text-lg">Artikel teilen</p>
            </button>
          )}

          {article.gallery && article.gallery.length > 0 && (
            <Gallery
              photos={article.gallery.map((photo) => {
                return {
                  src: photo.url,
                  width: photo.width,
                  height: photo.height,
                  alt: photo.alternativeText || undefined,
                };
              })}
            />
          )}
        </article>
      </ContentContainer>
    </>
  );
}
