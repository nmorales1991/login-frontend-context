import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//import {routes} from './routes'

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Error from "../pages/Error";

import WrappedRoutes from "../navigation/WrappedRoutes";

import { AuthGlobal } from "../context/store/Auth";

const Navigation = () => {
  const { stateUser } = useContext(AuthGlobal);
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            stateUser.isAuthenticated ? <Dashboard /> : <Redirect to="/login" />
          }
        />
        <Route
          path="/login"
          render={() =>
            !stateUser.isAuthenticated ? <Login /> : <Redirect to="/" />
          }
        />
        <Route
          path="/"
          render={() =>
            stateUser.isAuthenticated ? (
              <WrappedRoutes />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </Router>
  );
};

export default Navigation;
