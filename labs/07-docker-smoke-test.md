# Lab 07 — Docker smoke test

Run Lab 07 and inspect the image build, loopback port binding, readiness loop,
and unconditional cleanup.

**Success:** `/health` returns `{"status":"ok"}` and the container is removed
even if readiness fails.

