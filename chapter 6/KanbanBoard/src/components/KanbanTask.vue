<!--
  Chapter 6 mini project (intentionally messy). Known problems, per the
  chapter: prop mutation risk, duplicated column IDs, inefficient state
  flow, no reactivity guarantees.
-->
<template>
  <li>
    <span>{{ task.title }}</span>
    <select v-model="selected">
      <option value="1">Todo</option>
      <option value="2">In Progress</option>
      <option value="3">Done</option>
    </select>
    <button @click="move">Move</button>
  </li>
</template>

<script>
export default {
  props: ["task", "column"],
  data() {
    return {
      selected: this.column.id,
    };
  },
  methods: {
    move() {
      this.$emit("move", this.task.id, this.selected);
    },
  },
};
</script>
