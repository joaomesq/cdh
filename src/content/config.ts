import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(240),
    category: z.enum(['Evento', 'Comunidade', 'Inovação', 'Parcerias','Operações','Tecnologia', "Programção"]).default('Tecnologia'),
    cover: z.string().optional(),
    publishedAt: z.string(), // ISO date
    author: z.string().default('Redação CDH'),
  })
});



export const collections = {
  blog
};

