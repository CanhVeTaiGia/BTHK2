import { useState } from "react";

export default function Bt3() {
  const [item, setItem] = useState<boolean>(false);
  return (
    <>
      <p className={item ? "black" : "red"}>Tiêu đề văn bản</p>
      <button
        onClick={() => {
          setItem(!item);
        }}
      >
        click
      </button>
    </>
  );
}
