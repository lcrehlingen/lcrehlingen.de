import { type MetaFunction, useLoaderData } from "react-router";
import { getTrainers } from "~/.server/training";
import TrainerGrid from "~/components/shared/training/TrainerGrid";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Trainer Reha/Gesundheit",
    },
  ];
};

export async function loader() {
  const trainers = await getTrainers({ reha: true });
  return {
    trainers,
  };
}

export default function RehaTrainerListPage() {
  const { trainers } = useLoaderData<typeof loader>();
  return <TrainerGrid title="Trainer Reha/Gesundheit" trainers={trainers} />;
}
