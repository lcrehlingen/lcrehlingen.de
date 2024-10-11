import { Image } from "@unpic/react";
import { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox, { isImageSlide } from "yet-another-react-lightbox";
import {
  Fullscreen,
  Slideshow,
  Zoom,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({
  photos,
}: {
  photos: { src: string; width: number; height: number; alt?: string }[];
}) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        spacing={8}
        padding={0}
        onClick={({ index }) => setIndex(index)}
        render={{
          photo: ({ onClick }, { photo }) => (
            <Image
              src={photo.src}
              width={photo.width}
              height={photo.height}
              onClick={onClick}
              cdn="ipx"
            />
          ),
        }}
      />
      <Lightbox
        slides={photos}
        render={{
          slide: ({ slide }) => {
            if (
              isImageSlide(slide) &&
              typeof slide.width === "number" &&
              typeof slide.height === "number"
            ) {
              return (
                <Image
                  src={slide.src}
                  height={slide.height}
                  width={slide.width}
                  cdn="ipx"
                />
              );
            }
            return <></>;
          },
        }}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Zoom]}
      />
    </>
  );
}
