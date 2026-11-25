import { mkdirSync, writeFileSync } from "node:fs";

const ADVICE =
  "My grandfather, hands black with engine grease, told me: never trust a man who will not get his hands dirty, then handed me the wrench.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ADVICE, "utf8");
