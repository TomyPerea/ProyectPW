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

function App() {

  return (
      <Router>
        <div>
          <Switch>
            <Route estrict path="">
              <Navbar />
              <Route estrict path="/main/nosotros">
                <Nosotros />
              </Route>
              <Route path="/main/blondes">
                <Blondes />
              </Route>
              <Route path="/main/rojas">
                <Rojas />
              </Route>
              <Route path="/main/negras">
                <Negras />
              </Route>
              <Route path="/main/signin">
                <InicioSesion />
              </Route>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;