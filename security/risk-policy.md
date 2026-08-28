# Risk-based CI security policy

## Blocking rules

| Area | Blocking policy | Report-only policy |
| --- | --- | --- |
| Secrets | Every unsuppressed detection | None |
| Workflow security | Mutable action refs, unsafe privileged PR patterns, script injection, excessive permissions | Advisory hardening |
| SAST | High and critical findings | Medium and lower |
| Dependencies/images | Critical findings; high findings with a fix | Medium/low and unfixed high findings |
| IaC | Privileged/root workloads, public exposure, embedded secrets, missing encryption, wildcard identity permissions | Other recommendations |
| DAST | High-risk alerts | Medium and lower |
| Licenses | None by default | Full inventory |

Reports must be uploaded with `if: always()` even when a blocking command exits
non-zero. A workflow must not disguise a security gate with `continue-on-error`,
`|| true`, or a scanner's success exit code.

## Exceptions

`exceptions.yml` is the canonical exception registry. An exception requires a
tool, rule, path, owner, justification, approval reference, creation date, and
expiry date. Exceptions may last at most 30 days. The validation script rejects
expired, malformed, overlong, or duplicate records.

Permanent exclusions are allowed only for the clearly marked training fixtures.
They cannot match application or production workflow paths.

