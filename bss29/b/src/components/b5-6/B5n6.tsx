import React, { useState } from 'react'

export default function B5n6() {
    const [check, setCheck] = useState<boolean>(true);
    const submit = () =>{
        setCheck(!check);
    }
  return (
    <>
        <h2>Click để chuyển</h2>
        <span>Giá trị {check.toString()}: <button onClick={submit}>{check? 'Hiện' : 'Ẩn'}</button></span>
    </>
  )
}
