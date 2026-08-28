<!--
  From "The four moves: Probe, Build, Reflect, Catalogue" - the first
  worked example of the loop. A small cart total that derives subtotal,
  tax, and total from a list of items via chained computeds.
-->
<script setup>
import { ref, computed } from 'vue'

const items = ref([
  { id: 1, name: 'Notebook', qty: 2, price: 4.50 },
  { id: 2, name: 'Pen', qty: 5, price: 1.20 },
])

// computed re-runs only when its reactive deps change
const subtotal = computed(() =>
  items.value.reduce((sum, i) => sum + i.qty * i.price, 0)
)
const tax = computed(() => subtotal.value * 0.08)
const total = computed(() => subtotal.value + tax.value)

function addOne(id) {
  const row = items.value.find(i => i.id === id)
  if (row) row.qty += 1
}
</script>

<template>
  <ul>
    <li v-for="i in items" :key="i.id">
      {{ i.name }} × {{ i.qty }} @ £{{ i.price.toFixed(2) }}
      <button @click="addOne(i.id)">+</button>
    </li>
  </ul>
  <p>Subtotal: £{{ subtotal.toFixed(2) }}</p>
  <p>Tax: £{{ tax.toFixed(2) }}</p>
  <p>Total: £{{ total.toFixed(2) }}</p>
</template>
