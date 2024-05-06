import { useState } from "react"

export default function B4() {
    const [city, setCity] = useState<string>('');
    const selectCity = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        e.target.value === '--- Chọn tỉnh / Thành phố---'? setCity('') : setCity(e.target.value);
    }
    return (
        <>
            <h1>Tỉnh thành phố: {city}</h1>
                <select onChange={selectCity}>
                    <option>--- Chọn tỉnh / Thành phố---</option>
                    <option>Hà Nam</option>
                    <option>Hà Nội</option>
                    <option>Nghệ An</option>
                    <option>Thanh Hóa</option>
                </select>
        </>
    )
}