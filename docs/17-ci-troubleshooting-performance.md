# 17 — CI troubleshooting and performance

Start with the first failing step, its exact command, event, ref, actor, and
effective permissions. Reproduce application commands locally before changing
workflow YAML. Download scanner output before altering a security gate.

Common failures include lockfile drift, missing cache paths, fork/Dependabot
secret restrictions, renamed required checks, unavailable manual workflows on
non-default branches, and tag/package version mismatches.

Optimize by cancelling superseded runs, caching downloads, parallelizing
independent checks, building once, and scheduling expensive inventory scans.
Do not optimize by skipping gates, sharing mutable outputs, or using broad
permissions.

See `notes/debugging.md`. Record persistent flakiness as a defect with evidence
rather than adding an unconditional retry or `continue-on-error`.

