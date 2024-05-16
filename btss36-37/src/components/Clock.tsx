import { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState<number[]>(() => {
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    return [hour, minute, second];
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock([now.getHours(), now.getMinutes(), now.getSeconds()]);
    };
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <h1>Current time: {clock.join(":")}</h1>
    </>
  );
}
