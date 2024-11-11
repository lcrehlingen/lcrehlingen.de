import { Image } from "@unpic/react";

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
    <div className="flex h-full flex-col overflow-hidden rounded-lg  border-b-4 border-b-red-500 bg-white shadow-lg">
      <div className={orientation === "landscape" ? "aspect-h-9 aspect-w-16" : "aspect-h-5 aspect-w-4"}>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          alt={image.alt}
          cdn="ipx"
        />
      </div>
      {children}
    </div>
  );
}
