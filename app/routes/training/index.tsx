import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
  return json({
    trainings: groupTrainingsByDay(trainings),
  });
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
