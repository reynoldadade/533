<!--
  Not a real app - just an index page so every snippet in this folder
  compiles and renders together in one dev server, instead of being
  disconnected files nobody ever loads. See README.md for which
  chapter section each piece came from.
-->
<script setup>
import CartTotal from './components/CartTotal.vue'
import CartIcon from './components/CartIcon.vue'
import People from './views/People.vue'
</script>

<template>
  <h1>Chapter 8 Vue Snippets</h1>

  <section>
    <h2>The loop: CartTotal</h2>
    <CartTotal />
  </section>

  <section>
    <h2>Pinia cart store: CartIcon</h2>
    <CartIcon />
  </section>

  <section>
    <h2>The DataTable build: People</h2>
    <People />
  </section>
</template>
