<template>
  <div class="products-view">
    <div class="container">
      <div class="products-view__header">
        <h1 class="products-view__title">Our Products</h1>
        <BaseInput
          v-model="searchQuery"
          type="search"
          placeholder="Search products..."
          class="products-view__search"
        />
      </div>

        <div class="products-view__filters">
          <button
            v-for="category in categories"
            :key="category"
            :class="['filter-btn', { 'filter-btn--active': selectedCategory === category }]"
            @click="setCategory(category)"
          >
            {{ categoryLabel(category) }}
          </button>
        </div>

        <div v-if="loading" class="products-view__loading">
          <p>Loading products...</p>
        </div>

        <div v-else-if="error" class="products-view__error">
          <p>{{ error }}</p>
        </div>

        <div v-else-if="products.length === 0" class="products-view__empty">
          <p>No products found.</p>
        </div>

        <ProductGrid 
          v-else 
          :products="products" 
          :is-in-cart="isInCart"
          @add-to-cart="handleAddToCart"
        />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { Product } from '@/types/global.types'
import { useProducts } from '../composables/useProducts'
import { useCart } from '@/features/cart/composables/useCart'
import { useToast } from '@/composables/useToast'
import ProductGrid from '../components/ProductGrid.vue'
import { BaseInput } from '@/components/ui'

const {
  products,
  loading,
  error,
  categories,
  selectedCategory,
  searchQuery,
  fetchProducts,
  setCategory
} = useProducts()

const { addToCart, isInCart } = useCart()
const { success } = useToast()

onMounted(() => {
  fetchProducts()
})

const categoryLabel = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1)
}

const handleAddToCart = (product: Product) => {
  addToCart(product, 1)
  success(`${product.name} added to cart!`)
}
</script>

<style scoped>
.products-view__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
}

@media (min-width: 768px) {
  .products-view__header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.products-view__title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin: 0;
}

.products-view__search {
  width: 100%;
  max-width: 400px;
}

.products-view__filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
}

.filter-btn {
  padding: var(--space-2) var(--space-4);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-700);
  cursor: pointer;
  transition: all var(--transition-base);
}

.filter-btn:hover {
  background-color: var(--color-gray-100);
}

.filter-btn--active {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.products-view__loading,
.products-view__error,
.products-view__empty {
  text-align: center;
  padding: var(--space-12);
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
}

.products-view__error {
  color: var(--color-danger);
}
</style>
