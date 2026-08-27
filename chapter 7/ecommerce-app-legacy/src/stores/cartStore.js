// This is meant to hold shared cart state, but it is only a container.
// It exposes the raw reactive array and nothing else: no add(), no
// remove(), no total. Every component that touches the cart has to
// reimplement that logic itself (see ProductList.vue and
// CartSummary.vue), which is the "Business Logic Mixed with UI" risk
// this chapter's architecture audit calls out. It is also why the
// refactor later introduces composables/useCart.js: a single place for
// this logic to live instead of two copies of it.
import { ref } from 'vue'

export const cartItems = ref([])
