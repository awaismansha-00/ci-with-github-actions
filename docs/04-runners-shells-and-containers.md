# 04 — Runners, shells, and containers

GitHub-hosted runners are disposable virtual machines with a documented tool
set. This repo uses `ubuntu-latest` because the production image is Linux and it
keeps cost predictable. A dedicated manual experiment can be extended to
Windows or macOS without multiplying every automatic check.

Each `run` step starts a fresh shell, so ordinary shell variables do not survive
between steps. Persist values with `$GITHUB_ENV` or outputs with
`$GITHUB_OUTPUT`. Quote variables and prefer arrays or action inputs over
building commands from strings.

Job containers provide a consistent user space; service containers provide
dependencies. Docker-based scanners need careful networking. The DAST workflow
creates a private Docker network and uses a fixed in-network hostname rather
than scanning an external address.

Self-hosted runners are intentionally documentation-only here: untrusted jobs
can persist changes or reach internal networks on a long-lived host.

