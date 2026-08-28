import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, '$1');
const workflowRoot = join(root, '.github', 'workflows');
const actionRoot = join(root, '.github', 'actions');
const problems = [];

async function filesBelow(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const result = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await filesBelow(path)));
    else if (/\.ya?ml$/u.test(entry.name)) result.push(path);
  }
  return result;
}

for (const file of [...(await filesBelow(workflowRoot)), ...(await filesBelow(actionRoot))]) {
  const lines = (await readFile(file, 'utf8')).split(/\r?\n/u);
  lines.forEach((line, index) => {
    const match = line.match(/^\s*uses:\s*([^\s#]+)/u);
    if (!match) return;
    const reference = match[1];
    if (reference.startsWith('./')) return;
    const pinnedAction = /^[^@\s]+@[0-9a-f]{40}$/u.test(reference);
    const pinnedContainer = /^docker:\/\/[^@\s]+@sha256:[0-9a-f]{64}$/u.test(reference);
    if (!pinnedAction && !pinnedContainer) {
      problems.push(`${relative(root, file)}:${index + 1}: ${reference}`);
    }
  });
}

if (problems.length > 0) {
  throw new Error(`Unpinned workflow references:\n${problems.join('\n')}`);
}
console.log('All external workflow references are immutable.');

