import { Link } from "@remix-run/react";
import RehaSVG from "~/components/pages/home/reha/svg/RehaSVG";
import TableContainer from "~/components/TableContainer";

export default function Reha() {
  return (
    <TableContainer
      reverseRight={true}
      left={
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-none">
            Reha &amp; Gesundheitssport
          </h2>
          <p className="text-gray-800">
            &quot;Bewegte&ldquo; Menschen sind gesünder, denn Bewegung hilft, die
            Gesundheit zu erhalten oder wieder herzustellen. Gesundheitliche
            Belastungen und Risiken können besser bewältigt werden. Körperlich
            aktive Menschen fühlen sich besser und weniger gestresst, sind
            zufriedener und berichten über eine höhere Lebensqualität.
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
            <Link to="/reha">Reha Angebot</Link>
          </div>
        </div>
      }
      right={<RehaSVG className="h-64 w-full" />}
    />
  );
}
