# 09 — Matrix strategies

A matrix expands one job definition into multiple jobs. The automatic test job
parses the reusable workflow's JSON input and tests Node 22 and 24.

`fail-fast: false` lets both compatibility results finish, which is more useful
than cancelling the second runtime after the first failure. Include/exclude
rules are helpful for targeted exceptions, but too many axes rapidly increase
minutes and noise.

Use matrices for genuine compatibility boundaries. Do not repeat linting,
type-checking, and building on every runtime when those checks are runtime
independent. This repo tests twice but performs quality and build once on Node
24.

Run **Lab 05** and inspect the two expanded job names and their independent
logs.

