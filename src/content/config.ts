import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        logo: z.object({ image: image() }),
        link: z.object({
          href: z.string().url(),
          label: z.string(),
        }),
        featured: z.boolean(),
      })
      .passthrough(),
});

const favorites = defineCollection({
  type: "data",
  schema: z.object({
    heading: z.string(),
    data: z.array(
      z.object({
        type: z.union([z.literal("artist"), z.literal("team"), z.literal("podcast"), z.literal("tv")]),
        name: z.string(),
        link: z.string().url(),
      }),
    ),
  }),
});

const socials = defineCollection({
  type: "data",
  schema: z.object({
    iconName: z.union([z.literal("linkedin"), z.literal("github"), z.literal("twitter")]),
    label: z.string(),
    link: z.string().url(),
  }),
});

const uses = defineCollection({
  type: "data",
  schema: z.object({
    section: z.string(),
    data: z.array(
      z.object({
        name: z.string(),
        link: z.string().url(),
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

const roles = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.array(
      z.object({
        company: z.string(),
        title: z.string(),
        link: z.string().url(),
        logo: z.object({ image: image() }),
        start: z.string().datetime(),
        end: z.string().datetime().nullable(),
        current: z.boolean(),
      }),
    ),
});

const heroImages = defineCollection({
  type: "data",
  schema: ({ image }) => z.array(z.object({ image: image() })),
});

export const collections = {
  projects,
  favorites,
  socials,
  uses,
  navigation,
  roles,
  heroImages,
};
