<template>
  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['toast', `toast--${toast.type}`]"
        >
          <span class="toast__icon">{{ getIcon(toast.type) }}</span>
          <span class="toast__message">{{ toast.message }}</span>
          <button 
            class="toast__close"
            @click="removeToast(toast.id)"
          >
            ×
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToast, type Toast } from '@/composables/useToast'

const { toasts, removeToast } = useToast()

const getIcon = (type: Toast['type']): string => {
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  }
  return icons[type]
}
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: calc(var(--header-height) + var(--space-4));
  right: var(--space-4);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  min-width: 300px;
  max-width: 500px;
  pointer-events: all;
}

.toast__icon {
  font-size: var(--font-size-lg);
  font-weight: 700;
  flex-shrink: 0;
}

.toast__message {
  flex: 1;
  font-size: var(--font-size-sm);
}

.toast__close {
  background: none;
  border: none;
  font-size: var(--font-size-2xl);
  line-height: 1;
  cursor: pointer;
  padding: 0;
  color: var(--color-gray-400);
  transition: color var(--transition-base);
}

.toast__close:hover {
  color: var(--color-gray-600);
}

/* Toast types */
.toast--success {
  border-left: 4px solid var(--color-success);
}

.toast--success .toast__icon {
  color: var(--color-success);
}

.toast--error {
  border-left: 4px solid var(--color-danger);
}

.toast--error .toast__icon {
  color: var(--color-danger);
}

.toast--info {
  border-left: 4px solid var(--color-primary);
}

.toast--info .toast__icon {
  color: var(--color-primary);
}

.toast--warning {
  border-left: 4px solid var(--color-warning);
}

.toast--warning .toast__icon {
  color: var(--color-warning);
}

/* Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all var(--transition-base);
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@media (max-width: 640px) {
  .toast-container {
    right: var(--space-2);
    left: var(--space-2);
  }

  .toast {
    min-width: auto;
  }
}
</style>
