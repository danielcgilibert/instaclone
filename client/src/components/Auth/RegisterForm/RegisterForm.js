import React from "react";
import { Form, Button } from "semantic-ui-react";
import { initialValues } from "./initialValues";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
import "./RegisterForm.scss";

export const RegisterForm = ({ setShowLogin }) => {
  const [register] = useMutation(REGISTER);

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
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.password2;
        console.log(formData);

        const result = await register({
          variables: {
            registerInput: newUser,
          },
        });
        toast.success("Usuario registrado correctamente");
        setShowLogin(true);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
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
          error={formik.touched.name && formik.errors.name}
        />

        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={formik.handleChange}
          error={formik.touched.username && formik.errors.username}
        />
        <Form.Input
          type="text"
          placeholder="Correo electronico"
          name="email"
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
        />

        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
        />

        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="password2"
          onChange={formik.handleChange}
          error={formik.touched.password2 && formik.errors.password2}
        />

        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
};
