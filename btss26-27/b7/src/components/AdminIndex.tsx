import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Main from './Main'
import Footer from './Footer'
import './adminIndex.css'


export default function AdminIndex() {
  return (
    <>
      <Header></Header>
      <span className='span'>
        <Menu></Menu>
        <div className="div">
          <Main></Main>
          <Footer></Footer>
        </div>
      </span>
    </>
  )
}
