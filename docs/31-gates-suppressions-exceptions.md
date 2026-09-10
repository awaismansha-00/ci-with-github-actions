# 31 — Risk-based gates, suppressions, and exceptions

A gate translates findings into a merge or release decision. This repository
blocks secrets, dangerous workflow constructs, fixable high/critical
dependencies and images, selected high-risk IaC policies, and high-risk DAST
alerts. CodeQL findings become merge-blocking when the repository's
code-scanning merge protection is configured for the chosen severity.

False positives and accepted temporary risks use `security/exceptions.yml`.
Every record needs an ID, owner, rule, path, justification, approval, created
date, and expiry no more than 30 days later. CI rejects expired or malformed
entries.

Tool-specific ignore entries must cite the canonical exception ID. Never use a
broad path exclusion to avoid triage. Permanent exclusions apply only to the
insecure training boundary.

Run **Lab 20**, add a temporary example on a branch, observe validation, then
remove it rather than merging an unnecessary exception.
