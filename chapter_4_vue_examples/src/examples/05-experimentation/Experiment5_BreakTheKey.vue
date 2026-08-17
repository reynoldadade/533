<!--
  Experiment 5: Break the Key
  Change: :key="item.id" replaced with :key="index" (list position
  instead of item identity).
  Predict: "What could go wrong?"
  Observe: items appear to toggle incorrectly, visual glitches may
  appear, DOM reuse behaves unexpectedly (try reordering/removing items
  while some are selected).
  Prompt to ask your agent: "Why does Vue care about identity instead of
  position?"
  Mental model reinforced: Keys tell Vue who is who, not where they are.
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
    <h2>Experiment 5: Break the Key</h2>
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
        @click="toggleItem(item)"
        :class="{ selected: item.selected }"
      >
        {{ item.name }}
      </li>
    </ul>
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>
