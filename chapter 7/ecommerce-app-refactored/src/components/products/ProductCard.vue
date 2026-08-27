<!--
  Now wraps the shared ui/ components instead of hand-rolling markup:
  BaseCard for the surface, BaseButton for the action. This is the
  "wrapping these prebuilt components with your own components to
  enhance its use for your specific case" pattern the chapter describes
  under Component Reuse Strategies.
-->
<template>
  <BaseCard class="product-card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description.slice(0, 80) }}...</p>
    <span class="price">${{ product.price.toFixed(2) }}</span>
    <BaseButton :disabled="product.stock === 0" @click="$emit('add-to-cart', product)">
      {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
    </BaseButton>
  </BaseCard>
</template>

<script setup>
import BaseCard from '../ui/BaseCard.vue'
import BaseButton from '../ui/BaseButton.vue'

defineProps({
  product: {
    type: Object,
    required: true,
  },
})

defineEmits(['add-to-cart'])
</script>
