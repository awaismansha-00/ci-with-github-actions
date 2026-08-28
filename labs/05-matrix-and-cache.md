# Lab 05 — Matrix and cache

Run Lab 05 twice. Compare Node 22 and 24 jobs and inspect setup-node's cache
annotations on the second run.

**Success:** both runtimes complete independently and the npm download cache is
reused without caching `node_modules`.

