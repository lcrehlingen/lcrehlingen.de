import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import clubRecordsM from "~/assets/records_club_m.json";
import clubRecordsW from "~/assets/records_club_w.json";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Vereinsrekorde",
    }
  ]
};

export default function RecordPage() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Vereinsrekorde des LC Rehlingen" />
      <a href="#w" className="pb-5 text-black">
        Zu den Frauenrekorden
      </a>
      <div className="w-full overflow-x-auto">
        <div className="prose max-w-none overflow-y-auto py-3 text-left">
          <h2 id="m">Männerrekorde</h2>
        </div>
        <table className="whitespace-no-wrap w-full">
          <thead>
            <tr className="border-b bg-gray-50 text-left font-semibold uppercase tracking-wide">
              <th className="px-4 py-3">Disziplin</th>
              <th className="px-4 py-3">Zeit</th>
              <th className="px-4 py-3">Name(n)</th>
              <th className="px-4 py-3">Geburtsjahr</th>
              <th className="px-4 py-3">Datum</th>
              <th className="px-4 py-3">Ort</th>
            </tr>
          </thead>
          <tbody className="divide-y bg-white">
            {clubRecordsM.map((record, index) => (
              <tr key={index} className="text-gray-700 even:bg-gray-300">
                <td className="px-4 py-3">
                  <p className="font-semibold">{record.Disziplin}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Zeit}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Name}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Geburtsjahr}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Datum}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Ort}</p>
                </td>
              </tr>
            ))}

            <tr>
              <td className="prose max-w-none overflow-y-auto py-3 text-left">
                <h2 id="w">Frauenrekorde</h2>
              </td>
            </tr>
            {clubRecordsW.map((record, index) => (
              <tr key={index} className="text-gray-700 even:bg-gray-300">
                <td className="px-4 py-3">
                  <p className="font-semibold">{record.Disziplin}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Zeit}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Name}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Geburtsjahr}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Datum}</p>
                </td>
                <td className="px-4 py-3">
                  <p>{record.Ort}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ContentContainer>
  );
}
