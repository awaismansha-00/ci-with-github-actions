# 12 — GHCR publishing

GitHub Container Registry uses `ghcr.io/OWNER/IMAGE`. A trusted job can log in
with `GITHUB_TOKEN` when it has `packages: write`; pull-request jobs never receive
that permission.

Production publication builds once, scans that local image, runs DAST, creates
SBOMs, then tags and pushes the same content. After push, the workflow resolves
the immutable registry digest and uses it for attestation and signing.

Dev builds receive `dev` and `sha-<commit>` tags. Releases add full SemVer,
major/minor, major, and `latest`, while the digest remains the true identity.
After first publication, link the package to the repository and make it public.

Run **Lab 08** only when you intend to create a lab tag; its boolean confirmation
prevents accidental publishing.
