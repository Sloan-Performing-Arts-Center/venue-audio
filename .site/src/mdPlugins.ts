import { visit } from 'unist-util-visit';

import type { Root } from 'hast';
import type { Plugin } from 'unified';

export function rehypeAlertBlockquotes(): Plugin<[], Root> {
  return () => (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'blockquote') {
        // find first line of text
        const firstChild = node.children.find(
          (child) => child.type === 'element',
        );
        if (!firstChild || firstChild.tagName !== 'p') return;

        visit(firstChild, 'text', (textNode, index, parent) => {
          const textContent = textNode.value;

          // try to match to an alert
          const match = textContent.match(/^\[\!([A-Z]+)\]\s*/);
          if (!match) return;

          // get alert name
          const alertType = match[1].toLowerCase();

          // remove alert code
          const innerText = textContent.replace(match[0], '');
          textNode.value = innerText;

          // remove text node if empty
          if (innerText === '' && parent && index !== undefined)
            parent.children.splice(index, 1);

          // add alert styles
          const existingClasses =
            typeof node.properties.className === 'string'
              ? node.properties.className.split(' ')
              : (node.properties.className as string[]) || [];

          node.properties.className = [
            ...existingClasses,
            'alert',
            `alert-${alertType}`,
          ].join(' ');
        });
      }
    });
  };
}

export function rehypeRelativeLinks(): Plugin<[], Root> {
  return () => (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName === 'a') {
        const href = node.properties?.href;

        // Skip if href isn't a string or isn't relative
        if (typeof href !== 'string') return;
        if (href.match(/^\#|\w+:\/\//)) return;

        // PARSE

        // split pathname from hash + query
        const [pathPart, ...endParts] = href.split(/(?=[?#])/);
        const parts = pathPart.split('/');

        // process
        parts[parts.length - 1] = parts[parts.length - 1].replace(
          /(?:readme)?.md$/i,
          '',
        );
        let newPath = parts.join('/');
        if (newPath === '') newPath = './';

        // reconstruct url
        const newHref = [newPath, ...endParts].filter(Boolean).join('');

        node.properties.href = newHref;
      }
    });
  };
}
