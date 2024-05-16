import { useState } from "react";

export default function CountText() {
  const [textArea, setTextArea] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };
  return (
    <>
      <textarea onChange={handleChange} cols={30} rows={5}></textarea>
      <p>Số ký tự: {textArea.length}</p>
    </>
  );
}
