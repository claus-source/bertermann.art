import { defineCollection, z } from 'astro:content';

const artworks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    materials: z.string(),
    size: z.string(),
    category: z.enum(['figurative', 'abstract']),
    status: z.enum(['available', 'sold', 'reserved']),
    price: z.string().optional(),
    image: z.string(),
    imageName: z.string().optional(),
    altText: z.string().optional(),
    orderIndex: z.number(),
    caption: z.string().optional(),
    keywords: z.string().optional(),
    additionalImages: z.array(z.object({
      url: z.string(),
      name: z.string(),
    })).optional(),
  }),
});

const carousel = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
  }),
});

const bio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    portrait: z.string().optional(),
  }),
});

export const collections = {
  artworks,
  carousel,
  blog,
  bio,
};
