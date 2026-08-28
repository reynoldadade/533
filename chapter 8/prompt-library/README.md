# Chapter 8 — Prompt Library

The five reusable prompt templates from "Prompt Template Creation" and
"Mini-Project: Prompt a Library System," plus the loader script from
"Loading Templates Programmatically," extracted from the chapter text into
real files instead of code blocks in a Word document.

This mirrors the `~/learning/` structure the chapter itself recommends for
your own storage layer: `prompts/` holds the templates, `scripts/` holds the
loader that fills them in.

## Templates

| File | Used in |
|---|---|
| `prompts/concept-explainer.md` | Probe — pushes the model toward a structured explanation instead of a code dump. |
| `prompts/code-generator.md` | Build — the workhorse template for writing new code. |
| `prompts/refactor.md` | Refactoring and Debugging — encodes "smallest change first." |
| `prompts/code-review.md` | AI-Assisted Code Review — the review template used against the debounced-ref composable. |
| `prompts/domain-model.md` | Mini-Project: Prompt a Library System — the domain-modelling prompt that produced the Book/Member/Loan schema. |

## Running the loader

```bash
npm test              # runs scripts/load-template.test.js
node scripts/load-template.js concept-explainer stack="Vue 3.5" concept="provide/inject"
```

## Two small fixes made while extracting this

The book's `load-template.js` has two bugs that only surface once this
project sits under a path with a space in it, exactly like `chapter 8` does
in this codebase:

1. `TEMPLATES_DIR` was built from `new URL(...).pathname`, which is
   percent-encoded (a space becomes `%20`). Reading `.../chapter%208/...`
   as a literal path fails. Fixed by decoding it with `fileURLToPath`
   instead.
2. The CLI entry-point check compared `import.meta.url` (also
   percent-encoded) against `process.argv[1]` (a raw path), so it silently
   never matched and the script printed nothing when run directly. Fixed by
   decoding `import.meta.url` before comparing.

Both are noted inline in `scripts/load-template.js`. Neither changes what
the template loader does, only whether it actually runs from this folder.
