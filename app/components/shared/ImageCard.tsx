import { Image } from "@unpic/react";

export type ImageCardProps = {
  children?: React.ReactNode;
  orientation?: "portrait" | "landscape";
  sizes?: string;
  image: {
    height: number;
    width: number;
    src: string;
    alt?: string;
  };
};

export default function ImageCard({
  image,
  children,
  orientation = "landscape",
  sizes,
}: ImageCardProps) {
  const defaultSizes =
    orientation === "portrait"
      ? "(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
      : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
      <div
        className={`relative w-full shrink-0 overflow-hidden ${
          orientation === "landscape" ? "aspect-video" : "aspect-4/5"
        }`}
      >
        <Image
          height={image.height}
          width={image.width}
          src={image.src}
          alt={image.alt}
          sizes={sizes ?? defaultSizes}
          cdn="ipx"
          className="h-full w-full object-cover"
        />
      </div>
      {children}
    </div>
  );
}
