<!--
  Chapter 6 mini project solution.
  Fixes "poor state structure" and "no composables" from the original
  KanbanBoard.vue: the board no longer owns or receives columns as a
  mutable prop. It reads them from useKanban() and only ever changes
  them through addTask()/moveTask(), which the child columns request via
  namespaced task:add / task:move events instead of the original's bare
  add-task / move-task.
-->
<template>
  <div class="board">
    <KanbanColumn
      v-for="column in columns"
      :key="column.id"
      :column="column"
      :all-columns="columns"
      @task:add="addTask"
      @task:move="moveTask"
    />
  </div>
</template>

<script setup>
import KanbanColumn from './KanbanColumn.vue'
import { useKanban } from '../composables/useKanban'

const { columns, addTask, moveTask } = useKanban()
</script>
