import React from "react";
import api from "../api";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Button from "../components/atoms/Button";
import { CustomFormErrorMessage } from "../components/atoms/CustomFormErrorMessage";
import { useDispatch } from "react-redux";
import { errorHandler, globalMessageHandler } from "../utils/index";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  capital: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  area: Yup.number()
    .min(0, "Too Small!")
    .max(38000000, "Too big! This is bigger than the moon.."),

  desc: Yup.string().max(250, "Too Long!"),
});

const fieldStyle = { border: "1px solid #C4C4C4" };

const AddCountry = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    try {
      const res = await api.addCountry(values);
      globalMessageHandler(dispatch, res.message);
    } catch (err) {
      errorHandler(dispatch, err);
    }
  };
  return (
    <main className='flex flex-col items-center'>
      <section className='flex flex-col  items-center w-4/5 lg:w-1/3'>
        <h1 className='text-3xl font-bold my-8'>Add Country</h1>
        <Formik
          initialValues={{
            name: "",
            capital: "",
            desc: "",
            area: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className='flex flex-col w-full'>
              <label className='font-bold' htmlFor='name'>
                Name
              </label>
              <Field
                type='text'
                style={fieldStyle}
                className='h-10 mb-5 pl-2'
                name='name'
              />
              <CustomFormErrorMessage
                show={errors.name && touched.name}
                msg={errors.name}
              />

              <label className='font-bold' htmlFor='capital'>
                Capital
              </label>
              <Field
                type='text'
                style={fieldStyle}
                className='h-10 mb-5 pl-2'
                name='capital'
              />
              <CustomFormErrorMessage
                show={errors.capital && touched.capital}
                msg={errors.capital}
              />

              <label className='font-bold' htmlFor='area'>
                Area km&sup2;
              </label>
              <Field
                type='number'
                style={fieldStyle}
                className='h-10 mb-5 pl-2'
                name='area'
              />
              <CustomFormErrorMessage
                show={errors.desc && touched.desc}
                msg={errors.desc}
              />

              <label className='font-bold' htmlFor='desc'>
                Description
              </label>
              <Field
                type='text'
                style={fieldStyle}
                className='h-28 mb-5 pl-2'
                name='desc'
                as='textarea'
              />
              <CustomFormErrorMessage
                show={errors.desc && touched.desc}
                msg={errors.desc}
              />

              <Button
                disabled={isSubmitting}
                size='full'
                desktopSize='lg'
                align='center'
                type='submit'
                color='info'
                buttonText='Submit'
              />
              {/* <button type="submit">Submit</button> */}
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default AddCountry;
