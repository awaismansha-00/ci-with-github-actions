# 13 — Reusable workflows and composite actions

A composite action packages repeated steps inside one job. The local
`setup-node-project` action accepts a Node version, working directory, and
lockfile path, then configures caching and runs `npm ci`.

A reusable workflow packages whole jobs and can expose typed inputs, named
secrets, and outputs. `reusable-ci.yml`, `reusable-security.yml`, and
`reusable-publish.yml` keep callers small while preserving job boundaries.

Permissions cannot be elevated by a called workflow beyond those granted by
its caller. Do not use unrestricted `secrets: inherit`; declare optional Sonar
secrets by name.

Local reuse uses `./.github/...` and needs no commit ref. Cross-repository reuse
must be pinned immutably. Run **Lab 09** and inspect how its one caller job
expands into the full CI graph.

