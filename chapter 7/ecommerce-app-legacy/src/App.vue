<!--
  No layout system here (no AppHeader, no MainLayout). Chapter 7's
  Initial Version file tree doesn't have one yet, so navigation is just
  inlined at the app root.
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
