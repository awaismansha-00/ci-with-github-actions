# 16 — Required checks and branch protection

Repository rules turn CI results into merge policy. Protect `dev`, require pull
requests, dismiss stale approvals, require conversation resolution, and select
the stable quality, test, build, smoke, and security check names.

Enable the merge queue only after `merge_group` triggers the required workflow.
Enable code-scanning merge protection for new high and critical CodeQL findings.
Set default workflow token permissions to read-only and require full-SHA action
pinning where repository policy supports it.

Settings are documented rather than changed by a workflow: a workflow should
not silently weaken the rules that govern itself. Revisit required check names
before renaming jobs.

Use the repository settings checklist in the root README after the first push.
