# Workflow debugging

- Re-run only failed jobs before re-running the whole workflow.
- Check the event, ref, actor, and effective permissions first.
- Use `ACTIONS_STEP_DEBUG` only temporarily; logs may reveal sensitive metadata.
- Download JSON/SARIF artifacts before changing a scanner gate.
- Inspect cache keys and lockfile hashes when dependency restoration looks stale.
- Compare the scanned image digest with the pushed digest.
- Treat fork pull requests and Dependabot pull requests as secretless, read-only runs.

