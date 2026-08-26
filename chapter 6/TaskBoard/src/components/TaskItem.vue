<!--
  Chapter 6: "Avoiding Unnecessary Re-Renders"
  Extracted from TaskBoard.vue so each row is its own component instead
  of the whole list re-rendering as one block. It emits toggle/delete
  instead of mutating anything itself.

  Parent usage (TaskBoard.vue), per the chapter:

  <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :task="task"
    @toggle="toggleComplete"
    @delete="deleteTask"
  />
-->
<template>
  <li>
    {{ task.title }}
    <button @click="$emit('toggle', task.id)">
      {{ task.completed ? "Undo" : "Done" }}
    </button>
    <button @click="$emit('delete', task.id)">
      Delete
    </button>
  </li>
</template>

<script setup>
defineProps({
  task: Object
})
</script>
