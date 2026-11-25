// The 3AM Fridge Text — entry for make.fun bounty
// u-deysumbrella-the-3am-fridge-text-4c3e721d
//
// A smart fridge texts its owner at 3am. One line, 1-140 characters,
// written to /output/entry.txt. Deterministic: the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3am. Your 2am burrito is in here, judging you from the middle shelf. I didn't rat you out. The microwave did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
