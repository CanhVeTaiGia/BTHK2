import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>
        Click để tăng số lần click
      </button>
    </>
  );
}
