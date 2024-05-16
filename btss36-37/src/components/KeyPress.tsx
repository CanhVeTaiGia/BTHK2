import React, { useEffect, useState } from "react";

interface KeyInfo {
  key: string;
  keyCode: number;
}
export default function KeyPress() {
  const [keyInfo, setKeyInfo] = useState<KeyInfo>({ key: "", keyCode: 0 });
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeyInfo({ key: e.key, keyCode: e.keyCode });
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  return (
    <>
      <p>Bạn đã nhấn phím: {keyInfo.key}</p>
      <p>Mã phím: {keyInfo.keyCode}</p>
    </>
  );
}
