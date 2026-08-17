<!--
  Experiment 4: Mutate versus Replace the Array
  Change: instead of building a new array with .map(), we mutate the
  item directly and emit the same props.items reference back.
  Predict: "Will Vue detect this change?"
  Observe: sometimes it works, sometimes updates behave strangely,
  debugging becomes harder.
  Prompt to ask your agent: "Why is replacing the array more reliable
  than mutating an item?"
  Mental model reinforced: Vue reacts best to new references, not silent
  mutations.
-->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: { type: Array, required: true },
})

const emit = defineEmits(['update:items'])

const selectedCount = computed(() => {
  return props.items.filter((item) => item.selected).length
})

function toggleItem(item) {
  // ⚠️ Mutating directly instead of creating a new array/object:
  item.selected = !item.selected
  emit('update:items', props.items)
}
</script>

<template>
  <div class="selectable-list">
    <h2>Experiment 4: Mutate versus Replace the Array</h2>
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
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>
