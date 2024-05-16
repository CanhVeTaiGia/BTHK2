import { useState } from "react";

export default function Bt1() {
  const [name, setName] = useState<string>("Nguyễn Văn A");
  return (
    <>
      <p>{name}</p>
    </>
  );
}
