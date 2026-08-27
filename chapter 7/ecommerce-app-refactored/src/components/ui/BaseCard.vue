<!--
  Second half of the shared ui/ library alongside BaseButton.vue: a
  plain surface with no product- or cart-specific knowledge, wrapped by
  ProductCard.vue below the same way the chapter describes "wrapping
  these prebuilt components with your own components to enhance its
  use for your specific case."
-->
<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script setup></script>
