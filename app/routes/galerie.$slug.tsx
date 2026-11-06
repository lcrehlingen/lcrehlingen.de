import {
  type LoaderFunctionArgs,
  type MetaFunction,
  useLoaderData,
} from "react-router";
import { getGallery } from "~/.server/gallery";
import ContentContainer from "~/components/ContentContainer";
import Gallery from "~/components/shared/image/gallery/Gallery";
import Title from "~/components/Title";

export const meta: MetaFunction<typeof loader> = ({ loaderData }) => {
  if (!loaderData) {
    return [];
  }
  const { gallery } = loaderData;
  const tags = [
    { title: gallery.name },
    { property: "og:title", content: gallery.name },
    { property: "og:type", content: "website" },
  ];
  if (gallery.thumbnail) {
    tags.push({
      property: "og:image",
      content: `https://lcrehlingen.de/_ipx/w_1200,f_webp${gallery.thumbnail.url}`,
    });
  }
  return tags;
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug = "" } = params;
  const gallery = await getGallery({ slug });
  return {
    gallery,
  };
}

export default function GalleryPage() {
  const { gallery } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name={gallery.name} />
      <div className="flex justify-start space-x-2">
        <p className="font-semibold">
          {new Date(gallery.date).toLocaleDateString("de-DE", {
            timeZone: "Europe/Berlin",
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>
      <Gallery
        photos={gallery.media.map((photo) => {
          return {
            src: photo.url,
            width: photo.width,
            height: photo.height,
            alt: photo.alternativeText || undefined,
          };
        })}
      />
    </ContentContainer>
  );
}
