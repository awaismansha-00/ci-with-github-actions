# 21 — SAST with CodeQL and ESLint security rules

Static application security testing analyzes source without sending live
requests. ESLint security rules give quick feedback during ordinary quality
checks. CodeQL builds a semantic database and evaluates extended JavaScript and
TypeScript security queries.

The CodeQL workflow uploads results to code scanning. Configure merge protection
to block new high and critical findings; a successful upload alone does not mean
the repository has no alerts.

SAST can produce false positives and cannot understand every runtime control.
Triage findings against reachable code, data flow, and deployed configuration.
Suppress only through a reviewed, expiring exception.

The production API disables framework disclosure and returns generic errors,
but these controls complement rather than replace analysis and tests.

