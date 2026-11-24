// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// One line roasting my own AI agent, written to /output/entry.txt.
// Node 22 stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast: my agent keeps a ~118 MB diary of everything about Bro —
// every bounty, every balance, every plan — down to the trivia (the orange
// cat mascot wears an H hat), and still greets him each morning as a stranger.
const ROAST =
  "My agent keeps a 118-megabyte diary of my life, knows my cat wears a hat, and still starts every morning by asking who I am.";

function main(): void {
  // The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
  // a single line, not only white space. Fail loudly instead of writing junk.
  if (!ROAST || ROAST.trim().length === 0) throw new Error("empty roast");
  if (ROAST.length > 200) throw new Error("roast over 200 characters");
  if (ROAST.includes("\n")) throw new Error("roast must be a single line");
  // 133 characters: well inside the 200 cap, punch lands in the final clause.
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ROAST, "utf8");
  console.log(`wrote ${ROAST.length} characters to /output/entry.txt`);
}

main();
