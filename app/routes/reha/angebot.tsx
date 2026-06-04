import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getTrainings, Training } from "~/.server/training";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

interface TrainingDay {
  day: string;
  trainings: Training[];
}

export const meta: MetaFunction = () => {
  return [
    {
      title: "Reha- und Kursangebot",
    },
    {
      name: "description",
      content: "Reha- und Gesundheitssport Kursangebot vom LC Rehlingen",
    }
  ]
};

export async function loader() {
  const trainings = await getTrainings({ reha: true }).then((res) => {
    return res.filter((training) => training.reha);
  });
  
  const trainingsDays: TrainingDay[] = [
    { day: "Montag", trainings: [] },
    { day: "Dienstag", trainings: [] },
    { day: "Mittwoch", trainings: [] },
    { day: "Donnerstag", trainings: [] },
    { day: "Freitag", trainings: [] },
    { day: "Samstag", trainings: [] },
    { day: "Sonntag", trainings: [] },
  ];

  trainings.forEach((item) => {
    item.TrainingTimeRange.forEach((time) => {
      const index = trainingsDays.findIndex(
        (element) => element.day === time.day
      );

      if (
        index !== -1 &&
        trainingsDays[index].trainings.filter((e) => e.name === item.name)
          .length === 0
      ) {
        trainingsDays[index].trainings.push(item);
      }
    });
  });

  trainingsDays.forEach((item) => {
    item.trainings.sort(function (a, b) {
      const index = a.TrainingTimeRange.findIndex(
        (element) => element.day === item.day
      );
      const index2 = b.TrainingTimeRange.findIndex(
        (element) => element.day === item.day
      );
      return a.TrainingTimeRange[index].start.localeCompare(
        b.TrainingTimeRange[index2].start
      );
    });
  });

  return json({
    trainings: trainingsDays,
  });
}

const formatTime = (timeStr: string) => {
  if (!timeStr) return "";
  try {
    const parts = timeStr.split(":");
    return `${parts[0]}:${parts[1]}`;
  } catch (e) {
    return timeStr;
  }
};

function TrainingDaySection({ day, id, trainings }: { day: string; id: string; trainings: Training[] }) {
  return (
    <div id={id} className="scroll-mt-32 flex flex-col gap-4 mt-4 w-full">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{day}</h2>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-100">
          {trainings.length} Einheiten
        </span>
      </div>

      {/* Mobile Card List View (Visible on mobile, hidden on desktop) */}
      <div className="flex flex-col gap-3 md:hidden w-full">
        {trainings.map((training, index) => {
          const time = training.TrainingTimeRange.find(t => t.day === day);
          const startFormatted = time ? formatTime(time.start) : "";
          const endFormatted = time ? formatTime(time.end) : "";
          const displayTime = endFormatted ? `${startFormatted} - ${endFormatted}` : startFormatted;

          return (
            <div 
              key={index}
              className="flex flex-col gap-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:border-red-100 transition-colors duration-200"
            >
              {/* Top row: Name & Time */}
              <div className="flex items-start justify-between gap-3">
                <span className="font-bold text-gray-900 text-base flex-1 leading-snug">{training.name}</span>
                <span className="font-bold text-red-600 text-sm whitespace-nowrap bg-red-50 px-2 py-0.5 rounded-md border border-red-100">{displayTime}</span>
              </div>
              
              {/* Middle row: Trainers */}
              <div className="text-sm font-medium text-gray-800 flex flex-wrap gap-x-2 gap-y-0.5">
                <span className="text-gray-400 font-normal">Trainer:</span>
                {training.trainers.map((t) => t.name).join(", ") || "Keine Angaben"}
              </div>
              
              {/* Bottom row: Location */}
              <div className="text-xs text-gray-500 border-t border-gray-50 pt-2 mt-1 flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-medium text-gray-600 truncate">{training.location}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop Table View (Visible on desktop, hidden on mobile) */}
      <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-100 text-left">
          <thead className="bg-gray-50/75 backdrop-blur-sm sticky top-0 z-10">
            <tr className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              <th className="px-5 py-4 w-1/5">Uhrzeit</th>
              <th className="px-5 py-4 w-2/5">Reha-Kurs / Gruppe</th>
              <th className="px-5 py-4 w-1/5">Trainer</th>
              <th className="px-5 py-4 w-1/5">Ort / Halle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-700">
            {trainings.map((training, index) => {
              const time = training.TrainingTimeRange.find(t => t.day === day);
              const startFormatted = time ? formatTime(time.start) : "";
              const endFormatted = time ? formatTime(time.end) : "";
              const displayTime = endFormatted ? `${startFormatted} - ${endFormatted} Uhr` : `${startFormatted} Uhr`;

              return (
                <tr 
                  key={index} 
                  className="even:bg-gray-50/40 hover:bg-red-50/20 transition-colors duration-150"
                >
                  <td className="px-5 py-3.5 font-bold text-red-600">{displayTime}</td>
                  <td className="px-5 py-3.5 font-semibold text-gray-900">{training.name}</td>
                  <td className="px-5 py-3.5 font-medium text-gray-800">
                    {training.trainers.map((t, i) => (
                      <p key={i}>{t.name}</p>
                    ))}
                    {training.trainers.length === 0 && <p className="text-gray-400 font-normal italic">Keine Angaben</p>}
                  </td>
                  <td className="px-5 py-3.5 text-gray-600">{training.location}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function EventListPage() {
  const { trainings } = useLoaderData<typeof loader>();
  const activeDays = trainings.filter((day) => day.trainings.length > 0);

  return (
    <ContentContainer className="gap-6 pb-12">
      <div className="flex flex-col gap-4 w-full">
        <Title name="Reha- und Kursangebot" />
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-4 w-full">
          {activeDays.map((day, idx) => (
            <a 
              key={idx}
              href={`#${day.day}`} 
              className="flex-1 min-w-[50px] md:flex-initial text-center px-3 py-2 text-sm font-semibold rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-red-600 border border-gray-200 transition-all duration-200"
            >
              {day.day.slice(0, 2)}
            </a>
          ))}
        </div>
      </div>

      {activeDays.map((trainingGrouped, index) => (
        <TrainingDaySection 
          key={index} 
          day={trainingGrouped.day} 
          id={trainingGrouped.day} 
          trainings={trainingGrouped.trainings} 
        />
      ))}
    </ContentContainer>
  );
}
