import { useState } from "react"

export default function B2() {
    const [data, setData] = useState<string>('')
    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setData(e.target.value)
    }
    return (
        <>
            <h2>Dữ liệu: {data}</h2>
            <input onChange={changeValue} placeholder="Nhập dữ liệu" type="text" />
        </>
    )
}
