import { ref, computed } from 'vue'
import type { Product } from '@/types/global.types'
import { getProducts } from '@/services/mockData'

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const selectedCategory = ref<string>('all')
const searchQuery = ref('')

export function useProducts() {
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await getProducts()
      products.value = data
    } catch (err) {
      error.value = 'Failed to load products'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const filteredProducts = computed(() => {
    let result = products.value

    // Filter by category
    if (selectedCategory.value !== 'all') {
      result = result.filter((p) => p.category === selectedCategory.value)
    }

    // Filter by search query
    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    return result
  })

  const categories = computed(() => {
    const cats = new Set(products.value.map((p) => p.category))
    return ['all', ...Array.from(cats)]
  })

  const setCategory = (category: string) => {
    selectedCategory.value = category
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  return {
    products: filteredProducts,
    allProducts: products,
    loading,
    error,
    categories,
    selectedCategory,
    searchQuery,
    fetchProducts,
    setCategory,
    setSearchQuery
  }
}
