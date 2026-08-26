<!--
  Chapter 6 mini project (intentionally messy). Known problems, per the
  chapter: prop mutation, poor state structure, no composables, missing
  validation, unnecessary re-renders. Fixing these is the reader's
  exercise, not done for you here.
-->
<template>
  <div class="board">
    <KanbanColumn
      v-for="column in columns"
      :column="column"
      @add-task="addTask"
      @move-task="moveTask"
    />
  </div>
</template>

<script>
import KanbanColumn from "./KanbanColumn.vue";

export default {
  components: { KanbanColumn },
  props: ["columns"],
  methods: {
    addTask(columnId, title) {
      let column = this.columns.find((c) => c.id === columnId);
      column.tasks.push({
        id: Date.now(),
        title: title,
        done: false,
      });
    },
    moveTask(taskId, fromColumn, toColumn) {
      let source = this.columns.find((c) => c.id === fromColumn);
      let target = this.columns.find((c) => c.id === toColumn);
      let task = source.tasks.find((t) => t.id === taskId);
      source.tasks = source.tasks.filter((t) => t.id !== taskId);
      target.tasks.push(task);
    },
  },
};
</script>
