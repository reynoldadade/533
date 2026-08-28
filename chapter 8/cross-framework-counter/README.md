# Chapter 8 — A Counter in Five Frameworks

From "Applying the Model Across Frameworks" — the side-by-side comparison
used to show that the same mental model (a signal-like primitive for state,
a derivation primitive for computed values, a callback for events, a
template for output) expresses itself differently in each framework.

These five files are reference material, not a buildable project. Wiring up
Vue, React, Svelte, Solid, and Angular tooling side by side in one place
would need five separate toolchains for one five-line comparison — that
would obscure the point of the section rather than support it. Read them
side by side instead:

| File | Framework |
|---|---|
| `Counter.vue` | Vue 3, Composition API |
| `Counter.jsx` | React 19 |
| `Counter.svelte` | Svelte 5, runes |
| `Counter.solid.jsx` | SolidJS |
| `counter.component.ts` | Angular 17+, signals |
