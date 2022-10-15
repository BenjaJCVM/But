import * as yup from "yup";
import { Formik } from "formik";
import { useState } from "react";

const Form = ({ valores, terminarCompra, ordenID }) => {
  const esquemaYup = yup
    .object()
    .shape(
      {
        nombre: yup.string().required("Requerido"),
        apellido: yup.string().required("Requerido"),
        telefono: yup.string().required("Requerido"),
        email: yup.string().email().required("Requerido"),
        confirmacionEmail: yup.string().email().required("Requerido"),
      }
    )
    .required();

  const submitHandler = (values, resetForm) => {
    console.log(values);
    resetForm();
  };


  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        confirmacionEmail: "",
      }}
      onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
      validationSchema={esquemaYup}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        isValid,
      }) => (
        <div className="contendorForm">
          <form className="contenedorInputs" onSubmit={handleSubmit}>
            <input
              placeholder="Nombre"
              name="nombre"
              type="text"
              onChange={handleChange}
              value={values.nombre}
              onBlur={handleBlur}
              required
            />

            <input
              placeholder="Apellidos"
              name="apellido"
              type="text"
              onChange={handleChange}
              value={values.apellido}
              onBlur={handleBlur}
              required
            />

            <input
              placeholder="Telefono"
              name="telefono"
              type="text"
              onChange={handleChange}
              value={values.telefono}
              onBlur={handleBlur}
              required
            />

            <input
              placeholder="Email"
              className="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              required
            />

            <input
              placeholder="Email"
              className="email"
              name="confirmacionEmail"
              type="email"
              onChange={handleChange}
              value={values.confirmacionEmail}
              onBlur={handleBlur}
              required
            />

            <input
              type="submit"
              className="botonComprarAhora"
              value="Comprar ahora"
              disabled={!isValid}
            />
          </form>
          {ordenID && (
            <p>
              Compra realizada con exito! Su orden de compra es:{" "}
              <span className="orderIDNegrita">{ordenID}</span>
            </p>
          )}
        </div>
      )}
    </Formik>
  );
};

export default Form;
