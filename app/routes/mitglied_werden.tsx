import type { MetaFunction } from "@remix-run/node";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Mitglied werden - LC Rehlingen",
    }
  ]
};

export default function MemberPage() {
  const documents = [
    {
      name: "Beitrittserklärung",
      filename: "mitgliedsantrag.pdf",
      description: "Füllen Sie dieses Formular aus, um Ihre Mitgliedschaft im LC Rehlingen e.V. zu beantragen.",
    },
    {
      name: "Datenschutzerklärung",
      filename: "datenschutzerklaerung.pdf",
      description: "Wichtige Informationen darüber, wie wir im Verein mit Ihren personenbezogenen Daten umgehen.",
    },
  ];

  return (
    <ContentContainer className="gap-6 pb-16">
      <div className="flex flex-col gap-4 w-full">
        <Title name="Mitglied werden" />
        <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed font-normal">
          Wir freuen uns über Ihr Interesse an einer Mitgliedschaft beim Leichtathletik Club Rehlingen! Hier finden Sie alle notwendigen Informationen und Unterlagen für den Beitritt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start mt-4">
        {/* Info & Copywriting Column */}
        <div className="lg:col-span-2 flex flex-col gap-4 text-gray-600 leading-relaxed text-sm md:text-base">
          <p>
            Drucken Sie bitte die <strong>Beitrittserklärung</strong> und unbedingt auch die <strong>Datenschutzerklärung</strong> aus. Senden Sie beide Dokumente vollständig ausgefüllt und unterschrieben per Post an unsere Geschäftsstelle:
          </p>

          {/* Styled Address Card */}
          <address className="not-italic bg-gray-50 border border-gray-100 rounded-2xl p-5 my-2 flex flex-col gap-1 text-gray-800 font-medium shadow-sm max-w-md">
            <span className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-1">Geschäftsadresse</span>
            <div className="flex items-start gap-3">
              <svg className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 000-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div className="flex flex-col text-sm md:text-base">
                <p className="font-bold text-gray-900">LC Rehlingen e.V.</p>
                <p>Geschäftsstelle</p>
                <p>Beckinger Str. 31 a</p>
                <p>66780 Rehlingen-Siersburg</p>
              </div>
            </div>
          </address>

          <p className="text-gray-500 text-xs md:text-sm leading-relaxed border-t border-gray-100 pt-4 mt-2 font-normal">
            Die Datenschutz-Grundverordnung (DSGVO) fordert einen besonders strengen Schutz personenbezogener Daten. In der <strong>Datenschutzerklärung</strong> listen wir transparent auf, wie wir Ihre Daten verarbeiten, sichern und löschen. Mit der Unterschrift auf beiden Dokumenten sichern Sie die ordnungsgemäße Abwicklung Ihrer Vereinsmitgliedschaft.
          </p>
        </div>

        {/* Downloadable Files Column */}
        <div className="flex flex-col gap-4 w-full">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-1">Unterlagen zum Download</h3>
          <div className="flex flex-col gap-4 w-full">
            {documents.map((doc, index) => (
              <a 
                key={index}
                href={`/${doc.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-red-100/80 transition-all duration-300 w-full"
              >
                {/* PDF Icon Badge */}
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-red-50 text-red-600 border border-red-100 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Doc Name & Desc */}
                <div className="flex-1 flex flex-col gap-1 pr-2">
                  <span className="font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-200 text-base leading-snug">{doc.name}</span>
                  <p className="text-xs text-gray-500 leading-normal font-normal">{doc.description}</p>
                  <span className="text-xs font-semibold text-gray-400 mt-1 flex items-center gap-1">
                    <span>PDF Download</span>
                    <svg className="h-3 w-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
