# Lab 15 — Trivy filesystem

Run Lab 15 to inventory all severities in `demo-app`. Compare this report-only
mode with the high/critical gate in automatic CI.

**Success:** results cover dependencies, secrets, and misconfiguration while the
insecure fixture boundary remains outside the scan.

