# 23 — Dependency and license analysis

Software composition analysis inventories direct and transitive packages and
matches versions to advisories. Pull requests use GitHub Dependency Review to
detect newly introduced high-severity vulnerabilities. CI runs a production-only
`npm audit`; Trivy supplies an independent filesystem view.

Dependabot proposes weekly updates for `demo-app` npm packages and GitHub
Actions. Updates still pass the same tests and security gates—automation is not
approval.

The risk policy blocks high and critical vulnerabilities when a fix exists.
Unfixed findings remain visible for triage. License information is inventoried
but report-only because the repository has no organization-specific deny list.

Run **Lab 13**, inspect the generated inventory, and compare direct dependencies
in `package.json` with transitive entries in `package-lock.json`.
