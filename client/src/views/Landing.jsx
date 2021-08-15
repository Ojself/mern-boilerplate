import React from "react";
import EmailPasswordForm from "../components/molecules/EmailPasswordForm";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Landing = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;
  const { signup, login } = bindActionCreators(actionCreators, dispatch);
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold my-8'>Mern Boilerplate</h1>
      <section className='flex flex-col  items-center w-4/5 lg:w-1/3'>
        <EmailPasswordForm
          action={login}
          title='Login'
          buttonText='Login'
          buttonColor='info'
        />
        <EmailPasswordForm
          action={signup}
          title='Signup'
          buttonText='Signup'
          buttonColor='success'
          isAuthenticated={false}
        />
      </section>
    </main>
  );
};

export default Landing;
