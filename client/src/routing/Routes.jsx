import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/screens/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Countries from "../components/screens/Countries";
import Country from "../components/screens/Country";
import Addcountry from "../components/screens/Addcountry";
import NotFound from "../components/layout/NotFound";

const Routes = () => {
  return (
    <section className=''>
      <Switch>
        <Route exact component={Country} path='/countries/:name' />
        <Route exact component={Countries} path='/countries' />
        <PrivateRoute exact component={Addcountry} path='/add-country' />
        <PrivateRoute exact component={Dashboard} path='/dashboard' />
        <Route exact component={NotFound} path='*' />
      </Switch>
    </section>
  );
};

export default Routes;
