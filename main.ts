// Writes the entry: one line of at most 100 characters that sums up a week.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "Taught Mom to screenshot on Monday. By Friday she'd sent me 214 screenshots of her home screen.";
const limit = 100;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
