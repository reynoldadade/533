import { ref } from 'vue'
import { describe, it, expect } from 'vitest'
import { useFilter } from './useFilter'

const rows = ref([{ name: 'Ada', role: 'Engineer' },
  { name: 'Bo', role: 'Designer' }])
const columns = ref([{ key: 'name' }, { key: 'role' }])

describe('useFilter', () => {
  it('returns all rows when query is empty', () => {
    const result = useFilter(rows, columns, ref(''))
    expect(result.value).toHaveLength(2)
  })

  it('matches case-insensitively across columns', () => {
    const result = useFilter(rows, columns, ref('design'))
    expect(result.value.map(r => r.name)).toEqual(['Bo'])
  })
})
