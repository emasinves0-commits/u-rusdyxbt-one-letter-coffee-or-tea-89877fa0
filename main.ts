// One Letter: Coffee or Tea — entry "A" (coffee).
//
// The bounty asks for exactly one letter: A for coffee, B for tea.
// Coffee wins on vividness — the rush, the ritual, the "don't talk to me
// before my coffee" energy packs more life into a single letter than tea's
// calm, cozy quiet ever could. So this entry writes a single "A".

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The env var may be set but empty; fall back to /output in that case too.
const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outDir, { recursive: true });
// Exactly one byte, "A" — no trailing newline, so the gate sees one letter.
writeFileSync(join(outDir, "entry.txt"), "A", "utf8");
