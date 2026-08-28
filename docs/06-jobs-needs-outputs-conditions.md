# 06 — Jobs, dependencies, outputs, and conditions

Jobs run in parallel unless `needs` creates an edge. Use parallelism for
independent quality and security checks, then converge before building or
publishing. A job output must come from a step output and is consumed through
`needs.<job>.outputs`.

Conditions are evaluated before a job or step runs. Publishing uses both a
trusted event and a trusted ref:

```yaml
if: github.event_name == 'push' && github.ref == 'refs/heads/dev'
```

Use `if: always()` only for cleanup and evidence upload. It must not make a gate
appear successful. Skipped jobs should be intentional—for example dependency
review applies to pull requests, not scheduled runs.

Run **Lab 03**, then follow the `needs` edges in `release.yml` from version
validation through secure publication.
