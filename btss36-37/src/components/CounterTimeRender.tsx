import { useEffect, useState } from "react";

export default function CounterTimeRender() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <p>Thời gian đã trôi qua: {seconds} giây</p>
    </>
  );
}
