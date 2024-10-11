import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getGalleries } from "~/.server/gallery";
import ContentContainer from "~/components/ContentContainer";
import GalleryCard from "~/components/shared/image/gallery/GalleryCard";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Galerie",
    }
  ]
};

export async function loader() {
  const galleries = ((await getGalleries())) || [];
  return json({
    galleries,
  });
}
export default function GalleryListPage() {
  const { galleries } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name="Galerie" />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {galleries.map((gallery, index) => (
          <GalleryCard
            name={gallery.name}
            to={gallery.slug}
            image={gallery.thumbnail}
            key={index}
          />
        ))}
      </section>
    </ContentContainer>
  );
}
