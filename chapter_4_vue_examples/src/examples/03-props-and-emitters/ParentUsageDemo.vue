<!--
  Section: "Understanding Props and Emitters Using a More Complex Component"
  This mirrors the App.vue snippet from the chapter: the parent owns the
  `items` state and wires up v-model:items plus @selection-change.
-->
<script setup>
import { ref } from 'vue'
import SelectableList from './SelectableList.vue'

const items = ref([
  { id: 1, name: 'Apple', selected: false },
  { id: 2, name: 'Banana', selected: false },
  { id: 3, name: 'Orange', selected: false },
])

const log = ref([])

function handleSelectionChange(payload) {
  console.log('Selection changed:', payload)
  log.value.unshift(JSON.stringify(payload))
}
</script>

<template>
  <SelectableList
    v-model:items="items"
    title="My Shopping List"
    @selection-change="handleSelectionChange"
  />
  <div class="debug-json" v-if="log.length">
    <strong>selection-change payloads (newest first):</strong>
    <div v-for="(entry, i) in log" :key="i">{{ entry }}</div>
  </div>
</template>
