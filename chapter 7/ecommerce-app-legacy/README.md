# ShopVue (pre-audit) — Chapter 7 reference

This is a reverse engineered "before" version of `../ecommerce-app`,
rebuilt to match every problem chapter 7 ("Predicting Failure Points"
onward, and especially "AI-Led Architecture Audit of ShopVue" and
"Senior Engineer Code Review Simulation") describes. The real
`ecommerce-app` already has all of this fixed; this project exists so
the chapter's before/after narrative has real, runnable code on both
sides instead of only the after state.

## Running it

```bash
npm install
npm run dev
```

## Structure

Matches the chapter's own "Initial Version" file tree:

```
src/
├── components/
│   ├── ProductCard.vue
│   ├── ProductList.vue
│   └── CartSummary.vue
├── pages/
│   ├── HomePage.vue
│   └── CartPage.vue
├── stores/
│   └── cartStore.js
├── composables/
│   └── useProducts.js
├── data/
│   └── products.js
└── router/
    └── index.js
```

No `components/ui/`, no `features/`, no layout components: those all
arrive later in the book, and their absence here is deliberate.

## Every problem, and where it lives

**Product Rendering at Scale.** `ProductList.vue` renders every product
in one `v-for` with no pagination, infinite scroll, or virtualization,
exactly the risk described in "Product Rendering at Scale."

**API Logic in the Component.** `ProductList.vue` fetches inline inside
`onMounted`. `composables/useProducts.js` exists and does the same job
properly, but nothing imports it, the exact gap the chapter's Senior
Engineer Code Review Simulation calls out.

**Missing Loading and Error States.** `ProductList.vue`'s template
assumes the fetch always succeeds and has already finished. There's no
`v-if="loading"`, no error branch.

**Business Logic Mixed with UI.** `stores/cartStore.js` exports a bare
reactive array with no methods. `ProductList.vue` and `CartSummary.vue`
each independently reimplement "find this item in the cart" against
that raw array (add-or-increment in one file, find-and-splice in the
other), instead of sharing one `useCart.js`. This is the specific gap
the chapter's refactored architecture closes by introducing
`composables/useCart.js`.

**No shared UI library.** `ProductCard.vue` hand-rolls its own
`<button>` and card markup. There's no `BaseButton`/`BaseCard` to reuse,
matching the chapter's "poorly designed component" contrast and the
Initial Version tree's missing `components/ui/`.

**No component boundaries beyond the basics.** `ProductList.vue` owns
fetching, rendering, and cart mutation all at once, the "overloaded
component" pattern warned about in "Component Boundaries" and
"Component Responsibilities."

## One deliberate choice worth flagging

This project is plain JavaScript, not TypeScript, even though the real
`ecommerce-app` is fully typed. The chapter's own Initial Version file
names (`cartStore.js`, `useProducts.js`, `index.js`) and its
"Senior Engineer Code Review Simulation" code sample are both untyped,
so this follows that rather than inventing a TypeScript-adoption problem
the chapter never mentions. If you'd rather this match `ecommerce-app`'s
TypeScript setup exactly, that's a quick follow-up, just say so.
