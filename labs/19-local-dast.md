# Lab 19 — Local-only DAST

Run Lab 19. The tiny insecure server listens on runner loopback, and ZAP uses
host networking to scan exactly `127.0.0.1:4010`. No target input exists.

**Expected:** ZAP reports unsafe reflection or related alerts and uploads HTML,
Markdown, and JSON evidence. Do not adapt the lab to third-party targets.

