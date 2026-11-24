import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "My son asked me what a dad joke is. I said, 'Hi, What-A-Dad-Joke-Is. I'm Dad.'";
// One joke, told out loud: the classic "Hi X, I'm Dad" turn, aimed at the groan.

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`dad joke must be 1-200 characters, got ${JOKE.length}`);
}

writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
