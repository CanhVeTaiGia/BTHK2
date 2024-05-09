import { useState } from 'react'
import './App.css'
import Jobs from './components/Jobs'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className='main'>
      <h2>Danh sách công việc</h2>
      <div>
        <input onChange={(e) => e.target.value} placeholder='Nhập tên công việc' className='input-name' type="text" />
        <button className='add-button'>Thêm</button>
      </div>
        <Jobs></Jobs>
      <div className='span doneJob'>Công việc đã hoàn thành: </div>
    </div>
    </>
  )
}

export default App
