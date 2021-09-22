import React from "react";
import useAuth from "../../hooks/useAuth";

export const Home = () => {
  const auth = useAuth();
  console.log(auth);
  return (
    <div>
      <h1>Home de usuario</h1>
    </div>
  );
};
