import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { ASTRO_FOLDER_NAME } from '../../CONFIGURATION';

const isDev = import.meta.env.DEV;

const pages = defineCollection({
  loader: glob({
    base: '..',
    pattern: `{*.md,!(${ASTRO_FOLDER_NAME})/**/*.md}`,
    generateId(entry) {
      return pathToSlug(entry.entry);
    },
  }),

  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { pages };

function pathToSlug(path: string) {
  let slug = path
    .replace(/((?:\/|^)readme)?\.md$/i, '$1')
    .replace(/readme$/i, isDev ? '' : 'index');
  if (!slug.length) slug = '/';
  return slug;
}
