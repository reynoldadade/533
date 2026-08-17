<!--
  Experiment 8: Slow Down and Watch Reactivity
  Change: a plain console.log('Rendering list', props.items) added
  alongside the computed, so you can compare when script-setup code runs
  versus when the computed re-evaluates.
  Predict: "When will this log run?"
  Observe: the top-level log only runs once (script setup runs a single
  time), while the computed's log re-runs on every dependency change —
  open the console and click items to see the difference.
  Prompt to ask your agent: "How does Vue know when to re-run this
  logic?"
  Mental model reinforced: Vue builds a dependency graph, not a call
  graph.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
})

const emit = defineEmits(['update:items'])

console.log('Rendering list', props.items)

const selectedCount = computed(() => {
  console.log('[computed] selectedCount re-evaluated')
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
    <h2>Experiment 8: Slow Down and Watch Reactivity</h2>
    <p style="font-size: 12px; color: #666">Open your console before clicking.</p>
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
