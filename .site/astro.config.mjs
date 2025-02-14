// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { rehypeAlertBlockquotes, rehypeRelativeLinks } from './src/mdPlugins';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: { format: 'preserve' },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [rehypeKatex, {}],
      rehypeAlertBlockquotes(),
      rehypeRelativeLinks(),
    ],
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});
