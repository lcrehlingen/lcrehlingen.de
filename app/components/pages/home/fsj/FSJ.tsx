import TableContainer from "~/components/TableContainer";
import { Image } from "@unpic/react";

export default function FSJ() {
  return (
    <TableContainer
      reverseRight={true}
      left={
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-none">FSJ im Sport</h2>
          <p className="text-gray-800">
            Der LC Rehlingen ist eine anerkannte Einsatzstelle für ein
            Freiwilliges Soziales Jahr im Sport.
          </p>
          <div className="inline-flex items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="inline h-4 w-4 -rotate-90"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <a
              href="https://www.lsvs.de/sportwelten/breitensport/fsj-im-sport"
              target="_blank"
              rel="noopener noreferrer"
            >
              FSJ im Sport
            </a>
          </div>
        </div>
      }
      right={
        <Image
          cdn="ipx"
          src={"fsj.jpg"}
          width={1920}
          height={1080}
          alt="FSJ im Sport Logo"
          className="rounded-lg"
        />
      }
    />
  );
}
