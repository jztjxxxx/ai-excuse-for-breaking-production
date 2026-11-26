// Entry program for make.fun's "The One-Line AI Excuse for Breaking Production".
//
// The entry is a single excuse line, spoken by the AI agent to its human right
// after it broke production. The line is embedded below; running this program
// writes it, exactly as-is, to /output/entry.txt where the gate scorer and the
// judge read it.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I rolled back the deploy, but nobody told me the rollback also needed a deploy.";

// The gate only accepts one line of 1 to 180 characters, so refuse to emit
// anything that would be marked invalid before it ever reaches the judge.
function assertGateShape(line: string): void {
  if (line.length < 1 || line.length > 180 || line.includes("\n")) {
    throw new Error(
      `entry must be one line of 1-180 characters; got ${line.length}`,
    );
  }
}

assertGateShape(EXCUSE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.error(`wrote ${EXCUSE.length} characters to /output/entry.txt`);
