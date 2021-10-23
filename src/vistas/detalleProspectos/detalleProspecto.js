import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Tabla } from "../../componentes/tabla/tabla";
import { columnasDetalle } from "../../componentes/tabla/columnasDetalle";
import { Input } from "../../componentes/formulario/input/input";
import { Boton } from "../../componentes/boton/boton";
import { expresiones } from "../../constantes/expresiones";
import { leyendaError } from "../../constantes/leyendaError";
import fileDownload from 'js-file-download'

import axios from "axios";
import "./detalleProspecto.css";

export function DetalleProspecto(props) {
  const { state } = props.location;

  const [prospecto, setProspecto] = useState({
    nombre: "",
    apellido: "",
    segundoApellido: "",
    calle: "",
    numero: "",
    colonia: "",
    codigoPostal: "",
    telefono: "",
    rfc: "",
    documento: "",
    estatus: "",
    observaciones: "",
  });

  useEffect(() => {
    fetch(`http://localhost:3002/api/prospectos/${state.id}`)
      .then((response) => response.json())
      .then((json) => setProspecto(json));
  }, []);

  const [validacion, setValidacion] = useState({
    estatus: null,
    observaciones: null,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProspecto({ ...prospecto, [name]: value });
  };

  const actualizar = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3002/api/prospectos/${state.id}`, {
        estatus: prospecto.estatus,
        observaciones: prospecto.observaciones,
      })
      .then((res) => {
        console.log(res);
        alert(("Informacion actualizada"))
      });
  };

  const descargar = () => {
    axios.get(`http://localhost:3002/api/documentos/prospectos/${state.id}`, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, `${state.id}.pdf`)
    })
  }


  return (
    <div className="content-container">
      <Container>
        <Row className="mt-5">
          <h1 className="titulo">Detalle del prospecto</h1>
          <Col>
            <Tabla COLUMNS={columnasDetalle} datos={[prospecto]} />
          </Col>
          <div className="mt-5">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="estatus">
                  <Input
                    label="Estatus"
                    name={"estatus"}
                    state={prospecto}
                    value={prospecto.estatus}
                    stateValidation={validacion}
                    setStateValidation={setValidacion}
                    validationE={expresiones.estatus}
                    handleOnChange={handleOnChange}
                    as="select"
                  >
                    <option>Elija el estatus...</option>
                    <option value={"autorizado"}>Autorizado</option>
                    <option value={"rechazado"}>Rechazado</option>
                  </Input>
                </Form.Group>
                {prospecto.estatus === "rechazado" && (
                  <Form.Group as={Col} controlId="observaciones">
                    <Input
                      label="Observaciones"
                      name={"observaciones"}
                      value={prospecto.observaciones}
                      state={prospecto}
                      stateValidation={validacion}
                      setStateValidation={setValidacion}
                      validationE={expresiones.observaciones}
                      handleOnChange={handleOnChange}
                      placeholder="Observaciones aqui"
                    />
                    {validacion.observaciones === false && (
                      <p className="error">{leyendaError.nombre}</p>
                    )}
                  </Form.Group>
                )}
              </Row>

              <Row>
                <Col>
                  <Boton type="submit" onClick={actualizar}>
                    Enviar
                  </Boton>
                </Col>
                <Col>
                  <Boton type="button" onClick={descargar}>
                    Descargar documento
                  </Boton>
                </Col>
              </Row>
              {prospecto.estatus === "rechazado" && (
                <h2 className="mt-3">observaciones</h2>
              )}
              {prospecto.estatus === "rechazado" && (
                <p className="observaciones">{prospecto.observaciones}</p>
              )}
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
}
