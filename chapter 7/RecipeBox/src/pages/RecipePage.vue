<template>
  <div>
    <h1>Recipes</h1>

    <div class="controls">
      <input v-model="searchTerm" type="text" placeholder="Search by ingredient..." />
      <select v-model="selectedCuisine">
        <option value="">All cuisines</option>
        <option v-for="cuisine in cuisines" :key="cuisine" :value="cuisine">{{ cuisine }}</option>
      </select>
    </div>

    <p v-if="loading" class="state-message">Loading recipes...</p>
    <p v-else-if="error" class="state-message">Something went wrong loading recipes.</p>

    <div v-else class="recipe-grid">
      <HomePageRecipeCard
        v-for="recipe in visibleRecipes"
        :key="recipe.id"
        :recipe="recipe"
        :is-favorited="favoriteIds.includes(recipe.id)"
        @toggle-favorite="toggleFavorite"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import HomePageRecipeCard from '../components/HomePageRecipeCard.vue'
import { recipes as allRecipes } from '../data/recipes'

const recipes = ref([])
const loading = ref(false)
const error = ref(false)
const searchTerm = ref('')
const selectedCuisine = ref('')
const favoriteIds = ref([])

onMounted(async () => {
  loading.value = true
  recipes.value = await new Promise((resolve) => {
    setTimeout(() => resolve(allRecipes), 300)
  })
  loading.value = false

  const stored = localStorage.getItem('favorites')
  favoriteIds.value = stored ? JSON.parse(stored) : []
})

const cuisines = computed(() => [...new Set(recipes.value.map((r) => r.cuisine))])

function matchScore(recipe, term) {
  const words = term.toLowerCase().split(' ').filter(Boolean)
  let score = 0
  for (const word of words) {
    for (const ingredient of recipe.ingredients) {
      if (ingredient.toLowerCase().includes(word)) {
        score++
      }
    }
  }
  return score
}

const visibleRecipes = computed(() => {
  let result = recipes.value

  if (selectedCuisine.value) {
    result = result.filter((recipe) => recipe.cuisine === selectedCuisine.value)
  }

  if (searchTerm.value.trim()) {
    result = result
      .map((recipe) => ({ recipe, score: matchScore(recipe, searchTerm.value) }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((entry) => entry.recipe)
  }

  return result
})

function toggleFavorite(recipe) {
  const index = favoriteIds.value.indexOf(recipe.id)
  if (index > -1) {
    favoriteIds.value.splice(index, 1)
  } else {
    favoriteIds.value.push(recipe.id)
  }
  localStorage.setItem('favorites', JSON.stringify(favoriteIds.value))
}
</script>
