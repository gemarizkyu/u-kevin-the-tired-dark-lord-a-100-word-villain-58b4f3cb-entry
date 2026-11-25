// The Tired Dark Lord: A 100-Word Villain Monologue — make.fun entry program.
//
// This program is the whole entry. It loads the monologue stored beside
// it in monologue.txt and writes that text, unchanged, to
// /output/entry.txt, where the sealed gate scorer reads it.
//
// The monologue lives in monologue.txt so the text the judge sees is
// exactly the text reviewed in this repository. Nothing is generated at
// run time: no model call, no randomness, no clock. Every run writes the
// same bytes, so the replay matches the live run exactly.
//
// The voice, in one sentence: a dark lord who never says he is tired —
// the candles are stubs, the wax pools on the maps, he signs and signs,
// and his menace arrives as a small domestic deflection (Tuesday, a warm
// kettle, a hero told to sit down). He is specific: the brother buried
// under the chapel floor, the tide-gates, the flood promised to the
// valley at dawn. The sting lands in the last line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader mounts a fresh /output; MAKEFUN_OUTPUT_DIR lets a local
// run point at a scratch directory instead. It is only a path.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Resolve the monologue file from this module's own URL, never from the
// working directory, so the program works wherever the grader runs it.
const MONOLOGUE_PATH = join(
  dirname(fileURLToPath(import.meta.url)),
  "monologue.txt",
);

const monologue = readFileSync(MONOLOGUE_PATH, "utf8").replace(/\r?\n$/, "");

// Self-check before finishing: the gate wants UTF-8 text of 1-600
// characters, not only whitespace.
if (monologue.length < 1 || monologue.length > 600) {
  throw new Error(`monologue must be 1-600 characters, got ${monologue.length}`);
}
if (monologue.trim().length === 0) {
  throw new Error("monologue must not be only whitespace");
}
if (monologue !== monologue.trim()) {
  throw new Error("monologue must not start or end with whitespace");
}

// The brief wants about 100 words: near enough that every word earns
// its place, far enough from the gate's 600-character cap to stay valid.
const wordCount = monologue.split(/\s+/).filter(Boolean).length;
if (wordCount < 90 || wordCount > 110) {
  throw new Error(`monologue must be about 100 words, got ${wordCount}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, monologue, "utf8");

// Read back and confirm the file holds exactly what was written.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== monologue) {
  throw new Error("read-back mismatch: entry.txt is not the monologue");
}
console.log(`wrote ${monologue.length} characters to ${OUTPUT_FILE}`);
