import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import clubRecordsM from "~/assets/records_club_m.json";
import clubRecordsW from "~/assets/records_club_w.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Vereinsrekorde des LC Rehlingen",
    }
  ]
};

function RecordTable({ title, id, records }: { title: string; id: string; records: typeof clubRecordsM }) {
  return (
    <div id={id} className="scroll-mt-32 flex flex-col gap-4 mt-4 w-full">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h2>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
          {records.length} Einträge
        </span>
      </div>

      {/* Mobile Card List View (Visible on mobile/tablet, hidden on desktop) */}
      <div className="flex flex-col gap-3 md:hidden w-full">
        {records.map((record, index) => (
          <div 
            key={index}
            className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-red-100 transition-colors duration-200"
          >
            {/* Discipline & Record Value */}
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-900 text-base">{record.Disziplin}</span>
              <span className="font-bold text-red-600 text-base">{record.Zeit}</span>
            </div>
            
            {/* Athlete Name & Birth Year */}
            <div className="text-sm font-medium text-gray-800">
              {record.Name} {record.Geburtsjahr && <span className="text-xs text-gray-400 font-normal">(*{record.Geburtsjahr})</span>}
            </div>
            
            {/* Date & Location */}
            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-50 pt-2 mt-1">
              <span>{record.Datum}</span>
              <span className="font-medium text-gray-600">{record.Ort}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View (Visible on desktop, hidden on mobile) */}
      <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-100 text-left">
          <thead className="bg-gray-50/75 backdrop-blur-sm sticky top-0 z-10">
            <tr className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              <th className="px-5 py-4">Disziplin</th>
              <th className="px-5 py-4">Zeit / Leistung</th>
              <th className="px-5 py-4">Name(n)</th>
              <th className="px-5 py-4">Geburtsjahr</th>
              <th className="px-5 py-4">Datum</th>
              <th className="px-5 py-4">Ort</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-700">
            {records.map((record, index) => (
              <tr 
                key={index} 
                className="even:bg-gray-50/40 hover:bg-red-50/20 transition-colors duration-150"
              >
                <td className="px-5 py-3.5 font-bold text-gray-900">{record.Disziplin}</td>
                <td className="px-5 py-3.5 font-semibold text-red-600">{record.Zeit}</td>
                <td className="px-5 py-3.5 font-medium text-gray-800">{record.Name}</td>
                <td className="px-5 py-3.5 text-gray-500">{record.Geburtsjahr}</td>
                <td className="px-5 py-3.5 text-gray-500">{record.Datum}</td>
                <td className="px-5 py-3.5 text-gray-600">{record.Ort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function RecordPage() {
  return (
    <ContentContainer className="gap-6 pb-12">
      <div className="flex flex-col gap-4 w-full">
        <Title name="Vereinsrekorde des LC Rehlingen" />
        
        {/* Navigation Tabs */}
        <div className="flex flex-row items-center gap-3 border-b border-gray-100 pb-4 w-full">
          <a 
            href="#m" 
            className="flex-1 md:flex-initial text-center px-4 py-2.5 text-sm font-semibold rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-red-600 border border-gray-200 transition-all duration-200"
          >
            Männerrekorde
          </a>
          <a 
            href="#w" 
            className="flex-1 md:flex-initial text-center px-4 py-2.5 text-sm font-semibold rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-red-600 border border-gray-200 transition-all duration-200"
          >
            Frauenrekorde
          </a>
        </div>
      </div>

      {/* Men's Records Table */}
      <RecordTable title="Männerrekorde" id="m" records={clubRecordsM} />

      {/* Women's Records Table */}
      <RecordTable title="Frauenrekorde" id="w" records={clubRecordsW} />
    </ContentContainer>
  );
}
