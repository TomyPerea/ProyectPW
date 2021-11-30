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
                            <Link to={'/beers'}><li>Cervezas</li></Link>
                            <Link to={'/profile'}><li>Mi perfil</li></Link>
                        </ul>
                    </nav>
                </div>
                <div>
                    <Link to={'/signin'}><button>Inicia sesion</button></Link>
                </div>
            </div>
        </div>
    </div>)
}

export default Navbar