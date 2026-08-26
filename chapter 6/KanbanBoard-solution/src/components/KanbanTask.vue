<!--
  Chapter 6 mini project solution.
  Fixes "prop mutation risk," "duplicated column IDs," "inefficient
  state flow," and "no reactivity guarantees" from the original
  KanbanTask.vue: task/column/allColumns are read-only validated props,
  the move-to dropdown is built from the real allColumns list instead of
  three hardcoded <option value="1|2|3"> that assumed fixed column IDs,
  and every state change is requested via emit rather than written
  directly onto a prop.
-->
<template>
  <li>
    <span>{{ task.title }}</span>
    <select v-model.number="selected">
      <option v-for="col in allColumns" :key="col.id" :value="col.id">
        {{ col.name }}
      </option>
    </select>
    <button @click="move">Move</button>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  column: {
    type: Object,
    required: true,
  },
  allColumns: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['move'])

const selected = ref(props.column.id)

function move() {
  emit('move', props.task.id, selected.value)
}
</script>
