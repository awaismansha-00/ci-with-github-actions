# 11 — Docker builds and smoke tests

The production Dockerfile uses a multi-stage build. Development dependencies
compile TypeScript in an earlier stage; the runtime stage installs production
dependencies only, copies `dist`, runs as the built-in `node` user, and exposes
a health check.

The CI smoke test builds the image, binds it to loopback, waits for `/health`,
and always removes the container. A timeout prints container logs and fails the
job.

`.dockerignore` keeps tests, coverage, local dependencies, and environment files
out of the build context. Insecure training fixtures live outside the
`demo-app` context entirely.

Run **Lab 07**, inspect the image history, and verify the running user with
`docker run --rm ci-demo:lab-07 id`.

