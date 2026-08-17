<!--
  Section: "Mini Project: Full AI Annotation Pass"
  This is the chapter's "Sample Output" for the mini-project prompt:
  a small, reusable component built with defineProps/defineEmits that
  never mutates props directly.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['update:items'])

const selectedCount = computed(() => {
  return props.items.filter(item => item.selected).length
})

function toggleItem(clickedItem) {
  const updatedItems = props.items.map(item =>
    item.id === clickedItem.id
      ? { ...item, selected: !item.selected }
      : item
  )

  emit('update:items', updatedItems)
}
</script>

<template>
  <div>
    <h2>Shopping List</h2>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleItem(item)"
        :style="{ fontWeight: item.selected ? 'bold' : 'normal', cursor: 'pointer' }"
      >
        {{ item.name }}
      </li>
    </ul>
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>
