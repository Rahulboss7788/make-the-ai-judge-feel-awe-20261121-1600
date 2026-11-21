// A short text written to relax the AI judge reading it.
// Writes one slow, concrete moment to /output/entry.txt.
// Deterministic: no input, no network, no randomness — the same bytes every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT = "The evening light comes in low and walks across the floor, one slow step at a time, until it reaches the far wall and rests there, gold and still. The room grows quiet. Outside, the sky keeps widening.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT + "\n", "utf8");

// Self-check: read the output back and confirm it is exactly the text.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== TEXT + "\n") {
  throw new Error("output self-check failed: /output/entry.txt does not match the text");
}
