// React 19 (function component)
import { useState, useMemo } from 'react'

export default function Counter() {
  const [n, setN] = useState(0)
  const isEven = useMemo(() => n % 2 === 0, [n])
  return (
    <>
      <button onClick={() => setN(n + 1)}>+1</button>
      <p>{n} ({isEven ? 'even' : 'odd'})</p>
    </>
  )
}
