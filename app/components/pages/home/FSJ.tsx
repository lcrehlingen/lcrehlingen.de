import TableContainer from "~/components/TableContainer";
import { Image } from "@unpic/react";

export default function FSJ() {
  return (
    <TableContainer
      reverseRight={true}
      left={
        <div className="flex flex-col gap-6 justify-center h-full">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 leading-none">FSJ im Sport</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Der LC Rehlingen ist eine anerkannte Einsatzstelle für ein
            Freiwilliges Soziales Jahr im Sport.
          </p>
          <div className="inline-flex items-center">
            <a
              href="https://www.lsvs.de/sportwelten/breitensport/fsj-im-sport"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200 group"
            >
              <span>FSJ im Sport</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
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
          className="rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        />
      }
    />
  );
}
