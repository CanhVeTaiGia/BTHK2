import { useState } from "react";

export default function Radio() {
  const [radio, setRadio] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(e.target.value);
  };
  return (
    <>
      <p>{radio}</p>
      <input
        name="gender"
        onChange={handleChange}
        value={"Nam"}
        type="radio"
      />{" "}
      Nam
      <br />
      <input
        name="gender"
        onChange={handleChange}
        value={"Nữ"}
        type="radio"
      />{" "}
      Nữ
      <br />
      <input
        name="gender"
        onChange={handleChange}
        value={"Khác"}
        type="radio"
      />{" "}
      Khác
    </>
  );
}
