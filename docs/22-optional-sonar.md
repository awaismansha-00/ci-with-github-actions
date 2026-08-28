# 22 — Optional SonarQube/SonarCloud quality gates

Sonar adds centralized code-quality and security analysis but requires an
external service, project, token, and URL. The default CI remains complete
without it.

`sonar.yml` is manual-only and fails early with a clear message if
`SONAR_TOKEN` or `SONAR_HOST_URL` is missing. The scanner and quality-gate
actions are pinned to immutable commits, and full Git history is available for
accurate attribution.

Create a low-privilege project token and store it as a GitHub Actions secret.
Never put it in repository variables, command arguments, or example files. Use
TLS for a self-hosted server and restrict its network exposure.

After configuration, run the optional workflow and confirm the server-side gate
matches the repository's documented policy.

