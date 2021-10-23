import React from "react";
import { Link } from "react-router-dom";



export function TableLink(props) {
  const { rows, values } = props;

  return (
    <div>
      <span key={values.original.id}>
        <Link
          className="linkRemover"
          to={{
            pathname: "/detalleProspecto",
            state: {
              id: values.original.id,
              nombre: values.original.nombre,
              apellido: values.original.apellido,
              segundoApellido: values.original.segundoApellido,
              calle: values.original.calle,
              numero: values.original.numero,
              colonia: values.original.colonia,
              codigoPostal: values.original.codigoPostal,
              telefono: values.original.telefono,
              rfc: values.original.rfc,
              documento: values.original.documento,
              estatus: values.original.estatus,
              obervaciones: values.original.observaciones
            },
          }}
        >
          {values.original.nombre}
        </Link>
      </span>
      </div>
  );
}
