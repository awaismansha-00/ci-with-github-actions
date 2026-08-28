# 19 — Secret detection and push protection

Gitleaks scans history and current content against known and repository-specific
patterns. GitHub secret scanning detects supported provider credentials, while
push protection can stop supported secrets before they enter a branch.

A secret committed once remains compromised even after deletion. Revoke or
rotate it first, then remove it from current files and history where necessary.
Do not paste real secrets into fixtures to test a scanner.

The manual fixture uses a synthetic `TRAINING_SECRET_DEMO_...` marker and a
lab-only Gitleaks configuration. Automatic scans allowlist the entire insecure
fixture boundary, never an application path.

Run **Lab 11** and expect the job to fail. Read the detection, remove the marker
on a temporary branch, and compare the result.

