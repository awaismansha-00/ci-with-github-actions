# Contributing

1. Create a branch from `dev`.
2. Keep intentionally insecure material under `security/fixtures/insecure/`.
3. Run `npm run validate` at the repository root.
4. Run `npm ci && npm run check` in `demo-app/`.
5. Build the image when Docker is available.
6. Open a focused pull request and explain changes to gates or permissions.

External actions must use a verified full commit SHA with an inline version
comment. New security exclusions require a matching, expiring entry in
`security/exceptions.yml`; lab fixtures use the permanent training boundary
instead.

Do not commit real credentials, copied tokens, private vulnerability reports,
or scanner output that contains confidential source data.
