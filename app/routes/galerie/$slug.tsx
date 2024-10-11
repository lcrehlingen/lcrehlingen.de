import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGallery } from "~/.server/gallery";
import ContentContainer from "~/components/ContentContainer";
import Gallery from "~/components/shared/image/gallery/Gallery";
import Title from "~/components/Title";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug = "" } = params;
  const gallery = (await getGallery({ slug }));
  return json({
    gallery,
  });
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
            alt: photo.alternativeText || undefined
          };
        })}
      />
    </ContentContainer>
  );
}
