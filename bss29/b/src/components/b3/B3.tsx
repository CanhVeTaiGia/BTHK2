import { useState } from "react"

export default function B3() {
    const [date, setDate] = useState<string>('')
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setDate(e.target.value)
    }
    return (
        <>
            <h2>Dữ liệu: {date}</h2>
            <input onChange={changeValue} placeholder="Nhập dữ liệu" type="date" />
        </>
    )
}
