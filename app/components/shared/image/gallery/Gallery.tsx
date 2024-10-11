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
    />
  );
}
