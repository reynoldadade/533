<!-- Vue 3 (Composition API) -->
<script setup>
import { ref, computed } from 'vue'

const n = ref(0)
const isEven = computed(() => n.value % 2 === 0)
</script>

<template>
  <button @click="n++">+1</button>
  <p>{{ n }} ({{ isEven ? 'even' : 'odd' }})</p>
</template>
