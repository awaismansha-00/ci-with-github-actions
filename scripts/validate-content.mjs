import { access, readdir, readFile } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/(?:([A-Za-z]:))/, "$1");
const docs = (await readdir(join(root, "docs"))).filter((name) => /^\d{2}-.*\.md$/u.test(name));
const labs = (await readdir(join(root, "labs"))).filter((name) => /^\d{2}-.*\.md$/u.test(name));
const workflows = (await readdir(join(root, ".github", "workflows"))).filter((name) => /^lab-\d{2}\.yml$/u.test(name));

if (docs.length !== 32) throw new Error(`Expected 32 numbered docs, found ${docs.length}`);
if (labs.length !== 20) throw new Error(`Expected 20 numbered lab guides, found ${labs.length}`);
if (workflows.length !== 20) throw new Error(`Expected 20 lab workflows, found ${workflows.length}`);

const markdownFiles = [
  "README.md",
  "CONTRIBUTING.md",
  "SECURITY.md",
  ...(await readdir(join(root, "docs"))).filter((name) => name.endsWith(".md")).map((name) => join("docs", name)),
  ...(await readdir(join(root, "labs"))).filter((name) => name.endsWith(".md")).map((name) => join("labs", name)),
  ...(await readdir(join(root, "notes"))).filter((name) => name.endsWith(".md")).map((name) => join("notes", name)),
  ...(await readdir(join(root, "security"))).filter((name) => name.endsWith(".md")).map((name) => join("security", name)),
];
const broken = [];

for (const file of markdownFiles) {
  const absolute = join(root, file);
  const content = await readFile(absolute, "utf8");
  for (const match of content.matchAll(/\[[^\]]*\]\(([^)]+)\)/gu)) {
    const raw = match[1].trim().replace(/^<|>$/gu, "").split("#", 1)[0];
    if (!raw || /^(?:https?:|mailto:)/u.test(raw)) continue;
    const target = resolve(dirname(absolute), decodeURIComponent(raw));
    const repositoryRelative = relative(root, target);
    if (repositoryRelative.startsWith("..") || isAbsolute(repositoryRelative)) {
      broken.push(`${file}: link escapes repository: ${raw}`);
      continue;
    }
    try {
      await access(target);
    } catch {
      broken.push(`${file}: missing ${relative(root, target)}`);
    }
  }
}

if (broken.length > 0) throw new Error(`Broken local links:\n${broken.join("\n")}`);
console.log("Documentation counts, lab mappings, and local links are valid.");
