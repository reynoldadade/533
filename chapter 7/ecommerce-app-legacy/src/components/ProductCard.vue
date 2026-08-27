<!--
  No BaseButton, no BaseCard: this predates the ui/ shared component
  library. Every product-card-shaped thing in this revision will end up
  hand-rolling its own button and card markup instead of reusing one.
-->
<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description.slice(0, 80) }}...</p>
    <span class="price">${{ product.price.toFixed(2) }}</span>
    <button :disabled="product.stock === 0" @click="$emit('add-to-cart', product)">
      {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})

defineEmits(['add-to-cart'])
</script>
