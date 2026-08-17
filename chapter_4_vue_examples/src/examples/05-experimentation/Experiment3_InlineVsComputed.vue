<!--
  Experiment 3: Inline Logic versus Computed
  Change: {{ selectedCount }} replaced with the filter expression written
  directly in the template, no computed() involved.
  Predict: "Will this still work?"
  Observe: the UI still works, the logic has just moved into the
  template.
  Prompt to ask your agent: "Why does this work without computed, and
  why is it still discouraged?"
  Mental model reinforced: Computed properties exist for clarity and
  reuse, not magic.
-->
<script setup>
const props = defineProps({
  items: { type: Array, required: true },
})

const emit = defineEmits(['update:items'])

function toggleItem(item) {
  const updatedItems = props.items.map((i) =>
    i.id === item.id ? { ...i, selected: !i.selected } : i,
  )
  emit('update:items', updatedItems)
}
</script>

<template>
  <div class="selectable-list">
    <h2>Experiment 3: Inline Logic versus Computed</h2>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleItem(item)"
        :class="{ selected: item.selected }"
      >
        {{ item.name }}
      </li>
    </ul>
    <p>
      Selected items:
      {{ items.filter(item => item.selected).length }}
    </p>
  </div>
</template>
