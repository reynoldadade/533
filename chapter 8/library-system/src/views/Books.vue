<!--
  From "Build v0 -- Listing and Lending." The table itself, the
  computed rows with live availability, and the DataTable reuse are
  straight from the chapter. The "Register a Book" form is new: the
  chapter names registering a book as part of the minimum feature set
  but only ever shows the read side of Books.vue.
-->
<script setup>
import { ref, computed, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import DataTable from '../components/DataTable.vue'
import { useLibrary } from '../stores/library'

const lib = useLibrary()
const { books } = storeToRefs(lib)

const query = ref('')

const rows = computed(() => books.value.map(b => ({
  ...b,
  available: lib.copiesAvailable(b.id),
})))

const columns = [
  { key: 'title', label: 'Title' },
  { key: 'author', label: 'Author' },
  { key: 'copies', label: 'Total' },
  { key: 'available', label: 'Free' },
]

const newBook = reactive({ title: '', author: '', copies: 1 })

function registerBook() {
  if (!newBook.title.trim() || !newBook.author.trim()) return
  lib.addBook({ title: newBook.title.trim(), author: newBook.author.trim(), copies: Number(newBook.copies) || 1 })
  newBook.title = ''
  newBook.author = ''
  newBook.copies = 1
}
</script>

<template>
  <h1>Books</h1>

  <form class="inline-form" @submit.prevent="registerBook">
    <input v-model="newBook.title" placeholder="Title" required />
    <input v-model="newBook.author" placeholder="Author" required />
    <input v-model.number="newBook.copies" type="number" min="1" style="width: 5em" />
    <button type="submit">Register book</button>
  </form>

  <DataTable v-model="query" :rows="rows" :columns="columns">
    <template #cell-available="{ value }">
      <strong :class="{ low: value === 0 }">{{ value }}</strong>
    </template>
  </DataTable>
</template>
