import React from "react";
import { Formik, Field, Form } from "formik";

import * as Yup from "yup";
import { CustomFormErrorMessage } from "../atoms/CustomFormErrorMessage";
import Button from "../atoms/Button";
import PropTypes from "prop-types";

const fieldStyle = { border: "1px solid #C4C4C4" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

/* for login and signup */
const EmailPasswordForm = ({ action, buttonText, buttonColor, title }) => {
  const handleRequest = async (userData) => {
    const { email, password } = userData;
    action(email, password);
  };

  return (
    <section className='flex flex-col  items-center w-full'>
      <h1 className='text-3xl font-bold my-8'>{title}</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(userData) => {
          handleRequest(userData);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className='flex flex-col w-full'>
            <label className='font-bold' htmlFor='email'>
              Email
            </label>
            <Field
              type='text'
              style={fieldStyle}
              className='h-10 mb-5 pl-2'
              name='email'
            />
            <CustomFormErrorMessage
              show={errors.email && touched.email}
              msg={errors.email}
            />

            <label className='font-bold' htmlFor='password'>
              Password
            </label>
            <Field
              type='password'
              style={fieldStyle}
              className='h-10 mb-5 pl-2'
              name='password'
            />
            <CustomFormErrorMessage
              show={errors.password && touched.password}
              msg={errors.password}
            />
            <Button
              disabled={isSubmitting}
              size='lg'
              desktopSize='sm'
              align='center'
              type='submit'
              color={buttonColor}
              buttonText={buttonText}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};

EmailPasswordForm.propTypes = {
  action: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string,
  title: PropTypes.string,
};

export default EmailPasswordForm;
