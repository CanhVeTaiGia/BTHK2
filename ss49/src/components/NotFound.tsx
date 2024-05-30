import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
    <h2>Bài 5</h2>
    <Link className="underline text-sky-500" to=''>Click để sang bài 6</Link>
      <div className="flex flex-col items-center">
        <h1 className="text-[100px] font-[700] m-0">404</h1>
        <p className="text-[32px]">Not Found</p>
      </div>
    </>
  );
}
