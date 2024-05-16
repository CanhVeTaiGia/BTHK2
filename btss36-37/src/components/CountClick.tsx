import { useState, useEffect } from "react";

export default function CountClick() {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = "Click " + count + " lần";
  }, [count]);
  return (
    <>
      <button onClick={handleClick}>Click {count} lần</button>
    </>
  );
}
