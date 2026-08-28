// From "Review the v1 with the Model" - the fix for the Overdue view
// relying on Date.now() inside a computed, which never re-evaluates as
// the clock advances. Reused by library-system/src/views/Overdue.vue.
import { ref, onMounted, onScopeDispose } from 'vue'

// Returns a reactive `now` ref that ticks every `ms` milliseconds.
export function useClock(ms = 60_000) {
  const now = ref(Date.now())
  let timer

  onMounted(() => {
    timer = setInterval(() => (now.value = Date.now()), ms)
  })

  onScopeDispose(() => clearInterval(timer))

  return now
}
