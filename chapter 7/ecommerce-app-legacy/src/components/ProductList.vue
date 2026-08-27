<!--
  This is the component examined in "Senior Engineer Code Review
  Simulation." Three issues on purpose, matching that section exactly:

  1. API Logic in the Component: products are fetched inline in
     onMounted instead of through composables/useProducts.js, which
     sits right next to this file, unused.
  2. Missing Loading and Error States: the template assumes the fetch
     always succeeds and always finishes before anyone looks at the
     page.
  3. Business Logic Mixed with UI: add-to-cart (including the
     find-or-push branching) is written directly here against the bare
     cartStore array, instead of going through a composable. CartSummary
     .vue below reimplements the equivalent remove/total logic
     separately, so this branch of logic exists in two places.
-->
<template>
  <div>
    <h1>Products</h1>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import { products as seedProducts } from '../data/products'
import { cartItems } from '../stores/cartStore'

const products = ref([])

onMounted(async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => resolve(seedProducts), 300)
  })
  products.value = response
})

function handleAddToCart(product) {
  const existing = cartItems.value.find((item) => item.product.id === product.id)
  if (existing) {
    existing.quantity++
  } else {
    cartItems.value.push({ product, quantity: 1 })
  }
}
</script>
