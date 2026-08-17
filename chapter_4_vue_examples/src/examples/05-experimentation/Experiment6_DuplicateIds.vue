<!--
  Experiment 6: Duplicate IDs (Controlled Chaos)
  Change: two seed items share the same id (both are 2).
  Predict: "Will Vue warn me?"
  Observe: Vue may warn in the console about duplicate keys; the UI
  behaves inconsistently — toggling one of the duplicates can affect
  the wrong DOM node.
  Prompt to ask your agent: "How does Vue match DOM nodes to data
  objects?"
  Mental model reinforced: Vue assumes keys are truth. If keys lie, the
  UI lies.
-->
<script setup>
import { ref, computed } from 'vue'

// Note the duplicate id: 2
const items = ref([
  { id: 1, name: 'Apple', selected: false },
  { id: 2, name: 'Banana', selected: false },
  { id: 2, name: 'Orange', selected: false },
])

const selectedCount = computed(() => {
  return items.value.filter((item) => item.selected).length
})

function toggleItem(item) {
  item.selected = !item.selected
}
</script>

<template>
  <div class="selectable-list">
    <h2>Experiment 6: Duplicate IDs</h2>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleItem(item)"
        :class="{ selected: item.selected }"
      >
        {{ item.name }} (id: {{ item.id }})
      </li>
    </ul>
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>
