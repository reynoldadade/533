// This composable exists in the project, but ProductList.vue does not
// use it, it fetches inline instead. That gap is exactly the "API
// Logic in the Component" finding from this chapter's Senior Engineer
// Code Review Simulation: whoever wrote ProductList.vue did not know
// (or did not use) this file.
import { ref } from 'vue'
import { products } from '../data/products'

export function useProducts() {
  const productList = ref([])

  async function fetchProducts() {
    productList.value = await new Promise((resolve) => {
      setTimeout(() => resolve(products), 300)
    })
  }

  return {
    products: productList,
    fetchProducts,
  }
}
