// Puts the rendered page into dist/index.html so search engines and link previews
// see the real content without having to run any JavaScript.
import { readFile, rm, writeFile } from 'node:fs/promises';

const serverDir = new URL('../dist-server/', import.meta.url);
const indexPath = new URL('../dist/index.html', import.meta.url);
const placeholder = '<div id="root"></div>';

const { render } = await import(new URL('entry-server.js', serverDir).href);
const template = await readFile(indexPath, 'utf8');

if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`);
}

// A replacer function stops "$" in the page text being read as a replace pattern.
await writeFile(indexPath, template.replace(placeholder, () => `<div id="root">${render()}</div>`));
await rm(serverDir, { recursive: true, force: true });

console.log('Prerendered dist/index.html');
