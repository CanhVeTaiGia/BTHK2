import React from "react";
import { useLocation } from "react-router-dom";

export default function UserDetail() {
  const location = useLocation();
  return (
    <div>
      <p>{location.state.name}</p>
      <p>{location.state.email}</p>
      <p>{location.state.address}</p>
    </div>
  );
}
