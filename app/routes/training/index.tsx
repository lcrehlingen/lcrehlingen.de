import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ContentContainer from "~/components/ContentContainer";
import Title from "~/components/Title";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Trainingsangebot",
    },
    {
      name: "description",
      content: "Trainingsangebot vom LC Rehlingen",
    }
  ]
};

export async function loader() {
  const trainings = [];
  const trainingsDays: any[] = [
    {
      day: "Montag",
      trainings: [],
    },
    {
      day: "Dienstag",
      trainings: [],
    },
    {
      day: "Mittwoch",
      trainings: [],
    },
    {
      day: "Donnerstag",
      trainings: [],
    },
    {
      day: "Freitag",
      trainings: [],
    },
    {
      day: "Samstag",
      trainings: [],
    },
    {
      day: "Sonntag",
      trainings: [],
    },
  ];

  trainings.forEach((item) => {
    item.TrainingTimeRange.forEach((time) => {
      const index = trainingsDays.findIndex(
        (element) => element.day === time.day
      );

      if (
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

export default function EventListPage() {
  //const { trainings } = useLoaderData<typeof loader>();
  return (
    <ContentContainer className="gap-4">
      <Title name="Trainingsangebote" />
      <div className="w-full overflow-x-auto">
        <table className="whitespace-no-wrap w-full">
          {/*trainings
            .filter((day) => day.trainings.length > 0)
            .map((trainingGrouped, index) => (
              <tbody
                key={index}
                className={`divide-y rounded-md even:divide-gray-400 even:bg-gray-200`}
              >
                <>
                  <tr>
                    <td className="bg-white">
                      <p className="text-bold my-4 max-w-min rounded-md bg-gray-400 p-3 text-3xl text-white">
                        {trainingGrouped.day}
                      </p>
                    </td>
                  </tr>
                  {trainingGrouped.trainings.map(
                    (training: any, index: number) => (
                      <tr key={index} className="text-gray-700">
                        <td className="py-3 px-3">
                          {training.TrainingTimeRange.filter(
                            (timeRange) => timeRange.day === trainingGrouped.day
                          ).map((time: any, index: number) => (
                            <p key={index}>
                              {new Date(
                                "1970-01-01T" + time.start
                              ).toLocaleTimeString("de-DE", {
                                timeZone: "Europe/Berlin",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          ))}
                        </td>
                        <td className="py-3">
                          <p className="font-semibold">{training.name}</p>
                        </td>
                        <td className="py-3">
                          {training.trainers.map(
                            (trainer: any, index: number) => (
                              <p className="font-semibold" key={index}>
                                {trainer.name}
                              </p>
                            )
                          )}
                        </td>

                        <td className="py-3">
                          <p>{training.location}</p>
                        </td>
                      </tr>
                    )
                  )}
                </>
              </tbody>
            ))*/}
        </table>
      </div>
    </ContentContainer>
  );
}
