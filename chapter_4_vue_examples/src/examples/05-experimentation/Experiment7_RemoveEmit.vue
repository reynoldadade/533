<!--
  Experiment 7: Remove the Emit
  Change: emit('update:items', updatedItems) is commented out — the
  child computes the change but never tells the parent about it.
  Predict: "What happens if the component keeps state changes to
  itself?"
  Observe: the UI no longer updates, parent state is frozen (open the
  console — updatedItems is computed correctly, it just never leaves
  this component).
  Prompt to ask your agent: "Why does nothing change even though I
  clicked the item?"
  Mental model reinforced: Components do not own shared state. They
  request changes.
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

  console.log('would have emitted:', updatedItems)
  // emit('update:items', updatedItems)
  // ^ commented out on purpose — nothing reaches the parent.
}
</script>

<template>
  <div class="selectable-list">
    <h2>Experiment 7: Remove the Emit</h2>
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
