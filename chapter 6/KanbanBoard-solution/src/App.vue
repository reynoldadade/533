<!--
  Chapter 6 mini project solution.
  App.vue no longer seeds or owns the columns array: that state now
  lives in useKanban(), so KanbanBoard reads it directly instead of
  receiving it as a prop. Global styles are unchanged from the original.
-->
<template>
  <KanbanBoard />
</template>

<script setup>
import KanbanBoard from './components/KanbanBoard.vue'
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
