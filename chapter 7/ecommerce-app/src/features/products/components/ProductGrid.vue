<template>
  <div class="product-grid">
    <ProductCard 
      v-for="product in products"
      :key="product.id"
      :product="product"
      :is-in-cart="isInCart(product.id)"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/global.types'
import ProductCard from '@/features/products/components/ProductCard.vue'

interface Props {
  products: Product[]
  isInCart: (productId: string) => boolean
}

interface Emits {
  (e: 'add-to-cart', product: Product): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const handleAddToCart = (product: Product) => {
  emit('add-to-cart', product)
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
}

@media (max-width: 640px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
