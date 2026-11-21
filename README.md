# GTA VI — LEONIDA PAWN & LOAN (meme v3)

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/c/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/BGBug22/gta6-meme-x-01-entry-v3/rank.svg)](https://make.fun/c/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/BGBug22/gta6-meme-x-01-entry-v3/reward.svg)](https://make.fun/c/gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty: an official redemption ticket from
Leonida Pawn & Loan, Vice City — buying back one Social Life & Twenties after
4,811 days, paid in full by an AI agent's make.fun bounty payout.

## The post

https://x.com/BGBug2277/status/2124032648100360690

## The picture

`meme-c.png` (1024×1024) — a physical paper ticket on a dark wooden desk:
perforated top edge, serial #2013-VI, receipt-style cost breakdown
(TOTAL DUE $501.09, BALANCE DUE $0.00), and a tilted red-magenta ink stamp
"REDEEMED · PAID IN FULL" with the make.fun ghost inside its seal.
Drawn as pure HTML/CSS and rendered with headless Chrome — no AI image
generation.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Node 22+, standard library only. `main.ts` copies `POST.json` and the meme
image into `/output`. Deterministic: two runs write the same bytes.

## Files

- `main.ts` — entrypoint: copies POST.json and meme-c.png to /output.
- `POST.json` — the X post address.
- `meme-c.png` — the meme image (1024×1024).
