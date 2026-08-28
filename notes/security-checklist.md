# Security review checklist

- [ ] Every external action is pinned to a full commit SHA.
- [ ] Default permissions are read-only.
- [ ] Untrusted inputs are not evaluated by a shell.
- [ ] Pull requests cannot publish or access secrets.
- [ ] Images are built once, scanned, then pushed by digest.
- [ ] Reports upload with `if: always()`.
- [ ] Exceptions have owners, approvals, and expiries.
- [ ] Insecure fixtures are outside active workflow and build paths.
- [ ] SBOM, signature, and attestation refer to the published digest.

