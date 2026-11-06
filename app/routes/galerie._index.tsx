import { type MetaFunction, useLoaderData } from "react-router";
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
  return {
    galleries,
  };
}
export default function GalleryListPage() {
  const { galleries } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name="Galerie" />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {galleries.map((gallery) => (
          <GalleryCard
            name={gallery.name}
            to={gallery.slug}
            image={
              gallery.thumbnail ?? {
                url: "/background.jpg",
                alternativeText: gallery.name,
                width: 1920,
                height: 1080,
              }
            }
            key={gallery.id}
          />
        ))}
      </section>
    </ContentContainer>
  );
}
