import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
  return json({
    trainers,
  });
}

export default function RehaTrainerListPage() {
  const { trainers } = useLoaderData<typeof loader>();
  return <TrainerGrid title="Trainer Reha/Gesundheit" trainers={trainers} />;
}
