<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click="handleOverlayClick">
        <div class="modal" :class="modalClasses" role="dialog" aria-modal="true">
          <div class="modal__header" v-if="$slots.header || title">
            <slot name="header">
              <h2 class="modal__title">{{ title }}</h2>
            </slot>
            <button 
              v-if="showClose"
              class="modal__close" 
              @click="close"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          
          <div class="modal__body">
            <slot />
          </div>
          
          <div class="modal__footer" v-if="$slots.footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showClose?: boolean
  closeOnOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  showClose: true,
  closeOnOverlay: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalClasses = computed(() => [
  `modal--${props.size}`
])

const close = () => {
  emit('update:modelValue', false)
}

const handleOverlayClick = (event: MouseEvent) => {
  if (props.closeOnOverlay && event.target === event.currentTarget) {
    close()
  }
}

// Prevent body scroll when modal is open
watch(() => props.modelValue, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: var(--space-4);
}

.modal {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.modal--sm {
  max-width: 400px;
}

.modal--md {
  max-width: 600px;
}

.modal--lg {
  max-width: 800px;
}

.modal--xl {
  max-width: 1200px;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-gray-200);
}

.modal__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 0;
}

.modal__close {
  background: none;
  border: none;
  font-size: var(--font-size-3xl);
  line-height: 1;
  color: var(--color-gray-500);
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.modal__close:hover {
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
}

.modal__body {
  padding: var(--space-6);
  overflow-y: auto;
  flex: 1;
}

.modal__footer {
  padding: var(--space-6);
  border-top: 1px solid var(--color-gray-200);
  display: flex;
  gap: var(--space-3);
  justify-content: flex-end;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity var(--transition-base);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal,
.modal-leave-active .modal {
  transition: transform var(--transition-base);
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.95);
}
</style>
