<!--
  Same "Business Logic Mixed with UI" problem as ProductList.vue, on the
  other side of the cart: removing an item and calculating the total are
  both implemented directly in this component against the bare
  cartStore array, instead of through a shared composable. Notice this
  is a second, independent implementation of "find this item in the
  cart" from the one in ProductList.vue, not a shared helper.
-->
<template>
  <div>
    <h1>Your Cart</h1>

    <p v-if="cartItems.length === 0">Your cart is empty.</p>

    <div v-else>
      <div v-for="item in cartItems" :key="item.product.id" class="cart-row">
        <span>{{ item.product.name }} x{{ item.quantity }}</span>
        <span>${{ (item.product.price * item.quantity).toFixed(2) }}</span>
        <button @click="removeItem(item.product.id)">Remove</button>
      </div>

      <p class="cart-total">Total: ${{ total.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { cartItems } from '../stores/cartStore'

function removeItem(productId) {
  const index = cartItems.value.findIndex((item) => item.product.id === productId)
  if (index > -1) {
    cartItems.value.splice(index, 1)
  }
}

const total = computed(() => {
  let sum = 0
  for (const item of cartItems.value) {
    sum += item.product.price * item.quantity
  }
  return sum
})
</script>
