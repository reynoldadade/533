<!--
  Section: "The Core Rule: Output Comes First"
  This is the exact starter component from the chapter's "Sample Code" beat.
  Paste this into a fresh Vue 3 project (Composition API + <script setup>)
  as ListComponent.vue and import it into App.vue to reproduce Figure 4.1.
-->
<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Apple', selected: false },
  { id: 2, name: 'Banana', selected: false },
  { id: 3, name: 'Orange', selected: false },
])

const selectedCount = computed(() => {
  return items.value.filter(item => item.selected).length
})

function toggleItem(item) {
  item.selected = !item.selected
}
</script>

<template>
  <div>
    <h2>Shopping List</h2>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        @click="toggleItem(item)"
        :style="{ fontWeight: item.selected ? 'bold' : 'normal' }"
      >
        {{ item.name }}
      </li>
    </ul>
    <p>Selected items: {{ selectedCount }}</p>
  </div>
</template>
