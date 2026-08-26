# Chapter 6 — TaskBoard

Companion code for the TaskBoard example that runs through most of
Chapter 6 ("Debugging and Improving Vue Applications with AI").

## Running it

```bash
npm install
npm run dev
```

`src/App.vue` mounts the base flawed `TaskBoard.vue`, so `npm run dev`
shows the starting point described in "The Base Application
(Intentionally Imperfect)."

## Files, by chapter section

- `src/components/TaskBoard.vue` — "The Base Application (Intentionally
  Imperfect)." Deliberately flawed: direct mutation, an inefficient
  computed property, a loosely typed prop.
- `src/components/TaskItem.vue` — "Avoiding Unnecessary Re-Renders."
  Extracted row component that emits `toggle`/`delete` instead of
  mutating state itself.
- `src/composables/useTasks.js` — "Refactoring Code with AI." Pulls
  `TaskBoard.vue`'s state and mutations into a composable.
- `src/components/TaskBoardComposition.vue` — "Composition API versus
  Options API." The chapter's `<script setup>` conversion; this file
  adds a template (noted in a comment at the top) so it actually runs,
  since the book only printed the script block.

These files are kept independent, matching how the chapter introduces
them one improvement at a time rather than as one finished app.
