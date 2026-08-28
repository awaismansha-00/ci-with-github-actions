# 03 — Events, filters, paths, and inputs

`pull_request` validates the proposed merge result with a read-only token.
`push` validates trusted branches and tags. `workflow_dispatch` creates a manual
entry point with typed inputs. `schedule` runs from the default branch on UTC
cron. `merge_group` supports merge queues.

Branch and path filters reduce irrelevant work, but they can also leave required
checks pending if configured poorly. Keep the primary CI check available for
every protected-branch pull request.

Manual publishing inputs must require an explicit boolean confirmation. Do not
accept an arbitrary DAST target: the lab and production scan create and address
their own local service.

Run **Lab 02** with both values of `verbose`. Notice that the input is copied to
an environment variable before the shell uses it.

