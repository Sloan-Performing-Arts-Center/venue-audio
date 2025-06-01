import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import type { Root } from 'hast';

import { rehype } from 'rehype';
import { visit } from 'unist-util-visit';
import { toString as hastToString } from 'hast-util-to-string';
import type { VFile, Options as VFOptions } from 'vfile';

import type { ProcessedPageType, SectionsType } from '../search';

interface VFExt {
  sections?: SectionsType;
}
const contentProcessor = rehype().use(
  () =>
    (tree: Root, { sections }: VFile & VFExt) => {
      if (!Array.isArray(sections)) return;

      visit(tree, 'element', (node) => {
        const content = hastToString(node);

        if (/^h[1-4]$/.test(node.tagName)) {
          // headings
          let hash = node.properties.id;
          if (typeof hash !== 'string') hash = null;
          sections.push([content, hash, []]);
        } else {
          // text
          if (!content.length) return;
          sections.at(-1)?.[2].push(content);
        }
      });
    },
);

export const GET: APIRoute = async () => {
  const pages = (await getCollection('pages')).filter((page) => {
    return !(
      page.filePath?.endsWith('/0.md') ||
      page.filePath?.includes('SHOW FILE BACKUPS')
    );
  });
  const content = pages.map((page) => {
    const sections: SectionsType = [];

    // process html to search contents
    const vf: VFOptions & VFExt = { value: page.rendered?.html, sections };
    contentProcessor.runSync(contentProcessor.parse(vf), vf);

    return {
      url: page.id,
      sections,
    } as ProcessedPageType;
  });

  return new Response(JSON.stringify({ content }), {
    headers: { 'Content-Type': 'application/json' },
  });
};
