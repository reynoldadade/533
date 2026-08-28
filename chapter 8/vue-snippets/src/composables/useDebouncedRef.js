// From "A Worked Review" - the version fed into the code-review
// template, before the fix. See useDebouncedRef.reviewed.js for the
// version the AI review produced (adds cleanup via onScopeDispose).
import { ref, watch } from 'vue'

export function useDebouncedRef(source, ms = 300) {
  const debounced = ref(source.value)
  let t

  watch(source, (v) => {
    clearTimeout(t)
    t = setTimeout(() => debounced.value = v, ms)
  })

  return debounced
}
