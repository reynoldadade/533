<template>
  <div class="cart-item">
    <img 
      :src="item.product.image" 
      :alt="item.product.name"
      class="cart-item__image"
    />
    
    <div class="cart-item__details">
      <h3 class="cart-item__name">{{ item.product.name }}</h3>
      <p class="cart-item__price">{{ formattedPrice }}</p>
    </div>

    <div class="cart-item__quantity">
      <button 
        class="cart-item__qty-btn"
        @click="decreaseQuantity"
        :disabled="item.quantity <= 1"
      >
        -
      </button>
      <span class="cart-item__qty-value">{{ item.quantity }}</span>
      <button 
        class="cart-item__qty-btn"
        @click="increaseQuantity"
        :disabled="item.quantity >= item.product.stock"
      >
        +
      </button>
    </div>

    <div class="cart-item__total">
      <span class="cart-item__total-price">{{ formattedTotal }}</span>
      <button 
        class="cart-item__remove"
        @click="handleRemove"
        title="Remove from cart"
      >
        🗑️
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CartItem } from '@/types/global.types'
import { useCart } from '@/features/cart/composables/useCart'
import { useToast } from '@/composables/useToast'
import { formatPrice } from '@/utils/formatters'

interface Props {
  item: CartItem
}

const props = defineProps<Props>()

const { updateQuantity, removeFromCart } = useCart()
const { info } = useToast()

const formattedPrice = computed(() => formatPrice(props.item.product.price))
const formattedTotal = computed(() => 
  formatPrice(props.item.product.price * props.item.quantity)
)

const increaseQuantity = () => {
  updateQuantity(props.item.product.id, props.item.quantity + 1)
}

const decreaseQuantity = () => {
  updateQuantity(props.item.product.id, props.item.quantity - 1)
}

const handleRemove = () => {
  removeFromCart(props.item.product.id)
  info(`${props.item.product.name} removed from cart`)
}
</script>

<style scoped>
.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  gap: var(--space-4);
  align-items: center;
  padding: var(--space-4);
  background-color: var(--color-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

@media (max-width: 640px) {
  .cart-item {
    grid-template-columns: 60px 1fr;
    gap: var(--space-3);
  }

  .cart-item__quantity,
  .cart-item__total {
    grid-column: 2;
  }
}

.cart-item__image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: var(--radius-md);
}

@media (max-width: 640px) {
  .cart-item__image {
    width: 60px;
    height: 60px;
  }
}

.cart-item__details {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.cart-item__name {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 0;
}

.cart-item__price {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
}

.cart-item__quantity {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background-color: var(--color-gray-100);
  border-radius: var(--radius-md);
  padding: var(--space-1);
}

.cart-item__qty-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  font-weight: 600;
  color: var(--color-gray-700);
}

.cart-item__qty-btn:hover:not(:disabled) {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.cart-item__qty-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.cart-item__qty-value {
  min-width: 32px;
  text-align: center;
  font-weight: 600;
  color: var(--color-gray-900);
}

.cart-item__total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space-2);
}

.cart-item__total-price {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-primary);
}

.cart-item__remove {
  background: none;
  border: none;
  font-size: var(--font-size-xl);
  cursor: pointer;
  padding: var(--space-1);
  opacity: 0.6;
  transition: all var(--transition-base);
}

.cart-item__remove:hover {
  opacity: 1;
  transform: scale(1.1);
}
</style>
