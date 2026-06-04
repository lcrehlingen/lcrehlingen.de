import { Link } from "@remix-run/react";
import RehaSVG from "~/components/pages/home/svg/RehaSVG";
import TableContainer from "~/components/TableContainer";

export default function Reha() {
  return (
    <TableContainer
      reverseRight={true}
      left={
        <div className="flex flex-col gap-6 justify-center h-full">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 leading-none">
            Reha &amp; Gesundheitssport
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            &quot;Bewegte&ldquo; Menschen sind gesünder, denn Bewegung hilft, die
            Gesundheit zu erhalten oder wieder herzustellen. Gesundheitliche
            Belastungen und Risiken können besser bewältigt werden. Körperlich
            aktive Menschen fühlen sich besser und weniger gestresst, sind
            zufriedener und berichten über eine höhere Lebensqualität.
          </p>
          <div className="inline-flex items-center">
            <Link 
              to="/reha" 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200 group"
            >
              <span>Reha Angebot</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      }
      right={<RehaSVG className="h-64 w-full opacity-90" />}
    />
  );
}
