import type { Product } from '@/types/global.types'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life and superior sound quality.',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 15,
    rating: 4.5
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Advanced fitness tracking, heart rate monitoring, GPS, and 7-day battery life.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 22,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Leather Backpack',
    description: 'Genuine leather backpack with laptop compartment and multiple pockets.',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    category: 'clothing',
    stock: 8,
    rating: 4.3
  },
  {
    id: '4',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    category: 'sports',
    stock: 30,
    rating: 4.6
  },
  {
    id: '5',
    name: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe and auto-brew feature.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    category: 'home',
    stock: 12,
    rating: 4.4
  },
  {
    id: '6',
    name: 'Wireless Keyboard',
    description: 'Compact mechanical keyboard with RGB backlight and multi-device support.',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 18,
    rating: 4.5
  },
  {
    id: '7',
    name: 'Yoga Mat',
    description: 'Non-slip eco-friendly yoga mat with carrying strap and alignment marks.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    category: 'sports',
    stock: 25,
    rating: 4.2
  },
  {
    id: '8',
    name: 'Denim Jacket',
    description: 'Classic denim jacket with vintage wash and comfortable fit.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    category: 'clothing',
    stock: 14,
    rating: 4.4
  },
  {
    id: '9',
    name: 'Desk Lamp',
    description: 'LED desk lamp with adjustable brightness and USB charging port.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    category: 'home',
    stock: 20,
    rating: 4.3
  },
  {
    id: '10',
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof speaker with 360° sound and 12-hour playtime.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    category: 'electronics',
    stock: 16,
    rating: 4.6
  },
  {
    id: '11',
    name: 'Sunglasses',
    description: 'UV protection polarized sunglasses with metal frame.',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    category: 'clothing',
    stock: 10,
    rating: 4.5
  },
  {
    id: '12',
    name: 'Plant Pot Set',
    description: 'Ceramic plant pot set with drainage holes and saucers.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop',
    category: 'home',
    stock: 28,
    rating: 4.1
  }
]

// Simulate API delay
export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts)
    }, 300)
  })
}

export const getProductById = (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProducts.find(p => p.id === id))
    }, 200)
  })
}
