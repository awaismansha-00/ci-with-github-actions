import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";
import { parseDocument } from "yaml";

const root = new URL("..", import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, "$1");
const targets = [join(root, ".github"), join(root, "security")];
const failures = [];

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if (/\.ya?ml$/u.test(entry.name)) {
      const document = parseDocument(await readFile(path, "utf8"), {
        prettyErrors: true,
        uniqueKeys: true,
      });
      for (const error of document.errors) failures.push(`${relative(root, path)}: ${error.message}`);
    }
  }
}

for (const target of targets) await visit(target);
if (failures.length > 0) throw new Error(`Invalid YAML:\n${failures.join("\n")}`);
console.log("All YAML files parse without duplicate keys.");

