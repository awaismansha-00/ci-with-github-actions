# 32 — Vulnerability triage, remediation, and troubleshooting

Triage records the affected component/path, severity, reachability, fix
availability, exploit prerequisites, owner, decision, and deadline. Confirm a
finding before suppressing it, but do not delay rotating an exposed secret.

Prefer remediation in this order: remove unused code/dependency, upgrade,
change insecure configuration, add a compensating control, then use a short
exception only when necessary. Re-run the exact scanner and full CI after the
change.

When tools disagree, compare databases, package identities, scan modes, and
image digests. Ensure the report belongs to the current commit. For image
findings, distinguish base OS packages from npm packages.

Completion means the fix is tested, the finding is closed, temporary exceptions
are removed, and release evidence refers to the corrected digest.

