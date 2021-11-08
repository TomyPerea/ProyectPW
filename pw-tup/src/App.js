import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Blondes from "./components/Beers/Blondes";
import Rojas from "./components/Beers/Rojas";
import Negras from "./components/Beers/Negras";
import Nosotros from "./components/Nosotros";
import InicioSesion from "./components/InicioSesion/InicioSesion";
import Registrarme from "./components/Registrarme";

function App() {

  return (
      <Router>
        <div>
          <Switch>
            <Route path="">
              <Navbar />
              <Route path="/nosotros">
                <Nosotros />
              </Route>
              <Route path="/blondes">
                <Blondes />
              </Route>
              <Route path="/rojas">
                <Rojas />
              </Route>
              <Route path="/negras">
                <Negras />
              </Route>
              <Route path="/signin">
                <InicioSesion />
              </Route>
              <Route path="/registrarme">
                <Registrarme />
              </Route>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;