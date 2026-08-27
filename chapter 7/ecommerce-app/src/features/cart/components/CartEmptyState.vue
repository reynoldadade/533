<template>
  <div class="cart-empty">
    <div class="cart-empty__icon">🛒</div>
    <h2 class="cart-empty__title">Your cart is empty</h2>
    <p class="cart-empty__text">Add some products to get started!</p>
    <BaseButton @click="goToProducts">
      Browse Products
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { BaseButton } from '@/components/ui'

const router = useRouter()

const goToProducts = () => {
  router.push('/')
}
</script>

<style scoped>
.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-16) var(--space-4);
  text-align: center;
}

.cart-empty__icon {
  font-size: 5rem;
  margin-bottom: var(--space-4);
  opacity: 0.3;
}

.cart-empty__title {
  font-size: var(--font-size-2xl);
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 0 0 var(--space-2) 0;
}

.cart-empty__text {
  font-size: var(--font-size-lg);
  color: var(--color-gray-600);
  margin: 0 0 var(--space-6) 0;
}
</style>
