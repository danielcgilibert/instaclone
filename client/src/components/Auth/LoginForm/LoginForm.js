import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../gql/user";
import "./LoginForm.scss";
import { Message } from "semantic-ui-react";

export const LoginForm = () => {
  const [error, setError] = useState("");
  const [login] = useMutation(LOGIN);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async (formData) => {
      setError("");
      try {
        const { data } = await login({
          variables: {
            loginInput: formData,
          },
        });
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    },
  });

  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Entra para ver fotos y vídeos de tus amigos</h2>
      <Form.Input
        type="text"
        placeholder="Correo electronico"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && formik.errors.email}
      />
      <Form.Input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && formik.errors.password}
      />
      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>

      {error && (
        <Message negative className="submit-error">
          <Message.Header>{error}</Message.Header>
        </Message>
      )}
    </Form>
  );
};
