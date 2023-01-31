import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  schema: z
    .object({
      isDraft: z.boolean(),
      title: z.string(),
      featuredTechnology: z.string(),
      summary: z.string(),
      date: z.date(),
      isFeatured: z.boolean().default(false),
    })
    .strict(),
});

const educationCollection = defineCollection({
  schema: z
    .object({
      school: z.string(),
      startYear: z.number(),
      endYear: z.number(),
    })
    .strict(),
});

const experienceCollection = defineCollection({
  schema: z
    .object({
      title: z.string(),
      company: z.string(),
      startDate: z.date(),
      endDate: z.date().or(z.literal("Current")),
    })
    .strict(),
});

export const collections = {
  project: projectCollection,
  education: educationCollection,
  experienceCollection: experienceCollection,
};
