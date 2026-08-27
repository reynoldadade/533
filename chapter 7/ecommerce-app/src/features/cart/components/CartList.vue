<template>
  <div class="cart-list">
    <CartItem 
      v-for="item in items"
      :key="item.product.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import type { CartItem as CartItemType } from '@/types/global.types'
import CartItem from '@/features/cart/components/CartItem.vue'

interface Props {
  items: readonly CartItemType[]
}

defineProps<Props>()
</script>

<style scoped>
.cart-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}
</style>
