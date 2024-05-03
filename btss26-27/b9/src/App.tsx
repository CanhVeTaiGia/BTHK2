import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bt9 from './components/Bt9'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bt9></Bt9>
    </>
  )
}

export default App
