// The composable this chapter's "Business Logic Mixed with UI" finding
// calls for: "This composable could manage cart operations such as:
// adding items, removing items, calculating totals." In
// ecommerce-app-legacy that logic was duplicated: add-to-cart lived in
// ProductList.vue and remove/total lived separately in CartSummary.vue,
// both reaching into the bare cartStore array directly. Both now go
// through this single file instead. cartStore.js still holds the
// actual reactive state (it stays in the Refactored file tree), this
// just wraps it so nothing outside this file has to know it's a plain
// ref.
import { computed } from 'vue'
import { cartItems } from '../stores/cartStore'

export function useCart() {
  function addItem(product) {
    const existing = cartItems.value.find((item) => item.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cartItems.value.push({ product, quantity: 1 })
    }
  }

  function removeItem(productId) {
    const index = cartItems.value.findIndex((item) => item.product.id === productId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const total = computed(() => {
    let sum = 0
    for (const item of cartItems.value) {
      sum += item.product.price * item.quantity
    }
    return sum
  })

  return {
    cartItems,
    addItem,
    removeItem,
    total,
  }
}
