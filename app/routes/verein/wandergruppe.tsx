import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import Component from "~/assets/wandergruppe.mdx";
import Gallery from "~/components/shared/image/gallery/Gallery";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Wandergruppe",
    }
  ]
};
export default function WandergruppePage() {
  const images = [
    {
      src: "/wandergruppe/IMG_6245.jpg",
      width: 4032,
      height: 3024,
    },
    {
      src: "/wandergruppe/IMG_4015.jpg",
      width: 4000,
      height: 3000,
    },
    {
      src: "/wandergruppe/IMG_4009.jpg",
      width: 4000,
      height: 3000,
    },
    {
      src: "/wandergruppe/IMG_4007.jpg",
      width: 4000,
      height: 3000,
    },
    {
      src: "/wandergruppe/IMG_3436.jpg",
      width: 4000,
      height: 3000,
    },
    {
      src: "/wandergruppe/IMG_0506.jpg",
      width: 1280,
      height: 960,
    },
    {
      src: "/wandergruppe/IMG_0505.jpg",
      width: 960,
      height: 1280,
    },
    {
      src: "/wandergruppe/IMG_01.jpg",
      width: 1488,
      height: 1488,
    },
    {
      src: "/wandergruppe/IMG_02.jpg",
      width: 1024,
      height: 1024,
    },
    {
      src: "/wandergruppe/IMG_03.jpg",
      width: 1488,
      height: 1488,
    },
  ];
  return (
    <ContentContainer className="gap-4">
      <Title name="Wandergruppe des LC Rehlingen" />
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
