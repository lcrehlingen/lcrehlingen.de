import TableContainer from "~/components/TableContainer";
import wactSilver from "~/assets/images/wact_silver.jpg";

export default function Pfingstsportfest() {
  const eventDate = new Date("June 08, 2025");
  
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
        <img
          src={wactSilver}
          width={1920}
          height={1080}
          alt="World Athletics Continental Tour Silver"
          className="rounded-lg"
        />
      }
      right={
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-none">Pfingstsportfest</h2>
          <p className="text-gray-800">
            <>
              Das traditionelle 60. Internationale Pfingstsportfest des LC
              Rehlingen findet am{" "}
              {eventDate.toLocaleDateString(undefined, {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}{" "}
              im Bungertstation statt.
              {daysAway(eventDate) > 0 &&
                " Noch " +
                daysAway(eventDate) +
                  (daysAway(eventDate) == 1 ? " Tag." : " Tage.")}
            </>
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
            <a href="https://pfingstsportfest.de">Pfingstsportfest</a>
          </div>
        </div>
      }
    />
  );
}
