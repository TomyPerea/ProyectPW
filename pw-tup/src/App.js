import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    /* a partir de aca hace el html de la navbar, tiene que estar
      todx dentro de un div que incluya todx, las clases con className*/

    <div className="App">
      {/* borra si queres
       esto que hice aca abajo, era para probar*/}
      <div>
        <header className="App-header">
          <img className={logo} src="logo.svg" alt="logo"/>
          <nav>
            <ul className="navbar">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Productos</a></li>
            </ul>
          </nav>
          <a href="#"><button>Registrarme</button></a>
        </header>
      </div>
    </div>
  );
}

export default App;