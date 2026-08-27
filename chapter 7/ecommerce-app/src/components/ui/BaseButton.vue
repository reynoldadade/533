<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled || loading"
    :type="type"
    @click="handleClick"
  >
    <span v-if="loading" class="spinner"></span>
    <slot v-else />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  loading: false,
  disabled: false,
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const buttonClasses = computed(() => [
  'base-button',
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
  {
    'base-button--full-width': props.fullWidth,
    'base-button--loading': props.loading,
    'base-button--disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  cursor: pointer;
  border: none;
  outline: none;
  user-select: none;
}

/* Sizes */
.base-button--sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-sm);
}

.base-button--md {
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-base);
}

.base-button--lg {
  padding: var(--space-4) var(--space-6);
  font-size: var(--font-size-lg);
}

/* Variants */
.base-button--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.base-button--primary:hover:not(:disabled) {
  background-color: var(--color-primary-dark);
}

.base-button--secondary {
  background-color: var(--color-gray-200);
  color: var(--color-gray-900);
}

.base-button--secondary:hover:not(:disabled) {
  background-color: var(--color-gray-300);
}

.base-button--danger {
  background-color: var(--color-danger);
  color: var(--color-white);
}

.base-button--danger:hover:not(:disabled) {
  background-color: #dc2626;
}

.base-button--ghost {
  background-color: transparent;
  color: var(--color-gray-700);
  border: 1px solid var(--color-gray-300);
}

.base-button--ghost:hover:not(:disabled) {
  background-color: var(--color-gray-100);
}

/* States */
.base-button--full-width {
  width: 100%;
}

.base-button--loading,
.base-button--disabled,
.base-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Spinner */
.spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
