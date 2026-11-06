import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export function getStrapiUrl(): string {
  return (process.env.STRAPI_URL ?? "").replace(/\/+$/, "");
}

export async function fetchStrapiData(path: string): Promise<unknown[]> {
  const url = `${getStrapiUrl()}${path}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Response("Fehler beim Laden der Daten", {
      status: res.status,
    });
  }
  const json: unknown = await res.json();
  if (
    typeof json === "object" &&
    json !== null &&
    "data" in json &&
    Array.isArray((json as { data: unknown }).data)
  ) {
    return (json as { data: unknown[] }).data;
  }
  return [];
}

export function renderMarkdown(markdown: string): string {
  const rawHtml = marked.parse(markdown, { async: false }) as string;
  return sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "del",
      "ins",
      "figure",
      "figcaption",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "srcset", "alt", "title", "width", "height", "loading"],
      a: ["href", "name", "target", "rel", "title"],
      td: ["align", "colspan", "rowspan"],
      th: ["align", "colspan", "rowspan", "scope"],
      "*": ["class", "id"],
    },
  });
}

export function getTodayBerlinDate(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}
