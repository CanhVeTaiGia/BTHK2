import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const [prevCounterRef, setPrevCounterRef] = useState<number | undefined>();
  const handleClick = () => {
    setCount(count + 1);
    setPrevCounterRef(count)
  }
  return <>
    <p>Giá trị trước: {prevCounterRef}</p>
    <p>Giá trị sau: {count}</p>
    <button onClick={handleClick}>Giá trị tăng</button>
  </>;
}
