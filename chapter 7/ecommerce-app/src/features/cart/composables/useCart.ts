import { computed, readonly } from 'vue'
import type { Product, CartItem } from '@/types/global.types'
import { useLocalStorage } from '@/composables/useLocalStorage'

// Shared cart state (persisted in localStorage)
const cartItems = useLocalStorage<CartItem[]>('cart', [])

export function useCart() {
  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItem = cartItems.value.find(
      (item) => item.product.id === product.id
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cartItems.value.push({ product, quantity })
    }
  }

  const removeFromCart = (productId: string) => {
    const index = cartItems.value.findIndex(
      (item) => item.product.id === productId
    )
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId: string, quantity: number) => {
    const item = cartItems.value.find((item) => item.product.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  const cartCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const cartTotal = computed(() => {
    return cartItems.value.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    )
  })

  const isInCart = (productId: string): boolean => {
    return cartItems.value.some((item) => item.product.id === productId)
  }

  const getItemQuantity = (productId: string): number => {
    const item = cartItems.value.find((item) => item.product.id === productId)
    return item ? item.quantity : 0
  }

  return {
    cartItems: readonly(cartItems),
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity
  }
}
