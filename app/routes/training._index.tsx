import { type MetaFunction, useLoaderData } from "react-router";
import { getTrainings, groupTrainingsByDay } from "~/.server/training";
import TrainingSchedule from "~/components/shared/training/TrainingSchedule";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Trainingsangebot",
    },
    {
      name: "description",
      content: "Trainingsangebot vom LC Rehlingen",
    },
  ];
};

export async function loader() {
  const trainings = await getTrainings({ reha: false });
  return {
    trainings: groupTrainingsByDay(trainings),
  };
}

export default function TrainingListPage() {
  const { trainings } = useLoaderData<typeof loader>();
  return (
    <TrainingSchedule
      title="Trainingsangebote"
      groupHeaderLabel="Training / Gruppe"
      trainings={trainings}
    />
  );
}
