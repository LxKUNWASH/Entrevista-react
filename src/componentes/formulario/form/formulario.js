import { useState } from "react";
import { Boton } from "../../boton/boton";
import { Modal, Form, Col, Row } from "react-bootstrap";
import { Input } from "../input/input";
import { expresiones } from "../../../constantes/expresiones";
import { leyendaError } from "../../../constantes/leyendaError";
import { Link } from "react-router-dom";
import axios from "axios";
import "./formulario.css";

export function Formulario(props) {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [documento, setDocumento] = useState(null);

  const sendProspecto = (body) => {
    return axios
      .post("http://localhost:3002/api/prospectos", body)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => console.log(err));
  };

  const subirDocumento = (e) => {
    setDocumento(e);
  };

  const ActualizarProspecto = (prospecto) => {
    const f = new FormData();
    f.append("documento", documento[0]);
    axios
      .put(
        `http://localhost:3002/api/documentos/prospectos/${prospecto.data.id}`,
        f
      )
      .then((response) => {
        setDocumento(null);
        return response;
      })
      .catch((err) => console.log(err));
  };

  const [validacion, setValidacion] = useState({
    nombre: null,
    apellido: null,
    segundoApellido: null,
    calle: null,
    numero: null,
    colonia: null,
    codigoPostal: null,
    telefono: null,
    rfc: null,
    documento: null,
    estatus: null,
    observaciones: null,
  });

  const formValid = () => {
    return validacion.nombre &&
      validacion.apellido &&
      validacion.calle &&
      validacion.numero &&
      validacion.colonia &&
      validacion.codigoPostal &&
      validacion.telefono &&
      documento &&
      validacion.rfc
      ? false
      : true;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProspecto({ ...prospecto, [name]: value });
  };

  const enviarInformacionProspecto = async (body) => {
    const prospecto = await sendProspecto(body);
    await ActualizarProspecto(prospecto);
  };

  const handleSubmit = (e) => {
    enviarInformacionProspecto({
      ...prospecto,
      codigoPostal: parseInt(prospecto.codigoPostal),
      numero: parseInt(prospecto.numero),
      telefono: parseInt(prospecto.telefono),
    });
    setProspecto({
      ...prospecto,
      nombre: "",
      apellido: "",
      segundoApellido: "",
      calle: "",
      numero: "",
      colonia: "",
      codigoPostal: "",
      telefono: "",
      rfc: "",
    });
    setValidacion(false)
    setDocumento("")
    alert("Prospecto enviado, proceda a mostrar prospectos")
  };

  return (
    <div className="bord">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nombre">
            <Input
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              label="Nombre"
              name={"nombre"}
              value={prospecto.nombre}
              handleOnChange={handleOnChange}
              placeholder="Nombre"
              validationE={expresiones.nombre}
            />
            {validacion.nombre === false && (
              <p className="error">{leyendaError.nombre}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="apellido">
            <Input
              label="Apellido"
              name={"apellido"}
              value={prospecto.apellido}
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              validationE={expresiones.nombre}
              handleOnChange={handleOnChange}
              placeholder="Nombre"
            />
            {validacion.apellido === false && (
              <p className="error">{leyendaError.nombre}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="apellido">
            <Input
              label="Segundo apellido"
              name={"segundoApellido"}
              value={prospecto.segundoApellido}
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              validationE={expresiones.nombre}
              handleOnChange={handleOnChange}
              placeholder="Segundo apellido"
            />
            {validacion.segundoApellido === false && (
              <p className="error">{leyendaError.nombre}</p>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="calle">
            <Input
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              label="Calle"
              name={"calle"}
              value={prospecto.calle}
              handleOnChange={handleOnChange}
              placeholder="Calle"
              validationE={expresiones.calle}
            />
            {validacion.calle === false && (
              <p className="error">{leyendaError.calle}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="numero">
            <Input
              label="Numero de domicilio"
              name={"numero"}
              value={prospecto.numero}
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              validationE={expresiones.numero}
              handleOnChange={handleOnChange}
              placeholder="Numero de domicilio"
            />
            {validacion.numero === false && (
              <p className="error">{leyendaError.numero}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="colonia">
            <Input
              label="Colonia"
              name={"colonia"}
              value={prospecto.colonia}
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              validationE={expresiones.calle}
              handleOnChange={handleOnChange}
              placeholder="colonia"
            />
            {validacion.colonia === false && (
              <p className="error">{leyendaError.colonia}</p>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="codigoPostal">
            <Input
              state={prospecto}
              stateValidation={validacion}
              value={prospecto.codigoPostal}
              setStateValidation={setValidacion}
              label="CodigoPostal"
              name={"codigoPostal"}
              handleOnChange={handleOnChange}
              placeholder="cp"
              validationE={expresiones.codigoPostal}
            />
            {validacion.codigoPostal === false && (
              <p className="error">{leyendaError.codigoPostal}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="telefono">
            <Input
              label="Telefono"
              name={"telefono"}
              value={prospecto.telefono}
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              validationE={expresiones.telefono}
              handleOnChange={handleOnChange}
              placeholder="Numero telefonico"
            />
            {validacion.telefono === false && (
              <p className="error">{leyendaError.telefono}</p>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="rfc">
            <Input
              label="Rfc"
              name={"rfc"}
              value={prospecto.rfc}
              state={prospecto}
              stateValidation={validacion}
              setStateValidation={setValidacion}
              validationE={expresiones.rfc}
              handleOnChange={handleOnChange}
              placeholder="rfc"
            />
            {validacion.rfc === false && (
              <p className="error">{leyendaError.rfc}</p>
            )}
          </Form.Group>
        </Row>
        <div class="mb-3">
          <label forhtml="formFile" className="form-label">
            Cargar documento
          </label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            onChange={(e) => subirDocumento(e.target.files)}
          />
        </div>
      </Form>
      <Row>
        <Col>
          <Boton type="submit" disabled={formValid()} onClick={handleSubmit}>
            Enviar
          </Boton>
        </Col>
        <Col>
          <Link to={"/mostrarProspectos"} className="btn btn-primary">
            MostrarProspectos
          </Link>
        </Col>
        <Col>
          <Boton tipo="peligro" onClick={handleShow}>
            Salir
          </Boton>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>¿Esta seguro de salir?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Perdera todos los progresos</Modal.Body>
            <Modal.Footer>
              <Boton variant="secondary" onClick={handleClose}>
                Seguir aqui
              </Boton>
              <Link to={"/"} className="btn btn-danger">
                Salir
              </Link>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}
