import React, { useMemo } from "react";
import {useTable} from 'react-table'
import "./tabla.css"

export function Tabla (props) {

  const { datos=[],COLUMNS } = props;
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => datos, [datos])
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data,
  });

  return (
    <>
    {data.length > 0 ? 
    <div>
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
          ))}
          
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return <td {...cell.getCellProps()} >{cell.render('Cell')}   </td>
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  </div>
     : <p className="centerText">No hay datos para mostrar</p> }
  </>
  );
}

