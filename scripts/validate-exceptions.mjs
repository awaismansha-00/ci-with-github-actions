import { readFile } from 'node:fs/promises';

const registryPath = new URL('../security/exceptions.yml', import.meta.url);
const required = ['id', 'tool', 'rule', 'path', 'owner', 'justification', 'approval', 'created', 'expires'];
const today = new Date();
today.setUTCHours(0, 0, 0, 0);

const registry = JSON.parse(await readFile(registryPath, 'utf8'));
if (registry.version !== 1 || !Array.isArray(registry.exceptions)) {
  throw new Error('security/exceptions.yml must contain version 1 and an exceptions array');
}

const ids = new Set();
for (const entry of registry.exceptions) {
  for (const field of required) {
    if (typeof entry[field] !== 'string' || entry[field].trim() === '') {
      throw new Error(`Exception ${entry.id ?? '<unknown>'} is missing ${field}`);
    }
  }

  if (ids.has(entry.id)) throw new Error(`Duplicate exception id: ${entry.id}`);
  ids.add(entry.id);

  const created = new Date(`${entry.created}T00:00:00Z`);
  const expires = new Date(`${entry.expires}T00:00:00Z`);
  if (Number.isNaN(created.valueOf()) || Number.isNaN(expires.valueOf())) {
    throw new Error(`Exception ${entry.id} contains an invalid ISO date`);
  }

  const lifetimeDays = (expires - created) / 86_400_000;
  if (lifetimeDays < 0 || lifetimeDays > 30) {
    throw new Error(`Exception ${entry.id} must expire within 30 days`);
  }
  if (expires < today) throw new Error(`Exception ${entry.id} expired on ${entry.expires}`);
  if (entry.path.startsWith('security/fixtures/insecure/')) {
    throw new Error(`Exception ${entry.id} must not replace a training-fixture exclusion`);
  }
}

console.log(`Validated ${registry.exceptions.length} security exception(s).`);

