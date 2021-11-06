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

    <div className="App">
      <div>
        <header className="App-header">
          <img src={pgimg} className="logo" alt="logo"/>
          <nav>
            <ul className="navbar">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Cervezas</a>
                <ul>
                  <li><a href="#">Lager</a></li>
                  <li><a href="#">Amber</a></li>
                  <li><a href="#">IPA</a></li>
                  <li><a href="#">Stout</a></li>
                </ul>
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