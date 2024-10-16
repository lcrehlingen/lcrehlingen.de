import { z } from "zod";
import { ImageSchema } from "./image";

const TrainerSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: ImageSchema,
  trainings: z.array(
    z.object({
       reha: z.boolean(),
        name: z.string(),
    })
  )
});

const TrainingSchema = z.object({
  id: z.number(),
  name: z.string(),
  trainers: z.array(z.object({
    name: z.string(),
  })),
  location: z.string(),
  reha: z.boolean(),
  TrainingTimeRange: z.array(
    z.object({
      day: z.string(),
      start: z.string(),
      end: z.string(),
    })
  )
});

export type Trainer = z.infer<typeof TrainerSchema>;
export type Training = z.infer<typeof TrainingSchema>;

export function getTrainers({
  reha = false
}: {
  reha?: boolean;
}) {
  return fetch(
    `${process.env.STRAPI_URL}/api/trainers?sort[0]=name&pagination[pageSize]=50&populate=*`
  ).then((res) => res.json()).then((res) => {
    const trainers = res.data.map((data: unknown) => {
      const trainer = TrainerSchema.safeParse(data)
      if(trainer.success) {
        return trainer.data;
      }
      return null;
    }).filter((trainer: Trainer | null) => trainer !== null) as Trainer[];
    if(reha) {
      return trainers.filter((trainer) => {
        return trainer.trainings.some((training) => training.reha);
      });
    }
    return trainers;
  });
}

export function getTrainings({
  reha = false
}: {
  reha: boolean;
}) {
  return fetch(
    `${process.env.STRAPI_URL}/api/trainings?populate=*&pagination[pageSize]=50&filters[reha][$eq]=${reha}`
  ).then((res) => res.json()).then((res) => {
    const trainings = res.data.map((data: unknown) => {
      const training = TrainingSchema.safeParse(data)
      if(training.success) {
        return training.data;
      }
      return null;
    }).filter((training: Training | null) => training !== null) as Training[];
    return trainings;
  });
}