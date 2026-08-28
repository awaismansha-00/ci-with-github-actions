# 25 — Trivy filesystem and dependency scanning

Trivy filesystem mode can inspect lockfiles, source secrets, and configuration.
The pull-request profile scans `demo-app` for high and critical findings with
available fixes and emits SARIF evidence.

The scheduled audit inventories all severities without blocking or publishing.
That distinction keeps pull-request feedback focused while preserving data for
longer-term remediation.

Do not scan the insecure training boundary automatically. The boundary validator
ensures production workflows cannot reference it. Scanner caches must not
contain credentials or be writable by privileged untrusted jobs.

Run **Lab 15** for a report-only table. Compare it with the blocking Trivy step
in `reusable-security.yml`.

