import type { MetaFunction } from "@remix-run/node";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Fitnessangebot",
    }
  ]
};

export default function RehaKursePage() {
  return (
    <ContentContainer>
      <Title name="Fitnessangebot" />
      <div className="prose max-w-none text-left">
        <h2>Tabata</h2>
        <p>
          Tabata ist eine Variante des{" "}
          <a href="https://de.wikipedia.org/wiki/Intervalltraining">
            Hochintensitäts-Intervalltrainings
          </a>
          (HIIT) beim Sport. Beim Tabata wechseln sich 20 Sekunden hoher
          Belastung, gefolgt von 10 Sekunden Pause in acht Runden ab. Eine
          Einheit dauert somit vier Minuten. Meist durchläuft man so 10 Übungen.
        </p>
        <p>
          Es basiert auf einer Studie aus dem Jahr 1996 von Professor Izumi
          Tabata mit olympischen Eis-Schnellläufern, die ihre Leistung durch
          Tabata enorm steigern konnten.
        </p>
        <p>
          Typische Belastungs-Übungen sind dabei z. B. Sprints, Sprünge,
          Climbers oder{" "}
          <a href="https://de.wikipedia.org/wiki/Burpee">Burpees</a>. Während
          eines Tabata Trainings kannst du verschiedene Übungen kombinieren oder
          dieselbe Übung über alle acht Intervalle wiederholen. Zum optimalen
          Timing der Intervalle wird in der Regel eine Tabata-Timer-Musik
          verwendet.
        </p>
        <p>
          Die kurzen intensiven Einheiten trainieren das gesamte{" "}
          <a href="https://de.wikipedia.org/wiki/Herz-Kreislauf-System">
            Herz-Kreislauf-System
          </a>
          . Sie verbessern die aerobe und anaerobe Leistungsfähigkeit beim
          Ausdauersport. Auch die Kraft und Muskulatur kann dabei im Laufe der
          Zeit gestärkt werden.
        </p>
        <p>
          Im Anschluss des Tabatatrainings findet eine Cooldown-Phase mit Dehn-
          und Stretchübungen statt.
        </p>
        <h2>Wirbelsäulengymnastik</h2>
        <p>
          Unter Wirbelsäulengymnastik versteht man ein Behandlungskonzept,
          welches zur Prävention und zur Behandlung von Patienten mit
          Rückenschmerzen dient. Dabei wird gezielt die stabilisierende
          Muskulatur der Wirbelsäule gestärkt und deren neurologische
          Ansteuerung verbessert.
        </p>
        <p>
          Der schwedische Autor und Dichter Pehr Henrik Ling gilt als Begründer
          dieser Behandlungsmethode und therapiert schon seit dem 19.
          Jahrhundert, mit Hilfe der Wirbelsäulengymnastik, chronische und akute
          Rückenschmerzen erfolgreich.
        </p>
        <p>
          Typische Bewegungsinhalte sind dabei z.B. Übungen zur Haltungs- und
          Bewegungsschulung, Strategien zur Schmerzbewältigung,
          Entspannungsmethoden oder Strategien zur Prävention von
          Rückenverletzungen.
        </p>
        <p>
          Die Wirksamkeit von Wirbelsäulengymnastik als präventive Maßnahme
          gegen „unspezifische&quot; Rückenschmerzen ist mit moderater bis
          starker Evidenz gesichert. Das gilt besonders für Patienten mit
          chronischen Rückenschmerzen.
        </p>
      </div>
    </ContentContainer>
  );
}
