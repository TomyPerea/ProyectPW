import pgimg from './images/logo1.png';
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
          <img src={pgimg} className="logo" alt="logo"/>
          <nav>
            <ul className="navbar">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Cervezas</a>
                <li>Lager</li>
                <li>Amber</li>
                <li>IPA</li>
                <li>Stout</li>
              </li>
            </ul>
          </nav>
          <a href="#"><button>Registrarme</button></a>
        </header>
      </div>
    </div>
  );
}

export default App;