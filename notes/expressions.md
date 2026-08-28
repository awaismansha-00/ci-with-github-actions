# Expressions and contexts cheat sheet

| Need | Expression |
| --- | --- |
| Dev branch push | `github.event_name == 'push' && github.ref == 'refs/heads/dev'` |
| Trusted tag | `startsWith(github.ref, 'refs/tags/v')` |
| Matrix value | `matrix.node-version` |
| Changed lockfile hash | `hashFiles('demo-app/package-lock.json')` |
| Previous job output | `needs.build.outputs.image-digest` |
| Manual input | `inputs.confirm_publish` |

Never interpolate untrusted event fields directly into `run:`. Copy them into an
environment variable and quote that variable in the shell.
