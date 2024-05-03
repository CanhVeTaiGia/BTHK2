import React from 'react'
import './App.css'
import ListCourse from './components/ListCourse'
import Calculation from './components/Calculation'
import UserInfo from './components/UserInfo'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'

export default function App() {
  return (
    <div className='rooted'>
      <p>Bài 1</p>
      <ListCourse></ListCourse>
      <p>Bài 2</p>
      <Calculation></Calculation>
      <p>Bài 3</p>
      <UserInfo></UserInfo>
      <p>Bài 4-5</p>
      <ColorBox></ColorBox>
      <p>Bài 6</p>
      <FormatName></FormatName>
    </div>
  )
}
