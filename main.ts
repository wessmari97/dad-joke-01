import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I brought a ladder to the bar because I heard the drinks were on the house.";
// A proper dad joke: clean pun, lands on the last words, reads aloud in one breath.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`dad joke must be 1-200 characters, got ${JOKE.length}`);
}

writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
