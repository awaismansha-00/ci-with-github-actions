# 05 — Contexts, expressions, variables, and secrets

Contexts expose event and workflow data. Common examples are `github`, `inputs`,
`matrix`, `needs`, `steps`, `vars`, and `secrets`. Expressions are evaluated by
GitHub before the shell starts.

Untrusted values such as pull-request titles must not be interpolated directly
inside a shell script. Put the expression in an `env` value, then quote the
environment variable. Repository variables are configuration, not secrets.
Secrets are masked in logs but can still leak through files, network calls, or
unsafe tooling.

This repo does not use personal access tokens. `GITHUB_TOKEN` is scoped per job,
and OIDC supplies short-lived identity for signing. Optional Sonar credentials
exist only in the manual Sonar workflow.

Run **Lab 03** to pass an output between jobs, then inspect
`notes/expressions.md`.

