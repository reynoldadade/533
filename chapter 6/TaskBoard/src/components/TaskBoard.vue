<!--
  Chapter 6: "The Base Application (Intentionally Imperfect)"
  This is the deliberately flawed starting point for the chapter: direct
  object mutation, an inefficient computed property, and a weak prop
  definition. Do not "fix" this file — the chapter improves it piece by
  piece in the sections that follow (see TaskItem.vue, useTasks.js, and
  TaskBoardComposition.vue in this same folder).
-->
<template>
  <div>
    <h1>Task Board</h1>
    <input v-model="newTask" placeholder="Add task" />
    <button @click="addTask()">Add</button>
    <p>Total tasks: {{ tasks.length }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="toggleComplete(task)">
          {{ task.completed ? "Undo" : "Done" }}
        </button>
        <button @click="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>
    <p>Completed tasks: {{ completedTasks }}</p>
  </div>
</template>

<script>
export default {
  props: ["initialTasks"],
  data() {
    return {
      newTask: "",
      tasks: this.initialTasks || []
    }
  },
  computed: {
    completedTasks() {
      let count = 0
      this.tasks.forEach(task => {
        if (task.completed) {
          count++
        }
      })
      return count
    }
  },
  methods: {
    addTask() {
      this.tasks.push({
        id: Date.now(),
        title: this.newTask,
        completed: false
      })
      this.newTask = ""
    },
    toggleComplete(task) {
      task.completed = !task.completed
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    }
  }
}
</script>
