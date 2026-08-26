<!--
  Chapter 6 mini project (intentionally messy). Known problems, per the
  chapter: no prop validation, missing key, weak event naming, logic in
  the UI layer.
-->
<template>
  <div class="column">
    <h2>{{ column.name }}</h2>
    <ul>
      <KanbanTask
        v-for="task in column.tasks"
        :task="task"
        :column="column"
        @move="moveTask"
      />
    </ul>
    <input v-model="newTask" placeholder="New task" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
import KanbanTask from "./KanbanTask.vue";

export default {
  components: { KanbanTask },
  props: ["column"],
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("add-task", this.column.id, this.newTask);
      this.newTask = "";
    },
    moveTask(taskId, toColumn) {
      this.$emit("move-task", taskId, this.column.id, toColumn);
    },
  },
};
</script>
