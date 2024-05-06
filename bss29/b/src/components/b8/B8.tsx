import { useState } from "react"

export default function B8() {
    const [count, setCount] = useState<number>(0)
    const change = () => {
        setCount(count + 1)
    }
  return (
    <>
        <button onClick={change}>Click {count} lần</button>
    </>
  )
}
