import Image from "~/components/shared/image/Image";
import Card from "./Card";

export type ImageCardProps = {
  children?: React.ReactNode;
  orientation?: "portrait" | "landscape";
  image: {
    height: number;
    width: number;
    src: string;
    alt?: string;
  };
}

export default function ImageCard({ image, children, orientation="landscape"}: ImageCardProps) {
  return (
    <Card>
      <div className={orientation === "landscape" ? "aspect-h-9 aspect-w-16" : "aspect-h-5 aspect-w-4"}>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          alt={image.alt}
        />
      </div>
      {children}
    </Card>
  );
}
