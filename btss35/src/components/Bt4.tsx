import { useState } from "react";

export default function Bt4() {
  const [button, setButton] = useState<boolean>(true);
  return (
    <>
      {button ? (
        <button onClick={() => setButton(!button)}>Hiện</button>
      ) : (
        <button onClick={() => setButton(!button)}>Ẩn</button>
      )}
      {button ? "" : <h2>Tiêu đề văn bản</h2>}
    </>
  );
}
