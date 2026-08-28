<!--
  The fix for Buggy.vue: mutate `.value` instead of reassigning the
  ref binding. `addItem` is exposed via defineExpose so Fixed.test.js
  can call it directly, the same way the chapter's test does.
-->
<script setup>
import { ref, watch } from 'vue'

const items = ref([])

watch(items, (n) => console.log('items changed', n), { deep: true })

function addItem(item) {
  // Mutate .value, do not reassign the ref itself.
  items.value = [...items.value, item]
}

defineExpose({ items, addItem })
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.id }}</li>
  </ul>
</template>
