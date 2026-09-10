# 26 — Container hardening and image scanning

Container security starts before scanning: use a specific maintained base,
multi-stage builds, locked dependencies, a minimal runtime, non-root execution,
a small build context, and a health check. Hadolint and Checkov review the
Dockerfile; Trivy reviews the final filesystem.

The secure publisher builds once and tags the local image as a scan candidate.
Only after Trivy and DAST succeed does it push tags. The registry digest is then
resolved and used by signing and attestation, preventing scan/rebuild drift.

The gate blocks fixable high and critical findings. Unfixed findings stay
visible for risk review and base-image upgrade planning.

Run **Lab 16**, download the SARIF artifact, and identify whether findings come
from the OS layer or application dependencies.
