import { useState } from "react";

export default function Checkbox() {
  const [checkbox, setChecbox] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value, checked} = e.target;
    checked? setChecbox([...checkbox, value]) : setChecbox(checkbox.filter((item) => item !== value));
  };
  return (
    <>
    <p>Sở thích [{checkbox.join(', ')}]</p>
      <br />
      <input onChange={handleChange} type="checkbox" value={"Đi chơi"} /> Đi chơi
      <br />
      <input onChange={handleChange} type="checkbox" value={"Code"} /> Code
      <br />
      <input onChange={handleChange} type="checkbox" value={"Bơi lội"} /> Bơi lội
      <br />
      <input onChange={handleChange} type="checkbox" value={"Nhảy dây"} /> Nhảy
      dây
    </>
  );
}
