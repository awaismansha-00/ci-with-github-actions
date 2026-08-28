# 07 — Node.js CI

Reliable Node CI starts with a committed `package-lock.json` and `npm ci`.
Unlike `npm install`, `npm ci` rejects lockfile drift and recreates the dependency
tree deterministically. The local composite action configures Node, enables npm
caching, and installs locked dependencies.

The quality job runs formatting, ESLint security rules, TypeScript checking, and
repository policy validation. Tests run separately across Node 22 and 24 so a
single failure identifies runtime compatibility. The build runs once after both
quality and tests succeed.

Keep local and CI scripts identical. `npm run check` is the local equivalent of
the application quality pipeline.

Run **Lab 04**. Change a test assertion on a branch, observe the failure, then
restore it and rerun only the failed job.

