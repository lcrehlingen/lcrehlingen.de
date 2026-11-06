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
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div className={`relative w-full overflow-hidden ${orientation === "landscape" ? "aspect-video" : "aspect-4/5"}`}>
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          alt={image.alt}
          cdn="ipx"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      {children}
    </div>
  );
}
