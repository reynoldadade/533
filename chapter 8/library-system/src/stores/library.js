// From "Build v0 -- Listing and Lending," extended with addBook and
// addMember so the store actually covers the chapter's stated minimum
// feature set: "register a member, register a book, lend a book, and
// return a book." The book text only showed lend/returnLoan plus the
// read selectors; those two additions aren't in the chapter, they're
// what registering something has to mean given this schema.
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// A little seed data so the app isn't empty on first load. The chapter's
// own store code starts all three refs as [] -- this is the one place
// this mini-project departs from the text, purely for a usable demo.
const seedBooks = [
  { id: 'b1', title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', copies: 2, tags: ['craft'] },
  { id: 'b2', title: 'Refactoring', author: 'Martin Fowler', copies: 1, tags: ['craft'] },
  { id: 'b3', title: 'Vue 3 in Action', author: 'A. Author', copies: 3, tags: ['vue'] },
]

const seedMembers = [
  { id: 'm1', name: 'Ada', email: 'ada@x.dev', joinedAt: new Date('2026-01-10').toISOString() },
  { id: 'm2', name: 'Bo', email: 'bo@x.dev', joinedAt: new Date('2026-02-14').toISOString() },
]

export const useLibrary = defineStore('library', () => {
  const books = ref(seedBooks)
  const members = ref(seedMembers)
  const loans = ref([])

  const openLoans = computed(() =>
    loans.value.filter(l => !l.returnedAt))

  const overdue = computed(() => {
    const now = Date.now()
    return openLoans.value.filter(l =>
      new Date(l.dueAt).getTime() < now)
  })

  function copiesAvailable(bookId) {
    const book = books.value.find(b => b.id === bookId)
    if (!book) return 0
    const out = openLoans.value.filter(l => l.bookId === bookId).length
    return book.copies - out
  }

  function lend(bookId, memberId, days = 14) {
    if (copiesAvailable(bookId) < 1)
      throw new Error('No copies available')
    const now = new Date()
    const due = new Date(now.getTime() + days * 24 * 3600 * 1000)
    loans.value.push({
      id: crypto.randomUUID(),
      bookId, memberId,
      borrowedAt: now.toISOString(),
      dueAt: due.toISOString(),
      returnedAt: null,
    })
  }

  function returnLoan(loanId) {
    const loan = loans.value.find(l => l.id === loanId)
    if (!loan) throw new Error('Loan not found')
    if (loan.returnedAt) throw new Error('Already returned')
    loan.returnedAt = new Date().toISOString()
  }

  function addBook(book) {
    books.value.push({ id: crypto.randomUUID(), copies: 1, tags: [], ...book })
  }

  function addMember(member) {
    members.value.push({
      id: crypto.randomUUID(),
      joinedAt: new Date().toISOString(),
      ...member,
    })
  }

  return {
    books, members, loans,
    openLoans, overdue,
    copiesAvailable, lend, returnLoan,
    addBook, addMember,
  }
})
