import React, { useContext, useState } from "react";
import { Center, Form, H1, WrappLogin, Input, Button } from "../styles/styles";
import { AuthGlobal } from "../context/store/Auth";
import { setCurrentUser, logoutUser } from "../context/actions/autenticacion.action";
import Error from "../components/Error";

import jwt_decode from "jwt-decode";
import axios from 'axios'

const Login = () => {
  const context = useContext(AuthGlobal);
  const [correo, setcorreo] = useState("");
  const [clave, setclave] = useState("");
  const [error, seterror] = useState(null);

  const loginUser = user => {
      const {correo, clave} = user
      axios.post('http://localhost:3001/server/login', {
        correo,
        clave
      })
      .then( response => {
        if (response.data.ok === true) {
            jwtToken(response.data.token)
          } else {
            seterror(response.data.err.message)
            logoutUser(context.dispatch);
          }
      })
      .catch( error => {
        seterror(error.response.data.err.message)
        logoutUser(context.dispatch);
      });
  };

  const jwtToken = token => {
    localStorage.setItem("jwt", token);
    const decoded = jwt_decode(token);
    seterror(null)
    context.dispatch(setCurrentUser(decoded));
  }

  const handleSubmit = e => {
    e.preventDefault();
    const user = { correo, clave };

    if (correo === "" || clave === "") {
      seterror("Ingrese datos correctamente");
    } else {
      loginUser(user);
    }
    
  };

  return (
    <Center>
      <Form onSubmit={handleSubmit}>
        <H1>Login</H1>
        <WrappLogin>
          <Input
            placeholder="Ingrese Usuario"
            onChange={(e) => setcorreo(e.target.value)}
            id="correo"
            name="correo"
            value={correo}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Ingrese Clave"
            onChange={(e) => setclave(e.target.value)}
            id="clave"
            name="clave"
            value={clave}
          />
          <br />

          <Button type="submit">Ingresar</Button>
          {error ? <Error mensaje={error} /> : null}
        </WrappLogin>
      </Form>
    </Center>
  );
}

export default Login
