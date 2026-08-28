import { computed } from 'vue'

// Returns a computed list of rows whose visible columns match `query`.
// Case-insensitive, falsy values become empty strings.
export function useFilter(rows, columns, query) {
  return computed(() => {
    const q = (query.value ?? '').trim().toLowerCase()
    if (!q) return rows.value
    const keys = columns.value.map(c => c.key)
    return rows.value.filter(row =>
      keys.some(k => String(row[k] ?? '').toLowerCase().includes(q))
    )
  })
}
