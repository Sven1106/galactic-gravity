import { z, defineCollection } from 'astro:content';
import { format } from 'date-fns';
const postsCollection = defineCollection({
    schema: z.object({
        author: z.string(),
        categories: z.array(z.string()),
        date: z.string().transform(val => format(new Date(val), 'MMMM d, yyyy')),
        featured: z.boolean().default(false),
        image: z.string(),
        title: z.string(),
        description: z.string(),
    }),
});
export const collections = {
    posts: postsCollection,
};
