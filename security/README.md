# Security training area

This directory contains the policy, scanner configuration, and deliberately
isolated inputs used by the DevSecOps labs.

- `fixtures/secure/` contains examples that demonstrate defensive defaults.
- `fixtures/insecure/` contains intentionally bad examples for manual labs.
- Insecure fixtures are never copied into `demo-app`, its Docker image, release
  archives, or automatic production scans.
- None of the secret-like values in this directory is a real credential or a
  value shaped like a credential from a real provider.

Read [the risk policy](risk-policy.md) before changing a gate or adding an
exception.

