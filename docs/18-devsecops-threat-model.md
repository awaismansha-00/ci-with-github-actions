# 18 — DevSecOps threat model and shift-left security

CI executes repository-controlled code with network access and sometimes write
permissions, making it part of the software supply chain. Threats include
committed secrets, malicious dependencies/actions, unsafe event handling,
vulnerable code, insecure configuration, poisoned artifacts, and image tag
replacement.

The trust boundaries are untrusted pull requests, protected `dev`, protected
release tags, GitHub-hosted runners, and GHCR. Controls should sit as close to
the introducing change as practical while deeper scans run after merge or on a
schedule.

Defense in depth matters: a clean SAST report does not prove dependencies,
Dockerfiles, workflows, or runtime behavior are safe. Evidence must identify
the exact source commit and image digest.

Review `assets/trust-boundaries.mmd` before beginning the security labs.
