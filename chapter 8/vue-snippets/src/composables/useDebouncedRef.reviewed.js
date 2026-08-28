// The version after review: the watcher and its pending timeout are now
// cleaned up via onScopeDispose, fixing the leak the review flagged in
// long-lived parents.
import { ref, watch, onScopeDispose } from 'vue'

export function useDebouncedRef(source, ms = 300) {
  const debounced = ref(source.value)
  let timer

  const stop = watch(source, (v) => {
    clearTimeout(timer)
    timer = setTimeout(() => (debounced.value = v), ms)
  })

  onScopeDispose(() => {
    clearTimeout(timer)
    stop()
  })

  return debounced
}
