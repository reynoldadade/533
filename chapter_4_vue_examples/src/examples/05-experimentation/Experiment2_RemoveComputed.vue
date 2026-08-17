<!--
  Experiment 2: Remove a Line and Observe the Fallout
  Change: the `selectedCount` computed() has been removed entirely, but
  the template below still references it — exactly as the chapter
  instructs.
  Predict: "What will stop working?"
  Observe: the template throws an error, the UI partially renders, Vue
  complains about missing data.
  Prompt to ask your agent: "Why does the template fail when this
  computed property is missing?"
  Mental model reinforced: Templates are functions of state. Remove the
  function, remove the output.
-->
<script setup>
const props = defineProps({
  items: { type: Array, required: true },
})

const emit = defineEmits(['update:items'])

// const selectedCount = computed(() => {
//   return props.items.filter(item => item.selected).length
// })
// ^ removed on purpose — see the template below, which still uses it.

function toggleItem(item) {
  const updatedItems = props.items.map((i) =>
    i.id === item.id ? { ...i, selected: !i.selected } : i,
  )
  emit('update:items', updatedItems)
}
</script>

<template>
  <div class="selectable-list">
    <h2>Experiment 2: Remove the Computed Property</h2>
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
    <!-- This line throws: selectedCount is not defined -->
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>
