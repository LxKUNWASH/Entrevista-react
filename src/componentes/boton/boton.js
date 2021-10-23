import './boton.css';
export function Boton (props){

  const {tipo="primario",children="Enviar",disabled,onClick,type,id}= props

    const clase ={
        inicio:"btn btn-primary btn-lg",
        primario:"btn btn-primary",
        secundario:"btn btn-success",
        peligro: "btn btn-danger"
    }


    return(
        <div>
       <button id={id} type={type} onClick={onClick} disabled={disabled} className={clase[tipo]}>{children}</button>
        </div>
    )
};

