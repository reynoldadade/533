// Chapter 6 mini project solution.
// Fixes "Extract Shared State" and "Split Responsibilities" from the
// chapter's "What Students Should Improve?" list: the columns array is
// now a reactive singleton owned by this composable (the same pattern
// useCart used in chapter 5), not a prop threaded down from App.vue.
// Every mutation goes through addTask()/moveTask() and replaces the
// array immutably instead of pushing into or filtering it in place.

import { ref } from 'vue'

const columns = ref([
  {
    id: 1,
    name: 'Todo',
    tasks: [
      { id: 1, title: 'Design homepage', done: false },
      { id: 2, title: 'Create login page', done: false },
    ],
  },
  {
    id: 2,
    name: 'In Progress',
    tasks: [{ id: 3, title: 'API integration', done: false }],
  },
  {
    id: 3,
    name: 'Done',
    tasks: [],
  },
])

export function useKanban() {
  function addTask(columnId, title) {
    const trimmed = title.trim()
    if (!trimmed) return

    columns.value = columns.value.map((column) =>
      column.id === columnId
        ? {
            ...column,
            tasks: [...column.tasks, { id: Date.now(), title: trimmed, done: false }],
          }
        : column,
    )
  }

  function moveTask(taskId, fromColumnId, toColumnId) {
    if (fromColumnId === toColumnId) return

    const source = columns.value.find((column) => column.id === fromColumnId)
    const task = source?.tasks.find((t) => t.id === taskId)
    if (!task) return

    columns.value = columns.value.map((column) => {
      if (column.id === fromColumnId) {
        return { ...column, tasks: column.tasks.filter((t) => t.id !== taskId) }
      }
      if (column.id === toColumnId) {
        return { ...column, tasks: [...column.tasks, task] }
      }
      return column
    })
  }

  return {
    columns,
    addTask,
    moveTask,
  }
}
