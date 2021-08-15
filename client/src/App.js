import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import GlobalMessage from "./components/layout/GlobalMessage";
import Landing from "./views/Landing";
import Routes from "./routing/Routes";
import store from "./state/store";
import { loadAccount } from "./state/actions/auth";

const App = () => {
  useEffect(() => {
    store.dispatch(loadAccount());
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalMessage />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route component={Routes} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
