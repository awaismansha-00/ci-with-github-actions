# Lab 11 — Secret detection

Run Lab 11. It uses the lab-only Gitleaks rule to find the synthetic marker under
the insecure boundary. Never replace it with a real credential.

**Expected:** the detection fails the job. Automatic CI passes because its
configuration permanently excludes the isolated training path.

