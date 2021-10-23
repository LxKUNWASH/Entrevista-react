import {TableLink} from "./tablaLink";
import React from "react"
export const COLUMNS = [
  {
    Header: "Nombre",
    accessor: "nombre",
    Cell: ({ cell: {row} }) => <TableLink  values={row} />,
  },
  {
    Header: "Apellido",
    accessor: "apellido",
  },
  {
    Header: "SegundoApellido",
    accessor: "segundoApellido",
  },
  {
    Header: "Estatus",
    accessor: "estatus"
  }
];

