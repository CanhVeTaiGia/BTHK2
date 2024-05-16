import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <input onChange={handleChange} type="text" />
      <p>{input}</p>
    </>
  );
}
