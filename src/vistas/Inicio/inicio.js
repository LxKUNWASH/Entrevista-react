import { Link } from "react-router-dom"
import {Col, Row} from "react-bootstrap";
import "./inicio.css"

export function Inicio (){


    return(
        <div className="container">
        <header className="header" > Bienvenido </header>
          <Row>
          <Col className="offset-3">
          <Link to={"/prospectos"} className="btn btn-primary btn-lg">AñadirProspecto</Link>
          </Col>
          <Col>
          <Link to={"/mostrarProspectos"} className="btn btn-success btn-lg">MostrarProspectos</Link>
          </Col>
          </Row>
        </div>
    )
}
