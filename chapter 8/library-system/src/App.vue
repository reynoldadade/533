<template>
  <nav>
    <router-link to="/">Books</router-link>
    <router-link to="/members">Members</router-link>
    <router-link to="/lend">Lend</router-link>
    <router-link to="/overdue">Overdue</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script setup></script>
