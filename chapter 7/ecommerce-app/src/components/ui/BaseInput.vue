<template>
  <div class="base-input">
    <label v-if="label" :for="inputId" class="base-input__label">
      {{ label }}
      <span v-if="required" class="base-input__required">*</span>
    </label>
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @input="handleInput"
      @blur="handleBlur"
    />
    <p v-if="error" class="base-input__error">{{ error }}</p>
    <p v-else-if="hint" class="base-input__hint">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string | number
  type?: 'text' | 'email' | 'password' | 'number' | 'search'
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  required?: boolean
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
  blur: [event: FocusEvent]
}>()

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`)

const inputClasses = computed(() => [
  'base-input__field',
  {
    'base-input__field--error': props.error,
    'base-input__field--disabled': props.disabled
  }
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  const value = props.type === 'number' ? Number(target.value) : target.value
  emit('update:modelValue', value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.base-input__label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-700);
}

.base-input__required {
  color: var(--color-danger);
  margin-left: var(--space-1);
}

.base-input__field {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  font-size: var(--font-size-base);
  color: var(--color-gray-900);
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
  outline: none;
}

.base-input__field:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.base-input__field--error {
  border-color: var(--color-danger);
}

.base-input__field--error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.base-input__field--disabled {
  background-color: var(--color-gray-100);
  cursor: not-allowed;
  opacity: 0.6;
}

.base-input__error {
  font-size: var(--font-size-sm);
  color: var(--color-danger);
}

.base-input__hint {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}
</style>
