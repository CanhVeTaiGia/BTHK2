import { useEffect, useRef } from "react"

export default function FocusInput() {
  const focusInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    focusInput.current?.focus();
  })
  return (
    <>
      <input style={{padding: '5px'}} placeholder="Focus me..." ref={focusInput} type="text" />
    </>
  )
}
