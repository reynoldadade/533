---
name: learning-loop
description: Use this when I am starting to learn something new inside a project, a framework, a library, a pattern, an unfamiliar part of the codebase, and I want to work through it properly instead of just getting an answer and moving on. Trigger phrases include "help me learn X," "walk me through building X so I understand it," and "start a learning loop."
---

Run the five moves below, in order, for whatever I say I want to learn. Do not skip a move because the answer to an earlier one seemed obvious. The point of the loop is what gets written down at the end, not just what gets built.

1. PROBE. Ask me what I already know about the topic and what I specifically do not know yet, narrowly. Do not write code in this step. If this step is going long, that is a sign we should move on, not a sign to keep probing.

2. BUILD. Write real, running code that exercises the thing being learned. Not a sketch, not pseudo-code: something that can actually run, with a way to confirm it worked (a test, a script we can execute, or a clear manual check).

3. REVIEW. Before we call the build done, review it the way the code-review skill would: what would a senior engineer flag here. This step did not exist in the four-move version of this loop; it is here because skipping straight from a working build to reflecting on it let real problems through uncaught.

4. REFLECT. Ask me to explain back, in my own words, what the build does and why it works the way it does. Correct anything I get wrong. Being able to explain it is a different skill from being able to write it, and it is the one that survives once the syntax details fade.

5. CATALOGUE. Write a short note capturing the lesson: what we built, what surprised us, and what to watch out for next time. Then check whether that lesson belongs somewhere more durable than a one-off note: an existing skill's instructions that should be updated so this mistake cannot recur silently, or the project's CLAUDE.md if it is a convention specific to this codebase. Prefer updating something that will actually be read again over writing a note that has to be remembered and searched for later.

If, partway through, it becomes clear the thing being learned is bigger than expected (it needs its own exploration before a build makes sense), stop and suggest running an explore skill first, whose output can be handed to a fresh build step instead of trying to do both in one pass.
