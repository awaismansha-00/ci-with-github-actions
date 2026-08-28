# Security policy

## Reporting a vulnerability

Use GitHub's private vulnerability reporting feature for this repository. Do
not open a public issue containing exploit details, credentials, or private scan
output. Include the affected path, impact, safe reproduction steps, and a
suggested mitigation when possible.

## Supported content

The `dev` branch is supported. Educational insecure fixtures are deliberately
vulnerable and are not accepted as security defects unless they escape their
documented boundary, execute automatically, or enter a published artifact.

## CI security model

Pull requests are untrusted, use read-only tokens, and receive no publishing or
optional Sonar secrets. Trusted tag and `dev` jobs use narrowly scoped
permissions. See `security/risk-policy.md` for severity and exception policy.
