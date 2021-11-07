import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Us from "./components/Nosotros";
import Blondes from "./components/Blondes";
import Rojas from "./components/Rojas";
import Blacks from "./components/Negras";
import Nosotros from "./components/Nosotros";
import InicioSesion from "./components/InicioSesion";

function App() {

  return (
      <Router>
        <div>
          <Switch>
            <Route estrict path="/main">
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
              <Route path="/main/blacks">
                <Blacks />
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