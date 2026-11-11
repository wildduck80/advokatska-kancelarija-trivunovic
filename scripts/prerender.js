// Runs after the client and SSR builds: renders every route to static HTML in dist/
// and writes the sitemap. See src/entry-server.jsx.
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const { buildSiteFiles } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);
const template = await readFile(join(distDir, 'index.html'), 'utf8');
const files = buildSiteFiles(template);

await Promise.all(
  files.map(async ({ file, content }) => {
    const target = join(distDir, file);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, content);
  })
);
await rm(ssrDir, { recursive: true, force: true });

console.log(`Prerendered ${files.length} files:\n  ${files.map((f) => f.file).join('\n  ')}`);
