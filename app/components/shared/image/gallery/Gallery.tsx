import { Image } from "@unpic/react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

export default function Gallery({
  photos,
}: {
  photos: { src: string; width: number; height: number; alt?: string }[];
}) {
  return (
    <MasonryPhotoAlbum
      photos={photos}
      spacing={8}
      padding={0}
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
  );
}
