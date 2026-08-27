# Chapter 7 — ecommerce-app-refactored

This is what you'd get if you mechanically applied this chapter's own
"Refactoring the Architecture" file tree and its Senior Engineer Code
Review Simulation to `../ecommerce-app-legacy`, the pre-audit project
also included in this folder. It sits between the two: `ecommerce-app`
is the real, fully-built companion app; `ecommerce-app-legacy` is the
flawed starting point the chapter's audit is performed against; this is
the intermediate state the chapter's own prescribed fixes produce,
stopping exactly where the chapter stops (no additions beyond what the
text actually describes).

## Running it

```bash
npm install
npm run dev
```

## What changed, mapped to the chapter

**Refactoring the Architecture's updated file tree.** Components moved
from a flat `components/` folder into `components/ui/`,
`components/products/`, and `components/cart/`, matching the chapter's
"Updated structure" diagram exactly. `stores/cartStore.js` stayed where
the diagram puts it.

**`components/ui/BaseButton.vue` and `BaseCard.vue`.** New shared UI
components, per "Component Reuse Strategies": each accepts
configuration through props, communicates outward through events, and
knows nothing about products or the cart. `ProductCard.vue` and
`CartSummary.vue` now wrap them instead of hand-rolling their own
button and card markup.

**`composables/useCart.js`.** The chapter's "Business Logic Mixed with
UI" fix, named directly in the text: "This composable could manage
cart operations such as: adding items, removing items, calculating
totals." In `ecommerce-app-legacy` that logic was duplicated between
`ProductList.vue` (add) and `CartSummary.vue` (remove, total); both now
call this one file, which itself wraps the still-present
`stores/cartStore.js` ref.

**`composables/useProducts.js` and the Senior Engineer Code Review
Simulation.** `ProductList.vue` now calls `useProducts()` instead of
fetching inline (finding #1, "API Logic in the Component"), and gets
back `{ products, loading, error }`, rendering the `v-if="loading"` /
`v-if="error"` branches the "Improved Version" code sample shows
(finding #2, "Missing Loading and Error States"). Finding #3, "Business
Logic Mixed with UI," is the same fix as `useCart.js` above.

**`components/products/ProductFilters.vue`.** The chapter's
"Component Responsibilities" section names this file as the fix for an
`ProductList.vue` that's started "handling filtering, sorting,
pagination, and API requests," without specifying what the filtering
does. The mock catalog's one filterable attribute is `category`, so
that's what this implements: a `v-model` category selector that
`ProductList.vue` reads to filter its own `products`. Sorting and
pagination aren't implemented since the chapter doesn't describe them
being added here (a separate `ProductPagination.vue` is only mentioned
as a hypothetical, not part of the Refactored tree).

## Judgment calls worth flagging

- **Plain JavaScript, not TypeScript.** Same call as
  `ecommerce-app-legacy`, for the same reason: the chapter's own file
  tree and code samples use `.js` (`useCart.js`, `cartStore.js`), so
  this stays JS for a clean, diffable before/after pair. Say the word
  and both can be redone in TypeScript to match the real `ecommerce-app`.
- **`src/data/products.js` isn't in the chapter's Refactored tree.**
  That tree also omits `main.js`, `App.vue`, and `style.css`, so it
  reads as showing the reorganized folders, not a complete file list.
  The mock catalog isn't something the chapter's audit asks to change,
  so it's carried over unchanged from `ecommerce-app-legacy`.
- **`ProductFilters.vue`'s category-filter behavior is invented within
  the gap the chapter leaves.** The file's existence and its reason for
  existing (splitting responsibilities out of `ProductList.vue`) are
  both directly from the text; the specific filter it offers is the
  most defensible fill-in given the mock data, not a described
  requirement.
- **No `ProductPagination.vue`, virtualized lists, or code splitting.**
  All three are named in "Scaling Applications" and "Component
  Responsibilities" as things a growing app *might* need, not as fixes
  this chapter's refactor actually applies to ShopVue. Six mock
  products don't warrant them, and adding them here would go beyond
  what "the codebase we'd get from following the chapter" means.
