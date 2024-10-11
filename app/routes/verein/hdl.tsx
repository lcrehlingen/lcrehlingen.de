import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

import Gallery from "~/components/shared/image/gallery/Gallery";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Haus der Leichtathletik",
    }
  ]
};

export default function HdlPage() {
  const images = [
    { src: "/hdl/hdl_00200.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_00300.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_00400.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_00500.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_00600.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_00700.jpg", width: 600, height: 902 },
    { src: "/hdl/hdl_00800.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_00900.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_01000.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_01100.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_01200.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_01300.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_01400.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_01800.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_02200.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_02420.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_02700.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_02900.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_03110.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_03130.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_03300.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_03510.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_03600.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_04000.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_04700.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_05320.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_05330.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_05360.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_06700.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_07515.jpg", width: 600, height: 400 },
    { src: "/hdl/hdl_08200.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_08400.jpg", width: 600, height: 398 },
    { src: "/hdl/hdl_09115.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_09150.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_09170.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_09210.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_09240.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_09250.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_09290.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_09300.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_10500.jpg", width: 600, height: 400 },
    { src: "/hdl/hdl_11000.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_11500.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_11600.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_12000.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_12200.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_12400.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_12700.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_13100.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_13600.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_13610.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_13640.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_13700.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_13900.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_14200.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_14520.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_14600.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_15300.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_15650.jpg", width: 600, height: 800 },
    { src: "/hdl/hdl_16500.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_16700.jpg", width: 600, height: 450 },
    { src: "/hdl/hdl_16800.jpg", width: 600, height: 450 },
    { src: "/hdl/img_1633.jpg", width: 600, height: 450 },
    { src: "/hdl/img_1634.jpg", width: 600, height: 450 },
    { src: "/hdl/img_5098.jpg", width: 600, height: 450 },
    { src: "/hdl/img_5154.jpg", width: 600, height: 450 },
  ];

  return (
    <ContentContainer className="gap-4">
      <Title name="Haus der Leichtathletik" />
      <div className="prose max-w-none text-left">
        <p>
          Herzstück des LC Rehlingen: Das „Haus der Leichtathletik“ Mit Anfang
          des neuen Jahrtausends begann unser damaliger Vorsitzender Ludwin
          Klein eine zukunftsweisende Vision zu verfolgen. Seine Idee, ein
          Gebäude als Trainingsstätte und Zentrum des Vereins zu erstellen, ließ
          Ludwin nicht mehr los. Bei den öffentlichen Institutionen, wie
          Gemeinde, Ministerium und Sportplanungskommission musste fortan viel
          Überzeugungsarbeit geleistet werden. 2007 erfolgte schließlich der
          Spatenstich mit der Erstellung des Rohbaus durch die
          Arbeitsgemeinschaft von drei Rehlinger Baufirmen. Viele ansässige
          Firmen aus der Gemeinde Rehlingen-Siersburg wurden an der Erstellung
          des Gebäudes beteiligt. Den Großteil des Innenausbaus konnte durch die
          ehrenamtliche Arbeit vieler Vereinshelfer realisiert werden. Woche für
          Woche arbeitete die LC Familie unter unter Ihrem Motor Ludwin Klein an
          der Fertigstellung des neuen LC Domizils. Im August 2008 konnte die
          Einweihung gefeiert werden und der Einzug ins neue Vereinsdomizil
          wurde vollzogen. Das Herzstück des LC Rehlingen dient dem Verein als
          Trainingsstätte mit Gymnastik-, Kraftraum und Sozialräumen, der
          Seminarraum bietet die Möglichkeit für Sitzungen, Veranstaltungen und
          Feierlichkeiten. Der „Turm“ ist die Schaltzentrale für Zeitmessung und
          die administrativen Tätigkeiten. Das Haus der Leichtathletik mit
          Bungertstadion gibt den jungen Athleten, sowie unseren
          Leistungsträgern verbesserte Möglichkeiten für das Training. Das
          barrierefreie Haus wird auch durch Senioren- und Gesundheitssport
          belebt. Rehasport , Seniorentraining, Training für psychisch
          Benachteiligte, sowie Yoga- und Zumbakurse komplettieren das Angebot.
          Das Haus der Leichtathletik des LC Rehlingen ist Treffpunkt, Zentrum
          und Heimat für das gesamte Vereinsleben geworden.
        </p>
      </div>

      <Gallery
        photos={images.map((image) => {
          return {
            src: image.src,
            width: image.width,
            height: image.height,
          };
        })}
      />
    </ContentContainer>
  );
}
