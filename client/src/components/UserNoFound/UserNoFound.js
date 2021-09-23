import React from "react";
import "./UserNoFound.scss";
import { Link } from "react-router-dom";
export const UserNoFound = () => {
  return (
    <div className="user-not-found">
      <p>Usuario no encontrado</p>
      <p>
        Es posible que el enlace que has seguido sea incorrecto o que el usuario
        se haya eliminado
      </p>

      <Link to="/">Volver a la Home</Link>
    </div>
  );
};
