<!--
  Harness for this folder, not from the book itself. Mounts the base
  flawed TaskBoard.vue from "The Base Application" section so the
  starting point is runnable. TaskItem.vue, useTasks.js, and
  TaskBoardComposition.vue sit alongside it as reference files for the
  later sections that improve on this version.
-->
<script setup>
import TaskBoard from './components/TaskBoard.vue'
</script>

<template>
  <TaskBoard :initial-tasks="[]" />
</template>
