// Worst Fix Ever: Funniest Commit Message
// Writes a single commit-message line (<=100 chars) to /output/entry.txt:
// a bug fix that made everything worse, in the voice of a tired engineer.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: silenced the error by deleting the code that reported it";

// The gate allows 1-100 chars of UTF-8 text; refuse to write anything
// outside it rather than emit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 100 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-100 gate`);
}

const outPath = process.argv[2] || "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
