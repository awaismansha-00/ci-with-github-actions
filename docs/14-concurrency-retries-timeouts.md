# 14 — Concurrency, cancellation, retries, and timeouts

CI uses a concurrency group based on workflow plus pull-request number or ref.
`cancel-in-progress: true` stops obsolete commits from consuming minutes while a
newer revision is ready.

Add timeouts to network-bound or service-start steps when defaults are too long.
Retry only transient operations and keep attempts bounded. Never blindly retry
a deterministic test, policy violation, or vulnerability gate.

Scheduled audits should not share a concurrency key with pull-request CI. A
release should not be cancelled by an unrelated tag. Reusable caller and called
workflows must not use an identical cancellation group, because the called run
can cancel its caller.

For flaky infrastructure, capture evidence before retrying and track recurrence
rather than hiding it.

