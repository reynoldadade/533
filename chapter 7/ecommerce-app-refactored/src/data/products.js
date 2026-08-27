// Seed data, unchanged from ecommerce-app-legacy. The chapter's
// Refactored file tree doesn't list a data/ folder, but it also
// doesn't list main.js, App.vue, or style.css, so it's read as
// illustrating the reorganized folders, not a complete file listing.
// The mock catalog itself isn't part of what the chapter's audit or
// review simulation asks to change, so it stays exactly as it was.
export const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description:
      'Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 15,
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitoring, GPS, and 7-day battery life.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 22,
  },
  {
    id: '3',
    name: 'Leather Backpack',
    description: 'Genuine leather backpack with laptop compartment and multiple pockets.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'clothing',
    stock: 8,
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'sports',
    stock: 30,
  },
  {
    id: '5',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe and auto-brew feature.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    category: 'home',
    stock: 12,
  },
  {
    id: '6',
    name: 'Wireless Keyboard',
    description: 'Compact mechanical keyboard with RGB backlight and multi-device support.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 18,
  },
]
