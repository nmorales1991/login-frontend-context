import React from "react";
import { Route, Switch } from "react-router-dom";

import Saludo from "./Saludo";
import Otro from "../../pages/Otro";
import Error from "../../pages/Error";
import SaludoPage from "../../pages/saludo/Saludo";

const WrappedRoutes = () => (
  <Switch>
    <Route path="/otro" exact component={Otro} />
    <Route path="/saludo" component={Saludo} />
    <Route path="/saludos" exact component={SaludoPage} />
    <Route component={Error} />
  </Switch>
);

export default WrappedRoutes;
