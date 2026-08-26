<script setup>
// Chapter 6: "Composition API versus Options API"
// The chapter's prompt converts TaskBoard.vue's Options API script into
// <script setup>. Only this script block was shown in the book — the
// <template> below is added here so the file actually runs, reusing
// TaskBoard.vue's markup with toggleTask() in place of toggleComplete().
import { ref, computed } from "vue"

const props = defineProps({
  initialTasks: {
    type: Array,
    default: () => []
  }
})

const tasks = ref([...props.initialTasks])
const newTask = ref("")

function addTask() {
  tasks.value.push({
    id: Date.now(),
    title: newTask.value,
    completed: false
  })
  newTask.value = ""
}

function toggleTask(id) {
  tasks.value = tasks.value.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  )
}

function deleteTask(id) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}

const completedTasks = computed(() =>
  tasks.value.filter(t => t.completed).length
)
</script>

<template>
  <div>
    <h1>Task Board</h1>
    <input v-model="newTask" placeholder="Add task" />
    <button @click="addTask()">Add</button>
    <p>Total tasks: {{ tasks.length }}</p>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="toggleTask(task.id)">
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
