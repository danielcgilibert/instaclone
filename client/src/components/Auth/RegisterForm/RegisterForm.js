import React from "react";
import { Form, Button } from "semantic-ui-react";
import { initialValues } from "./initialValues";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegisterForm.scss";

export const RegisterForm = ({ setShowLogin }) => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9-]*$/,
          "El nombre del usuario no puede tener espacio"
        )
        .required("El nombre de usuario es obligatorio"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password2")], "Las contraseña no son iguales"),
      password2: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseña no son iguales"),
    }),
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
          error={formik.errors.name && true}
        />

        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="email"
          placeholder="Correo electronico"
          name="email"
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />

        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />

        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="password2"
          onChange={formik.handleChange}
          error={formik.errors.password2 && true}
        />

        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
};
