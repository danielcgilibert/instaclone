import React from "react";
import { Form, Button } from "semantic-ui-react";
import "./RegisterForm.scss";
import { initialValues } from "./initialValues";
import { useFormik } from "formik";

export const RegisterForm = ({ setShowLogin }) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: null,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos.
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Nombre y apellidos"
          name="name"
          onChange={formik.handleChange}
        />

        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={formik.handleChange}
        />
        <Form.Input
          type="email"
          placeholder="Correo electronico"
          name="email"
          onChange={formik.handleChange}
        />

        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
        />

        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="password2"
          onChange={formik.handleChange}
        />

        <Button className="btn-submit">Registrarse</Button>
      </Form>
    </>
  );
};
