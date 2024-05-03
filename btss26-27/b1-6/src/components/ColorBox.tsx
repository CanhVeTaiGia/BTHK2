import React from 'react'

export default function ColorBox() {
    const colors = ['red', 'blue', 'green'];
  return (
    <div style={{display: 'flex', marginLeft: '0px', gap: '10px'}}>
        {colors.map(e =>{
            return <div style={{color: '#fff' ,width: '200px', height: '200px', backgroundColor: e, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{e}</div>
        })}
    </div>
  )
}
