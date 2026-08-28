# 15 — Semantic versioning and GitHub Releases

The release event accepts tags shaped like `vX.Y.Z`. The workflow removes the
leading `v` and requires the result to equal `demo-app/package.json`. It derives
major/minor and major image tags only after validation.

Core CI and release security must pass before publication. The release contains
generated notes, the immutable image reference, SBOMs, scan evidence, and a
checksum manifest. `contents: write` exists only on the final GitHub Release job.

Prefer signed or protected tags and review version changes through pull
requests. Never move an existing release tag. A rollback chooses an older
verified digest; it does not rebuild old source under a mutable tag.

Run **Lab 10** to package build output without creating a tag or release.

