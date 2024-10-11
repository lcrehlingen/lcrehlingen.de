import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import Component from "~/assets/zirkusprojekt.mdx";
import Gallery from "~/components/shared/image/gallery/Gallery";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Zirkusprojekt",
    }
  ]
};

export default function ZirkusprojektPage() {
  const images = [
    {
      src: "/zirkusprojekt/IMG-20190705-WA0028.jpg",
      width: 900,
      height: 1600,
    },
    {
      src: "/zirkusprojekt/IMG-20190705-WA0017.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/zirkusprojekt/IMG-20190705-WA0015.jpg",
      width: 1600,
      height: 900,
    },
    {
      src: "/zirkusprojekt/IMG-20190705-WA0025.jpg",
      width: 900,
      height: 1600,
    },
    {
      src: "/zirkusprojekt/IMG-20190705-WA0026.jpg",
      width: 900,
      height: 1600,
    },
    {
      src: "/zirkusprojekt/IMG-20190705-WA0004.jpg",
      width: 1076,
      height: 900,
    },
    {
      src: "/zirkusprojekt/IMG-20190705-WA0028.jpg",
      width: 900,
      height: 1600,
    },
    {
      src: "/zirkusprojekt/20200805_184023.jpg",
      width: 2492,
      height: 2592,
    },
  ];
  return (
    <ContentContainer className="gap-4">
      <Title name="Zirkusprojekt des LC Rehlingen" />
      <div className="prose max-w-none text-left">
        <Component />
      </div>
      <Gallery
        photos={images.map((image) => {
          return {
            src: image.src,
            width: image.width,
            height: image.height,
          };
        })}
      />
    </ContentContainer>
  );
}
