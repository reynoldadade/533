<!--
  From "A Worked Build: A Small DataTable" - a parent that uses
  DataTable like any other v-model component, with a custom cell
  rendered via the named scoped slot.
-->
<script setup>
import { ref } from 'vue'
import DataTable from '../components/DataTable.vue'

const query = ref('')
const selected = ref([])

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'email', label: 'Email' },
]

const rows = [
  { id: 1, name: 'Ada', role: 'Engineer', email: 'ada@x.dev' },
  { id: 2, name: 'Bo', role: 'Designer', email: 'bo@x.dev' },
]
</script>

<template>
  <DataTable
    v-model="query"
    :rows="rows" :columns="columns" :selected="selected"
    @select="selected = $event">
    <template #cell-email="{ value }">
      <a :href="`mailto:${value}`">{{ value }}</a>
    </template>
  </DataTable>
</template>
