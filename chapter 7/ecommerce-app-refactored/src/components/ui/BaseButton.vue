<!--
  The shared UI library this chapter's "Component Reuse Strategies"
  section describes: "Professional teams often maintain shared UI
  libraries...buttons, cards, modals, inputs, layout containers." This
  is the first of those two (BaseButton, BaseCard). It knows nothing
  about products or the cart, it only accepts configuration through
  props and communicates outward with a click event, so it can be
  reused anywhere a button is needed.
-->
<template>
  <button
    class="base-button"
    :class="{ 'base-button--danger': variant === 'danger' }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>
