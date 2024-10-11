import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";
import type { Image as ImageType } from "~/.server/image";

export default function GalleryCard({
  name,
  to,
  image,
}: {
  name: string;
  to: string;
  image: ImageType;
}) {
  const { url } = image;
  const height = image.height ? image.height : 1080;
  const width = image.width ? image.width : 1920;
  return (
    <Link to={to} className="relative h-64 w-full rounded-lg">
      <div>
        <Image
          cdn="ipx"
          src={url}
          width={width}
          height={height}
          className="
          h-full
          w-full
        absolute
        inset-0
        object-cover	
        object-center
        flex
        items-end
        break-all
        text-3xl text-white
        font-semibold
        rounded-lg
      "
          alt={name}
        />

        <div
          style={{
            background: "linear-gradient(0deg, #00000088 30%, #ffffff44 100%)",
          }}
          className="
        absolute
        inset-0
        z-10
        flex
        items-end
        break-all
        rounded-lg
        p-4 text-3xl
        font-semibold
        text-white
      "
        >
          {name}
        </div>
      </div>
    </Link>
  );
}
