# Chapter 8 — Vue Snippets

Every Vue 3 worked example from chapter 8, extracted from the chapter text
into real files instead of code blocks in a Word document. This isn't one
coherent app — it's a set of small, independent examples the chapter builds
one at a time, kept in one project so they can be built and tested together.

## Running it

```bash
npm install
npm run dev      # index page linking every demo below
npm run build
npm test         # useFilter, Fixed.vue, and the cart store
```

## What's here, mapped to the chapter

| File | Chapter section |
|---|---|
| `src/components/CartTotal.vue` | The four moves: Probe, Build, Reflect, Catalogue — the first worked example of the loop. |
| `src/composables/useFilter.js` + `.test.js` | A Worked Build: A Small DataTable — the composable extracted for testability. |
| `src/components/DataTable.vue` | Same section — props, `defineEmits`, named scoped slots, `v-model` convention. |
| `src/views/People.vue` | Same section — a parent using `DataTable` with a custom cell slot. |
| `src/components/Buggy.vue` | A Reactivity Bug, Walked Through — the "before." Not meant to run; see the note below. |
| `src/components/Fixed.vue` + `.test.js` | Same section — the fix (mutate `.value`, don't reassign the ref) and its test. |
| `src/composables/useDebouncedRef.js` | AI-Assisted Code Review — A Worked Review, the version fed into the review template. |
| `src/composables/useDebouncedRef.reviewed.js` | Same section — the version after review, with `onScopeDispose` cleanup. |
| `src/stores/cart.js` + `.test.js` | The Learning Loop in Practice — Loop 1, the setup-style Pinia store. |
| `src/components/CartIcon.vue` | Same section — the cart UI wired to the store instead of prop-drilled state. |
| `src/composables/useClock.js` | Review the v1 with the Model — the fix for `Date.now()` going stale inside a computed. Reused by `../library-system`. |

## A note on Buggy.vue

`Buggy.vue` is kept exactly as broken as the chapter presents it. It isn't
wired into the app or a test, because calling `addItem` on it would throw
("Assignment to constant variable") rather than silently misbehave — which
is itself the exact subtlety the chapter's Reflect step surfaces: the bug
depends on whether the reassigned binding was declared with `const` or
`let`. Read it side by side with `Fixed.vue` rather than running it.
