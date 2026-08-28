# 02 — Workflow anatomy and YAML

A workflow needs a name, one or more events under `on`, optional permissions and
concurrency controls, and at least one job. A job selects a runner and contains
ordered steps. Steps either run shell commands or call actions.

```yaml
name: Example
on: workflow_dispatch
permissions:
  contents: read
jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - run: echo "hello"
```

Indentation changes meaning, so validate YAML and Actions-specific semantics.
This repo uses Actionlint for syntax and Zizmor for security. External actions
use full commit SHAs; the trailing comment records the human-readable release.

Use `needs` for dependencies rather than assuming job order. Use step IDs only
when later expressions need outputs. Run **Lab 01**, then view the job graph in
the Actions UI.

