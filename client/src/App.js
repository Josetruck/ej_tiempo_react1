import Cabeceras from './components/Cabeceras';
import Formulario from './components/Formulario';
import PiePagina from './components/PiePagina';

import './App.css';
function App() {
  return (
    <div className="App">
      <Cabeceras titulo1="Título principal" titulo2="Subtítulo" titulo3="Tercer título"/>
      <Formulario/>
      <PiePagina email="thebridge@gmail.com" cidudad="Madrid" direccion="Paseo de Recoletos 15"/>
    </div>
  );
}

export default App;
