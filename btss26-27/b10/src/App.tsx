import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoListIndex from './components/Bt10'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoListIndex></TodoListIndex>
    </>
  )
}

export default App
