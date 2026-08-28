<!--
  From "A Worked Build: A Small DataTable." Accepts rows and columns as
  props, supports a free-text filter via useFilter, emits selection
  changes, and renders a custom cell via named scoped slots. Reused
  again in the library-system mini-project.
-->
<script setup>
import { computed } from 'vue'
import { useFilter } from '../composables/useFilter'

const props = defineProps({
  rows: { type: Array, required: true },
  columns: { type: Array, required: true,
    validator: cs => cs.every(c => c.key && c.label) },
  modelValue: { type: String, default: '' }, // the query
  selected: { type: Array, default: () => [] }
})

const emit = defineEmits(['update:modelValue', 'select'])

const rowsRef = computed(() => props.rows)
const colsRef = computed(() => props.columns)
const queryRef = computed({
  get: () => props.modelValue,
  set: v => emit('update:modelValue', v)
})

const visible = useFilter(rowsRef, colsRef, queryRef)

function toggle(row) {
  const next = props.selected.includes(row.id)
    ? props.selected.filter(id => id !== row.id)
    : [...props.selected, row.id]
  emit('select', next)
}
</script>

<template>
  <input v-model="queryRef" placeholder="Filter..." />
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="c in columns" :key="c.key">{{ c.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in visible" :key="row.id"
          :class="{ selected: selected.includes(row.id) }"
          @click="toggle(row)">
        <td><input type="checkbox" :checked="selected.includes(row.id)" /></td>
        <td v-for="c in columns" :key="c.key">
          <slot :name="`cell-${c.key}`" :row="row" :value="row[c.key]">
            {{ row[c.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>
