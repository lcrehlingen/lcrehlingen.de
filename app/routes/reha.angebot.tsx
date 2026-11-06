import { type MetaFunction, useLoaderData } from "react-router";
import { getTrainings, groupTrainingsByDay } from "~/.server/training";
import TrainingSchedule from "~/components/shared/training/TrainingSchedule";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Reha- und Kursangebot",
    },
    {
      name: "description",
      content: "Reha- und Gesundheitssport Kursangebot vom LC Rehlingen",
    },
  ];
};

export async function loader() {
  const trainings = await getTrainings({ reha: true }).then((res) =>
    res.filter((training) => training.reha)
  );
  return {
    trainings: groupTrainingsByDay(trainings),
  };
}

export default function RehaListPage() {
  const { trainings } = useLoaderData<typeof loader>();
  return (
    <TrainingSchedule
      title="Reha- und Kursangebot"
      groupHeaderLabel="Reha-Kurs / Gruppe"
      trainings={trainings}
    />
  );
}
