# 27 — SBOM generation with Anchore/Syft

A software bill of materials lists components and relationships in a build.
This repository creates SPDX JSON for both application source and the exact
container image.

An SBOM is evidence, not a vulnerability scan or signature. It helps incident
response answer “does this digest contain component X?” and lets downstream
tools rescan historical releases when new advisories appear.

Keep SBOMs tied to commit, workflow run, and image digest. Upload them with
release evidence and retain them longer than transient logs. Inspect unexpected
packages; build tools should not appear in the production image inventory.

Run **Lab 17**, compare source and image SBOMs, and locate Express and the base
image packages.

