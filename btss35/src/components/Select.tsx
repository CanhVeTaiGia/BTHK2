import { useState } from "react";

export default function Select() {
  const [option, setOption] = useState<string>("");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
  };
  return (
    <>
      <p>{option}</p>
      <select onChange={handleSelect}>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Ninh Bình">Ninh Bình</option>
      </select>
    </>
  );
}
