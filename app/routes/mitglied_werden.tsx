import type { MetaFunction } from "@remix-run/node";
import ContentContainer from "~/components/ContentContainer";
import FileList from "~/components/shared/file/FileList";
import FileListeItem from "~/components/shared/file/FileListItem";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Mitglied werden",
    }
  ]
};

export default function MemberPage() {
  const files = ["datenschutzerklaerung.pdf"];
  return (
    <ContentContainer className="gap-4">
      <Title name="Mitglied werden" />
      <div className="prose max-w-none">
        <p>
          Drucken Sie bitte die <strong>Beitrittserklärung</strong> und
          unbedingt die <strong>Datenschutzerkärung</strong>, aus und senden Sie
          diese ausgefüllt und unterschrieben an folgende Adresse:
          LCR-Geschäftsstelle Beckinger Str. 31 a 66780 Rehlingen-Siersburg Die
          neue Datenschutzverordnung gilt ab dem 25. Mai 2018. Beim
          Persönlichkeitsschutz gelten deutlich strengere Regeln. Es gelten
          umfassendere Rechte auf Information, Löschung und Widerruf. Im
          Schreiben <strong>Datenschutzerkärung</strong> wird aufgeführt, wie
          der LC Rehlingen mit dem Daten seiner Mitglieder umgeht. Dieses
          Schreiben ist für Neumitglieder entworfen. Für die bisherigen
          Mitglieder gelten die selben Bedingungen.
        </p>
      </div>
      <FileList>
        {files.map((file, index) => (
          <FileListeItem key={index} to={file} name={file} />
        ))}
      </FileList>
    </ContentContainer>
  );
}
