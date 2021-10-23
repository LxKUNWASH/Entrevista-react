import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Tabla } from "../../componentes/tabla/tabla";
import { COLUMNS } from "../../componentes/tabla/columnas";
import { Boton } from "../../componentes/boton/boton";

export function MostrarProspectos (props) {

  const [prospectos, setProspectos] = useState([{
    nombre: "",
    apellido: "",
    segundoApellido:"",
    calle:"",
    numero:0,
    colonia:"",
    codigoPostal:0,
    telefono: "",
    rfc:"",
    documento:"",
    estatus:"",
    observaciones: "",
  }]);


  useEffect(() => {
    fetch(`http://localhost:3002/api/prospectos`)
      .then((response) => response.json())
      .then((json) => setProspectos(json));
  }, []);


  return (
    <div className="content-container">
      <Container>
        <Row className="mt-5">
          <h1 className="titulo">Prospectos</h1>
          <Col >
            <Tabla COLUMNS={COLUMNS} datos={prospectos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

