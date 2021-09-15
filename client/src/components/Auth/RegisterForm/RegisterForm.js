import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";
export const RegisterForm = ({ setShowLogin }) => {
  const handleSubtmit = () => {
    console.log("enviado");
  };
  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos.
      </h2>
      <Form className="register-form" onSubmit={handleSubtmit}>
        <Form.Input type="text" placeholder="Nombre y apellidos" name="name" />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
        />
        <Form.Input
          type="email"
          placeholder="Correo electronico"
          name="email"
        />

        <Form.Input type="password" placeholder="Contraseña" name="password" />

        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="password2"
        />

        <Button className="btn-submit">Registrarse</Button>
      </Form>
    </>
  );
};
