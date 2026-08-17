# Chapter 4 — Vue Examples

Runnable companion project for Chapter 4 ("Reactivity Analysis & Annotated
Components"). Every component here is copied verbatim from the chapter's
Prompt / Example Output beats, organized by section so you can follow along
without retyping code.

## Running it

```bash
npm install
npm run dev
```

Open the printed local URL. Use the sidebar to switch between examples —
each one resets to fresh seed data when selected. Open your browser's
console before clicking into the Experimentation section; most of what
those experiments demonstrate only shows up there.

## Structure

- `src/examples/01-core-rule/` — `ListComponent.vue`, the chapter's original
  "Sample Code" beat (self-contained `ref()` + `computed()`).
- `src/examples/03-props-and-emitters/` — `SelectableList.vue` (props in,
  events out) plus `ParentUsageDemo.vue`, mirroring the chapter's `App.vue`
  wiring (`v-model:items`, `@selection-change`).
- `src/examples/04-annotated-components/` — the fully annotated version of
  `SelectableList.vue` produced by the chapter's annotation prompt.
- `src/examples/05-experimentation/` — the debug-instrumented baseline
  (`00-ExperimentSetup.vue`) plus one file per numbered experiment
  (`Experiment1_...` through `Experiment8_...`), each modified exactly the
  way the chapter describes (computed removed, key broken, emit removed,
  etc.) so you can click through Predict → Observe → Prompt yourself.
- `src/examples/06-mini-project/` — `ShoppingList.vue`, the chapter's final
  mini-project "Sample Output."

`src/App.vue` is just a sidebar switcher over all of the above — it isn't
part of the chapter's own code, it exists so you don't need a separate
`npm create vue@latest` per beat.
