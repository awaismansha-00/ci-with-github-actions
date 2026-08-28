# Lab 03 — Contexts and outputs

Run Lab 03 and open the graph. The first job writes a shortened commit SHA to
`$GITHUB_OUTPUT`; the second reads it through `needs`.

**Success:** `consume` waits for `produce` and prints the exact seven-character
value without using an artifact.

