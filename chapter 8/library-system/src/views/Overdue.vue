<!--
  From "Review the v1 with the Model." Uses useClock instead of a bare
  Date.now() inside the computed, so the list actually advances as time
  passes instead of needing a manual refresh -- the fix the AI review
  in that section proposed.
-->
<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLibrary } from '../stores/library'
import { useClock } from '../composables/useClock'

const lib = useLibrary()
const { overdue, books, members } = storeToRefs(lib)
const now = useClock(30_000)

const rows = computed(() => {
  void now.value // establishes the reactive dependency on the clock
  return overdue.value.map(l => {
    const book = books.value.find(b => b.id === l.bookId)
    const member = members.value.find(m => m.id === l.memberId)
    const days = Math.floor(
      (Date.now() - new Date(l.dueAt).getTime()) / (24 * 3600 * 1000))
    return { id: l.id, title: book?.title, member: member?.name, days }
  })
})
</script>

<template>
  <h1>Overdue ({{ rows.length }})</h1>
  <ul>
    <li v-for="r in rows" :key="r.id">
      <strong>{{ r.title }}</strong> — {{ r.member }} ({{ r.days }}d late)
    </li>
  </ul>
  <p v-if="!rows.length">Nothing overdue. Nice work.</p>
</template>
