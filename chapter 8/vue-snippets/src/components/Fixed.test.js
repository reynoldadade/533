import { mount, flushPromises } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Fixed from './Fixed.vue'

describe('Fixed', () => {
  it('reacts when items grow', async () => {
    const wrapper = mount(Fixed)
    // Trigger addItem through whatever the public surface is.
    wrapper.vm.addItem({ id: 1 })
    await flushPromises()
    expect(wrapper.vm.items).toHaveLength(1)
  })
})
