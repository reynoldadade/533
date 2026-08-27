<template>
  <BaseCard class="product-card" hoverable>
    <div class="product-card__image-wrapper">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="product-card__image"
        loading="lazy"
      />
      <span 
        v-if="product.stock < 10 && product.stock > 0" 
        class="product-card__badge product-card__badge--warning"
      >
        Low Stock
      </span>
      <span 
        v-else-if="product.stock === 0" 
        class="product-card__badge product-card__badge--danger"
      >
        Out of Stock
      </span>
    </div>

    <div class="product-card__content">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__description">{{ truncatedDescription }}</p>
      
      <div class="product-card__footer">
        <span class="product-card__price">{{ formattedPrice }}</span>
        <BaseButton 
          size="sm"
          :disabled="product.stock === 0 || isInCart"
          @click="handleAddToCart"
        >
          {{ buttonText }}
        </BaseButton>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Product } from '@/types/global.types'
import { BaseCard, BaseButton } from '@/components/ui'
import { formatPrice, truncateText } from '@/utils/formatters'

interface Props {
  product: Product
  isInCart?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isInCart: false
})

interface Emits {
  (e: 'add-to-cart', product: Product): void
}

const emit = defineEmits<Emits>()

const formattedPrice = computed(() => formatPrice(props.product.price))
const truncatedDescription = computed(() => 
  truncateText(props.product.description, 80)
)

const buttonText = computed(() => {
  if (props.product.stock === 0) return 'Out of Stock'
  if (props.isInCart) return 'In Cart'
  return 'Add to Cart'
})

const handleAddToCart = () => {
  emit('add-to-cart', props.product)
}
</script>

<style scoped>
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.product-card__image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background-color: var(--color-gray-100);
}

.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-card__image {
  transform: scale(1.05);
}

.product-card__badge {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
  text-transform: uppercase;
}

.product-card__badge--warning {
  background-color: var(--color-warning);
  color: var(--color-white);
}

.product-card__badge--danger {
  background-color: var(--color-danger);
  color: var(--color-white);
}

.product-card__content {
  padding: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  flex: 1;
}

.product-card__name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-gray-900);
  margin: 0;
}

.product-card__description {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.5;
  flex: 1;
}

.product-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-top: auto;
}

.product-card__price {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
}
</style>
