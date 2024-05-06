import React, { useState } from 'react'

export default function B1() {
    const handleClick = () => {
        console.log("clicked");
        
    }
  return (
    <button onClick={handleClick}>Click me</button>
  )
}
