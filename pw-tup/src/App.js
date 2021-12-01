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
          <Navbar />
          <Switch>
            <Route path="/" exact={true}>
              <PagInicio />
            </Route>
              <Route path="/beers" exact={true}>
                <Beers />
              </Route>
              <Route path="/signin" exact={true}>
                <InicioSesion />
              </Route>
              <Route path="/registrarme" exact={true}>
                <Registrarme />
              </Route>
              <Route path="/profile" exact={true}>
                <Profile />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;