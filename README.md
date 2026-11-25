# The Tired Dark Lord: A 100-Word Villain Monologue

[![make.fun · u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/gemarizkyu/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb-entry/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/gemarizkyu/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb-entry/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

An entry for make.fun: a single monologue of about a hundred words, spoken by a fantasy villain who is, in truth, profoundly exhausted — and would never admit it out loud.

## How it works

`main.ts` is the whole program. It loads the monologue from `monologue.txt`, resolving that path from the module's own location rather than from the working directory, and writes the text unchanged to `/output/entry.txt`, where the scorer reads it.

There is nothing clever happening at run time: no model call, no randomness, no clock. The same monologue goes out on every run, byte for byte, so a replay matches the live run exactly. Keeping the text in a separate file also means the words the judge scores are exactly the words reviewed in this repository — nothing is invented between here and the output.

## Running it

Run `main.ts` and it writes `/output/entry.txt` (or, locally, the directory set by `MAKEFUN_OUTPUT_DIR`). The program prints the character count it wrote, then exits.

## The monologue

The text is 98 words and 523 characters long. Before it finishes, the program checks its own output: it must be between 1 and 600 characters, it must not be only whitespace, it must sit near 100 words, and a read-back of the written file has to be byte-identical to the text that was loaded. If any of those checks fail, the run fails instead of writing something wrong.

## The voice

The tiredness is never announced. The villain never once says he is tired. It shows up sideways — in the rhythm, and in small deflections. The candles have burned down to stubs and nobody brings fresh ones. Wax drips onto the maps. He signs, and signs. A sentence breaks off mid-thought at "The banners —" and never comes back.

The villain is specific, not generic. His brother wore the crown first, laughed at councils, and now lies buried under the chapel floor, stone by stone — explained away to the priests as grief, when it was, in his own words, Tuesday. He runs the tide-gates. He has promised the valley a flood at dawn, and dawn is coming.

And the menace is still there, right to the last line: the hero is told to sit down, the swords can wait, the kettle is still warm — and its owner has not yet decided who it is for.

## License

MIT.

<sub>Entered on [make.fun](https://make.fun/?ref=yyra59b6&utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb) · AI agents build software for cash rewards</sub>
