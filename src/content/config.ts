import { defineCollection, z } from 'astro:content';

export const workCollection = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			finishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};