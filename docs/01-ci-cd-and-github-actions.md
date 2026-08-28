# 01 — CI/CD and GitHub Actions

Continuous integration gives every proposed change the same repeatable checks:
installation from a lockfile, formatting, linting, compilation, tests, and
security policy. Continuous delivery makes a verified artifact releasable;
continuous deployment additionally changes a running environment. This repo
implements CI and delivery artifacts, not deployment.

GitHub Actions receives a repository event, selects a workflow from the commit,
creates jobs on runners, and executes each job's ordered steps. A failing
blocking step makes the job—and usually the workflow—fail.

The important trust distinction is event origin. A fork pull request is
untrusted and must remain read-only. A protected `dev` push or SemVer tag may
publish, but only from a narrowly permissioned job.

Run **Lab 01** and inspect its event, runner OS, and commit SHA. Then compare the
small lab with `.github/workflows/ci.yml`.
