import pgimg from "../../images/logo1.png";
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {

    return (<div className="App">
        <div>
            <header className="App-header">
                <div className="sep">
                    <img src={pgimg} className="logo" alt="logo"/>
                    <nav>
                        <ul className="navbar">
                            <Link to={'/main'}><li>Inicio</li></Link>
                            <Link to={'/main/nosotros'}><li>Nosotros</li></Link>
                            <li>Cervezas
                                <ul>
                                    <Link to={'/main/rubias'}><li>Rubias</li></Link>
                                    <Link to={'/main/rojas'}><li>Rojas</li></Link>
                                    <Link to={'/main/negras'}><li>Negras</li></Link>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <Link to={'/main/signin'}><button>Inicia sesion</button></Link>
                </div>
            </header>
        </div>
    </div>)
}

export default Navbar