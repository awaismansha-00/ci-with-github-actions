# 29 — OWASP ZAP DAST against a local application

Dynamic application security testing sends requests to a running application and
observes responses. It can find missing headers, unsafe reflection, and runtime
behaviors that static analysis misses.

Production scans create a private Docker network, start the exact candidate
image, and give ZAP the fixed hostname `demo-api`. The workflow accepts no target
input and cannot be pointed at an external system. High-risk alerts block;
medium and lower alerts remain reports.

The insecure fixture is a tiny loopback-only server with unsafe reflection. It
is outside the application build and exists only to make scanner behavior
visible.

Run **Lab 19** and expect findings. Never adapt this lab to scan a target you do
not own and have explicit permission to test.

