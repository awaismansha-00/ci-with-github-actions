import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1');
const workflows = join(root, '.github', 'workflows');
const forbidden = 'security/fixtures/insecure';

for (const name of await readdir(workflows)) {
  if (!/\.ya?ml$/u.test(name) || name.startsWith('lab-')) continue;
  const content = await readFile(join(workflows, name), 'utf8');
  if (content.includes(forbidden)) {
    throw new Error(`${name} references intentionally insecure fixtures`);
  }
}

const dockerignore = await readFile(join(root, 'demo-app', '.dockerignore'), 'utf8');
if (!dockerignore.includes('test')) throw new Error('The production Docker context must exclude tests');

console.log('Automatic workflows and production build inputs respect fixture boundaries.');

