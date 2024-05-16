import { useState } from "react";

export default function Select() {
  const [option, setOption] = useState<string>("");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    option === "-- Chọn thành phố --"
      ? setOption(e.target.value)
      : setOption("");
  };
  return (
    <>
      <p>{option}</p>
      <select onChange={handleSelect}>
        <option value="-- Chọn thành phố --">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Ninh Bình">Ninh Bình</option>
      </select>
    </>
  );
}
