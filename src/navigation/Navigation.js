import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {routes} from './routes'

import { AuthGlobal } from "../context/store/Auth";

const Navigation = () => {
  const { stateUser } = useContext(AuthGlobal);
  return (
    <Router>
      <Switch>
        {
          routes.map((ruta,index)=>{
            return <Route
                key={index}
                exact = {ruta.exact}
                path= {ruta.path}
                render={() => (
                    stateUser.isAuthenticated === false ? 
                      ruta.authenticated ? 
                        <Redirect to={'/login'} /> :
                        <ruta.component/> 
                  : ruta.authenticated ? 
                      <ruta.component/> : 
                      <Redirect to={'/'} />
                )}
              />
          })
        }
      </Switch>
    </Router>
  );
};

export default Navigation;
