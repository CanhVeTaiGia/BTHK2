import { useState } from "react"

export default function B10() {
    const [gender, setGender] = useState<string>('');
    const randomGender = () =>{
        let number = Math.floor(Math.random() * 10);
        number % 2 === 0? setGender('Nam') : setGender('Nữ');
    }
  return (
    <>
        <h3>Gender: {gender}</h3>
        <button onClick={randomGender}>Random gender</button>
    </>
  )
}
