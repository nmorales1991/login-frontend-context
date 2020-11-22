import React, { useReducer } from "react";
import authReducer from "../reducers/autenticacion.reducer";
import { setCurrentUser } from "../actions/autenticacion.action";
import jwt_decode from "jwt-decode";

export const AuthGlobal = React.createContext();

let initialState = {
  isAuthenticated: false,
  user: {},
};

const Auth = (props) => {
  if (localStorage.jwt) {
    initialState.isAuthenticated = true;
    initialState.user = jwt_decode(localStorage.jwt);
  }
  const [stateUser, dispatch] = useReducer(authReducer, initialState);
  
  if (localStorage.jwt && stateUser.isAuthenticated === false) {
    const userToken = localStorage.jwt ? localStorage.jwt : "";
    dispatch(setCurrentUser(jwt_decode(userToken)));
  }

  return (
    <AuthGlobal.Provider
      value={{
        stateUser,
        dispatch,
      }}
    >
      {props.children}
    </AuthGlobal.Provider>
  );
};

export default Auth;
