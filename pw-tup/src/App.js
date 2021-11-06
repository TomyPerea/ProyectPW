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
          <div className="sep">
            <img src={pgimg} className="logo" alt="logo"/>
            <nav>
              <ul className="navbar">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Cervezas</a>
                  <ul>
                    <li><a href="#">Rubias</a></li>
                    <li><a href="#">Rojas</a></li>
                    <li><a href="#">Negras</a></li>
                    <li><a href="#">IPA</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <a href="#"><button>Registrarme</button></a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;