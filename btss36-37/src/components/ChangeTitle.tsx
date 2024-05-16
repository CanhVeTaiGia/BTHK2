import { useEffect, useState } from "react";

export default function ChangeTitle() {
  const [title, setTitle] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <input onChange={handleChange} placeholder="Nhập tiêu đề" type="text" />
    </>
  );
}
