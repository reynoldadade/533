<!--
  Same as ecommerce-app-legacy: this chapter's Refactored file tree has
  no layouts/ folder, so navigation stays inlined at the app root
  rather than being extracted into an AppHeader/MainLayout that nothing
  in the chapter asks for.
-->
<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup></script>
