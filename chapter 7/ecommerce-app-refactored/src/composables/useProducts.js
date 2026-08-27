// Rewritten to match the "Improved Version" of the Senior Engineer Code
// Review Simulation: `const { products, loading, error } = useProducts()`.
// ecommerce-app-legacy's useProducts.js only ever exposed products and
// fetchProducts, and ProductList.vue there didn't even call it (that
// was finding #1, "API Logic in the Component"). Here the component
// actually uses this file, and it now tracks the two states finding
// #2 said were missing: loading and error.
import { ref } from 'vue'
import { products as seedProducts } from '../data/products'

export function useProducts() {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  async function fetchProducts() {
    loading.value = true
    error.value = null
    try {
      products.value = await new Promise((resolve) => {
        setTimeout(() => resolve(seedProducts), 300)
      })
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  fetchProducts()

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
}
