// SolidJS
import { createSignal, createMemo } from 'solid-js'

export default function Counter() {
  const [n, setN] = createSignal(0)
  const isEven = createMemo(() => n() % 2 === 0)
  return (
    <>
      <button onClick={() => setN(n() + 1)}>+1</button>
      <p>{n()} ({isEven() ? 'even' : 'odd'})</p>
    </>
  )
}
