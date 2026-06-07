import { Image } from "@unpic/react";
import TableContainer from "~/components/TableContainer";

export default function Pfingstsportfest() {
  const eventDate = new Date("May 16, 2027");

  function daysAway(date: Date) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    const differenceInMilliseconds = date.getTime() - currentDate.getTime();
    return Math.floor(differenceInMilliseconds / millisecondsPerDay);
  }
  return (
    <TableContainer
      left={
        <Image
          cdn="ipx"
          src={"wact_silver.jpg"}
          width={1920}
          height={1080}
          alt="World Athletics Continental Tour Silver"
          className="rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        />
      }
      right={
        <div className="flex flex-col gap-6 justify-center h-full">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 leading-none">Pfingstsportfest</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Das traditionelle 62. Internationale Pfingstsportfest des LC
            Rehlingen findet am{" "}
            {eventDate.toLocaleDateString(undefined, {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}{" "}
            im Bungertstation statt.
            {daysAway(eventDate) > 0 && (
              <span className="font-semibold text-red-600">
                {" "}
                (Noch {daysAway(eventDate)} {daysAway(eventDate) == 1 ? "Tag" : "Tage"} bis zum Start!)
              </span>
            )}
          </p>

          <div className="inline-flex items-center">
            <a 
              href="https://pfingstsportfest.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200 group"
            >
              <span>Pfingstsportfest Website</span>
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
    />
  );
}
