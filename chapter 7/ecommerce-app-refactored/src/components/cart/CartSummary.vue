<!--
  Was a second, independent implementation of remove-item and
  total-calculation logic in ecommerce-app-legacy, duplicating what
  ProductList.vue did for add-to-cart. Both are now the same
  useCart() composable, so there is exactly one place cart math lives.
-->
<template>
  <div>
    <h1>Your Cart</h1>

    <p v-if="cartItems.length === 0">Your cart is empty.</p>

    <div v-else>
      <div v-for="item in cartItems" :key="item.product.id" class="cart-row">
        <span>{{ item.product.name }} x{{ item.quantity }}</span>
        <span>${{ (item.product.price * item.quantity).toFixed(2) }}</span>
        <BaseButton variant="danger" @click="removeItem(item.product.id)">Remove</BaseButton>
      </div>

      <p class="cart-total">Total: ${{ total.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'
import { useCart } from '../../composables/useCart'

const { cartItems, removeItem, total } = useCart()
</script>
