import React from "react";
import useAuth from "../../hooks/useAuth";
import "./Home.scss";

export const Home = () => {
  const auth = useAuth();
  return (
    <div>
      <h1>Home de usuario</h1>
    </div>
  );
};
