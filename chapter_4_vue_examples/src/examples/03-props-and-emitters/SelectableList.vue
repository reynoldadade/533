<!--
  Section: "Understanding Props and Emitters Using a More Complex Component"
  The more realistic component the chapter upgrades to: state now lives in
  the parent, this component receives it via props and requests changes
  via emit() instead of mutating props directly.
-->
<script setup>
import { computed } from 'vue'

/**
 * Props
 */
const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected shape:
    // [{ id: number | string, name: string, selected: boolean }]
  },
  title: {
    type: String,
    default: 'Shopping List',
  },
})

/**
 * Emits
 */
const emit = defineEmits(['update:items', 'selection-change'])

/**
 * Computed
 * Derive state instead of storing it
 */
const selectedCount = computed(() => {
  return props.items.filter(item => item.selected).length
})

/**
 * Methods
 */
function toggleItem(item) {
  const updatedItems = props.items.map(i =>
    i.id === item.id ? { ...i, selected: !i.selected } : i
  )

  emit('update:items', updatedItems)
  emit('selection-change', {
    itemId: item.id,
    selected: !item.selected,
    selectedCount: updatedItems.filter(i => i.selected).length,
  })
}
</script>

<template>
  <div class="selectable-list">
    <h2>{{ title }}</h2>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleItem(item)"
        :class="{ selected: item.selected }"
      >
        {{ item.name }}
      </li>
    </ul>
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>

<style scoped>
.selectable-list ul {
  padding: 0;
  list-style: none;
}

.selectable-list li {
  cursor: pointer;
  padding: 4px 0;
}

.selectable-list li.selected {
  font-weight: bold;
}
</style>
