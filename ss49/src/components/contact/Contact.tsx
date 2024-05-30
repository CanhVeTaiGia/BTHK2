import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h2>Bài 2</h2>
      <p>Đây là trang liên hệ</p>
      <Link className="underline text-sky-500" to={'/login'}>Click để đến bài 3</Link>
    </>
  );
}
