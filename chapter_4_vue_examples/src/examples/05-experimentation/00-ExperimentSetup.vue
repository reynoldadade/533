<!--
  Section: "Experimentation: Change One Thing, Observe Everything"
  Beat: "Experiment Setup: Create a Safe Playground"

  Prompt used: "I am new to Vue. Add temporary debug output to this
  component so I can clearly see when it re-renders and when reactive
  values change."

  This is the safe baseline every Experiment_N.vue below starts from:
  console logs inside toggleItem/selectedCount, plus a JSON dump of the
  live state in the template.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
  title: { type: String, default: 'Shopping List' },
})

const emit = defineEmits(['update:items', 'selection-change'])

const selectedCount = computed(() => {
  console.log('[debug] recalculating selectedCount')
  return props.items.filter((item) => item.selected).length
})

function toggleItem(item) {
  console.log('[debug] toggleItem called for', item)
  const updatedItems = props.items.map((i) =>
    i.id === item.id ? { ...i, selected: !i.selected } : i,
  )

  emit('update:items', updatedItems)
  emit('selection-change', {
    itemId: item.id,
    selected: !item.selected,
    selectedCount: updatedItems.filter((i) => i.selected).length,
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
    <div class="debug-json">{{ JSON.stringify(items) }}</div>
  </div>
</template>
