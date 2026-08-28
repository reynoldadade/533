import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useCartStore } from './cart'

describe('cart store', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('adds and totals items', () => {
    const cart = useCartStore()
    cart.add({ id: 1, name: 'Pen', price: 2 }, 3)
    expect(cart.count).toBe(3)
    expect(cart.total).toBeCloseTo(6.00)
  })

  it('preserves reactivity through storeToRefs', () => {
    const cart = useCartStore()
    const { count } = storeToRefs(cart)
    cart.add({ id: 2, name: 'Pad', price: 5 })
    expect(count.value).toBe(1)
  })
})
