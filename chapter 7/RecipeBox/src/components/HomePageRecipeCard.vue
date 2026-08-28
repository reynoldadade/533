<template>
  <div class="recipe-card">
    <img :src="recipe.image" :alt="recipe.name" />
    <h3>{{ recipe.name }}</h3>
    <p class="meta">{{ recipe.cuisine }} &middot; {{ recipe.minutes }} min</p>
    <p class="ingredients">{{ recipe.ingredients.join(', ') }}</p>
    <button :class="{ 'is-favorited': isFavorited }" @click="$emit('toggle-favorite', recipe)">
      {{ isFavorited ? 'Favorited' : 'Add to Favorites' }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  isFavorited: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['toggle-favorite'])
</script>
