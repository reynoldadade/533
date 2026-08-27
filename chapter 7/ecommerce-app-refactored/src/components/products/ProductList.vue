<!--
  This is the "Improved Version" from the Senior Engineer Code Review
  Simulation, applied to the actual project rather than the chapter's
  simplified standalone example. All three findings from that section
  are addressed:

  1. API Logic in the Component -> now calls useProducts() instead of
     fetching inline.
  2. Missing Loading and Error States -> the v-if="loading" and
     v-if="error" branches below are the chapter's example almost
     verbatim.
  3. Business Logic Mixed with UI -> add-to-cart goes through
     useCart().addItem() instead of reaching into cartStore directly.

  Filtering is also pulled out into ProductFilters.vue per the
  "Component Responsibilities" section, so this component's own job
  stays limited to: get products, get the current filter, render the
  result.
-->
<template>
  <div>
    <h1>Products</h1>

    <ProductFilters v-model="selectedCategory" :categories="categories" />

    <p v-if="loading" class="state-message">Loading products...</p>

    <p v-if="error" class="state-message state-message--error">Unable to load products</p>

    <div class="product-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductFilters from './ProductFilters.vue'
import { useProducts } from '../../composables/useProducts'
import { useCart } from '../../composables/useCart'

const { products, loading, error } = useProducts()
const { addItem } = useCart()

const selectedCategory = ref('')

const categories = computed(() => [...new Set(products.value.map((product) => product.category))])

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value
  return products.value.filter((product) => product.category === selectedCategory.value)
})

function handleAddToCart(product) {
  addItem(product)
}
</script>
