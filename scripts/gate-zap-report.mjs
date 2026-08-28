import { readFile } from "node:fs/promises";

const reportPath = process.argv[2];
if (!reportPath) throw new Error("Usage: node scripts/gate-zap-report.mjs REPORT.json");

const report = JSON.parse(await readFile(reportPath, "utf8"));
const alerts = (report.site ?? []).flatMap((site) => site.alerts ?? []);
const high = alerts.filter((alert) => Number(alert.riskcode) >= 3);

console.log(`ZAP reported ${alerts.length} alert(s), including ${high.length} high-risk alert(s).`);
for (const alert of high) console.error(`HIGH: ${alert.alert} (${alert.pluginid})`);
if (high.length > 0) process.exitCode = 1;

