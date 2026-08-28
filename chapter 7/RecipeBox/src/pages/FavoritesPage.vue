<template>
  <div>
    <h1>Favorites</h1>

    <p v-if="favoriteRecipes.length === 0" class="state-message">
      You haven't favorited any recipes yet.
    </p>

    <div v-else class="recipe-grid">
      <HomePageRecipeCard
        v-for="recipe in favoriteRecipes"
        :key="recipe.id"
        :recipe="recipe"
        :is-favorited="true"
        @toggle-favorite="removeFavorite"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import HomePageRecipeCard from '../components/HomePageRecipeCard.vue'
import { recipes as allRecipes } from '../data/recipes'

const favoriteIds = ref([])

onMounted(() => {
  const stored = localStorage.getItem('favorites')
  favoriteIds.value = stored ? JSON.parse(stored) : []
})

const favoriteRecipes = computed(() =>
  allRecipes.filter((recipe) => favoriteIds.value.includes(recipe.id)),
)

function removeFavorite(recipe) {
  favoriteIds.value = favoriteIds.value.filter((id) => id !== recipe.id)
  localStorage.setItem('favorites', JSON.stringify(favoriteIds.value))
}
</script>
