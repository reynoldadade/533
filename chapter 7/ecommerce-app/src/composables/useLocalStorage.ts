import { ref, watch } from 'vue'

/**
 * Composable for syncing reactive data with localStorage
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  // Try to load from localStorage
  const getStoredValue = (): T => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  }

  const storedValue = ref<T>(getStoredValue())

  // Watch for changes and sync to localStorage
  watch(
    storedValue,
    (newValue) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error(`Error writing to localStorage key "${key}":`, error)
      }
    },
    { deep: true }
  )

  return storedValue
}
