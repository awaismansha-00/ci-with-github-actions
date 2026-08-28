# 20 — GitHub Actions workflow security

Workflow files are executable supply-chain configuration. Use least privilege,
full-SHA action pins, safe events, quoted environment variables, and trusted
publishing refs.

Avoid `pull_request_target` when checking out and running untrusted pull-request
code. Do not interpolate titles, branch names, or other event fields directly
inside `run`. Do not use `write-all`, broad inherited secrets, moving action
branches, or `latest` scanner images.

Actionlint validates syntax and expression types. Zizmor finds dangerous
permissions, template injection, and other workflow risks. The local validator
enforces immutable `uses:` references.

Run **Lab 12**. The insecure workflow is outside `.github/workflows`, so GitHub
never executes it; the lab passes it directly to a scanner and is expected to
show findings.

