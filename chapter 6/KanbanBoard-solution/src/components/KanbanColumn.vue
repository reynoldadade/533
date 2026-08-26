<!--
  Chapter 6 mini project solution.
  Fixes "no prop validation," "missing key," "weak event naming," and
  "logic in the UI layer" from the original KanbanColumn.vue: column and
  allColumns are validated props, the task list has a :key, the events
  going up are task:add / task:move, and the only local logic left is
  forwarding the new-task input, not owning any shared state.
-->
<template>
  <div class="column">
    <h2>{{ column.name }}</h2>
    <ul>
      <KanbanTask
        v-for="task in column.tasks"
        :key="task.id"
        :task="task"
        :column="column"
        :all-columns="allColumns"
        @move="moveTask"
      />
    </ul>
    <input v-model="newTask" placeholder="New task" @keyup.enter="addTask" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import KanbanTask from './KanbanTask.vue'

const props = defineProps({
  column: {
    type: Object,
    required: true,
  },
  allColumns: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['task:add', 'task:move'])

const newTask = ref('')

function addTask() {
  emit('task:add', props.column.id, newTask.value)
  newTask.value = ''
}

function moveTask(taskId, toColumnId) {
  emit('task:move', taskId, props.column.id, toColumnId)
}
</script>
