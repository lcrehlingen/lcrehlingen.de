import { type MetaFunction, useLoaderData } from "react-router";
import { getTrainers } from "~/.server/training";
import TrainerGrid from "~/components/shared/training/TrainerGrid";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Trainer",
    },
  ];
};

export async function loader() {
  const trainers = await getTrainers({ reha: false });
  return {
    trainers,
  };
}

export default function TrainerListPage() {
  const { trainers } = useLoaderData<typeof loader>();
  return <TrainerGrid title="Trainer" trainers={trainers} />;
}
