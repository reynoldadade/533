<!--
  Chapter 6: "Mini Project: Debug and Refactor a Kanban Board"
  The exercise's starting App.vue, unchanged from the book. Seeds three
  columns and mounts the (intentionally messy) KanbanBoard.
-->
<template>
  <KanbanBoard :columns="columns" />
</template>

<script>
import KanbanBoard from "./components/KanbanBoard.vue";

export default {
  components: { KanbanBoard },
  data() {
    return {
      columns: [
        {
          id: 1,
          name: "Todo",
          tasks: [
            { id: 1, title: "Design homepage", done: false },
            { id: 2, title: "Create login page", done: false },
          ],
        },
        {
          id: 2,
          name: "In Progress",
          tasks: [{ id: 3, title: "API integration", done: false }],
        },
        {
          id: 3,
          name: "Done",
          tasks: [],
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 20px;
  background: #f4f6f8;
}

.board {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.column {
  background: white;
  padding: 16px;
  border-radius: 8px;
  width: 280px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.column h2 {
  margin-top: 0;
  font-size: 18px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9fafb;
  padding: 8px 10px;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 14px;
}

li span {
  flex: 1;
}

select {
  margin-right: 8px;
}

input {
  width: 100%;
  padding: 6px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

button {
  border: none;
  background: #3b82f6;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}

button:hover {
  background: #2563eb;
}

button:active {
  transform: scale(0.97);
}
</style>
