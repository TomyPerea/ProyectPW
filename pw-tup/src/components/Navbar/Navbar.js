import pgimg from "../../images/logo1.png";
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {

    return (<div className="App">
        <div>
            <div className="App-header">
                <div className="sep">
                    <img src={pgimg} className="logo" alt="logo"/>
                    <nav>
                        <ul className="navbar">
                            <Link to={'/'}><li>Inicio</li></Link>
                            <Link to={'/us'}><li>Nosotros</li></Link>
                            <li>Cervezas
                                <ul>
                                    <Link to={'/rubias'}><li>Rubias</li></Link>
                                    <Link to={'/rojas'}><li>Rojas</li></Link>
                                    <Link to={'/negras'}><li>Negras</li></Link>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <Link to={'/main/signin'}><button>Inicia sesion</button></Link>
                </div>
            </div>
        </div>
    </div>)
}

export default Navbar