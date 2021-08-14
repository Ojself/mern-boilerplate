import React from "react";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../components/molecules/Spinner";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth);
  const { loading, isAuthenticated } = auth;
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
