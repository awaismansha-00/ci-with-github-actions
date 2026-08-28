# 10 — Artifacts, coverage, and job summaries

Artifacts persist files after a job or move files between jobs. This repo stores
compiled output, coverage, SARIF/JSON scan reports, SBOMs, DAST reports, and
release checksums. Retention is 30 days for automatic evidence and seven days
for disposable lab output.

An artifact is not a cache. Give artifacts stable descriptive names, reject
missing required build output, and allow missing diagnostic reports only when a
previous setup step failed.

Reports upload with `if: always()` so a scanner failure still leaves evidence.
Do not upload logs or reports that contain credentials or confidential source
fragments.

Run **Lab 06**, download `lab-06-dist`, and verify that the second job consumed
the exact uploaded build output.

