<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__content">
        <router-link to="/" class="app-header__logo">
          🛍️ ShopVue
        </router-link>

        <nav class="app-header__nav">
          <router-link to="/" class="app-header__link">
            Products
          </router-link>
          <router-link to="/cart" class="app-header__link app-header__cart">
            <span class="cart-icon">🛒</span>
            <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
            Cart
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useCart } from '@/features/cart/composables/useCart'

const { cartCount } = useCart()
</script>

<style scoped>
.app-header {
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
}

.app-header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.app-header__logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.app-header__link {
  font-weight: 500;
  color: var(--color-gray-700);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.app-header__link:hover {
  background-color: var(--color-gray-100);
  color: var(--color-gray-900);
}

.app-header__link.router-link-active {
  color: var(--color-primary);
  background-color: rgba(59, 130, 246, 0.1);
}

.app-header__cart {
  position: relative;
}

.cart-icon {
  font-size: var(--font-size-lg);
}

.cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--color-danger);
  color: var(--color-white);
  font-size: var(--font-size-xs);
  font-weight: 700;
  min-width: 18px;
  height: 18px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}
</style>
