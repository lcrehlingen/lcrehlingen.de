import { z } from "zod";

export const ImageSchema = z.object({
    url: z.string().transform((url) => {
        return `/strapi${url}`;
    }),
    alternativeText: z.string().nullable(),
    width: z.number(),
    height: z.number(),
  });

export type Image = z.infer<typeof ImageSchema>;
