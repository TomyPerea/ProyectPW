import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Beers from "./components/Beers/Beers";
import InicioSesion from "./components/InicioSesion/InicioSesion";
import Registrarme from "./components/Registrarme";
import Profile from "./components/Profile/Profile";
import PagInicio from "./components/PagInicio";

function App() {

  return (
      <Router>
        <div>
          <Switch>
            <Route path="">
              <Navbar />
              <PagInicio />
              <Route path="/beers">
                <Beers />
              </Route>
              <Route path="/signin">
                <InicioSesion />
              </Route>
              <Route path="/registrarme">
                <Registrarme />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;