import { defineCollection, z, reference } from 'astro:content';

const team = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    position: z.string(),
    image: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200px wide."
    }),
    imageAltText: z.string(),
    order: z.number(),
  })
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    image: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200px wide."
    }),
    imageAltText: z.string(),
    publishDate: z.date().transform((str) => new Date(str)).optional(),
    album: reference("albums").optional(),
    category: z.string(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional()
  })
});

const capabilities = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    name: z.string(),
    cover: image().refine((img) => img.width >= 200, {
      message: "Cover image must be at least 200px wide."
    }),
    coverAltText: z.string(),
    category: z.string(),
    order: z.number()
  })
});

const albums = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    name: z.string(),
    images: z.array(z.object({
      image: image(),
      imageAlt: z.string()
    })),
  })
})

export const collections = { team, projects, capabilities, albums };