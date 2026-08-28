# 30 — SARIF and GitHub Security results

SARIF is a portable format for static-analysis findings. CodeQL uploads SARIF to
GitHub code scanning, and Trivy produces SARIF artifacts for detailed review.
JSON, Markdown, and HTML remain useful for scanners whose data does not map
cleanly to SARIF.

Uploading a report and enforcing a gate are separate operations. Preserve the
scanner's blocking exit code while placing report upload in an `always()` step.
Do not mark the scanner itself `continue-on-error`.

Security results can contain paths, snippets, package names, and internal URLs.
Keep retention intentional and do not publish confidential reports in release
assets.

Use job summaries for counts and links; use the source artifact as the detailed
record.

