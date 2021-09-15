import React, { useState } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import instaclone from "../../assets/images/2.1 instaclone.png";

import "./Auth.scss";

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Container fluid className="auth">
      <Image src={instaclone} />

      <div className="container-form">
        {showLogin ? <p>Formulario Login</p> : <p>Formulario Registro</p>}
      </div>

      <div className="change-form">
        <p>
          {showLogin ? (
            <>
              ¿No tienes cuenta?
              <span onClick={() => setShowLogin(!showLogin)}> Registrate</span>
            </>
          ) : (
            <>
              ¡Entra con tu cuenta!
              <span onClick={() => setShowLogin(!showLogin)}>
                Iniciar Sesión
              </span>
            </>
          )}
        </p>
      </div>
    </Container>
  );
};
