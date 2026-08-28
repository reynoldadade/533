<template>
  <nav>
    <router-link to="/">Recipes</router-link>
    <router-link to="/favorites">Favorites<span v-if="favoriteCount" class="badge">{{ favoriteCount }}</span></router-link>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const favoriteCount = ref(0)

onMounted(() => {
  const stored = localStorage.getItem('favorites')
  favoriteCount.value = stored ? JSON.parse(stored).length : 0
})
</script>
