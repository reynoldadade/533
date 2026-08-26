# Chapter 6 — Kanban Board (Solution)

This is a fixed version of the mini project in `../KanbanBoard`, the
intentionally messy starting point from "Mini Project: Debug and
Refactor a Kanban Board." Keep both folders: `KanbanBoard` is what the
reader starts from, this one is a reference to compare against, not a
replacement for doing the exercise.

## Running it

```bash
npm install
npm run dev
```

## What changed, mapped to the chapter's "What Students Should Improve?" list

**Fix Prop Mutation.** The original `KanbanBoard.vue` mutated the
`columns` prop directly (`column.tasks.push(...)`, reassigning
`source.tasks`). Nothing here mutates a prop. `task`, `column`, and
`allColumns` are read-only everywhere; every change is requested with
`emit()` and applied inside `useKanban()` by replacing the columns array
immutably (`.map()` / `.filter()`, not `.push()`).

**Extract Shared State.** `src/composables/useKanban.js` owns the
`columns` ref as a reactive singleton, the same pattern `useCart` used
in chapter 5. `App.vue` no longer seeds or holds this data; `KanbanBoard`
reads it straight from the composable instead of receiving it as a prop.

**Improve Event Structure.** Events crossing the `KanbanColumn` to
`KanbanBoard` boundary are now `task:add` and `task:move` instead of the
original `add-task` and `move-task`. (The chapter also lists
`task:update`; there's no edit-in-place feature in this exercise to
attach it to, so it's left as a natural extension point rather than
invented for its own sake.)

**Add Proper Prop Validation.** Every prop on every component now has a
`type` and `required: true` (`column: Object`, `allColumns: Array`,
`task: Object`), replacing the original's untyped `props: ["column"]`
style arrays.

**Split Responsibilities.** `KanbanColumn.vue` and `KanbanTask.vue` hold
only UI wiring now: reading props, emitting events, and local input
state (`newTask`, `selected`). All task and column mutation logic lives
in `useKanban.js`.

## Two smaller fixes along the way

- `KanbanColumn.vue`'s task list was missing `:key="task.id"` on its
  `v-for`; it's there now, matching the `:key="column.id"` fix in
  `KanbanBoard.vue`.
- `KanbanTask.vue`'s move dropdown hardcoded three `<option>` elements
  with `value="1"`, `"2"`, `"3"`, silently assuming the app would always
  have exactly those three column IDs ("duplicated column IDs" in the
  chapter's problem list). It now renders `<option>` from the real
  `allColumns` prop, so it stays correct if columns are ever added,
  removed, or renumbered.
