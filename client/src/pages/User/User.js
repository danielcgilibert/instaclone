import React from "react";
import { useParams } from "react-router-dom";
export default function User() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>User</h1>
    </div>
  );
}
