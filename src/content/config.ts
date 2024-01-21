import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: z.string(),
    link: z.object({
      href: z.string(),
      label: z.string(),
    }),
  }),
});

const favorites = defineCollection({
  type: "data",
  schema: z.object({
    heading: z.string(),
    data: z.array(
      z.object({
        type: z.union([z.literal("artist"), z.literal("team"), z.literal("podcast"), z.literal("tv")]),
        name: z.string(),
        link: z.string(),
      }),
    ),
  }),
});

const socials = defineCollection({
  type: "data",
  schema: z.object({
    iconName: z.union([z.literal("linkedin"), z.literal("github"), z.literal("twitter")]),
    label: z.string(),
    link: z.string(),
  }),
});

const uses = defineCollection({
  type: "data",
  schema: z.object({
    section: z.string(),
    data: z.array(
      z.object({
        name: z.string(),
        link: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

const navigation = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      route: z.string(),
      title: z.string(),
    }),
  ),
});

export const collections = {
  projects,
  favorites,
  socials,
  uses,
  navigation,
};
