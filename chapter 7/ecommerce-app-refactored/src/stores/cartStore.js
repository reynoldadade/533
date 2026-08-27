// Still just the reactive container the Refactored file tree keeps it
// as; the difference from ecommerce-app-legacy is that nothing outside
// composables/useCart.js imports from here anymore. Components go
// through useCart() instead of touching this ref directly.
import { ref } from 'vue'

export const cartItems = ref([])
