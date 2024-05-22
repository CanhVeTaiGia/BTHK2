import { useState } from "react";

export default function Bt8() {
  const [area, setArea] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <>
      <div className="grid grid-rows-3 w-[500px] gap-[10px] grid-cols-3">
        {area.map((i) => {
          return (
            <div className="rounded-[5px] size-[50px] w-[150px] flex justify-center items-center text-white bg-pink-500">
              0{i}
            </div>
          );
        })}
      </div>
    </>
  );
}
