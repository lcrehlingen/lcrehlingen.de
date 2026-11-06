import { z } from "zod";
import { ImageSchema } from "./image";
import { fetchStrapiData } from "./strapi";

const TrainerSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: ImageSchema.nullable(),
  trainings: z.array(
    z.object({
      reha: z.boolean(),
      name: z.string(),
    })
  ),
});

const TrainingSchema = z.object({
  id: z.number(),
  name: z.string(),
  trainers: z.array(
    z.object({
      name: z.string(),
    })
  ),
  location: z.string(),
  reha: z.boolean(),
  TrainingTimeRange: z.array(
    z.object({
      day: z.string(),
      start: z.string(),
      end: z.string(),
    })
  ),
});

export type Trainer = z.infer<typeof TrainerSchema>;
export type Training = z.infer<typeof TrainingSchema>;

export interface TrainingDay {
  day: string;
  dayShort: string;
  trainings: Training[];
}

export async function getTrainers({
  reha = false,
}: {
  reha?: boolean;
}) {
  const data = await fetchStrapiData(
    `/api/trainers?sort[0]=name&pagination[pageSize]=50&populate=*`
  );
  const trainers = data
    .map((item: unknown) => {
      const trainer = TrainerSchema.safeParse(item);
      return trainer.success ? trainer.data : null;
    })
    .filter((trainer): trainer is Trainer => trainer !== null);

  if (reha) {
    return trainers
      .filter((trainer) => trainer.trainings.some((training) => training.reha))
      .map((trainer) => ({
        ...trainer,
        trainings: trainer.trainings.filter((training) => training.reha),
      }));
  }

  return trainers
    .filter(
      (trainer) =>
        trainer.trainings.length === 0 ||
        trainer.trainings.some((training) => !training.reha)
    )
    .map((trainer) => ({
      ...trainer,
      trainings: trainer.trainings.filter((training) => !training.reha),
    }));
}

export async function getTrainings({
  reha = false,
}: {
  reha: boolean;
}) {
  const data = await fetchStrapiData(
    `/api/trainings?populate=*&pagination[pageSize]=50&filters[reha][$eq]=${reha}`
  );
  return data
    .map((item: unknown) => {
      const training = TrainingSchema.safeParse(item);
      return training.success ? training.data : null;
    })
    .filter((training): training is Training => training !== null);
}

export function groupTrainingsByDay(trainings: Training[]): TrainingDay[] {
  const trainingsDays: TrainingDay[] = [
    { day: "Montag", dayShort: "Mo", trainings: [] },
    { day: "Dienstag", dayShort: "Di", trainings: [] },
    { day: "Mittwoch", dayShort: "Mi", trainings: [] },
    { day: "Donnerstag", dayShort: "Do", trainings: [] },
    { day: "Freitag", dayShort: "Fr", trainings: [] },
    { day: "Samstag", dayShort: "Sa", trainings: [] },
    { day: "Sonntag", dayShort: "So", trainings: [] },
  ];

  for (const item of trainings) {
    for (const time of item.TrainingTimeRange) {
      const dayEntry = trainingsDays.find((element) => element.day === time.day);
      if (dayEntry) {
        dayEntry.trainings.push({
          ...item,
          TrainingTimeRange: [time],
        });
      }
    }
  }

  for (const dayEntry of trainingsDays) {
    dayEntry.trainings.sort((a, b) => {
      const startA =
        a.TrainingTimeRange.find((t) => t.day === dayEntry.day)?.start ?? "";
      const startB =
        b.TrainingTimeRange.find((t) => t.day === dayEntry.day)?.start ?? "";
      return startA.localeCompare(startB);
    });
  }

  return trainingsDays;
}
