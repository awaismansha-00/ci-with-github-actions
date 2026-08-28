# 24 — Checkov for Terraform, Kubernetes, and Dockerfiles

Checkov evaluates configuration against policies before anything is deployed.
This CI-only repository contains non-deployable secure/insecure Terraform and
Kubernetes fixtures solely for learning, plus the real production Dockerfile.

Blocking categories include public storage, missing encryption/versioning,
privileged or root containers, privilege escalation, mutable images, and broad
identity permissions. The automatic configuration lists secure paths and
excludes the permanent insecure lab boundary.

Treat scanner rules as guardrails, not architecture validation. A passing file
may still be incomplete or unsuitable for deployment. This repo deliberately
does not add cloud credentials or apply plans/manifests.

Run **Lab 14** and expect failures from the insecure fixtures. Compare each file
with its partner under `security/fixtures/secure/`.

