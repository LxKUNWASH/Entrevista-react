import { Switch,Route } from "react-router-dom";
import {Inicio} from "./vistas/Inicio/inicio";
import {AñadirProspecto} from "./vistas/añadirProspecto/añadir";
import {MostrarProspectos} from "./vistas/verProspectos/verProspectos"
import {DetalleProspecto} from "./vistas/detalleProspectos/detalleProspecto"


function App() {

  return (
    <Switch>
      <Route exact path ="/" component={Inicio}/>
      <Route exact path ="/prospectos" component={AñadirProspecto}/>
      <Route exact path ="/mostrarProspectos" component={MostrarProspectos}/>
      <Route exact path ="/detalleProspecto" component={DetalleProspecto}/>
    </Switch>
  );
}

export default App;
