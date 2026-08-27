<!--
  Chapter 7 lists ProductFilters.vue in the "Component Responsibilities"
  section as the fix for an overloaded ProductList.vue that "begins
  handling filtering, sorting, pagination, and API requests." The
  chapter doesn't specify what the filtering itself should look like,
  so this implements the one facet the mock catalog actually supports:
  filtering by product category. It only knows about categories and a
  selected value, communicated through v-model, so it stays a single
  focused component that ProductList.vue owns and passes filtered data
  to, rather than a component that fetches or mutates anything itself.
-->
<template>
  <div class="filters-bar">
    <label for="category-filter">Category:</label>
    <select
      id="category-filter"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="">All categories</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>
