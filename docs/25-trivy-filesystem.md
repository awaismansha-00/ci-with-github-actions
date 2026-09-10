# 25 — Trivy filesystem and dependency scanning

Trivy filesystem mode can inspect lockfiles, source secrets, and configuration.
The automatic security workflow scans `demo-app` for high and critical findings
with available fixes and emits SARIF evidence.

After the standard security gates pass, the scheduled audit adds a non-blocking
all-severity image inventory without publishing. That distinction keeps
pull-request feedback focused while preserving data for longer-term remediation.

Do not scan the insecure training boundary automatically. The boundary validator
ensures production workflows cannot reference it. Scanner caches must not
contain credentials or be writable by privileged untrusted jobs.

Run **Lab 15** for a report-only table. Compare it with the blocking Trivy step
in `reusable-security.yml`.
