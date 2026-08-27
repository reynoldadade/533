<template>
  <div class="cart-view">
    <div class="container">
      <h1 class="cart-view__title">Shopping Cart</h1>

      <CartEmptyState v-if="cartItems.length === 0" />

      <div v-else class="cart-view__content">
        <div class="cart-view__items">
          <CartList :items="cartItems" />
        </div>
        
        <div class="cart-view__summary">
          <CartSummary 
            :item-count="cartCount"
            :total="cartTotal"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '../composables/useCart'
import CartList from '../components/CartList.vue'
import CartSummary from '../components/CartSummary.vue'
import CartEmptyState from '../components/CartEmptyState.vue'

const { cartItems, cartCount, cartTotal } = useCart()
</script>

<style scoped>
.cart-view__title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin: 0 0 var(--space-8) 0;
}

.cart-view__content {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

@media (min-width: 1024px) {
  .cart-view__content {
    grid-template-columns: 2fr 1fr;
  }
}
</style>
