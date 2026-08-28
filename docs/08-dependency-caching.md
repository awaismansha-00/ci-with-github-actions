# 08 — Dependency caching

A dependency cache improves speed; it is not a build artifact. Cache keys must
change when the lockfile changes. `actions/setup-node` can manage npm's download
cache using `cache: npm` and `cache-dependency-path`.

Do not cache `node_modules` across platforms or Node majors. Always run `npm ci`
after cache restoration: the cache accelerates downloads while the lockfile
still defines installed content.

Fork pull requests can restore suitable default-branch caches but should not be
trusted to poison privileged data. Never place secrets, credentials, generated
tokens, or private reports in a shared cache.

Run **Lab 05** twice. Compare setup duration and cache-hit annotations, then
change the lockfile on a branch and observe a different key.

