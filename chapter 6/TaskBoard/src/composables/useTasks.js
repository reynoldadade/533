// Chapter 6: "Refactoring Code with AI"
// Extracts TaskBoard.vue's state and mutations into a composable so the
// component itself can shrink down to template + wiring.

import { ref } from "vue"

export function useTasks(initialTasks = []) {
  const tasks = ref(initialTasks)

  function addTask(title) {
    tasks.value.push({
      id: Date.now(),
      title,
      completed: false
    })
  }

  function toggleTask(id) {
    tasks.value = tasks.value.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  }

  function deleteTask(id) {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask
  }
}
