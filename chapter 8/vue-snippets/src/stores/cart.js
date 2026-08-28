// From "The Learning Loop in Practice" - Loop 1, Build. A setup-style
// Pinia store: it reads like a normal composable, which is the point.
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // state
  const items = ref([]) // [{ id, name, price, qty }]

  // getters
  const count = computed(() =>
    items.value.reduce((s, i) => s + i.qty, 0))
  const total = computed(() =>
    items.value.reduce((s, i) => s + i.qty * i.price, 0))

  // actions
  function add(item, qty = 1) {
    const row = items.value.find(i => i.id === item.id)
    if (row) row.qty += qty
    else items.value.push({ ...item, qty })
  }

  function remove(id) {
    items.value = items.value.filter(i => i.id !== id)
  }

  function clear() { items.value = [] }

  return { items, count, total, add, remove, clear }
})
