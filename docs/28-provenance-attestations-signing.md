# 28 — Provenance, attestations, and keyless signing

Provenance describes how an artifact was built. GitHub artifact attestations
bind a subject name and digest to the workflow identity. Cosign adds a keyless
signature using GitHub's short-lived OIDC identity—no long-lived signing key is
stored in the repository.

Signing a mutable tag is insufficient; verify the immutable digest and expected
certificate identity/issuer. The workflow identity regex is limited to this
repository's CI and release workflows.

Publication order is scan, push, resolve digest, attest, sign, and verify. A
release is not complete until verification succeeds.

After a successful dev publication, run **Lab 18**. It verifies both the Cosign
signature and GitHub attestation for this repository's GHCR package.
