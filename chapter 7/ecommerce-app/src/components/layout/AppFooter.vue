<template>
  <footer class="app-footer">
    <div class="container">
      <p class="app-footer__text">
        © {{ currentYear }} ShopVue. Built with Vue 3 + TypeScript + Vite.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background-color: var(--color-gray-800);
  color: var(--color-gray-300);
  padding: var(--space-8) 0;
  margin-top: auto;
}

.app-footer__text {
  text-align: center;
  font-size: var(--font-size-sm);
}
</style>
