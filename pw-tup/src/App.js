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
          <nav>
            <ul className="navbar">
              <li className="navbar-element"><a href="">Inicio</a></li>
              <li className="navbar-element"><a href="">Mi Cuenta</a></li>
              <li className="navbar-element"><a href="">Sobre Nosotros</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
