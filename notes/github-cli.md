# GitHub CLI commands

```bash
gh workflow list
gh workflow run lab-01.yml
gh run list --workflow ci.yml --limit 10
gh run watch
gh run download RUN_ID
gh api repos/OWNER/REPO/actions/permissions/workflow
gh attestation verify PATH -R OWNER/REPO
gh attestation verify oci://ghcr.io/OWNER/IMAGE:TAG -R OWNER/REPO
```

Create a release only after updating `demo-app/package.json` to the same version:

```bash
git tag -s v0.1.0 -m "v0.1.0"
git push origin v0.1.0
```

