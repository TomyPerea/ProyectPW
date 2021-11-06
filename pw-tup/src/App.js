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
import Blondes from "./components/Beer/Blondes";
import Rojas from "./components/Beer/Rojas";
import Blacks from "./components/Beer/Negras";

function App() {

  return (
      <Router>
        <div>
          <Switch>
            <Route estrict path="">
              <Navbar />
            </Route>
            <Switch>
              <Route estrict path="/us">
                <Us />
              </Route>
            </Switch>
            <Switch>
              <Route path="/blondes">
                <Blondes />
              </Route>
            </Switch>
            <Switch>
              <Route path="/rojas">
                <Rojas />
              </Route>
            </Switch>
            <Switch>
              <Route path="/blacks">
                <Blacks />
              </Route>
            </Switch>
            <Switch>
              <Route path="/signin">
                <Blacks />
              </Route>
            </Switch>
          </Switch>
        </div>
      </Router>
  );
}

export default App;