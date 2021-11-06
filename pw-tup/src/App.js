
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Nosotros from "./components/Nosotros";
import Rubias from "./components/Beer/Rubias";
import Rojas from "./components/Beer/Rojas";
import Negras from "./components/Beer/Negras";

function App() {

  return ( <Router>
        <div>
          <Switch>
            <Route path="/">
              <Navbar />
            </Route>
            <Route path="/main/nosotros">
              <Nosotros />
            </Route>
            <Route path="/main/rubias">
              <Rubias />
            </Route>
            <Route path="/main/rojas">
              <Rojas />
            </Route>
            <Route path="/main/negras">
              <Negras />
            </Route>
            <Route path="/main/signin">
              <Negras />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;