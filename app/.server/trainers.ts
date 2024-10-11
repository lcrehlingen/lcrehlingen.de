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

export type Trainer = z.infer<typeof TrainerSchema>;

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