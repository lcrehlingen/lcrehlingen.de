import TableContainer from "../../../TableContainer";
import alexanderBock from "./images/AlexanderBock.jpg";
import lennnartZehfeld from "./images/LennartZehfeld.jpg";
import hannahRoedel from "./images/HannahRödel.jpg";
import abieHensgen from "./images/AbieHensgen.jpg";
import liaraSchulze from "./images/LiaraSchulze.jpg";
import richardRinger from "./images/RichardRinger.jpg";

export default function PromoSection() {
  return (
    <TableContainer
      left={
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight">
            LC Rehlingen
          </h2>
          <div className="flex flex-col gap-4 text-lg text-gray-600">
            <p>
              Der Leichtathletik Club Rehlingen (LCR) begrüßt Sie herzlich auf
              seiner Homepage. Seit 1957 fördert und praktiziert der LCR für
              seine 1200 Mitglieder mit einem großen Trainerteam Nachwuchs-,
              Spitzen-, Senioren- und Gesundheitssport in allen Altersklassen.
              Darüber hinaus werden Rehasportler und Behinderte mit geistiger
              und psychischer Beeinträchtigung in vielen Angeboten betreut.
            </p>
            <p>
              Der Verein steht für Spaß an der Bewegung, Förderung von jungen
              Talenten und die Völkerverständigung, im Besonderen durch den
              Jugendaustausch mit dem Partnerverein AMSL Fréjus. Eine tragende
              Säule des Vereins ist das jährlich in Südfrankreich stattfindende
              Trainings- und Freizeitlager, an dem alle interessierten
              Mitglieder teilnehmen können.
            </p>
            <p>
              Heimat des LCR ist das Bungertstadion und das 2008 erbaute
              „Integrative Haus der Leichtathletik“. Der LCR ist durch sein
              Internationales Pfingstsportfest weltweit bekannt und geachtet.
            </p>
          </div>
        </div>
      }
      right={
        <div className="hidden gap-4 md:grid md:grid-cols-3">
          <img
            src={richardRinger}
            width={309}
            height={550}
            alt="Richard Ringer"
            style={{ borderRadius: "0.5rem" }}
          />
          <img
            src={lennnartZehfeld}
            width={326}
            height={580}
            alt="Lennart Zehfeld"
            style={{ borderRadius: "0.5rem" }}
          />
          <img
            src={hannahRoedel}
            width={422}
            height={750}
            alt="Hannah Rödel"
            style={{ borderRadius: "0.5rem" }}
          />
          <img
            src={alexanderBock}
            width={1020}
            height={1815}
            alt="Alexander Bock"
            style={{ borderRadius: "0.5rem" }}
          />
          <img
            src={abieHensgen}
            width={1993}
            height={3543}
            alt="Abie Hensgen"
            style={{ borderRadius: "0.5rem" }}
          />
          <img
            src={liaraSchulze}
            width={1268}
            height={2256}
            alt="Liara Schulze"
            style={{ borderRadius: "0.5rem" }}
          />
        </div>
      }
    />
  );
}
