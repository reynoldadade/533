# ShopVue - Production E-Commerce App

A modern, production-ready e-commerce application built with Vue 3, TypeScript, and Vite.

## 🚀 Features

- ✅ **Product Catalog** - Browse products with filtering and search
- ✅ **Shopping Cart** - Add, remove, and manage quantities
- ✅ **Persistent Cart** - Cart data saved in localStorage
- ✅ **Responsive Design** - Works on all device sizes
- ✅ **TypeScript** - Full type safety throughout
- ✅ **Component Architecture** - Reusable UI components
- ✅ **Feature-Based Structure** - Scalable architecture
- ✅ **Toast Notifications** - User feedback for actions
- ✅ **Vue Router** - Navigation between pages

## 📁 Project Structure

```
src/
├── assets/              # Global styles and static assets
├── components/          # Shared components
│   ├── ui/             # Base UI components (Button, Card, Input, Modal)
│   ├── layout/         # Layout components (Header, Footer)
│   └── common/         # Shared business components
├── features/           # Feature modules
│   ├── products/       # Product browsing feature
│   └── cart/           # Shopping cart feature
├── composables/        # Shared Vue composables
├── router/             # Vue Router configuration
├── services/           # Data services (mock data)
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🛠 Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Vue Router** - Official routing library
- **Composables** - Lightweight state management

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Architecture Patterns

### Component Hierarchy

1. **Base UI Components** (`components/ui/`)
   - Presentational, reusable, no business logic
   - Example: BaseButton, BaseCard, BaseInput, BaseModal

2. **Common Components** (`components/common/`)
   - Shared business components
   - Example: ProductCard, CartItem

3. **Feature Components** (`features/*/components/`)
   - Feature-specific components
   - Example: ProductGrid, CartSummary

### State Management

Uses **composables** for state management:

- `useCart()` - Shopping cart state and operations
- `useProducts()` - Product filtering and data
- `useLocalStorage()` - Persistent storage helper
- `useToast()` - Toast notifications

### Parent-Child Communication

```vue
<!-- Parent passes data down via props -->
<ProductCard :product="product" @add-to-cart="handleAdd" />

<!-- Child emits events up -->
<BaseButton @click="emit('add-to-cart', product)">
```

### Shared State (Composables)

```typescript
// Both components access the same reactive state
const { cartItems, addToCart } = useCart()
```

## 🎨 Component Examples

### BaseButton Usage

```vue
<BaseButton 
  variant="primary" 
  size="lg" 
  :loading="isLoading"
  @click="handleClick"
>
  Add to Cart
</BaseButton>
```

### BaseModal Usage

```vue
<BaseModal v-model="showModal" title="Confirm" size="md">
  <p>Are you sure?</p>
  <template #footer>
    <BaseButton @click="confirm">Yes</BaseButton>
  </template>
</BaseModal>
```

## 🔧 Configuration

### Path Aliases

TypeScript paths are configured in `vite.config.ts`:

```typescript
'@': './src' // Import from src using @/
```

### CSS Variables

All design tokens are defined in `src/assets/styles/main.css`:

```css
--color-primary: #3b82f6;
--space-4: 1rem;
--radius-md: 0.5rem;
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

## 🚢 Deployment

### Build

```bash
npm run build
```

The `dist/` folder will contain the production-ready static files.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   base: '/your-repo-name/'
   ```
2. Build and deploy:
   ```bash
   npm run build
   # Push dist folder to gh-pages branch
   ```

## 🧪 Testing the App

1. **Browse Products**: Visit homepage to see product catalog
2. **Search**: Use search bar to filter products
3. **Filter by Category**: Click category buttons
4. **Add to Cart**: Click "Add to Cart" on any product
5. **View Cart**: Click cart icon in header
6. **Manage Quantities**: Use +/- buttons in cart
7. **Remove Items**: Click trash icon
8. **Persistent Data**: Refresh page - cart persists!

## 🎓 Learning Resources

This project demonstrates:

- Vue 3 Composition API
- TypeScript integration
- Component composition patterns
- Props and events (parent-child communication)
- Composables for state management
- Vue Router for navigation
- Reactive state with `ref()` and `computed()`
- Lifecycle hooks (`onMounted`)
- Teleport for modals/toasts
- CSS custom properties (design tokens)
- Production build optimization

## 🔮 Future Enhancements

- [ ] User authentication
- [ ] Backend API integration
- [ ] Payment processing
- [ ] Product detail pages
- [ ] Order history
- [ ] Product reviews & ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering (price range, ratings)
- [ ] Unit tests (Vitest)
- [ ] E2E tests (Playwright)

## 📄 License

MIT

---

**Built with ❤️ for learning Vue 3**
