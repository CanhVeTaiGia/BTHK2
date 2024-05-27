import React, { useEffect, useState } from "react";
import Login from "./Login";

export default function Form() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleChange = (newData: boolean) => {
    setToggle(newData);
  }
  return (
    <>
    <Login/>
    </>
  );
}
