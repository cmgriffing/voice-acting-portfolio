import { z, defineCollection } from "astro:content";

const characterCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  characters: characterCollection,
};
