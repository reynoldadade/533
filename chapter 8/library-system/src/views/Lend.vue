<!--
  New, not shown in the chapter text. The chapter's four screens are
  "a book list, a member list, a 'lend' dialog, and an overdue report";
  this is the lend dialog, built as a full page rather than a modal for
  simplicity. It exercises store.lend() and store.returnLoan() directly.
-->
<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useLibrary } from '../stores/library'

const lib = useLibrary()
const { books, members, openLoans } = storeToRefs(lib)

const selectedBook = ref('')
const selectedMember = ref('')
const errorMessage = ref('')

const openLoanRows = computed(() => openLoans.value.map(l => {
  const book = books.value.find(b => b.id === l.bookId)
  const member = members.value.find(m => m.id === l.memberId)
  return { id: l.id, title: book?.title, member: member?.name, dueAt: l.dueAt }
}))

function submitLend() {
  errorMessage.value = ''
  if (!selectedBook.value || !selectedMember.value) return
  try {
    lib.lend(selectedBook.value, selectedMember.value)
    selectedBook.value = ''
    selectedMember.value = ''
  } catch (err) {
    errorMessage.value = err.message
  }
}
</script>

<template>
  <h1>Lend a Book</h1>

  <form class="inline-form" @submit.prevent="submitLend">
    <select v-model="selectedBook" required>
      <option value="" disabled>Choose a book</option>
      <option v-for="b in books" :key="b.id" :value="b.id">
        {{ b.title }} ({{ lib.copiesAvailable(b.id) }} free)
      </option>
    </select>
    <select v-model="selectedMember" required>
      <option value="" disabled>Choose a member</option>
      <option v-for="m in members" :key="m.id" :value="m.id">{{ m.name }}</option>
    </select>
    <button type="submit">Lend</button>
  </form>

  <p v-if="errorMessage" class="state-message state-message--error">{{ errorMessage }}</p>

  <h2>Currently on loan</h2>
  <p v-if="!openLoanRows.length" class="state-message">Nothing on loan.</p>
  <ul v-else>
    <li v-for="loan in openLoanRows" :key="loan.id">
      <strong>{{ loan.title }}</strong> → {{ loan.member }}, due {{ new Date(loan.dueAt).toLocaleDateString() }}
      <button @click="lib.returnLoan(loan.id)">Return</button>
    </li>
  </ul>
</template>
