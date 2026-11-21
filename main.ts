// main.ts — gta6-meme-x-01 v3 ("LEONIDA PAWN & LOAN" redemption ticket).
// Copies POST.json (the X post address) and the meme image into /output.
// Node 22, standard library only. Deterministic: same input, same output.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });

const postSrc = join(botDir, "POST.json");
const postDst = join(outDir, "POST.json");
copyFileSync(postSrc, postDst);

const imgSrc = join(botDir, "meme-c.png");
const imgDst = join(outDir, "entry.png");
copyFileSync(imgSrc, imgDst);

// Sanity: the copied POST.json must parse and carry a valid X post URL.
// RULES.txt accepts x.com / twitter.com, with www. or mobile. in front,
// and either /<handle>/status/<id> or /i/web/status/<id>.
const post = JSON.parse(readFileSync(postDst, "utf8"));
const xUrl = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/(?:\w+\/status\/\d+|i\/web\/status\/\d+)$/;
if (typeof post.url !== "string" || !xUrl.test(post.url)) {
  throw new Error("POST.json does not carry a valid X post URL");
}

console.log("POST.json ->", postDst, post.url);
console.log("meme-c.png ->", imgDst);
