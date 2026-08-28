<!--
  From "The Learning Loop in Practice" - the cart UI wired to the
  Pinia store instead of prop-drilled state. Updates everywhere it
  appears with no prop drilling.
-->
<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <button>
    Cart ({{ cart.count }}) — £{{ cart.total.toFixed(2) }}
  </button>
</template>
