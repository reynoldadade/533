<!--
  Section: "Annotated Components"
  This is the exact annotated output produced by the chapter's prompt:
  "Annotate this component for a beginner. Label reactive state, derived
  state, and event handlers. Keep explanations short."
-->
<script setup lang="ts">
import { computed } from 'vue'

/**
 * 📥 PROPS - Reactive data passed from parent component
 * Props are automatically reactive - Vue tracks all changes
 */
const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected shape:
    // [{ id: number | string, name: string, selected: boolean }]
  },
  title: {
    type: String,
    default: 'Shopping List',
  },
})

/**
 * 📤 EMITS - Events this component can send to parent
 * Used for parent-child communication (child can't modify props directly)
 */
const emit = defineEmits(['update:items', 'selection-change'])

/**
 * 🟢 DERIVED STATE (Computed) - Automatically recalculates when
 * dependencies change
 * Depends on: props.items and each item.selected
 * Cached until props.items changes (efficient!)
 */
const selectedCount = computed(() => {
  return props.items.filter((item) => item.selected).length
})

/**
 * 🟡 EVENT HANDLER - Function called when user clicks an item
 * Creates new array (immutable pattern) and emits event to parent
 * Parent decides whether to accept the change
 */
function toggleItem(item: { id: number | string; name: string; selected: boolean }) {
  // Create new array with toggled item (don't mutate props!)
  const updatedItems = props.items.map((i) =>
    i.id === item.id ? { ...i, selected: !i.selected } : i,
  )

  // 📤 Request parent to update items (enables v-model:items)
  emit('update:items', updatedItems)

  // 📤 Inform parent about selection details (optional metadata)
  emit('selection-change', {
    itemId: item.id,
    selected: !item.selected,
    selectedCount: updatedItems.filter((i) => i.selected).length,
  })
}
</script>

<template>
  <div class="selectable-list">
    <!-- 📝 Text interpolation: Display reactive prop -->
    <h2>{{ title }}</h2>
    <ul>
      <!-- 🔁 v-for: Loop through reactive props.items -->
      <!-- 🎯 :key: Unique identifier for efficient DOM updates -->
      <!-- 🖱️ @click: Attach event handler to click event -->
      <!-- 🎨 :class: Reactive class binding (updates when item.selected changes) -->
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleItem(item)"
        :class="{ selected: item.selected }"
      >
        <!-- 📝 Display reactive item name -->
        {{ item.name }}
      </li>
    </ul>
    <!-- ✅ Display computed property (cached, auto-updates) -->
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>

<style scoped>
.selectable-list ul {
  padding: 0;
  list-style: none;
}

.selectable-list li {
  cursor: pointer;
  padding: 4px 0;
}

.selectable-list li.selected {
  font-weight: bold;
}
</style>
