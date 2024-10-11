/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import Image from "../Image";

export default function GalleryImage({
  photo,
  imageProps,
  wrapperProps,
}: {
  photo: { src: string; width: number; height: number; alt?: string };
  imageProps?: any;
  wrapperProps?: any;
}) {
  const { width, height } = photo;
  const { src, alt, style, sizes } = imageProps;
  const { style: wrapperStyle, ...restWrapperProps } = wrapperProps ?? {};
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <div
      style={{
        width: style.width,
        padding: style.padding,
        marginBottom: style.marginBottom,
        ...wrapperStyle,
      }}
      {...restWrapperProps}
    >
      <figure className="group relative" onClick={() => setOpen(true)}>
        <Image
          gallery={true}
          dataSrc={"/_ipx/f_webp" + src}
          src={src}
          height={height}
          width={width}
          alt={alt}
          sizes={sizes}
          quality={100}
        />
        {alt && (
          <figcaption
            className="absolute bottom-1 h-fit w-full cursor-pointer truncate p-2 text-left text-white opacity-0 transition-all duration-500 ease-linear group-hover:opacity-100"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            {alt}
          </figcaption>
        )}
      </figure>
      {open && (
        <div className="h-100 fixed inset-0 z-50 flex w-full items-center justify-center overflow-hidden bg-black bg-opacity-75 px-4 md:px-10">
          <div
            ref={ref}
            className="flex max-h-full max-w-3xl flex-col overflow-auto"
          >
            <div className="z-50 flex flex-row items-center justify-end gap-4 py-2">
              <a
                href={"/_ipx/q_100/" + src}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 485 485"
                  className="h-6 w-6 fill-current text-white"
                  xmlSpace="preserve"
                >
                  <path d="M233 378.7c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l107.5-107.5c5.3-5.3 5.3-13.8 0-19.1-5.3-5.3-13.8-5.3-19.1 0L256 336.5v-323C256 6 250 0 242.5 0S229 6 229 13.5v323l-84.4-84.4c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1L233 378.7zM426.5 458h-368C51 458 45 464 45 471.5S51 485 58.5 485h368c7.5 0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5z" />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </a>
              <button
                className="float-right outline-none focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <svg
                  className="h-6 w-6 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  xmlSpace="preserve"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <Image
                gallery={true}
                dataSrc={"/_ipx/f_webp" + src}
                src={src}
                className="h-1/2-screen object-contain"
                height={height}
                width={width}
                alt={alt}
                quality={100}
              />
              <p className="text-center text-white ">{alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
