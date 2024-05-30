import { useEffect, useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function Home() {
  const [lesson, setLesson] = useState<boolean>(() => {
    const data = localStorage.getItem("lesson");
    return data ? JSON.parse(data) : false;
  });
  useEffect(() => {
    localStorage.setItem("lesson", JSON.stringify(!lesson));
  }, [lesson]);
  return (
    <>
      <div>
        <h2>Bài 1</h2>
        <p>Đây là trang chủ</p>
        <Link
          onClick={() => setLesson(true)}
          className="underline text-sky-500"
          to="/contact"
        >
          click để đến Bài 2
        </Link>
      </div>
      <br />
      <div>
        <h2>Bài 6 - 7 - 8</h2>
        <span className="flex gap-[10px]">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/subcontact">Contact</NavLink>
          <NavLink to="/detail">Detail</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </span>
        <Outlet></Outlet>
      </div>
      <br />
      <div>
        <h2>Bài 9</h2>
        <Link className="underline text-sky-500" to="/customlink">Nhấn để sang bài 9</Link>
      </div>
    </>
  );
}
