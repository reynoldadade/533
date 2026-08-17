<!--
  Experiment 1: Toggle a Single Reactive Value
  Change: none beyond the debug playground — click an item and watch
  item.selected flip inside toggleItem.
  Predict (ask before running): "What exactly will change when I click
  an item?"
  Observe: the clicked item becomes bold, selectedCount increases or
  decreases, no other items change.
  Mental model reinforced: Vue tracks WHICH VALUES ARE USED, not where
  they live.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
})

const emit = defineEmits(['update:items'])

const selectedCount = computed(() => {
  return props.items.filter((item) => item.selected).length
})

function toggleItem(item) {
  const updatedItems = props.items.map((i) =>
    i.id === item.id ? { ...i, selected: !i.selected } : i,
  )
  emit('update:items', updatedItems)
}
</script>

<template>
  <div class="selectable-list">
    <h2>Experiment 1: Toggle a Single Reactive Value</h2>
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
