<template>
  <BaseCard class="cart-summary">
    <h2 class="cart-summary__title">Order Summary</h2>
    
    <div class="cart-summary__row">
      <span>Items ({{ itemCount }})</span>
      <span>{{ formattedSubtotal }}</span>
    </div>

    <div class="cart-summary__row">
      <span>Shipping</span>
      <span>{{ shippingText }}</span>
    </div>

    <div class="cart-summary__divider"></div>

    <div class="cart-summary__row cart-summary__total">
      <span>Total</span>
      <span>{{ formattedTotal }}</span>
    </div>

    <BaseButton 
      full-width
      size="lg"
      @click="handleCheckout"
    >
      Proceed to Checkout
    </BaseButton>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BaseCard, BaseButton } from '@/components/ui'
import { formatPrice } from '@/utils/formatters'
import { useToast } from '@/composables/useToast'

interface Props {
  itemCount: number
  total: number
}

const props = defineProps<Props>()

const { info } = useToast()

const formattedSubtotal = computed(() => formatPrice(props.total))
const formattedTotal = computed(() => formatPrice(props.total)) // In real app, add shipping/tax
const shippingText = computed(() => props.total > 100 ? 'FREE' : formatPrice(9.99))

const handleCheckout = () => {
  info('Checkout feature coming soon!')
}
</script>

<style scoped>
.cart-summary {
  position: sticky;
  top: calc(var(--header-height) + var(--space-4));
}

.cart-summary__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 0 0 var(--space-4) 0;
}

.cart-summary__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-3) 0;
  font-size: var(--font-size-base);
  color: var(--color-gray-700);
}

.cart-summary__divider {
  height: 1px;
  background-color: var(--color-gray-200);
  margin: var(--space-2) 0;
}

.cart-summary__total {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-gray-900);
  padding: var(--space-4) 0;
}
</style>
