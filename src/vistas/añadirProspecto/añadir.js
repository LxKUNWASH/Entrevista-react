import { Formulario } from "../../componentes/formulario/form/formulario";
import "./añadir.css"

export function AñadirProspecto (){
    return(
        <div className="container margen borde">
                <h1 className="centrar">Añadir Prospecto</h1>
            <Formulario/>
        </div>
    )
}