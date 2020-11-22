import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Table, Tbody, Thead, Td, Th } from "../styles/styles";

const Dashboard = () => {

  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      fetch("http://localhost:3001/server/usuarios", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsuarios(data.usuarios);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div>
      <Header />
      {usuarios ? (
        <Table>
          <Thead>
            <tr>
              <Th>Nombre</Th>
              <Th>Correo</Th>
            </tr>
          </Thead>
          <Tbody>
            {usuarios.map((usuario, index) => {
              return (
                <tr key={index}>
                  <Td>{usuario.nombre}</Td>
                  <Td>{usuario.correo}</Td>
                </tr>
              );
            })}
          </Tbody>
        </Table>
      ) : null}
    </div>
  );
}

export default Dashboard