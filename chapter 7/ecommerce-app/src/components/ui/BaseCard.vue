<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  padding: 'md',
  hoverable: false,
  clickable: false
})

const cardClasses = computed(() => [
  'base-card',
  `base-card--padding-${props.padding}`,
  {
    'base-card--hoverable': props.hoverable,
    'base-card--clickable': props.clickable
  }
])
</script>

<style scoped>
.base-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

/* Padding variants */
.base-card--padding-none {
  padding: 0;
}

.base-card--padding-sm {
  padding: var(--space-3);
}

.base-card--padding-md {
  padding: var(--space-4);
}

.base-card--padding-lg {
  padding: var(--space-6);
}

/* Interactive states */
.base-card--hoverable:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.base-card--clickable {
  cursor: pointer;
}

.base-card--clickable:active {
  transform: translateY(0);
  box-shadow: var(--shadow-md);
}
</style>
