import type { MetaFunction } from "@remix-run/node";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Der Verein",
    }
  ]
};

export default function VereinPage() {
  return (
    <ContentContainer className="gap-4">
      <Title name="Der Verein" />
      <div className="prose max-w-none text-left">
        <h2 className="text-center">
          LC Rehlingen ein moderner Verein mit familiärem Charakter, Herz und
          Tradition
        </h2>
        <p>
          Mit dem Leichtathletik Club Rehlingen verbinden sich für die
          Öffentlichkeit vor allem zwei Wahrnehmungen:
        </p>
        <ul>
          <li>
            der dauerhafte sportliche regionale und überregionale Erfolg seiner
            Athleten und
          </li>
          <li>das jährlich stattfindende Pfingstsportfest</li>
        </ul>
        <p>
          Seit seiner Gründung 1957 gehört der LC Rehlingen zur Spitzengruppe
          der saarländischen Vereine und behauptet sich in den letzten Jahren
          kontinuierlich unter den 30 besten Clubs in Deutschland.
        </p>
        <p>
          Der LC Rehlingen ist das Leichtathletik-Zentrum an der unteren Saar
          mit
        </p>
        <ul>
          <li>rund 3500 Landesmeistern</li>
          <li>73 Deutschen Meistertiteln</li>
          <li>5 Olympiateilnahmen</li>
          <li>einem umfassenden Förderkonzept (Schule und Verein)</li>
          <li>
            einer einmaligen Organisationskraft mit vielen Veranstaltungen pro
            Saison
          </li>
        </ul>
        <p>
          Hinter der Erfolgsstory des LC Rehlingen stehen rund 1200 aktive und
          inaktive Mitglieder.
        </p>
        <p>
          An der Vereinsspitze fungiert ein stabiler Vorstand, der für
          Kontinuität und Innovation steht. Um die Kinder, Jugendlichen,
          Aktiven, Senioren- und Gesundheitssportler kümmert sich ein
          25-köpfiges hoch qualifiziertes Trainerteam.
        </p>
        <p>
          Der LC Rehlingen steht auch für vielfältige Projekte und
          Jugendaustausch ein, wie dem regelmäßigen Treffen mit unserem
          französischen Partnerverein AMSL Fréjus und umfassenden Aktivitäten
          für den Nachwuchsbereich.
        </p>
        <p>
          Der LC Rehlingen betreut darüber hinaus auch in seinen vielen
          Angeboten im Gesundheitsbereich:
        </p>
        <ul>
          <li>Ältere Menschen zum Erhalt ihrer Mobilität</li>
          <li>Menschen mit orthopädischen Problemfeldern (Rehasport)</li>
          <li>Menschen mit psychischer Beeinträchtigung</li>
          <li>Menschen mit geistiger Behinderung</li>
        </ul>
        <p>
          Nicht zuletzt wurde der LC Rehlingen mit seiner integrativen
          Fitnessgruppe als Modellprojekt bei Gesundheitsministerium und pro
          Ehrenamt ausgezeichnet-
        </p>
        <p>
          Eine tragende Säule im Vereinsleben des LC Rehlingen ist das
          alljährlich stattfindende Trainingslager. Seit über 50 Jahren
          organisiert der Verein Ferien- und Freizeittrainingslager über Ostern
          in Südfrankreich.
        </p>
        <p>
          Der LC Rehlingen ist durch sein Internationales Pfingstsportfest,
          nächstes Jahr zum 57. Mal weltweit bekannt und geachtet.
        </p>
        <p>
          Alle diese Vorzüge tragen dazu bei, dass sich die Menschen im LC
          Rehlingen wohl fühlen und dass hier immer wieder Spitzenathleten ihre
          sportliche Heimat finden.
        </p>
      </div>
    </ContentContainer>
  );
}
