import { defineCollection, z } from "astro:content";

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(240),
    category: z.enum(['Fraude','Prevenção','Parcerias','Operações','Tecnologia']).default('Prevenção'),
    cover: z.string().optional(),
    publishedAt: z.string(), // ISO date
    author: z.string().default('Redação CISP'),
  })
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog, noticias
};

